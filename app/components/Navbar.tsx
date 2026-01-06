import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-[#030a2b] lg:flex lg:justify-center ">
      <div className=" lg:w-5/6 h-16 flex items-center justify-between px-6 py-2  sm:px-8">
        <div>
          <Image
            src="/logoNav.png"
            alt="logo"
            width={150}
            height={20}
            className=""
          />
        </div>
        <div className="flex items-center gap-10  ">
          <ul className="hidden sm:flex gap-10">
            <li>Features</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
          <button className="btn px-6 py-2">login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
