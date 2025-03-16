"use client"
import {React,useEffect,useState} from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import "./page.css"
function home() {
  const [watches,setWatches] = useState([])
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
},[])
  return (
    <div className="div mt-[110px] z-[-1]" >
      <Nav/>
   
    <div className=' text-white bg-[#121212]'>
      <div className='flex mb-10'>

      <img className='w-[50%] h-[420px] bg-contain blur-sm' src="https://www.punkstore.in/cdn/shop/files/D19B382B-6D5F-4D8B-948D-7CC488225E0B.jpg?v=1733584510" alt="" width={1440}/>
      <img className='w-[50%] h-[420px] blur-sm' src="https://www.punkstore.in/cdn/shop/files/3C9EDCBC-232F-4B65-90DD-C6C38EF0B110.jpg?v=1735656418" alt="" width={1440} />
      <div className="context text-center absolute flex justify-center items-center flex-col left-[530px] top-[240px]">
        <h2 className='text-[24px] font-bold'>Get up to 300 off on watches and accessories .</h2>
        <h3 className='text-[16px]'>100% HANDMADE MASK AND SPIKE WATCHES</h3>
        <button className='btn bg-[transparent!important]'>Shop now</button>
      </div>
      </div>
    <div className='ml-[159px] px-12'>
      <h1 className='mb-3'>Women Watches</h1>
      <h3 className='mb-6'>HANDMADE  DESIGNS ON ORIGINAL WATCHES </h3>
      <ul className='grid grid-cols-5 gap-2'>
        {watches.slice(0,5).filter(watch => watch.type ==="bestseller").map((watch,index)=>(
 <li className='w-213px h-371px' key={watch.id} onClick={()=>{
  handleProduct(index);
  }} >
 <img src={watch.img} className='mb-3 w-[213px] h-[213px]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[#ffffffbf] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>{watch.orginal}</h4><h3>{watch.discounted}</h3>
 </span>
 <button href="#" className="btn" onClick={()=>{handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
        
        </ul>
       
    </div>
    <span className='flex justify-center mb-3 mt-2'>
          
          <button href="/women" className="btn m-auto">View All</button>
          </span>
          <div className="div-banner-move">

          <div className="moving-banner flex gap-[26px] text-[19px] text-white pr-[26px]">
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
          <div className="moving-banner flex gap-[26px] text-[19px] text-white pr-[26px]">
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
          <div className='ml-[159px] px-12'>
      <h1 className='mb-3'>Mens Watches</h1>
      <h3 className='mb-6'>Some lost vintage watches</h3>
      <ul className='grid grid-cols-4 w-[87%] gap-2' >
        {watches.slice(0,4).filter(watch => watch.type ==="vintage").map((watch,index)=>(
 <li className='w-213px h-371px z-20' key={watch.id} onClick={()=>{
  handleProduct(index);
  }}>
 <img src={watch.img} className='mb-3 w-[213px] h-[213px]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[#ffffffbf] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>{watch.orginal}</h4><h3>{watch.discounted}</h3>
 </span>
 <button href="/men" className="btn z-50" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
        
        </ul>
       
    </div>
    <span className='flex justify-center'>

   <a href="" className='underline text-[#ffffffbf] mt-3 mb-14'>View all</a>
    </span>
    </div>  <Footer/> </div>
  )
}

export default home
