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
    const [smart , setSmart] = useState(true)
    const [hybrid , setHybrid] = useState(true)
    const [chronograph , setChronograph] = useState(true)
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
    
        localStorage.setItem('product',JSON.stringify(watches[watch]))
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
      <h1 className='mb-3'>AUTOMATIC WATCH</h1>
      <h3 className='mb-6'>Some lost vintage watches</h3>
    <ul className='grid gap-3 grid-cols-4 max-sm:grid-cols-2 w-[93%]' >
       

      
        {watches.filter(watch => watch.type ==="automatic" && watch.gender === "men" ).slice(0,fvalue).map((watch,index)=>(
 <li className='rounded-[20px] bg-white w-[256.36px]' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[100%] object-cover h-[213px] rounded-[20px_20px_0_0]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[var(--border)] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn !border-0 !rounded-xl !bg-[var(--text)] !text-white mx-auto" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
   
        </ul>   
       
    </div>
 {automatic && chronograph && (


    <span className='flex justify-center mb-3 mt-2'>
          
          <button onClick={
          ()=>{
            setFvalue();
            if(automatic){
              setSmart(false);
              setHybrid(false);
              setChronograph(false);
              setDigital(false);
              setAnalog(false);
              
             } else{
              setSmart(false);
              setHybrid(false);
              setChronograph(false);
              setDigital(false);
              setAutomatic(true);
              setAnalog(false);
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
      <h1 className='mb-3'>ANALOG WATCH</h1>
      <h3 className='mb-6'>Some lost vintage watches</h3>
    <ul className='grid gap-2 grid-cols-4 max-sm:grid-cols-2 w-[87%]' >
       

      
        {watches.filter(watch => watch.type ==="analog" && watch.gender === "men" ).slice(0,fvalue).map((watch,index)=>(
 <li className='rounded-[20px] bg-white w-[256.36px]' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[100%] object-cover h-[213px] rounded-[20px_20px_0_0]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[var(--border)] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn !border-0 !rounded-xl !bg-[var(--text)] !text-white mx-auto" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
   
        </ul>   
       
    </div>
 {analog && chronograph && (


    <span className='flex justify-center mb-3 mt-2'>
          
          <button onClick={
          ()=>{
            setFvalue();
            if(analog){
              setSmart(false);
              setHybrid(false);
              setChronograph(false);
              setDigital(false);
              setAutomatic(false);
              
              
             } else{
              setSmart(false);
              setHybrid(false);
              setChronograph(false);
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
      <h1 className='mb-3'>DIGITAL WATCH</h1>
      <h3 className='mb-6'>Some lost vintage watches</h3>
      <ul className='grid gap-2 grid-cols-4 max-sm:grid-cols-2 w-[87%]' >
        {watches.filter(watch => watch.type ==="digital" && watch.gender === "men").slice(0,fvalue).map((watch,index)=>(
 <li className='rounded-[20px] bg-white w-[256.36px]' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[100%] object-cover h-[213px] rounded-[20px_20px_0_0]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[var(--border)] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn !border-0 !rounded-xl !bg-[var(--text)] !text-white mx-auto" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
        
        </ul>
       
    </div>
    {digital && chronograph && (
    <span className='flex justify-center mb-3 mt-2 '>
          
          <button onClick={
          ()=>{
            setFvalue();
            if(digital){setSmart(false);
              setHybrid(false);
              setChronograph(false);
              setSmart(false);
              setAutomatic(false);
              setAnalog(false);
            }else{
              setSmart(false);
              setHybrid(false);
              setChronograph(false);
              setDigital(true);
              setAutomatic(false);
              setAnalog(false);
            }

          }}  className="btn m-auto">View All</button>
          </span>)}   </div>   )}
          {smart && (
            <div>
         
      <div className='ml-[159px] px-12 mt-10 mn-w'>
      <h1 className='mb-3'>SMART WATCH </h1>
      <h3 className='mb-6'>Some lost vintage watches</h3>
      <ul className='grid gap-2 grid-cols-4 max-sm:grid-cols-2 w-[87%]' >
        {watches.filter(watch => watch.type ==="smart" && watch.gender === "men").slice(0,fvalue).map((watch,index)=>(
 <li className='rounded-[20px] bg-white w-[256.36px]' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[100%] object-cover h-[213px] rounded-[20px_20px_0_0]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[var(--border)] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn !border-0 !rounded-xl !bg-[var(--text)] !text-white mx-auto" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}

        
        </ul>
       
    </div>
    {smart && chronograph && (
    <span className='flex justify-center mb-3 mt-2'>
          
          <button onClick={
          ()=>{
            setFvalue();
            if(smart){
              setHybrid(false);
              setChronograph(false);
              setDigital(false);
              setAutomatic(false);
              setAnalog(false);
            } else{
              setSmart(true);
              setHybrid(false);
              setChronograph(false);
              setDigital(false);
              setAutomatic(false);
              setAnalog(false);
            }

          }}  className="btn m-auto">View All</button>
          </span>  )}
          </div>   )}
          {hybrid && ( 
            <div>
      <div className='ml-[159px] px-12 mt-10 mn-w'>
      <h1 className='mb-3'>HYBRID WATCH</h1>
      <h3 className='mb-6'>Some lost vintage watches</h3>
      <ul className='grid gap-2 grid-cols-4 max-sm:grid-cols-2 w-[87%]' >
        {watches.filter(watch => watch.type ==="hybrid" && watch.gender === "men").slice(0,fvalue).map((watch,index)=>(
 <li className='rounded-[20px] bg-white w-[256.36px]' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[100%] object-cover h-[213px] rounded-[20px_20px_0_0]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[var(--border)] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn !border-0 !rounded-xl !bg-[var(--text)] !text-white mx-auto" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
        
        </ul>
       
    </div>
    {hybrid && chronograph && (
    <span className='flex justify-center mb-3 mt-2'>
          
          <button onClick={
          ()=>{
            setFvalue();
            if(hybrid){setSmart(false);
              setAutomatic(false);
              setChronograph(false);
              setDigital(false);
              setAutomatic(false);
              setAnalog(false);
            }else{
              setSmart(false);
              setHybrid(true);
              setChronograph(false);
              setDigital(false);
              setAnalog(false);
              setAutomatic(false);
            }

          }}  className="btn m-auto">View All</button>
          </span>  )}
          </div>    )}
          {chronograph && (

       <div>

      
      <div className='ml-[159px] px-12 mt-10 mn-w'>
      <h1 className='mb-3'>CHRONOGRAPH WATCH</h1>
      <h3 className='mb-6'>Some lost vintage watches</h3>
      <ul className='grid gap-2 grid-cols-4 max-sm:grid-cols-2 w-[87%]' >
        {watches.filter(watch => watch.type ==="chronograph" && watch.gender === "men").slice(0,fvalue).map((watch,index)=>(
 <li className='rounded-[20px] bg-white w-[256.36px]' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[100%] object-cover h-[213px] rounded-[20px_20px_0_0]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[var(--border)] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn !border-0 !rounded-xl !bg-[var(--text)] !text-white mx-auto" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
        
        </ul>
       
    </div> {automatic && chronograph && (
     
    <span className='flex justify-center max-lg:mb-12 mt-2'>
          
          <button onClick={
            
          ()=>{
            setFvalue();
            if(chronograph){
              setSmart(false);
              setHybrid(false);
              setDigital(false);
              setAutomatic(false);
              setAnalog(false);
            } else{
              setSmart(false);
              setHybrid(false);
              setChronograph(true);
              setDigital(false);
              setAutomatic(false);
              setAnalog(false);
            }

          }} 
           className="btn m-auto">View All</button>
          </span> )} 
          </div> 
            )}
          </div>
      <Footer/>
    </div>
  )
}

export default page
