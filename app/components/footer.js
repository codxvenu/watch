import React from "react";
import './footer.css'
import { useUser } from "../context/UserContext";
function footer() {
  const { nav } = useUser();
  return (
    <div className={nav? "bg-[#121212] text-[#ffffffbf] hidden mt-[35px];" :"bg-[#121212] text-[#ffffffbf] mt-[35px]"}>
      <div className="content max-sm:mt-[40px] text-center">
        <h1>Why Buy in USD when you can buy in rupees !</h1>
        <h2 className="my-5">"AVAIL ONE TIME FREE REPAIRING FOR WATCHES"</h2>
        <p>
          All the vibes we bring you at watch shree store. No more searching in USD
          when you can have it in your Rupees.
        </p>
        <span className="flex flex-col items-center">

        <small className="my-2 uppercase mt-5">Watch Shree</small>
       
        <button href="#" className="btn">
          Shop Now
        </button>
        </span>
      </div>
      <div className="qna mt-16 mb-7 text-center">
        <h1 className="mb-5">QUESTIONS & ANSWERS</h1>
        <div className="w-[750px] m-auto q-a">
        <details className="question py-[15px] border-b border-t border-[#ffffff14]">

<summary className="flex items-center"><svg className="icon icon-accordion mr-3" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M0 3.75156C0 3.47454 0.224196 3.24997 0.500755 3.24997H10.647C10.9235 3.24997 11.1477 3.47454 11.1477 3.75156V5.07505V5.63362V6.10938V13.6616C10.9427 14.0067 10.8813 14.1101 10.5516 14.6648L7.22339 14.6646V13.6614H10.1462V4.25316H1.00151V13.6614H2.6842V14.6646H0.500755C0.224196 14.6646 0 14.44 0 14.163V3.75156Z"></path>
      <path d="M18.9985 8.08376L11.1477 6.10938V5.07505L19.6212 7.20603C19.8439 7.26203 20 7.46255 20 7.69253V14.1631C20 14.4401 19.7758 14.6647 19.4992 14.6647H17.3071V13.6615H18.9985V8.08376ZM11.1477 13.6616L13.3442 13.6615L13.3443 14.6647L10.5516 14.6648L11.1477 13.6616Z"></path>
      <path d="M7.71269 14.1854C7.71269 15.6018 6.56643 16.75 5.15245 16.75C3.73847 16.75 2.59221 15.6018 2.59221 14.1854C2.59221 12.7691 3.73847 11.6209 5.15245 11.6209C6.56643 11.6209 7.71269 12.7691 7.71269 14.1854ZM5.15245 15.7468C6.01331 15.7468 6.71118 15.0478 6.71118 14.1854C6.71118 13.3231 6.01331 12.6241 5.15245 12.6241C4.29159 12.6241 3.59372 13.3231 3.59372 14.1854C3.59372 15.0478 4.29159 15.7468 5.15245 15.7468Z"></path>
      <path d="M17.5196 14.1854C17.5196 15.6018 16.3733 16.75 14.9593 16.75C13.5454 16.75 12.3991 15.6018 12.3991 14.1854C12.3991 12.7691 13.5454 11.6209 14.9593 11.6209C16.3733 11.6209 17.5196 12.7691 17.5196 14.1854ZM14.9593 15.7468C15.8202 15.7468 16.5181 15.0478 16.5181 14.1854C16.5181 13.3231 15.8202 12.6241 14.9593 12.6241C14.0985 12.6241 13.4006 13.3231 13.4006 14.1854C13.4006 15.0478 14.0985 15.7468 14.9593 15.7468Z"></path></svg>HOW MUCH DOES IT TAKE MY ORDER TO ARRIVE ? 
  <button className="ml-auto">
    <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
    </svg>
  </button>
</summary>

<div className="mt-4 leading-normal text-md ">Shipping times vary depending on your location and shipping method selected during checkout. Standard shipping typically takes 5-7 business days, while we ship your order with in a week.</div>
</details>
        <details className="question py-[15px] border-b border-[#ffffff14]">

<summary className="flex items-center"><svg className="icon icon-accordion mr-3" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M10.7058 0.549946C11.0066 0.550342 11.3069 0.550737 11.5727 0.54775C12.6717 0.535401 13.4169 1.32825 13.7106 1.83393L15.3904 4.63773L16.1669 4.22927C16.3476 4.13421 16.5679 4.15856 16.7235 4.29078C16.879 4.42299 16.9386 4.63651 16.8739 4.83016L15.5307 8.85205C15.45 9.09376 15.2004 9.23609 14.9512 9.18246L10.5904 8.24369C10.3905 8.20066 10.2369 8.04021 10.2027 7.8386C10.1684 7.63698 10.2604 7.43484 10.4349 7.32822L11.3466 6.77121L10.491 5.35356L9.16947 7.63949C9.0331 7.87537 8.73297 7.95865 8.49456 7.82675L5.46517 6.15084C5.34568 6.08474 5.25843 5.97265 5.22367 5.8406C5.18892 5.70854 5.20968 5.56802 5.28114 5.45166C5.75753 4.67599 6.64634 3.14684 7.2264 2.14351C7.52092 1.63407 7.80943 1.26638 8.12347 1.01328C8.44922 0.750745 8.77858 0.630664 9.11576 0.579998C9.12637 0.578405 9.13702 0.577153 9.14771 0.576245C9.4761 0.548329 10.0919 0.549139 10.7058 0.549946ZM10.925 4.13746L12.4598 6.68024C12.6019 6.91575 12.5271 7.22186 12.2924 7.36528L12.0238 7.52936L14.724 8.11064L15.5313 5.69358L15.4374 5.74295C15.2026 5.8665 14.9121 5.78506 14.7757 5.55742L12.8469 2.33802C12.6459 1.99038 12.1756 1.54104 11.584 1.54769C11.2714 1.5512 10.9415 1.55066 10.6262 1.55014C10.059 1.54921 9.53863 1.54836 9.24893 1.5713C9.06973 1.60012 8.91602 1.65888 8.75098 1.79189C8.72575 1.81222 8.69986 1.83462 8.67329 1.85932C9.41082 2.17381 10.3422 2.86027 10.925 4.13746ZM8.06135 2.69724C7.58009 3.52944 6.89514 4.70818 6.40422 5.52752L8.5493 6.71421L9.91606 4.35001C9.36655 3.30179 8.53989 2.84656 8.06135 2.69724Z"></path>
      <path d="M18.8984 16.3552C18.7447 16.6138 18.5913 16.872 18.4584 17.1022C17.909 18.0541 16.847 18.2912 16.2622 18.2861L12.9938 18.3026L12.9496 19.1788C12.9393 19.3827 12.806 19.5598 12.613 19.6263C12.4199 19.6928 12.2059 19.6352 12.0722 19.4809L9.29638 16.2755C9.12955 16.0828 9.1343 15.7955 9.30742 15.6085L12.3375 12.3349C12.4764 12.1848 12.6927 12.1345 12.8837 12.2078C13.0746 12.2811 13.2016 12.4632 13.2044 12.6677L13.219 13.736L14.8748 13.7223L13.5815 11.4203C13.4481 11.1827 13.5294 10.8821 13.7644 10.7442L16.7502 8.99179C16.8679 8.92267 17.0089 8.90473 17.1402 8.94212C17.2715 8.97951 17.3818 9.06899 17.4455 9.18978C17.8701 9.99496 18.7328 11.539 19.3005 12.5494C19.5887 13.0624 19.758 13.498 19.8157 13.8972C19.8756 14.3113 19.8111 14.6559 19.6828 14.9718C19.6788 14.9817 19.6745 14.9916 19.6698 15.0012C19.5264 15.298 19.2119 15.8274 18.8984 16.3552ZM15.7 14.7155L12.73 14.7401C12.455 14.7424 12.2297 14.522 12.2259 14.247L12.2216 13.9323L10.3454 15.9593L12.0136 17.8856L12.019 17.7797C12.0324 17.5147 12.2505 17.3063 12.5158 17.3049L16.2688 17.2861C16.6703 17.2904 17.2966 17.1147 17.5924 16.6023C17.7487 16.3315 17.9172 16.048 18.0784 15.7769C18.3682 15.2895 18.6342 14.8421 18.7621 14.5812C18.8286 14.4123 18.8564 14.2501 18.826 14.0403C18.8214 14.0083 18.8153 13.9746 18.8076 13.9391C18.1612 14.4134 17.0959 14.8649 15.7 14.7155ZM18.3985 12.9856C17.9278 12.1474 17.2627 10.9574 16.8079 10.1174L14.6937 11.3582L16.0313 13.7391C17.2132 13.8005 18.0262 13.3212 18.3985 12.9856Z"></path>
      <path d="M1.15621 15.7354C1.00906 15.473 0.862139 15.2111 0.729208 14.9809C0.179617 14.0291 0.505229 12.9909 0.801973 12.487L2.42199 9.6482L1.68529 9.17176C1.51385 9.06089 1.42705 8.85692 1.466 8.65651C1.50496 8.4561 1.66185 8.2995 1.86233 8.26092L6.0262 7.45965C6.27645 7.4115 6.52288 7.55926 6.59829 7.80269L7.91826 12.0636C7.97877 12.259 7.91423 12.4715 7.7553 12.6002C7.59636 12.7289 7.37508 12.7478 7.1966 12.648L6.26413 12.1265L5.4481 13.5673L8.08835 13.5983C8.3608 13.6015 8.58054 13.8222 8.58248 14.0947L8.60717 17.5567C8.60815 17.6932 8.55323 17.8242 8.45518 17.9193C8.35714 18.0143 8.22448 18.0651 8.08803 18.0599C7.17842 18.025 5.4099 18.0001 4.25104 17.9865C3.66263 17.9796 3.20071 17.9084 2.82615 17.7588C2.43762 17.6036 2.17147 17.3755 1.96199 17.1064C1.9554 17.098 1.94909 17.0893 1.94306 17.0804C1.75771 16.8079 1.45648 16.2708 1.15621 15.7354ZM4.1754 13.7853L5.63906 11.201C5.77463 10.9616 6.07809 10.8767 6.31818 11.011L6.59287 11.1646L5.77555 8.52624L3.27316 9.00778L3.36221 9.06537C3.58504 9.20948 3.65648 9.50256 3.52495 9.73304L1.66481 12.9926C1.46034 13.3382 1.29934 13.9685 1.59519 14.4808C1.75154 14.7515 1.91278 15.0392 2.06695 15.3144C2.34421 15.8091 2.59863 16.2631 2.76066 16.5043C2.87365 16.6464 3.00022 16.7515 3.19707 16.8302C3.22716 16.8422 3.25937 16.8538 3.29393 16.8648C3.20641 16.0678 3.34805 14.9195 4.1754 13.7853ZM4.32426 16.9873C5.28553 16.9987 6.6487 17.0177 7.60349 17.0439L7.586 14.5925L4.85535 14.5605C4.2112 15.5533 4.21977 16.497 4.32426 16.9873Z"></path></svg>WHAT IS YOUR RETURN POLICY ?
  <button className="ml-auto">
    <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
    </svg>
  </button>
</summary>

<div className="mt-4 leading-normal text-md ">we only accept return in case of damaged item. once accepted we initiate the refund with in 3 to 5 days.</div>
</details>
        <details className="question py-[15px] border-b border-[#ffffff14]">

<summary className="flex items-center"><svg className="icon icon-accordion mr-3" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M1.16154 11.8423L8.09186 18.829C8.28991 19.0287 8.61108 19.0284 8.80882 18.8285L18.839 8.68572C18.9337 8.58998 18.9868 8.46032 18.9868 8.32514V1.53212C18.9868 1.25006 18.76 1.02141 18.4802 1.02141L11.387 1.02147C11.2527 1.02147 11.1238 1.07529 11.0288 1.17108L1.16151 11.1201C0.963704 11.3195 0.963715 11.6428 1.16154 11.8423ZM20 1.53212C20 0.685947 19.3196 -6.58649e-06 18.4802 0L11.387 5.82026e-05C10.9839 6.15389e-05 10.5973 0.161509 10.3123 0.448879L0.445049 10.3979C-0.148378 10.9962 -0.148346 11.9662 0.445123 12.5645L7.37544 19.5513C7.96958 20.1502 8.9331 20.1495 9.52633 19.5496L19.5565 9.40686C19.8405 9.11967 20 8.73068 20 8.32514V1.53212Z" fillRule="evenodd"></path>
<path d="M15.9028 8.22958C14.7801 9.36148 12.9597 9.36148 11.837 8.22958C10.7142 7.09769 10.7142 5.26253 11.837 4.13064C12.9597 2.99875 14.7801 2.99875 15.9028 4.13064C17.0256 5.26253 17.0256 7.09769 15.9028 8.22958ZM12.5534 7.50734C13.2805 8.24034 14.4593 8.24034 15.1864 7.50734C15.9135 6.77433 15.9135 5.58589 15.1864 4.85289C14.4593 4.11988 13.2805 4.11988 12.5534 4.85289C11.8263 5.58589 11.8263 6.77433 12.5534 7.50734Z"></path></svg>HOW MUCH YOU CHARGE FOR CUSTOMISE A WATCH? 
  <button className="ml-auto">
    <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
    </svg>
  </button>
</summary>

<div className="mt-4 leading-normal text-md ">you will have to send us a picture of your watch through our page, we will catch up with you. usually it cost between 1000 to 2000 rs.</div>
</details>
        <details className="question py-[15px] border-b border-[#ffffff14]">

<summary className="flex items-center"><svg className="icon icon-accordion mr-3" fill="white" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M9.56285 11.959C9.36021 11.959 9.19593 11.7947 9.19593 11.5921V11.4654C9.19266 10.9745 9.27959 10.5556 9.51194 10.162C9.73885 9.77751 10.0875 9.44653 10.5519 9.09905C10.9668 8.78804 11.2183 8.53255 11.3688 8.28844C11.5132 8.05415 11.577 7.80994 11.577 7.49433V7.48101C11.577 6.58737 10.9199 5.94963 10.0093 5.94963C9.14693 5.94963 8.48176 6.556 8.39691 7.55858C8.38999 7.64041 8.35581 7.71754 8.29986 7.77765L8.29366 7.78431C8.22548 7.85755 8.13034 7.89977 8.03028 7.90119L7.55903 7.90785C7.43278 7.90963 7.31449 7.84638 7.24586 7.7404C7.19061 7.65507 7.1738 7.55171 7.19715 7.45492C7.30916 5.93601 8.41577 4.74287 10.0217 4.74287C11.6246 4.74287 12.8131 5.91906 12.8131 7.46103V7.47435C12.8131 7.98614 12.6995 8.4388 12.4473 8.86135C12.199 9.27731 11.8283 9.64397 11.3455 10.0059L11.3431 10.0077C10.929 10.313 10.7058 10.5344 10.5791 10.746C10.4596 10.9455 10.4072 11.1677 10.4072 11.5174V11.5921C10.4072 11.7947 10.2429 11.959 10.0403 11.959H9.56285ZM10.7049 14.3815C10.7049 14.8554 10.3695 15.2613 9.86668 15.2613C9.36996 15.2613 9.02231 14.862 9.02231 14.3815C9.02231 13.9045 9.37305 13.5084 9.86668 13.5084C10.3665 13.5084 10.7049 13.911 10.7049 14.3815Z"></path>
<path d="M18.5 10C18.5 14.6944 14.6944 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5 10C1.5 5.30558 5.30558 1.5 10 1.5C14.6944 1.5 18.5 5.30558 18.5 10ZM10 17.4967C14.1403 17.4967 17.4967 14.1403 17.4967 10C17.4967 5.85971 14.1403 2.50335 10 2.50335C5.85971 2.50335 2.50335 5.85971 2.50335 10C2.50335 14.1403 5.85971 17.4967 10 17.4967Z"></path></svg>DOES ALL WATCHES COMES WITH WARRANTY?
  <button className="ml-auto">
    <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
    </svg>
  </button>
</summary>

<div className="mt-4 leading-normal text-md ">we always purchase an original piece from a authorized seller and all watches comes with regulated warranty. But don't forget a watch can be fixed from anywhere from its bottom hatch.</div>
</details>
        </div>
        <div className="foot flex gap-4 items-center justify-center mt-5">
          <a href="">Search</a>
          <a href="">privacy policy </a>
          <a href="">Refund and cancellation </a>
          <a href="">Return & shipping </a>
          <a href="">policy Terms & Conditions </a>
          <a href="">About us</a>
        </div>
        <div className="social-icons flex gap-5 justify-center mt-5">
                
                <a href="https://www.instagram.com/watch_shree?igsh=ZzY3eHZ4ZnRvY2tm"><svg aria-hidden="true" focusable="false" className="icon icon-instagram" viewBox="0 0 20 20"><path fill="white" fillRule="evenodd" d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z" clipRule="evenodd"></path></svg></a>
                <a href="https://www.facebook.com/share/1A2b6jvM87/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
                </div>
      </div>
      <div className="end border-t-[0.25px] border-t-[#ffffff14]">
      
      <button className='text-[#ffffffbf] flex flex-col  '><span className="mb-3">Country/region</span><span className='text-[13px] border border-white p-3'>India | INR ₹</span></button>
      <span>© 2025, Watch Shree Store Powered by Codx Venu</span>
      </div>
    </div>
  );
}

export default footer;
