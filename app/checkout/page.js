import React from 'react'
import Nav from '../components/nav'
function checkout() {
  return (
    <div>
      <Nav/>
      <div className="main-checkout-menu grid grid-cols-2">

     
      <div className="personal_details pl-[159px] overflow-y-auto">
       
<div className="bg-[var(--background)] text-[#ffffffbf] shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 border-r-[0.25px] border-[#121212]">
<h1 className='mb-5 text-[18px] text-[var(--text)]' >Personal Details</h1>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
        Password
      </label>
      <input className="bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="************"/>
      <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
   
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
       Email
      </label>
      <input className="bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-email" type="text" placeholder="Email"/>
    </div>
  </div>

  <div className="-mx-3 md:flex mb-2">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
        City
      </label>
      <input className="bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
        State
      </label>
      <div className="relative">
        <select className=" bg-transparent block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
        Zip
      </label>
      <input className=" bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-full px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-phone">
        Phone
      </label>
      <input className="bg-transparent appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-phone" type="text" placeholder="xxxxxxxxx"/>
       </div>
  </div>
  <div className="payment-method">
  
  <h1 className='mt-2 text-[18px] text-[var(--text)]'> Payment</h1>
  <small className='text-[#ffffffbf]'>All transactions are secure and encrypted.</small>
  <div className='border-[1px] border-[#ffffffbf] border-t-[#5f91ed] rounded'>
    <span className='border-[2px] border-[#5f91ed] flex mb-2 p-4'>

    <h1 className='flex gap-2'>Razorpay Secure (UPI, Cards, Wallets, NetBanking) <div className="flex"><img alt="upi" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/upi.CmgCfll8.svg" role="img" width="38" height="24" /><img alt="visa" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg" role="img" width="38" height="24" /><img alt="master" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg" role="img" width="38" height="24" /><div ><img alt="netbanking" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/netbanking.C9e9yzjv.svg" role="img" width="38" height="24" /></div></div></h1>
    </span>
    <i className='flex justify-center mt-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" className="w-[163px] "><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path><circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle><circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle><circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path></svg></i>
    <p className='w-[58%] text-center m-auto mt-5 mb-4'>After clicking “Pay now”, you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely.</p>
  </div>
  <button className="paynow bg-blue-400 text-[18px] font-extrabold  py-2 mt-9 rounded w-[100%]">
    Pay Now
  </button>
  </div>
</div> 

</div>


<div className='bg-[#0b0a0a] p-[38px] text-[var(--text)] sticky'> 
    <span className='mt-5 flex text-[var(--text)] gap-4 items-center w-[410px]' >

    <img className='w-[64px] rounded' src="https://www.punkstore.in/cdn/shop/files/A2644816-EC12-48CD-9F9B-02B9FA0CC0E2.jpg?v=1738213874&width=600" alt="" />
    <h1 className='text-[17px]'>Tissot punk green</h1> <small className='ml-auto text-[18px]'>
    ₹8,100.00</small>
    </span>
    <span className='mt-5 flex text-[var(--text)] gap-4 items-center w-[410px]' >

    <img className='w-[64px] rounded' src="https://www.punkstore.in/cdn/shop/files/A2644816-EC12-48CD-9F9B-02B9FA0CC0E2.jpg?v=1738213874&width=600" alt="" />
    <h1 className='text-[17px]'>Tissot punk green</h1> <small className='ml-auto text-[18px]'>
    ₹8,100.00</small>
    </span>
    <span className='mt-5 flex text-[var(--text)] gap-4 items-center w-[410px]' >

    <img className='w-[64px] rounded' src="https://www.punkstore.in/cdn/shop/files/A2644816-EC12-48CD-9F9B-02B9FA0CC0E2.jpg?v=1738213874&width=600" alt="" />
    <h1 className='text-[17px]'>Tissot punk green</h1> <small className='ml-auto text-[18px]'>
    ₹8,100.00</small>
    </span>
    <span className='mt-5 flex gap-5 mb-5'>

   <input type="text" placeholder='Discount Code'  className='w-[320px] rounded bg-transparent border-[1px] text-[#ffffffbf] p-2'/>
   <button className="apply rounded bg-[#3885ff] py-3 px-5">Apply</button>
    </span>
    <div className="context-checkout grid grid-cols-2 grid-rows-4">
        <h1 className='text-[17px] font-bold'>Subtotal · 5 items</h1>
        <h1 className='text-[17px] font-bold'>₹22,700.00</h1>
        <h2 className='text-[17px] font-bold'>Shipping</h2>
        <h2 className='text-[17px] font-bold text-[#ffffffbf]'>Enter shipping address</h2>
        <h3 className='text-[22px] font-extrabold'>Total</h3>
        <h3 className='font-extrabold text-[22px]'><span className='font-normal text-[14px] text-[#ffffffbf]'>INR</span>
₹22,700.00

</h3>
<small className='text-[15px] font-bold text-[#ffffffbf]'>Including ₹538.10 in taxes</small>
    </div>
    </div>
</div>
      </div>

  )
}

export default checkout
