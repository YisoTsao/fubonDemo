import React from "react";
export function Navbar({}) {
  return (
    <nav className="flex justify-between items-center text-white font-light">
      <div className="text-40px">HOTEL</div>
      <div className="hidden lg:flex text-lg">
        <div className="mx-4">About</div>
        <div className="mx-4">Service</div>
        <div className="mx-4">Rooms</div>
        <div className="mx-4">Blog</div>
        <div className="mx-4">Contact</div>
      </div>
      <button className="rounded-3xl border border-solid border-[#FFFFFF4B] h-12 w-34 md:w-42 tracking-wider">
        SIGN UP
      </button>
      <div className="flex lg:hidden w-12 h-12 items-center justify-center rounded-circle border border-solid border-[#FFFFFF4B]">
        三
      </div>
    </nav>
  );
}
