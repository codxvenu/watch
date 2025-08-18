"use client"
import {React,useEffect,useState} from "react";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import "./page.css";
import CartOverlay from "../../../components/cart-overlay";
import { useUser } from "../../../context/UserContext";
import { useParams } from "next/navigation";
function product() {
  const [watches,setWatches] = useState([])
  const [carts,setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cart, showcart] = useState(false);
  const [item,setItem] = useState({});
  const params = useParams();
  const { nav } = useUser();
  const {id} = params;
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
  const handleWatches = async()=>{
    console.log("wokred");
    
    fetch(`/api/product/${id}`)
     .then(response=>response.json())
     .then(data=>{setItem(data[0]); console.log(item,data[0]);
     })
     .catch(error=>console.log(error))

   fetch(`/api/watches`)
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
    handleWatches(); 
    localStorage.setItem("page" , "product");
}, []);

  return (
    <div>
      <Nav /> 
      <div className={nav? "base max-sm:mt-[60px] mt-[110px] hidden":"base max-sm:mt-[60px] mt-[110px]"}>
        <div className="context max-sm:p-[30px] px-[220px] flex max-sm:flex-col  gap-10 mt-10">
            <div className="img">
    <img className="h-[500px] w-[495px] rounded object-cover" src={item.img  } alt="" />
            </div>
            <div className="content-product text-[var(--text)] w-[605px]">
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

                    <button className="btn-add pl-3 text-[var(--text)] text-[1.2rem] bg-[var(--background)] border-t-2 border-l-2 border-b-2 border-[var(--border)] rounded-s pr-10 mt-4 h-[42px]" onClick={()=>{count_dec()}}>-</button>
                    <span className="bg-[var(--background)] border-b-2 border-t-2 text-[var(--text)] border-[var(--border)] text-[1.2rem] h-[42.2px] text-center items-center flex mt-4">{quantity}</span>
                    <button className="btn-remove text-[var(--text)] text-[1.2rem] bg-[var(--background)] pr-3 border-t-2 border-r-2 border-b-2 border-[var(--border)] rounded-e pl-10 mt-4 h-[42px]" onClick={()=>{count_inc()}}>+</button>
                    </span>
                    <button className=" add-cart rounded " onClick={()=>{
                      handleUser();
                      
                    }}>
                        Add to cart
                    </button>
                    <div className="share">
                      <span className="icon flex gap-2 items-center mt-8">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[12px] icon icon-share" fill="none" viewBox="0 0 13 12"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.625 8.125v2.167a1.083 1.083 0 0 0 1.083 1.083h7.584a1.083 1.083 0 0 0 1.083-1.083V8.125"></path><path fill="var(--text)" fillRule="evenodd" d="M6.148 1.271a.5.5 0 0 1 .707 0L9.563 3.98a.5.5 0 0 1-.707.707L6.501 2.332 4.147 4.687a.5.5 0 1 1-.708-.707z" clipRule="evenodd"></path><path fill="var(--text)" fillRule="evenodd" d="M6.5 1.125a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-1 0v-6.5a.5.5 0 0 1 .5-.5" clipRule="evenodd"></path></svg>
                      <h4>Share</h4>
                      </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="more-items max-sm:p-[30px] px-[220px] my-16 text-[var(--text)] mn-w">

        <h1 className="text-[24px] mb-5">More Related Items</h1>
        <ul className='grid grid-cols-4 max-sm:w-[100%] max-sm:grid-cols-2 w-[87%] gap-10 max-sm:grid-flow-row'>
{watches.slice(0,4).filter(iwatch => iwatch.type === item.type).map(watch =>(


        <li className='max-sm:w-[155px] h-[371px]' key={watch.id}>
        <img src={watch.img} className='mb-3 !w-[100%] h-[213px] rounded object-cover mx-auto' alt="" />
       <div className="content p-2">

        <h4 className='text-[13px]'>{watch.name}</h4>
        <small className='text-[10px] text-[var(--text)] mt-2'>Watch Shree</small>
        <span className='flex gap-4 items-center mt-2'>

        <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
        </span>
        <button href="#" className="!text-[var(--background)]  btn" onClick={()=>{
          
        }}>
         Add To Cart
        </button>
       </div>

        </li>))}
        </ul>
         {watches.filter((x)=>x.type===item.type && x.gender === item.gender).length === 0 && 
      <span className=" h-[50vh] flex items-start justify-center pt-28">
        <svg aria-hidden="true" className="w-[30px] h-[30px] text-transparent animate-spin animate-duration-[.25s] rounded-full border-l-[2px] border-l-[#242424] border-[transparent] " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      </span>}
        </div>
        </div> 
      <Footer />
     { cart && <CartOverlay  item={item} onClose={()=>{showcart(false)}}/>}
    </div>
  );
}

export default product;
