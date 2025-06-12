"use client";
import React, { useState } from "react";
import QRCode from "react-qr-code";

const DashBoard = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodetext, setQrCodeText] = useState("");

  const handleChange = (e: any) => {
    setInputValue(e.target.value)
    console.log(e.target.value);
  }



  const generate = () => {
    setQrCodeText(inputValue);
  }


  return (
    <div className="flex flex-col ml-3 h-screen">
      <nav className="border-b-2 border-[#595e5a]  h-[8%] flex flex-row items-center">
        <p className="ml-[6%] text-xl">QR code Generator</p>
      </nav>
      <div className="h-screen flex flex-row gap-10 pt-10 ">
        {/* left section*/}
        <div className="flex flex-col items-end gap-3 w-[25%]">
          <div className="h-[75%] w-[75%] border rounded-xl bg-white flex flex-row justify-center items-center">
            <QRCode className="" 
              value={qrCodetext}
              // level={'H'}
              // fgColor="#0cf20d"
              // bgColor="#1c261d"
            />
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
          <h1 className="text-[30px] font-bold">Generate Your QR code</h1>
          <textarea className="w-[62%] min-h-[20%] bg-[#1C261C] border-1 border-[#3B543B] rounded-xl placeholder:p-2 p-2 placeholder:opacity-60" 
            name="message" 
            placeholder="your website or message goes here..."
            onChange={handleChange}
          />
          <button 
            className="text-neutral-950 font-bold text-3xl bg-[#0DF20D] rounded-xl w-[30%] h-12"
            onClick={generate}
          >Generate</button>
        </div>
      
      </div>
    </div>
  );
};

export default DashBoard;
