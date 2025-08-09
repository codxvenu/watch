"use client"
import {React,useEffect,useState} from 'react'
import Nav from "../components/nav";
import Footer from "../components/footer";
import "./page.css"
import { useUser } from "../context/UserContext";
function cart() {
     const[total,setTotal] = useState(0)
     const [carts,setCart] = useState([])
     const { nav } = useUser();
      const handleCart = () => {
        const username = localStorage.getItem("username");
    
        if (!username) {
            console.error("Username not found in localStorage");
            return;
        }
    
        fetch(`/api/cart?username=${username}`)
            .then((response) => response.json())
            .then((data) => {
               // ✅ Logs API response
                setCart(data);  // ✅ Updates state asynchronously
            })
            .catch((error) => console.log("Fetch error:", error));
    };
    const handleTotal = () => {
      let x = 0 
    for(let i = 0; i < carts.length; i++) {
      
      x += carts[i].dprice * carts[i].quantity;

    }
  setTotal(x)}
    useEffect(() => {
        handleCart();
    }, []); 
    useEffect(() => {
      if(carts[0]){
              handleTotal();
    }}, [carts]); 
    const [quantity, setQuantity] = useState(1);
      const count_inc = (id,name)=> {
        if (carts[id].quantity < 15) {
          carts[id].quantity = carts[id].quantity + 1
          setQuantity(carts[id].quantity);
          handleQuantity(id,name);
        }
      }
    
      const count_dec = (id,name)=> {
        if (carts[id].quantity > 1) {
          carts[id].quantity = carts[id].quantity - 1
          setQuantity(carts[id].quantity);
          handleQuantity(id,name);
        }
      }
      useEffect(()=>{
        handleTotal()
        setCart(carts)
      },[quantity])

      const handleRemove = async(id)=>{
        const username = localStorage.getItem('username');
        const requestBody = JSON.stringify({ 
          username: username,
          id : id })
        try {
          const response = await fetch('/api/rcart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: requestBody,
            credentials: 'include'
          });
      
          const result = await response.json();
      
          if (response.ok) {
            alert(result.message,"else");
            handleCart();
          } else {
            alert(result.message,"else");
          }
        } catch (error) {
            alert('An unexpected error occurred',error);
        }
      };  
      const handleQuantity = async(id,name)=>{
        if (!carts[id]) return;
        
        
        
        const username = localStorage.getItem('username');
        const requestBody = JSON.stringify({ 
              username: username,
              quantity : carts[id].quantity,
              name : name
        });
        try {
          const response = await fetch('/api/quantity', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: requestBody,
            credentials: 'include'
          });
      
          const result = await response.json();
      
          if (response.ok) {
            console.log(result.message);
          } else {
            console.log(result.message);
          }
        } catch (error) {
          console.log('An unexpected error occurred');
        }
      };
      
      
  return (
    <div className="mt-[120px]">
      <Nav/>
      <div className={nav? "main-cart-menu text-[var(--text)] max-sm:px-[10px] px-[159px] border-b-[1px] border-[#ffffff1d] mb-3 hidden":"main-cart-menu text-[var(--text)] px-[159px] border-b-[1px] border-[#ffffff1d] mb-3 "}>
        <span className='flex justify-between mt-2 mb-[20px] items-center'>
            
            <h1 className='max-sm:text-[30px]text-[40px]'>Your Cart</h1>
        <small className='underline max-sm:text-[14px] text-[16px]'>Continue Shopping</small>
            </span>
           <table>
            <thead className='text-[#ffffffbf] text-[13px]'>
                <tr>

                <th className='w-[60%] text-start'>Product</th>
                <th className='max-sm:hidden pl-[4rem] text-start '>Quantity</th>
                
                <th className="text-end th-3">Total</th>
                </tr>
            </thead>
            {carts.length === 0 && (
                  <tbody>
                <tr className="h-60 max-sm:block max-sm:h-[5rem] max-sm:w-[21rem]">
                    <td colSpan="3" className='text-center uppercase text-4xl'>Your cart is empty.</td>
                </tr>
                </tbody>
              )}
           {carts.length >0 && (

           <tbody>
              
            
              { carts.map((item,index)=>(

            

                <tr key={item.id}>
                    <td className='flex max-sm:gap-[10px] gap-8'><img src={item.img} alt="" className='w-[110px] h-[146.66px] rounded td-1'/>
               <span>
               <h1 className="text-[16px]">{item.name}</h1><h1 className='mt-2 text-[15px]'>
               Rs. {item.dprice}</h1>
                </span> 
                </td>
                <td className="td-2"> <span className="flex items-center gap-5 justify-center ">
                    
                    <span className="flex">

<button className="btn-add pl-3 text-[var(--text)] text-[1.2rem] bg-[var(--background)] border-t-2 border-l-2 border-b-2 border-[#ffffffbf] rounded-s pr-10 mt-4 h-[42px]" onClick={()=>{count_dec(index,item.name)}}>-</button>
<span className="bg-[var(--background)] border-b-2 border-t-2 text-[var(--text)] border-[#ffffffbf] text-[1.2rem] h-[42.2px] text-center items-center flex mt-4">{item.quantity}</span>
<button className="btn-remove text-[var(--text)] text-[1.2rem] bg-[var(--background)] pr-3 border-t-2 border-r-2 border-b-2 border-[#ffffffbf] rounded-e pl-10 mt-4 h-[42px]" onClick={()=>{count_inc(index,item.name)}}>+</button>
</span><svg xmlns="http://www.w3.org/2000/svg"  onClick={()=>{handleRemove(item.id)}} className="icon icon-remove w-[20px] h-[20px] mt-3" viewBox="0 0 16 16"><path fill="currentColor" d="M14 3h-3.53a3.07 3.07 0 0 0-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 0 0 5.53 3H2a.5.5 0 0 0 0 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 0 0 .5-.5V4H14a.5.5 0 0 0 0-1M6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02m4.84 11.52h-7.5V4h7.5z"></path><path fill="currentColor" d="M6.55 5.25a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5m2.9 0a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5"></path></svg>
                    </span> </td>
                    <td className="tracking-[3px] text-end text-[18px] td-3">
                        Rs.{item.quantity * item.dprice}</td>
                        </tr>
                          ))}
              
            </tbody> )}
           </table>
      </div>
      <div className={nav? "checkout_box text-[#ffffffbf] max-sm:p-[14px] mb-16 ml-[auto] mr-[159px] w-[350px] flex-col justify-end hidden" : "checkout_box text-[#ffffffbf] max-sm:p-[14px] mb-16 ml-[auto] mr-[159px] w-[350px] flex flex-col justify-end" }>
        <span className="flex gap-5 mb-3 justify-end"><h1 className="text-[var(--text)]">Estimated total</h1><h1 className="tracking-[3px] text-[18px]">Rs. {total}</h1></span>
        <small className="flex justify-end w-[100%] ml-[auto] max-sm:text-center text-end text-[16px]">Taxes included. Discounts and shipping calculated at checkout.</small>
        <button className="checkout max-sm:w-[330px] bg-white text-black w-[348px] h-[45px] rounded mt-4">
            Check out
        </button>
      </div>
      <Footer/>
    </div>
  )
}

export default cart
