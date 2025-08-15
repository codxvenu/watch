"use client"
import {React,useState,useEffect} from 'react'
import Nav from "../components/nav";
import Footer from "../components/footer";
import "./page.css"
import { useUser } from "../context/UserContext";

function page() {
    const [watches, setWatches] = useState([
        {
            "id": 1,
            "name": "Gold Chain",
            "oprice": "1000.00",
            "dprice": "500.00",
            "description": "gold chain ,best for party , classic look",
            "type": "automatic",
            "gender": "men",
            "img": "https://nocash.cc/venu/shopping.webp",
            "created_at": "2025-08-10T05:26:44.000Z"
        },
        {
            "id": 2,
            "name": "Ring Watch ",
            "oprice": "599.00",
            "dprice": "299.00",
            "description": "A Ring u will always Love to carry along time",
            "type": "automatic",
            "gender": "women",
            "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
            "created_at": "2025-08-10T08:18:20.000Z"
        },
         {
            "id": 1,
            "name": "Gold Chain",
            "oprice": "1000.00",
            "dprice": "500.00",
            "description": "gold chain ,best for party , classic look",
            "type": "automatic",
            "gender": "men",
            "img": "https://nocash.cc/venu/shopping.webp",
            "created_at": "2025-08-10T05:26:44.000Z"
        },
        {
            "id": 2,
            "name": "Ring Watch ",
            "oprice": "599.00",
            "dprice": "299.00",
            "description": "A Ring u will always Love to carry along time",
            "type": "automatic",
            "gender": "women",
            "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
            "created_at": "2025-08-10T08:18:20.000Z"
        },
         {
            "id": 1,
            "name": "Gold Chain",
            "oprice": "1000.00",
            "dprice": "500.00",
            "description": "gold chain ,best for party , classic look",
            "type": "automatic",
            "gender": "men",
            "img": "https://nocash.cc/venu/shopping.webp",
            "created_at": "2025-08-10T05:26:44.000Z"
        },
        {
            "id": 2,
            "name": "Ring Watch ",
            "oprice": "599.00",
            "dprice": "299.00",
            "description": "A Ring u will always Love to carry along time",
            "type": "automatic",
            "gender": "women",
            "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
            "created_at": "2025-08-10T08:18:20.000Z"
        },
        {
            "id": 3,
            "name": "gold watch",
            "oprice": "100000.00",
            "dprice": "200.00",
            "description": "kdjgshyfgysdfkGDFyuidgW",
            "type": "automatic",
            "gender": "men",
            "img": "https://nocash.cc/venu/Untitled.jpg",
            "created_at": "2025-08-13T09:43:03.000Z"
        }
    ]);
  const watchCategories = [
  {
    type: "automatic",
    title: "AUTOMATIC WATCH",
    subtitle: "Some lost vintage watches"
  },
  {
    type: "analog",
    title: "ANALOG WATCH",
    subtitle: "Some lost vintage watches"
  },
  {
    type: "digital",
    title: "DIGITAL WATCH",
    subtitle: "Some lost vintage watches"
  },
  {
    type: "smart",
    title: "SMART WATCH",
    subtitle: "Some lost vintage watches"
  },
  {
    type: "hybrid",
    title: "HYBRID WATCH",
    subtitle: "Some lost vintage watches"
  },
  {
    type: "chronograph",
    title: "CHRONOGRAPH WATCH",
    subtitle: "Some lost vintage watches"
  }
];

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
    <div className="text-[var(--text)] max-[768px]:mt-[45px] mt-[85px] bg-white">
      <Nav/>
      <img className="w-[100%] h-[250px] object-cover" src="https://static.helioswatchstore.com/media/catalog/category/all_watches_apr_2025.jpg" alt="" />
      {watchCategories.map((i)=>(
      <div className='px-[220px] mt-5 mn-w bg-[white] py-4 min-h-[220px]' key={i.type}>
        <span className="flex justify-between items-center">
          
          <span>
      <h1 className='mb-3'>{i.title}</h1>
      <h3 className='mb-6'>{i.subtitle}</h3>
          
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical mb-6"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </span>
    <ul className='grid gap-3 grid-cols-[repeat(4,minmax(0,1fr))] max-sm:grid-cols-2 w-max' >
       

      
        {watches.filter(watch => watch.type === i.type && watch.gender === "men" ).slice(0,fvalue).map((watch,index)=>(
 <li className=' bg-[white] w-[256.36px] hover:shadow-md' key={watch.id} onClick={()=>{handleProduct(index);}}>
 <img src={watch.img} className='mb-3 w-[100%] object-contain h-[213px] rounded-[20px_20px_0_0]' alt="" />
<div className="content p-2">

 <h4 className='text-[13px]'>{watch.name}</h4>
 <small className='text-[10px] text-[var(--border)] mt-2'>Watch Shree</small>
 <span className='flex gap-4 items-center mt-2'>

 <h4 className='text-[13px] line-through'>Rs.{watch.oprice}</h4><h3>Rs.{watch.dprice}</h3>
 </span>
 <button href="#" className="btn !border-0 !bg-[black] !text-white mx-auto" onClick={(event)=>{event.stopPropagation();handleUser(index)}}>
  Add To Cart
 </button>
</div>

 </li>
        ))}
       
   
        </ul>   
       
    
          </div>
      ))}
      <Footer/>
    </div>
  )
}

export default page
