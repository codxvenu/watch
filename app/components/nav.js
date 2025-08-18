"use client";
import { React, useEffect, useState } from "react";
import "./nav.css";
import { useUser } from "../context/UserContext";
function nav() {
  const [search, setSearch] = useState(false);
  const [searched, setSearched] = useState([]);
    const [ival, setIval] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const { nav, setNav } = useUser();
    const[snav,setSnav] = useState(true);
  const handleChange = (event) => {
    setIval(event.target.value); // Updates state with input value
  };
  useEffect(() => {
    if (ival.trim() === "" || ival.trim() === " ") {
      setSearched([]);
      setIval("jksgcibainiobhcjshscbakd");
    } else {
      handleSearch();
    }
  }, [ival]);
   useEffect(() => {
  function handleNav() {
    if (window.scrollY > 100) {
      console.log("false");
      
      setSnav(false);
    } else {
      setSnav(true);
       console.log("true");
      
    }
  }

  window.addEventListener("scroll", handleNav);

  // Cleanup when the component unmounts
  return () => {
    window.removeEventListener("scroll", handleNav);
  };
}, []);
  const handleProduct = (id) => {
    // localStorage.setItem("product", JSON.stringify(watches[id]));
    window.location.href = `/product/item/${id}`;
  };
  function handlePrice(price) {
  return Number(price).toLocaleString("en-IN");
}

console.log(handlePrice(1234567)); // "12,34,567" (Indian style)

  const handleSearch = async () => {
    const requestBody = JSON.stringify({
      name: ival,
    });
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
        credentials: "include",
      });

      const result = await response.json();

      if (response.ok) {
        setSearched(result);
        console.log(result);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("An unexpected error occurred");
    }
  };
  useEffect(() => {
    const page = localStorage.getItem("page");
    setCurrentPage(page);
  }, []);
  return (
    
   <>
   {search ? (
      <div className="grow-down h-screen w-screen p-4 fixed z-[10000] bg-white overflow-hidden">
      <span className="flex justify-end">
         <i
            onClick={() => {
              setSearch(false);
            }}
            
          >
            <svg
              className="w-4 cursor-pointer text-[var(--text)]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 17"
            >
              <path
                fill="var(--text)"
                d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"
              ></path>
            </svg>
          </i>
      </span>
       <div className="search-span block p-[20px] mt-[10px]">
        <label htmlFor="" className="flex gap-4 shadow-md px-2 ">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="44px"
              viewBox="0 0 15 44"
              onClick={()=>setSearch(!search)}
            >
              <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
            </svg>
           
         <input
              type="text"
              onChange={handleChange}
              name=""
              placeholder="Search..."
            />
              </label>
            <div
              className={
                   "search-h search-log  z-0  border-[whitesmoke] border-x-[1px] border-y-[1px] rounded-b-xl block"
                   }
            >
             
              <ul className="mt-5 flex flex-col gap-0 ">
                {searched.map((swatch, index) => (
                  <li
                    className="flex gap-5 p-4 text-[var(--text)]"
                    key={swatch.id}
                    onClick={() => {
                      handleProduct(swatch.id);
                    }}
                  >
                    <img className="w-10" src={swatch.img} alt="" />
                    <span className="flex flex-col gap-2">
                      
                      <h2 className="text-[18px] decoration-[none] font-medium">{swatch.name}</h2>
                    <h2 className="text-[16px] text-[#333333c3]">₹ {handlePrice(swatch.dprice)}</h2>
                      </span>
                    
                  </li>
                ))}
              </ul>{" "}
            </div>
           
            
          </div>
     </div>
   ): (
    <div className="main-nav bg-[var(--background)] z-50 ">
      <div
        className=
          {`social bg-[var(--background)] h-[38px] border-b-[0.25px] border-[#e5e7eb] ${!snav && "hidden"} flex justify-between items-center transition-all duration-200 ease-in-out`} 
           
        
      >
        <div className="social-icons flex gap-5">
          <a href="https://www.instagram.com/watch_shree?igsh=ZzY3eHZ4ZnRvY2tm">
            <svg
              aria-hidden="true"
              focusable="false"
              className="icon-size icon-instagram"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/share/1A2b6jvM87/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="icon-size"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </a>
        </div>
        <p className="text-[var(--text)] text-[13px] ml-[73px]">
          Use code "Shree25" and get free shipping on first order
        </p>
        <button className="text-[var(--text)]">
          <span className="text-[13px]">India | INR ₹</span>
        </button>
      </div>
      <nav className="border-[#e5e7eb] ">
       
       

        <img src="watch.png" className="w-16" alt="" />
       
        <ul className={nav ? "links flex" : "links  max-sm:hidden"}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/men">Men</a>
          </li>
          <li>
            <a href="/women">Women</a>
          </li>
          <li>
            <a href="/wall-clock">Wall Clocks</a>
          </li>
          {/* <li><a href="/contact">Contact</a></li> */}
        </ul>

        <ul className="icons">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="44px"
              viewBox="0 0 15 44"
              onClick={()=>setSearch(!search)}
            >
              <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
            </svg>
          {/* <a href="/login" className={search ? "max-sm:hidden" : "block"}>
            <span>
              <svg
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.144"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g clip-path="url(#clip0_15_82)">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                    <g filter="url(#filter0_d_15_82)">
                      {" "}
                      <path
                        d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <filter
                      id="filter0_d_15_82"
                      x="2.55444"
                      y="3.5"
                      width="18.8911"
                      height="19"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      {" "}
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>{" "}
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>{" "}
                      <feOffset dy="1"></feOffset>{" "}
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>{" "}
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      ></feColorMatrix>{" "}
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_82"
                      ></feBlend>{" "}
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_82"
                        result="shape"
                      ></feBlend>{" "}
                    </filter>{" "}
                    <clipPath id="clip0_15_82">
                      {" "}
                      <rect width="24" height="24" fill="white"></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
            </span>
          </a> */}
          <a href="/cart" className={search ? "max-sm:hidden" : "block"}>
            <span>
              <svg
                height="44"
                viewBox="0 0 14 44"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
              </svg>
            </span>
          </a>
           {!nav && (
          <i
            onClick={() => {
              setNav(true);
            }}
            className={search ? "max-sm:!hidden hamburger" : "block hamburger"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className="w-[17px] h-[17px] icon-size cursor-pointer text-[var(--text)]"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                fill="var(--text)"
              ></path>
            </svg>
          </i>
        )}
         {nav && (
          <i
            onClick={() => {
              setNav(false);
            }}
            
          >
            <svg
              className="icon-size cursor-pointer text-[var(--text)]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 17"
            >
              <path
                fill="var(--text)"
                d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"
              ></path>
            </svg>
          </i>
        )}
         
        </ul>
      </nav>
    </div>
   )}
   </>
  );
}

export default nav;
