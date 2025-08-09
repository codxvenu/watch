import {React,useEffect, useState} from 'react'
import Nav from '../components/nav'
import { application } from 'express';
import Script from "next/script";
function checkout() {
  const[cart,setCart] = useState([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    zip: "",
  });
   const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      state: e.target.value,
    }));
  };
  const handleCart = () => {
        const username = localStorage.getItem("username");
    
        if (!username) {
            console.error("Username not found in localStorage");
            return;
        }
    
        fetch(`/api/cart?username=${username}`)
            .then((response) => response.json())
            .then((data) => {
               // ✅ Logs API response
                setCart(data);  // ✅ Updates state asynchronously
            })
            .catch((error) => console.log("Fetch error:", error));
    };
    const handlePayment = async () => {
  try {
    const username = localStorage.getItem("username");

    const response = await fetch("/create-order", {
      method: "POST",
      body: JSON.stringify({
        cart: cart, // lowercase key to match backend
        formData: formValues, // lowercase key to match backend
        username
      }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Payment Creation Failed", data.error);
      return;
    }

    // Now open Razorpay Checkout
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: data.amount,
      currency: data.currency,
      name: "Your Store Name",
      description: "Test Transaction",
      order_id: data.id,
      handler: async function (paymentResult) {
        // Verify payment
        await fetch("/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order_id: data.id,
            payment_id: paymentResult.razorpay_payment_id,
            signature: paymentResult.razorpay_signature
          })
        });
      },
      prefill: {
        name: `${formValues.firstName} ${formValues.lastName}`,
        email: formValues.email,
        contact: formValues.phone
      },
      theme: { color: "#3399cc" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (err) {
    console.error("Payment error", err);
  }
};

  useEffect(()=>{
      handleCart();
  },[])
  return (
    <div>
       <Script
      src="https://checkout.razorpay.com/v1/checkout.js"
      strategy="beforeInteractive"
    />
      <Nav/>
      <div className="main-checkout-menu flex justify-center ">
      <div className="personal_details w-1/2 pt-[6rem] overflow-y-auto">
       
 <div
      className="bg-[var(--background)] text-[var(--border)] shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 border-[1px] border-[whitesmoke]"
    >
      <h1 className="mb-5 text-[18px] text-[var(--text)]">Personal Details</h1>

      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="outline-none bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="firstName"
            type="text"
            placeholder="Jane"
            value={formValues.firstName}
            onChange={handleChange}
          />
          <p className="text-red text-xs italic">Please fill out this field.</p>
        </div>

        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="outline-none bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="lastName"
            type="text"
            placeholder="Doe"
            value={formValues.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="outline-none bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="phone"
            type="text"
            placeholder="************"
            value={formValues.phone}
            onChange={handleChange}
          />
          <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>

        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="email"
            type="text"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="outline-none bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="city"
            type="text"
            placeholder="Albuquerque"
            value={formValues.city}
            onChange={handleChange}
          />
        </div>

        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="state">
            State
          </label>
          <div className="relative">
            <select
              className="bg-transparent block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              id="state"
              value={formValues.state}
              onChange={handleSelectChange}
            >
              <option value="">Select state</option>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none pin-y pin-r flex items-center px-2 text-grey-darker absolute top-[40%] left-[80%]">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="zip">
            Zip
          </label>
          <input
            className="outline-none bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="zip"
            type="text"
            placeholder="90210"
            value={formValues.zip}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="payment-method">
        <h1 className="mt-2 text-[18px] text-[var(--text)]"> Payment</h1>
        <small className="text-[var(--border)]">All transactions are secure and encrypted.</small>
        <div className="border-[1px] border-[#E5E7EB] rounded">
          <span className="border-[2px] flex mb-2 p-4">
            <h1 className="flex gap-2">
              Razorpay Secure (UPI, Cards, Wallets, NetBanking)
              <div className="flex">
                <img alt="upi" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/upi.CmgCfll8.svg" role="img" width="38" height="24" />
                <img alt="visa" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg" role="img" width="38" height="24" />
                <img alt="master" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg" role="img" width="38" height="24" />
                <div>
                  <img alt="netbanking" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/netbanking.C9e9yzjv.svg" role="img" width="38" height="24" />
                </div>
              </div>
            </h1>
          </span>
          <i className="flex justify-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" className="w-[163px]">
              <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path>
              <circle cx="-227.8" cy="361.9" r="1.8" fill="var(--text)"></circle>
              <circle cx="-222.2" cy="361.9" r="1.8" fill="var(--text)"></circle>
              <circle cx="-216.6" cy="361.9" r="1.8" fill="var(--text)"></circle>
              <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path>
            </svg>
          </i>
          <p className="w-[58%] text-center m-auto mt-5 mb-4">
            After clicking “Pay now”, you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely.
          </p>
        </div>
        <button className="paynow bg-blue-400 text-[18px] font-extrabold text-white py-2 mt-9 rounded w-[100%]" onClick={()=>handlePayment}>
          Pay Now
        </button>
      </div>
    </div>

</div>
</div>
      </div>

  )
}

export default checkout
