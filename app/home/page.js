"use client"
import {React,useEffect,useState} from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import "./page.css"
import { useUser } from "../context/UserContext";
function home() {
  const [watches,setWatches] = useState([])
  const { nav } = useUser();
  const handleProduct = (id)=>{
    
    localStorage.setItem('product',JSON.stringify(watches[id]))
    window.location.href = "/product";
  }

  const handleWatches = ()=>{
    console.log("wokred");
    
    fetch('/api/watches')
     .then(response=>response.json())
     .then(data=>setWatches(data))
     .catch(error=>{
      console.log(error , "eerred");
      
      console.log(error)})
  }
  const handleOrder = async(id)=>{
    console.log(watches[id],"data");
    
    const username = localStorage.getItem('username');
    const requestBody = JSON.stringify({ 
          username: username,
          item : watches[id]
      
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
  const handleUser= (index)=>{
    const username = localStorage.getItem('username');
    if(username){
      handleOrder(index);
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
useEffect(()=>{
  handleWatches();
  localStorage.setItem("page" , "home");
},[])
  return (
    <div className="div mt-[110px] z-[-1]" >
      <Nav/>
   
    <div className={nav? ' text-[var(--text)] bg-[var(--background)] hidden':' text-[var(--text)] bg-[var(--background)]'}>
      <div className='flex relative'>

      <video
  autoPlay
  playsInline
  muted
  loop
  className="w-full h-[420px] blur-sm"
  src="878691467923791872_resize-8216801%20(1).mp4"
  style={{ objectFit: "cover" }}
></video>
<div className="context text-center absolute flex justify-center items-center flex-col left-[50%] top-[50%]">
        <h1 className='text-[24px] font-bold text-[var(--background)]'>MAKE A REEL WITH OUR WATCH & GET 50% CASHBACK</h1>
        <h3 className='text-[16px] text-[var(--background)]'>STRONG IN BUILD, STYLISH IN LOOK </h3>
        <button className='btn bg-[transparent!important] !text-[var(--background)] border-[1px] !border-[var(--background)]'>Shop now</button>
      </div>
      </div>
      <div className='pl-[159px] pr-12 mn-w bg-[#F5F5F7] min-h-[400px] pt-10'>
      <h1 className='mb-3'>Mens Watches</h1>
      <h3 className='mb-6'>Best Seller Watches</h3>
      <ul className='grid grid-cols-4 w-[87%] gap-2' >
        {watches.filter(watch =>watch.gender==="men" && watch.type ==="bestseller").slice(0,4).map((watch,index)=>(
 <li className='' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[213px] h-[213px]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[var(--border)] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button className="btn z-50" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
        
        </ul>
       
    </div>
    
    {/* <span className='flex justify-center mb-3 mt-2'>
          
          <button href="/men" className="btn m-auto">View All</button>
          </span> */}
          <div className="div-banner-move">

          <div className="moving-banner flex gap-[26px] text-[19px] text-[var(--text)] pr-[26px]">
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
          </div>
          <div className="moving-banner flex gap-[26px] text-[19px] text-[var(--text)] pr-[26px]">
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
            <span>• MADE WITH LOVE & COMMITMENT •</span>
          </div>
          </div>
          <div className='pl-[159px] pr-12 mn-w bg-[#F5F5F7] min-h-[400px] pt-10'>
      <h1 className='mb-3'>Women Watches</h1>
      <h3 className='mb-6'>Best Seller Watches </h3>
      <ul className='grid gap-2 grid-cols-5 max-sm:grid-cols-2 ' >
        {watches.filter(watch => watch.gender==="women" && watch.type ==="bestseller").slice(0,5).map((watch,index)=>(
          <li className='' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[213px] h-[213px]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[var(--border)] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn" onClick={()=>{handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
        
        </ul>
       
    </div>
          
    {/* <span className='flex justify-center mb-3 mt-2'>
          
          <button href="/women" className="btn m-auto">View All</button>
          </span> */}
    </div>  <Footer/> </div>
  )
}

export default home
