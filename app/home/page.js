"use client";
import { React, useEffect, useState, Fragment } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "./page.css";
import { useUser } from "../context/UserContext";
import Link from "next/link";
function home() {
  const [watches, setWatches] = useState([]);
  const data = [
    {
      thumbnail: "automatic.png",
    },

    {
      thumbnail:
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp",
    },
    {
      thumbnail: "smart.png",
    },
    {
      thumbnail: "digital.png",
    },
    {
      thumbnail:
        "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
    },
    {
      thumbnail: "Chronograph.png",
    },
  ];
  const babu = [
    "",
    "Automatic",
    "Analog",
    "Smart",
    "Digital",
    "Hybrid",
    "Chronograph",
  ];
  const { nav } = useUser();
  const handleProduct = (id) => {
    // localStorage.setItem("product", JSON.stringify(watches[id]));
    window.location.href = `/product/item/${id}`;
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
          <h1 className="min-[768px]:-mb-8 max-[768px]:mb-3 text-center text-[48px]">
            Category
          </h1>
          <div className="category grid min-[768px]:grid-cols-[1fr_1fr_1fr] grid-cols-2  justify-items-center w-[75%] mx-auto max-[768px]:gap-5">
            {data.map((i, index) => (
              <Fragment key={index}>
                <Link href={`/product/${babu[index + 1]}/both`}>
                  <div
                    className={`${
    ["Automatic", "Digital", "Chronograph", "Smart"].includes(babu[index + 1]) &&
    "min-[768px]:p-[1.5rem]"
  } max-[768px]:w-[8rem] max-w-[240px] flex flex-col items-center max-[768px]:gap-5  bg-[white] group/cate min-[768px]:mt-[-70px] h-max `}
                  >
                    <img
                      src={i.thumbnail}
                      alt=""
                      className="w-[15rem] transition-transform duration-500 hover:scale-150 "
                    />
                    <h1
                      className={`${
                        babu[index + 1] === "Chronograph" && "!text-[16px]"
                      } mb-3 text-center max-[768px]:block hidden`}
                    >
                      {babu[index + 1]}
                    </h1>
                  </div>
                </Link>
                <h1 className="mb-3 text-center max-[768px]:hidden">
                  {babu[index]}
                </h1>
              </Fragment>
            ))}
            <h1 className="mb-3 text-center max-[768px]:hidden"></h1>
            <h1 className="mb-3 text-center max-[768px]:hidden">Chronograph</h1>
          </div>
        </div>
        <div className="px-[220px] mn-w bg-[white] min-h-[400px] py-10 ">
          <span className="flex justify-between items-center">
            <span>
              <h1 className="mb-3">Mens Watches</h1>
              <h3 className="mb-6">Best Seller Watches</h3>
            </span>
            <Link href={`/product/bestseller/${"women"}`}>
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical mb-6"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </div>
            </Link>
          </span>

          <div className="overflow-scroll" style={{ scrollbarWidth: "none" }}>
            <ul className="grid grid-cols-4 w-max gap-3 ">
              {watches
                .filter(
                  (watch) =>
                    watch.gender === "men" && watch.type === "bestseller"
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
            {watches.filter(
              (x) => x.type === "bestseller" && x.gender === "men"
            ).length === 0 && (
              <span className=" h-[50vh] flex items-start justify-center pt-28">
                <svg
                  aria-hidden="true"
                  className="w-[30px] h-[30px] text-transparent animate-spin animate-duration-[.25s] rounded-full border-l-[2px] border-l-[#242424] border-[transparent] "
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </span>
            )}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical mb-6"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
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
          {watches.filter(
            (x) => x.type === "bestseller" && x.gender === "women"
          ).length === 0 && (
            <span className=" h-[50vh] flex items-start justify-center pt-28">
              <svg
                aria-hidden="true"
                className="w-[30px] h-[30px] text-transparent animate-spin animate-duration-[.25s] rounded-full border-l-[2px] border-l-[#242424] border-[transparent] "
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </span>
          )}
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
