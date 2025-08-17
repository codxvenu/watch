"use client"
import {React,useState,useEffect} from 'react'
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import "./page.css"
import { useUser } from "@/app/context/UserContext";
import { useParams } from 'next/navigation';

function page() {
  const params = useParams();
    const {type,gender} = params;
    const [page, setPage] = useState(0);
  const [start, setStart] = useState(0);
  //  const [watches, setWatches] = useState([
  //       {
  //           "id": 1,
  //           "name": "Gold Chain",
  //           "oprice": "1000.00",
  //           "dprice": "500.00",
  //           "description": "gold chain ,best for party , classic look",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/shopping.webp",
  //           "created_at": "2025-08-10T05:26:44.000Z"
  //       },
  //       {
  //           "id": 2,
  //           "name": "Ring Watch ",
  //           "oprice": "599.00",
  //           "dprice": "299.00",
  //           "description": "A Ring u will always Love to carry along time",
  //           "type": "automatic",
  //           "gender": "women",
  //           "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
  //           "created_at": "2025-08-10T08:18:20.000Z"
  //       },
  //        {
  //           "id": 1,
  //           "name": "Gold Chain",
  //           "oprice": "1000.00",
  //           "dprice": "500.00",
  //           "description": "gold chain ,best for party , classic look",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/shopping.webp",
  //           "created_at": "2025-08-10T05:26:44.000Z"
  //       },
  //       {
  //           "id": 2,
  //           "name": "Ring Watch ",
  //           "oprice": "599.00",
  //           "dprice": "299.00",
  //           "description": "A Ring u will always Love to carry along time",
  //           "type": "automatic",
  //           "gender": "women",
  //           "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
  //           "created_at": "2025-08-10T08:18:20.000Z"
  //       },
  //        {
  //           "id": 1,
  //           "name": "Gold Chain",
  //           "oprice": "1000.00",
  //           "dprice": "500.00",
  //           "description": "gold chain ,best for party , classic look",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/shopping.webp",
  //           "created_at": "2025-08-10T05:26:44.000Z"
  //       },
  //       {
  //           "id": 2,
  //           "name": "Ring Watch ",
  //           "oprice": "599.00",
  //           "dprice": "299.00",
  //           "description": "A Ring u will always Love to carry along time",
  //           "type": "automatic",
  //           "gender": "women",
  //           "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
  //           "created_at": "2025-08-10T08:18:20.000Z"
  //       },
  //       {
  //           "id": 1,
  //           "name": "Gold Chain",
  //           "oprice": "1000.00",
  //           "dprice": "500.00",
  //           "description": "gold chain ,best for party , classic look",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/shopping.webp",
  //           "created_at": "2025-08-10T05:26:44.000Z"
  //       },
  //       {
  //           "id": 2,
  //           "name": "Ring Watch ",
  //           "oprice": "599.00",
  //           "dprice": "299.00",
  //           "description": "A Ring u will always Love to carry along time",
  //           "type": "automatic",
  //           "gender": "women",
  //           "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
  //           "created_at": "2025-08-10T08:18:20.000Z"
  //       },
  //        {
  //           "id": 1,
  //           "name": "Gold Chain",
  //           "oprice": "1000.00",
  //           "dprice": "500.00",
  //           "description": "gold chain ,best for party , classic look",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/shopping.webp",
  //           "created_at": "2025-08-10T05:26:44.000Z"
  //       },
  //       {
  //           "id": 2,
  //           "name": "Ring Watch ",
  //           "oprice": "599.00",
  //           "dprice": "299.00",
  //           "description": "A Ring u will always Love to carry along time",
  //           "type": "automatic",
  //           "gender": "women",
  //           "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
  //           "created_at": "2025-08-10T08:18:20.000Z"
  //       },
  //        {
  //           "id": 1,
  //           "name": "Gold Chain",
  //           "oprice": "1000.00",
  //           "dprice": "500.00",
  //           "description": "gold chain ,best for party , classic look",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/shopping.webp",
  //           "created_at": "2025-08-10T05:26:44.000Z"
  //       },
  //       {
  //           "id": 2,
  //           "name": "Ring Watch ",
  //           "oprice": "599.00",
  //           "dprice": "299.00",
  //           "description": "A Ring u will always Love to carry along time",
  //           "type": "automatic",
  //           "gender": "women",
  //           "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
  //           "created_at": "2025-08-10T08:18:20.000Z"
  //       },
  //       {
  //           "id": 3,
  //           "name": "gold watch",
  //           "oprice": "100000.00",
  //           "dprice": "200.00",
  //           "description": "kdjgshyfgysdfkGDFyuidgW",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/Untitled.jpg",
  //           "created_at": "2025-08-13T09:43:03.000Z"
  //       },
  //       {
  //           "id": 1,
  //           "name": "Gold Chain",
  //           "oprice": "1000.00",
  //           "dprice": "500.00",
  //           "description": "gold chain ,best for party , classic look",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/shopping.webp",
  //           "created_at": "2025-08-10T05:26:44.000Z"
  //       },
  //       {
  //           "id": 2,
  //           "name": "Ring Watch ",
  //           "oprice": "599.00",
  //           "dprice": "299.00",
  //           "description": "A Ring u will always Love to carry along time",
  //           "type": "automatic",
  //           "gender": "women",
  //           "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
  //           "created_at": "2025-08-10T08:18:20.000Z"
  //       },
  //        {
  //           "id": 1,
  //           "name": "Gold Chain",
  //           "oprice": "1000.00",
  //           "dprice": "500.00",
  //           "description": "gold chain ,best for party , classic look",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/shopping.webp",
  //           "created_at": "2025-08-10T05:26:44.000Z"
  //       },
  //       {
  //           "id": 2,
  //           "name": "Ring Watch ",
  //           "oprice": "599.00",
  //           "dprice": "299.00",
  //           "description": "A Ring u will always Love to carry along time",
  //           "type": "automatic",
  //           "gender": "women",
  //           "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
  //           "created_at": "2025-08-10T08:18:20.000Z"
  //       },
  //        {
  //           "id": 1,
  //           "name": "Gold Chain",
  //           "oprice": "1000.00",
  //           "dprice": "500.00",
  //           "description": "gold chain ,best for party , classic look",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/shopping.webp",
  //           "created_at": "2025-08-10T05:26:44.000Z"
  //       },
  //       {
  //           "id": 2,
  //           "name": "Ring Watch ",
  //           "oprice": "599.00",
  //           "dprice": "299.00",
  //           "description": "A Ring u will always Love to carry along time",
  //           "type": "automatic",
  //           "gender": "women",
  //           "img": "https://nocash.cc/venu/IMG_20250806_123750.jpg",
  //           "created_at": "2025-08-10T08:18:20.000Z"
  //       },
  //       {
  //           "id": 3,
  //           "name": "gold watch",
  //           "oprice": "100000.00",
  //           "dprice": "200.00",
  //           "description": "kdjgshyfgysdfkGDFyuidgW",
  //           "type": "automatic",
  //           "gender": "men",
  //           "img": "https://nocash.cc/venu/Untitled.jpg",
  //           "created_at": "2025-08-13T09:43:03.000Z"
  //       }
  //   ]);
    const [watches,setWatches] = useState([])
  const count = watches.reduce((sum, idx) => sum + (sum.type === type && sum.gender === gender ? 1 : 0), 0);
  const total_pages = Math.ceil(count / 10);
 
   
  useEffect(() => {
    setStart(page * 10);
    console.log(count,"count",start,Number(10*(page+1)));
     window.scrollTo({ top: 200 , behavior: "smooth" });
  }, [page]);
  useEffect(() => {
    if (total_pages === 1) {
      setStart(0);
    }
  }, [total_pages]);
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
        console.log();
      },[])
      useEffect(()=>{
        console.log(watches);
        
        
      },[watches])
       const handleProduct = (id) => {
    // localStorage.setItem("product", JSON.stringify(watches[id]));
    window.location.href = `/product/item/${id}`;
  };


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
      <div className='px-[220px] mt-5 mn-w bg-[white] py-4 min-h-[220px]'>
      
      <h1 className='mb-3 capitalize'>{type} {gender} Watches</h1>
      <h3 className='mb-6'>Some lost vintage watches </h3>
    <ul className='grid gap-3 grid-cols-[repeat(4,minmax(0,1fr))] max-sm:grid-cols-2 w-max' >
       

      
        {watches.filter(watch => watch.type === type && gender === "both" ? true : watch.gender === gender).slice(start, (page + 1) * 10).map((watch,index)=>(
 <li className=' bg-[white] w-[256.36px] hover:shadow-md' key={index} onClick={()=>{handleProduct(watch.id);}}>
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
         
          {watches.length === 0 && 
      <span className=" h-[50vh] flex items-start justify-center pt-28">
        <svg aria-hidden="true" className="w-[30px] h-[30px] text-transparent animate-spin animate-duration-[.25s] rounded-full border-l-[2px] border-l-[#242424] border-[transparent] " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      </span>}
       
    
    {total_pages !== 1 && (
        <ul className="flex gap-3 justify-center items-center mt-4 cursor-pointer">
          {total_pages - page !== total_pages && (
            <li
              onClick={() => {
                setPage(page - 1);
              }}
              className="flex  items-center justify-center px-[5px] min-w-[34px] h-[34px] text-[18px] rounded-[5px] transition-all duration-[.2s] ease-linear !text-[#242424]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </li>
          )}
          {[...Array(total_pages)].map((i, index) => (
            <li key={index}>
              <span
                className={
                  page !== index
                    ? "flex  items-center justify-center px-[5px] min-w-[34px] h-[34px] font-[600] text-[14px] rounded-[5px] transition-all duration-[.2s] ease-linear text-[#242424]"
                    : " inline-flex  items-center justify-center px-[5px] min-w-[34px] h-[34px] font-[600] text-[14px] rounded-[5px] transition-all duration-[.2s] ease-linear !text-white bg-[black]"
                }
                onClick={() => {
                  setStart(index * 10);
                  setPage(index);
                  console.log(page);
                }}
              >
                {index + 1}
              </span>
            </li>
          ))}
          {total_pages - page - 1 !== 0 && total_pages > 0 && (
            <li
              onClick={() => {
                setPage(page + 1);
              }}
              className="flex  items-center justify-center px-[5px] min-w-[34px] h-[34px] text-[18px] rounded-[5px] transition-all duration-[.2s] ease-linear !text-[#242424]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </li>
          )}
        </ul>
      )}
          </div>
        
      <Footer/>
    </div>
  )
}

export default page
