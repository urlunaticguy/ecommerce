import React from "react";

function ProductCard() {
  return (
    <div className=" w-[50%] flex flex-col items-center justify-evenly px-12">
      <div className=" flex flex-col w-full">
        <h1 className=" text-[32px]">Airpods Pro</h1>
        <h2 className=" text-[14px] text-slate-600">Immerse yourself in wireless audio bliss with AirPods Pro, the ultimate companion for your musical journey.</h2>
        <div>⭐⭐⭐⭐⭐ (123)</div>
      </div>
      <div className=" flex flex-col w-full">
        <h2 className=" text-[24px]">$299 or $15/month</h2>
        <h2 className=" text-[12px] text-slate-600">Suggested Payments is of 24 months financing</h2>
      </div>
      <div className=" flex flex-row gap-8 w-full">
        <button className=" w-[200px] bg-slate-800 hover:bg-slate-900 hover:font-semibold cursor-pointer text-white text-[20px] rounded-full px-4 py-2 ">Buy Now</button>
        <button className=" w-[200px] border-2 border-black hover:bg-slate-100 hover:font-semibold cursor-pointer text-black text-[20px] rounded-full px-4 py-2 ">Add to Cart</button>
      </div>
      <div className=" w-full flex flex-col gap-3">
        <div className=" flex flex-row gap-4">
          <svg className=" w-[24px] fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
          </svg>
          <div>
            <h2 className=" text-[14px]">Free delivery</h2>
            <h3 className=" text-[12px]">Pan India shipping at no extra cost.</h3>
          </div>
        </div>
        <div className=" flex flex-row gap-4">
          <svg className=" w-[24px] fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/>
          </svg>
          <div>
            <h2 className=" text-[14px]">Return delivery</h2>
            <h3 className=" text-[12px]">Free 30 days return policy.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
