"use client"
import {React,useEffect,useState} from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "./page.css";
import CartOverlay from "../components/cart-overlay";
import { useUser } from "../context/UserContext";
function product() {
  const [watches,setWatches] = useState([])
  const [carts,setCart] = useState([])
  const [quantity, setQuantity] = useState(1);
  const [cart, showcart] = useState(false);
  const [item,setItem] = useState({});
  const { nav } = useUser();
  function count_inc() {
    if (quantity < 15) {
      setQuantity(quantity + 1);
      item.quantity = quantity;
    }
  }

  function count_dec() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    item.quantity = quantity;
  }
  const handleWatches = ()=>{
    console.log("wokred");
    
    fetch('/api/watches')
     .then(response=>response.json())
     .then(data=>setWatches(data))
     .catch(error=>console.log(error))
  }
  // const handleCart = ()=>{
  //   console.log("wokred");
  //   const username = localStorage.getItem('username');
  //   fetch(`/api/cart?${username}`)
  //    .then(response=>response.json())
  //    .then(data=>setCart(data))
  //    .catch(error=>console.log(error))
  // }
  function OpenCart(){
    cart===true? showcart(false): showcart(true);
  }
  const handleUser= ()=>{
    const username = localStorage.getItem('username');
    if(username){
      OpenCart();
      localStorage.setItem("cart", JSON.stringify(item));
      handleOrder();
    }else{
      alert("Login First To Order")
        fetch('/api/profile', {
            credentials: 'include'  // Ensures cookies are sent with the request
        })
            .then(response => response.json()) 
            .then(data => {
                if (data.success) {
                    console.log(data);
                          // Set user data if authenticated
                    localStorage.setItem('userEmail', data.user.email);
                    localStorage.setItem('username', data.user.username);
                      // Save to localStorage if needed
                } else {
                    // setError('User is not authenticated');
                    window.location.href = '/login';
                }
            })
            .catch(err => {
                // setError('Error fetching profile');
                console.error(err);
            });
    }
  }
  
  const handleOrder = async()=>{
    const username = localStorage.getItem('username');
    const requestBody = JSON.stringify({ 
          username: username,
          item : item
      
    });
    try {
      const response = await fetch('/api/addcart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
        credentials: 'include'
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('An unexpected error occurred');
    }
  };
  useEffect(() => {
    const storedItem = localStorage.getItem("product");
    if (storedItem.length > 0) {
        const parsedItem = JSON.parse(storedItem); // Parse JSON first
        setItem(parsedItem);
        setQuantity(parseInt(parsedItem.quantity) || 1); // Ensure a number
    }
    handleWatches(); 
    localStorage.setItem("page" , "product");
}, []);

  return (
    <div>
      <Nav /> 
      <div className={nav? "base max-sm:mt-[60px] mt-[110px] hidden":"base max-sm:mt-[60px] mt-[110px]"}>
        <div className="context max-sm:p-[30px] pl-[159px] flex max-sm:flex-col  gap-10 mt-10">
            <div className="img">
    <img className="h-[500px] w-[495px] rounded" src={item.img  } alt="" />
            </div>
            <div className="content-product text-[#ffffffbf] w-[605px]">
                <h1 className="max-sm:text-[30px] text-[40px] capitalize">{item.name}</h1>
                <p className="text-[16px] my-6 capitalize">description : {item.description}
                </p>
                <span className="flex gap-2 price">
                  
                  <h3 className="text-[18px] line-through tracking-[0.14rem] mb-2">Rs. {item.oprice}</h3><h3 className="text-[18px] tracking-[0.14rem]">Rs . {item.dprice}</h3><small className=" mb-2 relative bottom-2 bg-[#242833]">sale</small>
                  </span>
                  <h3 className="text-[14px] mb-[15px]">Taxes included. <span className="underline">Shipping</span> calculated at checkout.</h3>
                <div className="quantity">
                    <small className="text-[15px] capitalize ">quantity</small>
                    <span className="flex">

                    <button className="btn-add pl-3 text-[var(--text)] text-[1.2rem] bg-[var(--background)] border-t-2 border-l-2 border-b-2 border-[#ffffffbf] rounded-s pr-10 mt-4 h-[42px]" onClick={()=>{count_dec()}}>-</button>
                    <span className="bg-[var(--background)] border-b-2 border-t-2 text-[var(--text)] border-[#ffffffbf] text-[1.2rem] h-[42.2px] text-center items-center flex mt-4">{quantity}</span>
                    <button className="btn-remove text-[var(--text)] text-[1.2rem] bg-[var(--background)] pr-3 border-t-2 border-r-2 border-b-2 border-[#ffffffbf] rounded-e pl-10 mt-4 h-[42px]" onClick={()=>{count_inc()}}>+</button>
                    </span>
                    <button className=" add-cart rounded " onClick={()=>{
                      handleUser();
                      
                    }}>
                        Add to cart
                    </button>
                    <div className="share">
                      <span className="icon flex gap-2 items-center mt-8">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[12px] icon icon-share" fill="none" viewBox="0 0 13 12"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.625 8.125v2.167a1.083 1.083 0 0 0 1.083 1.083h7.584a1.083 1.083 0 0 0 1.083-1.083V8.125"></path><path fill="currentColor" fillRule="evenodd" d="M6.148 1.271a.5.5 0 0 1 .707 0L9.563 3.98a.5.5 0 0 1-.707.707L6.501 2.332 4.147 4.687a.5.5 0 1 1-.708-.707z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M6.5 1.125a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-1 0v-6.5a.5.5 0 0 1 .5-.5" clipRule="evenodd"></path></svg>
                      <h4>Share</h4>
                      </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="more-items max-sm:p-[30px] pl-[159px] my-16 text-[var(--text)] mn-w">

        <h1 className="text-[24px] mb-5">More Related Items</h1>
        <ul className='grid grid-cols-4 max-sm:w-[100%] max-sm:grid-cols-2 w-[87%] gap-10 max-sm:grid-flow-row'>
{watches.slice(0,4).filter(iwatch => iwatch.type === item.type).map(watch =>(


        <li className='max-sm:w-[155px] h-[371px]' key={watch.id}>
        <img src={watch.img} className='mb-3 w-[213px] h-[213px] rounded' alt="" />
       <div className="content p-2">

        <h4 className='text-[13px]'>{watch.name}</h4>
        <small className='text-[10px] text-[#ffffffbf] mt-2'>Watch Shree</small>
        <span className='flex gap-4 items-center mt-2'>

        <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
        </span>
        <button href="#" className="btn" onClick={()=>{
          
        }}>
         Add To Cart
        </button>
       </div>

        </li>))}
        </ul>
        </div>
        </div> 
      <Footer />
     { cart && <CartOverlay  onClose={()=>{showcart(false)}}/>}
    </div>
  );
}

export default product;
