"use client";
import { React, useEffect, useState,Fragment } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "./page.css";
import { useUser } from "../context/UserContext";
import Link from "next/link";
function home() {

  const [watches, setWatches] = useState([]);
  const data = [
    {
      "id": 93,
      "title": "Brown Leather Belt Watch",
      "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
      "category": "mens-watches",
      "price": 89.99,
      "discountPercentage": 5.99,
      "rating": 4.19,
      "stock": 32,
      "tags": [
        "watches",
        "leather watches"
      ],
      "brand": "Fashion Timepieces",
      "sku": "MEN-FAS-BRO-093",
      "weight": 10,
      "dimensions": {
        "width": 16.65,
        "height": 6.15,
        "depth": 20.18
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Very unhappy with my purchase!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "James Garcia",
          "reviewerEmail": "james.garcia@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Avery Barnes",
          "reviewerEmail": "avery.barnes@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "David Martinez",
          "reviewerEmail": "david.martinez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 7,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "4027206714862",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp"
    },
    
    {
      "id": 94,
      "title": "Longines Master Collection",
      "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
      "category": "mens-watches",
      "price": 1499.99,
      "discountPercentage": 17.24,
      "rating": 3.87,
      "stock": 100,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Longines",
      "sku": "MEN-LON-LON-094",
      "weight": 4,
      "dimensions": {
        "width": 15.39,
        "height": 10.06,
        "depth": 20.32
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eli Ward",
          "reviewerEmail": "eli.ward@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Very disappointed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Owen Fisher",
          "reviewerEmail": "owen.fisher@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Nathan Reed",
          "reviewerEmail": "nathan.reed@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5984080925625",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp"
    },
    {
      "id": 95,
      "title": "Rolex Cellini Date Black Dial",
      "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
      "category": "mens-watches",
      "price": 8999.99,
      "discountPercentage": 8.88,
      "rating": 4.97,
      "stock": 40,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Rolex",
      "sku": "MEN-ROL-ROL-095",
      "weight": 2,
      "dimensions": {
        "width": 13.46,
        "height": 26.1,
        "depth": 17.9
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Not worth the price!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Owen Sullivan",
          "reviewerEmail": "owen.sullivan@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Jonathan Pierce",
          "reviewerEmail": "jonathan.pierce@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Would not buy again!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Adrian Flores",
          "reviewerEmail": "adrian.flores@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "9663455783895",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp"
    },
    {
      "id": 96,
      "title": "Rolex Cellini Moonphase",
      "description": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
      "category": "mens-watches",
      "price": 12999.99,
      "discountPercentage": 17.52,
      "rating": 2.58,
      "stock": 36,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Rolex",
      "sku": "MEN-ROL-ROL-096",
      "weight": 2,
      "dimensions": {
        "width": 26.06,
        "height": 25.19,
        "depth": 13.17
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Poor quality!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Ella Adams",
          "reviewerEmail": "ella.adams@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Leo Rivera",
          "reviewerEmail": "leo.rivera@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Emma Miller",
          "reviewerEmail": "emma.miller@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "1957304538726",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp"
    },
    {
      "id": 97,
      "title": "Rolex Datejust",
      "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
      "category": "mens-watches",
      "price": 10999.99,
      "discountPercentage": 3.73,
      "rating": 3.66,
      "stock": 86,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Rolex",
      "sku": "MEN-ROL-ROL-097",
      "weight": 4,
      "dimensions": {
        "width": 23.11,
        "height": 19.97,
        "depth": 27.04
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Alice Smith",
          "reviewerEmail": "alice.smith@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Abigail Rivera",
          "reviewerEmail": "abigail.rivera@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Waste of money!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Daniel Cook",
          "reviewerEmail": "daniel.cook@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "8893788734644",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp"
    },
    {
      "id": 98,
      "title": "Rolex Submariner Watch",
      "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
      "category": "mens-watches",
      "price": 13999.99,
      "discountPercentage": 5.05,
      "rating": 2.69,
      "stock": 55,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Rolex",
      "sku": "MEN-ROL-ROL-098",
      "weight": 4,
      "dimensions": {
        "width": 17.69,
        "height": 12.48,
        "depth": 8.75
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Luna Perez",
          "reviewerEmail": "luna.perez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Hannah Robinson",
          "reviewerEmail": "hannah.robinson@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Aaliyah Hanson",
          "reviewerEmail": "aaliyah.hanson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "7133320173118",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp"
    }
  ]
  const babu = [
    "",
      "Automatic",
      "Analog",
      "Smart",
      "Digital",
      "Hybrid",
      "Chronograph"
    ]
  const { nav } = useUser();
  const handleProduct = (id) => {
    localStorage.setItem("product", JSON.stringify(watches[id]));
    window.location.href = "/product";
  };

  const handleWatches = () => {
    console.log("wokred");

    fetch("/api/watches")
      .then((response) => response.json())
      .then((data) => setWatches(data))
      .catch((error) => {
        console.log(error, "eerred");

        console.log(error);
      });
  };
  const handleOrder = async (id) => {
    console.log(watches[id], "data");

    const username = localStorage.getItem("username");
    const requestBody = JSON.stringify({
      username: username,
      item: watches[id],
    });
    try {
      const response = await fetch("/api/addcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
        credentials: "include",
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("An unexpected error occurred");
    }
  };
  const handleUser = (index) => {
    const username = localStorage.getItem("username");
    if (username) {
      handleOrder(index);
    } else {
      alert("Login First To Order");
      fetch("/api/profile", {
        credentials: "include", // Ensures cookies are sent with the request
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log(data);
            // Set user data if authenticated
            localStorage.setItem("userEmail", data.user.email);
            localStorage.setItem("username", data.user.username);
            // Save to localStorage if needed
          } else {
            // setError('User is not authenticated');
            window.location.href = "/login";
          }
        })
        .catch((err) => {
          // setError('Error fetching profile');
          console.error(err);
        });
    }
  };
 
  useEffect(() => {
    handleWatches();
    localStorage.setItem("page", "home");
  }, []);
  return (
    <div className="div min-[768px]:mt-[83px] z-[-1]">
      <Nav />
      <div
        className={
          nav
            ? " text-[var(--text)] bg-[var(--background)] hidden"
            : " text-[var(--text)] bg-[var(--background)]"
        }
      >
        <div className="flex relative">
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
            <h1 className="text-[24px] font-bold text-[var(--background)]">
              MAKE A REEL WITH OUR WATCH & GET 50% CASHBACK
            </h1>
            <h3 className="text-[16px] text-[var(--background)]">
              STRONG IN BUILD, STYLISH IN LOOK{" "}
            </h3>
            <button className="btn bg-[transparent!important] !text-[var(--background)] border-[1px] !border-[var(--background)]">
              Shop now
            </button>
          </div>
        </div>
        <div className=" max-[768px]:p-0 max-[768px]:pt-3 min-[768px]:pt-16 bg-[white] mb-[20px] !pb-[30px]">
          <h1 className="min-[768px]:-mb-8 max-[768px]:mb-3 text-center text-[48px]">Category</h1>
          <div className="grid min-[768px]:grid-cols-[1fr_1fr_1fr] grid-cols-2  justify-items-center w-[75%] mx-auto max-[768px]:gap-5">
          {data.map((i,index)=>(
            <Fragment key={index}>
              <Link href={`/product/${babu[index+1]}/both`}>
              
            <div  className="max-[768px]:w-[8rem] flex flex-col items-center max-[768px]:gap-5 min-[768px]:rounded-full max-[768px]:rounded-[15px] bg-[white] group/cate min-[768px]:mt-[-70px] h-max">
              <img src={i.thumbnail} alt="" className="w-[15rem] transition-transform duration-500 hover:scale-150 " />
              <h1 className={`${babu[index+1] === "Chronograph" && "!text-[16px]"} mb-3 text-center max-[768px]:block hidden`}>{babu[index+1]}</h1>
            </div>
              </Link>
              <h1 className="mb-3 text-center max-[768px]:hidden">{babu[index]}</h1>
            </Fragment>
          ))}
          <h1 className="mb-3 text-center max-[768px]:hidden"></h1>
          <h1 className="mb-3 text-center max-[768px]:hidden">Chronograph</h1>

          
        </div></div>
        <div className="px-[220px] mn-w bg-[white] min-h-[400px] py-10 ">
          <span className="flex justify-between items-center">
          
          <span>
          <h1 className="mb-3">Mens Watches</h1>
          <h3 className="mb-6">Best Seller Watches</h3>
          </span>
           <Link href={`/product/bestseller/${"women"}`}>
          <div className="w-6 h-6">

          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical mb-6"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </div>
          </Link>
          </span>
         
          <div className="overflow-scroll" style={{ scrollbarWidth: "none"}}>

          <ul className="grid grid-cols-4 w-max gap-3 " >
            {watches
              .filter(
                (watch) => watch.gender === "men" && watch.type === "bestseller"
              )
              .slice(0, 4)
              .map((watch, index) => (
                <li
                  className=" bg-white w-[256.36px] hover:shadow-md"
                  key={index}
                  onClick={() => {
                    handleProduct(index);
                  }}
                >
                  <img
                    src={watch.img}
                    className="mb-3 w-[100%] object-cover h-[270px] "
                    alt=""
                  />
                  <div className="content p-[1rem]">
                    <h4 className="text-[13px]">{watch.name}</h4>
                    <small className="text-[10px] text-[var(--border)] mt-2">
                      Watch Shree
                    </small>
                    <span className="flex gap-4 items-center mt-2">
                      <h4 className="text-[13px] line-through">
                        Rs.{watch.oprice}
                      </h4>
                      <h3>Rs.{watch.dprice}</h3>
                    </span>
                    <button
                      className="btn !border-0 !bg-[var(--text)] !text-white mx-auto"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleUser(index);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </li>
              ))}
          </ul>
           {watches.filter((x)=>x.type==="bestseller" && x.gender === "men").length === 0 && 
      <span className=" h-[50vh] flex items-start justify-center pt-28">
        <svg aria-hidden="true" className="w-[30px] h-[30px] text-transparent animate-spin animate-duration-[.25s] rounded-full border-l-[2px] border-l-[#242424] border-[transparent] " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      </span>}
          </div>
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
        <div className="px-[220px] mn-w bg-[white] min-h-[400px] py-10">
         
            <span className="flex justify-between items-center">
          
          <span>
          <h1 className="mb-3">Women Watches</h1>
          <h3 className="mb-6">Best Seller Watches </h3>
          </span>
          <Link href={`/product/bestseller/${"women"}`}>
          <div className="w-6 h-6">

          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical mb-6"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </div>
          </Link>
          </span>
          <ul className="grid gap-3 grid-cols-4 max-sm:grid-cols-2  w-max">
            {watches
              .filter(
                (watch) =>
                  watch.gender === "women" && watch.type === "bestseller"
              )
              .slice(0, 5)
              .map((watch, index) => (
                <li
                  className=" bg-white w-[256.36px] hover:shadow-md"
                  key={index}
                  onClick={() => {
                    handleProduct(index);
                  }}
                >
                  <img
                    src={watch.img}
                    className="mb-3 w-[100%] object-cover h-[270px] "
                    alt=""
                  />
                  <div className="content p-[1rem]">
                    <h4 className="text-[13px]">{watch.name}</h4>
                    <small className="text-[10px] text-[var(--border)] mt-2">
                      Watch Shree
                    </small>
                    <span className="flex gap-4 items-center mt-2">
                      <h4 className="text-[13px] line-through">
                        Rs.{watch.oprice}
                      </h4>
                      <h3>Rs.{watch.dprice}</h3>
                    </span>
                    <button
                      href="#"
                      className="btn !border-0 !bg-[var(--text)] !text-white mx-auto"
                      onClick={() => {
                        handleUser(index);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </li>
              ))}
          </ul>
           {watches.filter((x)=>x.type==="bestseller" && x.gender === "women").length === 0 && 
      <span className=" h-[50vh] flex items-start justify-center pt-28">
        <svg aria-hidden="true" className="w-[30px] h-[30px] text-transparent animate-spin animate-duration-[.25s] rounded-full border-l-[2px] border-l-[#242424] border-[transparent] " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      </span>}
        </div>

        {/* <span className='flex justify-center mb-3 mt-2'>
          
          <button href="/women" className="btn m-auto">View All</button>
          </span> */}
      </div>{" "}
      <Footer />{" "}
    </div>
  );
}

export default home;
