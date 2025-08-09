const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mysql = require('mysql2');
const session = require('express-session');
const app = express();
const multer = require("multer");
const ftp = require("basic-ftp");
const port = 5000;
const stream = require('stream');
const Razorpay = require("razorpay");
const crypto = require("crypto");

app.set("trust proxy", 1);
// Middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

const upload = multer({ storage: multer.memoryStorage() }); // Store in memory


async function uploadToFTP(buffer, remoteFileName) {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  
  try {
    await client.access({
      host: "147.93.79.55",
      user: "u679703987",
      password: "Watch@662",
      secure: false, // Set to true if using FTPS
    });

    const bufferStream = new stream.PassThrough();
    bufferStream.end(buffer);

    await client.uploadFrom(bufferStream, `/${remoteFileName}`);
    client.close();
    return `https://nocash.cc/${remoteFileName}`;
  } catch (err) {
    console.error("FTP Upload Error:", err);
    client.close();
    return null;
  }
}





app.use(bodyParser.json());
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Use the environment variable
 // origin: "http://localhost:3000",
  credentials: true
};
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).send({ message: 'Internal Server Error' });
});
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


// MySQL connection pooling
const db = mysql.createPool({
  connectionLimit: 10,
  host: "194.163.35.51", // Use this instead of "localhost"
  user: "u679703987_watch",
  password: "Gf;5Nyv>fk7", // The same password
  database: "u679703987_watch",
});


const handleDisconnect = () => {
  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      setTimeout(handleDisconnect, 2000); // Attempt to reconnect after 2 seconds
    } else {
      console.log('Connected to MySQL database...');
      connection.release();
    }
  });

  db.on('error', (err) => {
    console.error('MySQL error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect(); // Reconnect on connection loss
    } else {
      throw err;
    }
  });
};

handleDisconnect();

const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET"
});
app.post("/create-order", async (req, res) => {
  try {
    const { cart, formData, username } = req.body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // 🔹 Fetch user_id from DB based on username
    const [user] = await db.query(`SELECT id FROM users WHERE username=?`, [username]);
    if (!user || user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const user_id = user[0].id;

    // Razorpay order options
    const options = {
      amount: cart.reduce((x, i) => x + i.price, 0) * 100, // paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1
    };

    const order = await razorpay.orders.create(options);

    // Save order with user_id
    await db.query(
      `INSERT INTO payments 
      (user_id, order_id, amount, currency, status, customer_name, customer_email, customer_contact) 
      VALUES (?, ?, ?, ?, 'created', ?, ?, ?)`,
      [
        user_id,
        order.id,
        options.amount,
        options.currency,
        `${formData.firstName} ${formData.lastName}`,
        formData.email,
        formData.phone
      ]
    );

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating order");
  }
});


// ✅ Verify Payment API
app.post("/verify-payment", async (req, res) => {
  try {
    const { order_id, payment_id, signature } = req.body;

    // Generate expected signature
    const expectedSignature = crypto
      .createHmac("sha256", razorpay.key_secret)
      .update(order_id + "|" + payment_id)
      .digest("hex");

    if (expectedSignature === signature) {
      await db.query(
        `UPDATE payments SET payment_id=?, signature=?, status='paid' WHERE order_id=?`,
        [payment_id, signature, order_id]
      );
      res.json({ status: "success" });
    } else {
      await db.query(
        `UPDATE payments SET status='failed' WHERE order_id=?`,
        [order_id]
      );
      res.status(400).json({ status: "failed" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error verifying payment");
  }
});

app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    const { name, originalPrice, discountedPrice, description, category, gender } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ message: "No file uploaded" });

    const remoteFileName = file.originalname.replace(/\s+/g, '_');

    // Upload file to FTP using buffer
    const fileUrl = await uploadToFTP(file.buffer, remoteFileName);
    if (!fileUrl) return res.status(500).json({ message: "Image upload failed" });

    // Insert data into MySQL
    const sql = "INSERT INTO watches (name, oprice, dprice, description, type, gender, img) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [name, originalPrice, discountedPrice, description, category, gender, fileUrl], (err) => {
      if (err) {
        console.error("Database Error:", err);
        return res.status(500).json({ message: "Database error", error: err });
      }
      res.status(200).json({ message: "Upload successful", imageUrl: fileUrl });
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});



app.get('/api/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/api/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
      // Successful authentication, redirect to your desired route
      res.redirect(process.env.FRONTEND_URL + '/home');
  }
);
passport.serializeUser((user, done) => {
  done(null, user.email); // Assuming user.id is available
});

