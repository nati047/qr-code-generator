"use client";
import React from "react";

const DashBoard = () => {
  return (
    <div className="flex flex-col ml-3 h-screen">
      <nav className="border-2 border-white  h-[7%]">
        <h1># QR code Generator</h1>
      </nav>
      <div className="h-screen flex flex-row gap-10 pt-3 border border-amber-600">
        {/* left section*/}
        <div className="flex flex-col items-end gap-3 w-[25%]">
          <div className="h-[60%] w-[75%] border rounded-xl bg-amber-50">
            <img className=" object-contain h-[100%]" src="/qr-code.png" alt="" />
          </div>
          <div className="flex flex-row gap-5 justify-center w-[75%] h-[5%] ">
            <button className="bg-[#293829] w-[30%] h-[100%] rounded-lg">PNG</button>
            <button className="bg-[#293829] w-[30%] h-[100%] rounded-lg">JPG</button>
            <button className="bg-[#293829] w-[30%] h-[100%] rounded-lg">SVG</button>
          </div>
          <button className="font-bold text-lg bg-[#293829] w-[75%] h-[40px] rounded-lg ">Download</button>
        </div>

        {/* right section */}
        <div className="flex flex-col gap-6 w-[50%]">
          <h1 className="text-[30px]">Generate Your QR code</h1>
          <textarea className="w-[62%] min-h-[20%] bg-[#1C261C] border-1 border-[#3B543B] rounded-xl" name="message" placeholder=""></textarea>
          <button className="text-neutral-950 font-bold text-3xl bg-[#0DF20D] rounded-xl w-[30%] h-12">Generate</button>
        </div>
      
      </div>
    </div>
  );
};

export default DashBoard;
