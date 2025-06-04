"use client";
import React from "react";

const DashBoard = () => {
  return (
    <div className="flex flex-col ml-3">
      <nav className="border border-green-500">
        <h1># QR code Generator</h1>
      </nav>
      <div className="h-screen flex flex-row gap-10 mt-10 border border-amber-600">
        <div className="flex flex-col items-center gap-10 w-[25%]">
          <div className="border bg-pink-300/25 h-[60%] w-[80%]">Code Display</div>
          <div className="flex flex-row gap-20 justify-center w-[100%] border border-red-300">
            <div>PNG</div>
            <div>JPG</div>
            <div>SVG</div>
          </div>
          <button className="bg-blue-400 w-[50%] h-[40px] rounded-lg">Download</button>
        </div>
        <div className="flex flex-col gap-3">
          <h1>Generate Your QR code</h1>
          <textarea name="message" placeholder="Enter your message here..."></textarea>
          <button className="border bg-green-700">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
