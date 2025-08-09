"use client"
import {React,useState,useEffect} from 'react'
import Nav from "../components/nav";
import Footer from "../components/footer";
import "./page.css"
import { useUser } from "../context/UserContext";

function page() {
    const [watches,setWatches] = useState([])
    const [automatic , setAutomatic] = useState(true)
    const [digital , setDigital] = useState(true)
    const [analog , setAnalog] = useState(true)
    const [fvalue, setFvalue] = useState(6)
    const { nav } = useUser();
    const handleWatches = ()=>{
        console.log("wokred");
        
        fetch('/api/watches')
         .then(response=>response.json())
         .then(data=>setWatches(data))
         .catch(error=>console.log(error))
      }
      useEffect(()=>{
        handleWatches();
        localStorage.setItem("page" , "men");
        
      },[])
      useEffect(()=>{
        console.log(watches);
        
        
      },[watches])
      const handleProduct = (watch)=>{
    
        localStorage.setItem('product',JSON.stringify(watch))
        window.location.href = "/product";
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
  return (
    <div className="text-[var(--text)] mt-[110px] ">
      <Nav/>
      <div className={nav? "hidden":""}>

      {automatic && (
        <div>
      
      <div className='ml-[159px] px-12 mt-10 mn-w'>
      <h1 className='mb-3'>AUTOMATIC CLOCKS</h1>
      <h3 className='mb-6'>Some lost vintage CLOCKS</h3>
    <ul className='grid gap-2 grid-cols-4 max-sm:grid-cols-2 w-[87%]' >
       

      
        {watches.filter(watch => watch.type ==="automatic" && watch.gender === "wall-clocks" ).slice(0,fvalue).map((watch,index)=>(
 <li className='' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[213px] h-[213px]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[#ffffffbf] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn z-50" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
   
        </ul>   
       
    </div>
 {automatic &&(


    <span className='flex justify-center mb-3 mt-2'>
          
          <button onClick={
          ()=>{
            setFvalue();
            if(automatic){
              setAnalog(false);
              setDigital(false);
              
             } else{
              setAnalog(false);
              setDigital(false);
              setAutomatic(true);
            }

          }}
         className="btn m-auto">View All</button>
          </span>   
           )}
          </div>
             )}
      {analog && (
        <div>
      
      <div className='ml-[159px] px-12 mt-10 mn-w'>
      <h1 className='mb-3'>ANALOG CLOCKS</h1>
      <h3 className='mb-6'>Some lost vintage CLOCKS</h3>
    <ul className='grid gap-2 grid-cols-4 max-sm:grid-cols-2 w-[87%]' >
       

      
        {watches.filter(watch => watch.type ==="analog" && watch.gender === "wall-clocks" ).slice(0,fvalue).map((watch,index)=>(
 <li className='' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[213px] h-[213px]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[#ffffffbf] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn z-50" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
   
        </ul>   
       
    </div>
 {analog && (


    <span className='flex justify-center mb-3 mt-2'>
          
          <button onClick={
          ()=>{
            setFvalue();
            if(analog){
              setAutomatic(false);
              setDigital(false);
              
              
             } else{
              setDigital(false);
              setAutomatic(false);
              setAnalog(true);
            }

          }}
         className="btn m-auto">View All</button>
          </span>   
           )}
          </div>
             )}
{digital && (

<div>

      <div className='ml-[159px] px-12 mt-10 mn-w'>
      <h1 className='mb-3'>DIGITAL CLOCKS</h1>
      <h3 className='mb-6'>Some lost vintage CLOCKS</h3>
      <ul className='grid gap-2 grid-cols-4 max-sm:grid-cols-2 w-[87%]' >
        {watches.filter(watch => watch.type ==="digital" && watch.gender === "wall-clocks").slice(0,fvalue).map((watch,index)=>(
 <li className='' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[213px] h-[213px]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[#ffffffbf] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn z-50" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
        
        </ul>
       
    </div>
    {digital &&  (
    <span className='flex justify-center mb-3 mt-2 '>
          
          <button onClick={
          ()=>{
            setFvalue();
            if(digital){
              setAnalog(false);
              setAutomatic(false);
            }else{
              setAnalog(false);
              setDigital(true);
              setAutomatic(false);
            }

          }}  className="btn m-auto">View All</button>
          </span>)}   </div>   )}
          </div>
      <Footer/>
    </div>
  )
}

export default page
