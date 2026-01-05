import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-[#030a2b] w-full h-16 flex items-center justify-between px-6 py-2">
      <div className=" w-44">
        <Image
          src="/logoNav.png"
          alt="logo"
          width={150}
          height={20}
          className=""
        />
      </div>
      <div className="">
        <button className="btn px-6 py-2">login</button>
      </div>
    </nav>
  );
}

export default Navbar;
