"use client";

import React from "react";

export default function FaqHelpSection() {
  return (
    <section 
      className="w-full h-[281px] flex flex-col items-center pt-12 px-6"
      style={{ background: "linear-gradient(79deg, #d1fae5 0%, #a7f3d0 100%)" }}
    >
      <h2 
        className="text-[#2D5A3D] text-3xl font-bold leading-10"
        style={{ fontFamily: "Segoe UI" }}
      >
        Still Need Help?
      </h2>
      <p 
        className="text-[#1A1A1A] text-base font-normal leading-6 mt-[18px] text-center"
        style={{ fontFamily: "Segoe UI" }}
      >
        If you haven't found your answer above, we're here to assist you.
      </p>
      
      <button 
        className="w-72 md:w-56 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold outline outline-1 outline-offset-[-1px] outline-green-800 mt-[39px] hover:opacity-90 transition-opacity"
        style={{ 
          fontFamily: "Arial",
          background: "linear-gradient(114deg, #228B22 0%, #2D5A3D 50%, #D4A574 100%)" 
        }}
      >
        I Still Need Help
      </button>
    </section>
  );
}
