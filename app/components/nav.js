"use client"
import {React,useEffect,useState} from 'react'
import './nav.css';
import { useUser } from "../context/UserContext";
function nav() {
  const [search,setSearch] = useState(false)
  const [searched , setSearched] = useState([])
  const [ival ,setIval] = useState("")
  const [currentPage,setCurrentPage] = useState("")
  const {nav, setNav} = useUser();

  const handleChange = (event) => {
    setIval(event.target.value); // Updates state with input value
  };
  useEffect(() =>{
    if(ival.trim() === "" || ival.trim()=== " "){
      setSearched([])
      setIval("jksgcibainiobhcjshscbakd")
    }else{
      handleSearch()
    }
     
  },[ival])
  const handleProduct = (id)=>{
    console.log(searched[id]);
    
    localStorage.setItem('product',JSON.stringify(searched[id]))
    window.location.href = "/product";
  }
  const handleSearch = async ()=>{
    const requestBody = JSON.stringify({ 
      name : ival })
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
        credentials: 'include'
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSearched(result)
        console.log(result);
        
      } else {
        alert(result.message);
      }
    } catch (error) {
        alert('An unexpected error occurred');
    }
  };  
  useEffect(()=>{
    const page = localStorage.getItem('page');
    setCurrentPage(page);
  },[])
 return (
    <div className="main-nav bg-[var(--background)] z-50 ">
        <div className={nav? "social bg-[var(--background)] h-[38px] border-b-[0.25px] border-b-[#ffffff14] flex justify-between items-center":"social bg-[var(--background)] h-[38px] border-b-[0.25px] border-b-[#ffffff14] lg:flex max-sm:hidden justify-between items-center"} >
            <div className="social-icons flex gap-5">
                
            <a href="https://www.instagram.com/watch_shree?igsh=ZzY3eHZ4ZnRvY2tm"><svg aria-hidden="true" focusable="false" className="icon icon-instagram" viewBox="0 0 20 20"><path  fillRule="evenodd" d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z" clipRule="evenodd"></path></svg></a>
            <a href="https://www.facebook.com/share/1A2b6jvM87/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
            </div>
            <p className='text-[var(--text)] text-[13px] m-l-[110px]'>Use code "Shree25" and get free shipping on first order</p>
            <button className='text-[var(--border)]  '><span className='text-[13px]'>India | INR ₹</span></button>
        </div>
      <nav className='border-b-[#ffffff14] border-b-[0.25px]'>
        {nav && (

      <i onClick={()=>{setNav(false)}}><svg className='w-[17px] h-[17px] absolute left-7 top-7 cursor-pointer text-[var(--text)]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 17"><path fill="var(--text)" d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"></path></svg></i>
        )}
      {!nav && (

      <i onClick={()=>{setNav(true)}} className="hamburger"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="w-[17px] h-[17px] absolute left-7 top-7 cursor-pointer text-[var(--text)]" fill="none" viewBox="0 0 18 16">
  <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="var(--text)">
</path></svg></i>
      )} 
       
        <ul className={nav? "links flex":"links  max-sm:hidden"}>
          <li ><a href="/home">Home</a></li>
          <li ><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/wall-clock">Wall Clocks</a></li>
          {/* <li><a href="/contact">Contact</a></li> */}
        </ul>
        <h1 >Watch Shree</h1>
       
        <ul className="icons">
            <span className='search-span'>
              <input type="text"  onChange={
                
                handleChange
                } className={ search ? "search-hovers search-hover z-10 max-sm:!w-[90px]":"search-hover z-10 "} name="" placeholder="Search..." />
              <div className={ search && searched.length > 0 ? "search-h search-log bg-[#131313] w-[12.4rem] fixed top-[5rem] right-[17.7rem] z-0  border-[whitesmoke] border-x-[1px] border-y-[1px] rounded-b-xl block"  : " bg-[#131313] w-[12.4rem] fixed top-[5rem] right-[17.7rem] z-0  border-[whitesmoke] border-x-[1px] border-y-[1px] rounded-b-xl hidden search-log"}>
                <ul className="mt-5 flex flex-col gap-0 ">
{searched.map((swatch,index)=>(


    <li className="flex gap-5 p-4 " key={swatch.id} onClick={()=>{handleProduct(index)}}>

   
                <h2 className="text-sm">{swatch.name}</h2>
                <img className="w-10" src={swatch.img} alt="" />
             
                </li>
                ))}
                 </ul> </div>
              <svg id="search-i" className={search ? "max-sm:!ml-[-20px] ml-[-30px] z-10 " : "ml-[-30px] z-10" } onClick={()=>{search===false ?setSearch(true):setSearch(false)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </span>
            <a href="/login" className={search ? "max-sm:hidden":"block" }><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg></span>
            </a><a href="/cart" className={search ? "max-sm:hidden":"block"}><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg></span></a>
        </ul>
      </nav>
    </div>
  )
}

export default nav
