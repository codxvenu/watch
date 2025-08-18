import {useEffect,useState,React} from 'react';
import "./cart-overlay.css"
import Link from 'next/link';
const CartOverlay = ({ onClose , item }) => {
    if (!item) {
      console.log(item,"item");
    }
    return (
      <div className="backdrop-blur-md w-[100%] h-screen absolute top-0">

        <div className='bg-[var(--background)] fixed max-sm:w-[100%] max-sm:right-0 w-[368px] h-[380px] main-overlay-cart text-[var(--text)] border-[var(--border)] border-x-[1px] border-b-[1px] px-[35px] py-[25px] pt-0'>
            <span className='flex items-center justify-between p-4 border-b-2 border-[var(--border)]'><i><svg className='w-[13px] h-[9.75px] icon icon-close' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9"><path fill="var(--text)" fillRule="evenodd" d="M11.35.643a.5.5 0 0 1 .006.707l-6.77 6.886a.5.5 0 0 1-.719-.006L.638 4.845a.5.5 0 1 1 .724-.69l2.872 3.011 6.41-6.517a.5.5 0 0 1 .707-.006z" clipRule="evenodd"></path></svg></i><h2>Item added to your cart</h2><i onClick={onClose}><svg className='w-[17px] h-[17px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 17"><path fill="var(--text)" d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"></path></svg></i></span>
          <span className='flex gap-4 mt-4 py-5'>
            
              <img src={item.img} className='w-[70px] h-[94px] rounded' alt="" />
            <h1 className='text-[15px]'>{item.name}</h1>
            <h1>{item.oprice}</h1>
            </span>
            <Link href="/cart">
            <button className="viewcart w-[294px] h-[45px] border-[var(--border)] border-[1px] text-[var(--text)] rounded mb-3">
                View cart
            </button>
            </Link>
          <Link href="/checkout">
            <button className="viewcart w-[294px] h-[45px] bg-[var(--text)] text-[var(--background)] rounded">
            Check out
            </button>
          </Link>
         <Link href="/">   <h5 className='underline text-[17px] text-center mt-5 cursor-pointer' >Continue Shopping</h5>
         </Link> 
        </div>
      </div>
    );
}

export default CartOverlay;