// Deserialize the user by fetching full user details from your database
passport.deserializeUser((email, done) => {
  // Replace with actual DB query to find the user by ID
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) return done(err);
      done(null, results[0]); // `results[0]` should be the full user object
  });
});
passport.use(new GoogleStrategy({
  clientID:process.env.clientID ,
  clientSecret: process.env.clientSecret,
  callbackURL: process.env.callbackURL
}, (accessToken, refreshToken, profile, done) => {
  const googleId = profile.id;
  const name = profile.displayName;
  const email = profile.emails[0].value;
  const profilePicture = profile.photos[0].value;
  console.log(email);
  
  // Check if the user already exists
  const checkUserSql = 'SELECT * FROM users WHERE email = ?';
  db.query(checkUserSql, [email], (err, results) => {
    console.log(results);
    
      if (err) return done(err);

      if (results.length > 0) {
          // User exists
          return done(null, results[0]);
      } else {
          // New user, insert into database
          const insertUserSql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
          db.query(insertUserSql, [name, email, googleId], (err, result) => {
              if (err) return done(err);
              
              // Retrieve the newly created user record
              db.query(checkUserSql, [email], (err, results) => {
                  if (err) return done(err);
                  return done(null, results[0]);
              });
          });
      }
  });
}));
app.get('/api/test-db', (req, res) => {
    db.query('SELECT 1 + 1 AS result', (err, results) => {
        if (err) {
            console.error('Database Test Error:', err);
            return res.status(500).send({ message: 'Database Connection Failed' });
        }
        res.send({ message: 'Database Connected', result: results[0].result });
    });
});
app.get('/api/profile', (req, res) => {
  if (req.isAuthenticated()) {
      res.json({ success: true, user: req.user });
  } else {
      res.status(401).json({ success: false, message: 'Not authenticated' });
  }
});
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const checkSql = 'SELECT * FROM users WHERE username = ? OR email = ?';
  
  db.query(checkSql, [username, email], async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send({ message: 'Server error' });
    }

    if (results.length > 0) {
      return res.status(409).send({ message: 'Username or email already in use' });
    }

    // Hash the password before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
      [username, email, hashedPassword], 
      (error) => {
        if (error) {
          console.error('Signup error:', error);
          return res.status(500).send({ message: 'Signup failed' });
        }
        res.status(201).send({ message: 'Signup successful' });
      }
    );
  });
});
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  db.query('SELECT * FROM users WHERE email =?', [email], async (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ message: 'Logged in successfully', username: user.username });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Nodemailer transporter
app.get("/api/watches", (req, res) => {
    db.query('SELECT * FROM watches', (err, results) => {
        if (err) {
            console.error('Database Error:', err);
            console.log("Database Error:", err);
            
            return res.status(500).send({ message: 'Database Query Failed' });
        }
        res.send(results);
    });
});
app.get("/api/cart", (req, res) => {
  const { username } = req.query; // Extract username

  if (!username) {
      return res.status(400).send({ message: "Username is required" });
  }

  db.query('SELECT * FROM cart WHERE username = ?', [username], (err, results) => {
      if (err) {
          console.error('Database Error:', err);
          return res.status(500).send({ message: 'Database Query Failed' });
      }
      res.send(results);
      console.log(results,"success");
      
  });
});
app.post("/api/rcart", (req, res) => {
  const { username,id } = req.body; // Extract username

  if (!username) {
      return res.status(400).send({ message: "Username is required" });
  }

  db.query('delete from cart where username = ? and id = ?', [username,id], (err, results) => {
      if (err) {
          console.error('Database Error:', err);
          return res.status(500).send({ message: 'Database Query Failed' });
      }
      res.send({"message": "Item deleted successfully"});
      console.log(results,"success");
      
  });
});

app.post("/api/addcart", (req, res) => {
  const {item,username} = req.body;
  db.query("SELECT * FROM cart WHERE username = ? AND name = ?", [username,item.name], (err, results) => {
    if (err) {
      console.error('Database Error:', err);
      return res.status(500).send({ message: 'Database Query Failed' });
  }
  if(results.length > 0){
    db.query('UPDATE cart SET quantity = quantity +? WHERE id =?', [item.quantity, results[0].id], (err, result) => {
      if (err) {
        console.error('Database Error:', err);
        return res.status(500).send({ message: 'Database Update Failed' });
      }
      res.send({ message: 'Quantity Updated' });
    });
  }else{
    db.query('INSERT INTO cart(name,img,oprice,dprice,description,type,username) values(?,?,?,?,?,?,?)', [item.name,item.img,item.oprice,item.dprice,item.description,item.type,username], (err, result) => {
      if (err) {
        console.error('Database Error:', err);
        return res.status(500).send({ message: 'Database Insert Failed' });
      }
      res.send({ message: 'Watch Added To Cart', watchId: result.insertId });
    });
  }
})
});
app.post("/api/quantity", (req, res) => {
  const {quantity,name,username} = req.body;
  db.query("SELECT * FROM cart WHERE username = ? AND name = ?", [username,name], (err, results) => {
    if (err) {
      console.error('Database Error:', err);
      return res.status(500).send({ message: 'Database Query Failed' });
  }
  if(results.length > 0){
    db.query('UPDATE cart SET quantity = ? WHERE id =?', [quantity, results[0].id], (err, result) => {
      if (err) {
        console.error('Database Error:', err);
        return res.status(500).send({ message: 'Database Update Failed' });
      }
      res.send({ message: 'Quantity Updated' });
    });
  }
})
});
app.post("/api/search", (req, res) => {
  const { name } = req.body;
  db.query('SELECT * FROM watches WHERE name LIKE?', ['%' + name + '%', '%' + name + '%'], (err, results) => {
    if (err) {
      console.error('Database Error:', err);
      return res.status(500).send({ message: 'Database Query Failed' });
    }
    res.send(results);
  });
})

app.listen(3000, () => console.log("Server ready on port 3000."));
module.exports = app;
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

