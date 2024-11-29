import React from "react";
import Image from "next/image";

// import { House } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-gray-900">
      <nav className="border border-red-500 max-w-screen-lg mx-auto w-full flex justify-between items-center text-stone-300">
        {/* logo */}
        <div className="border border-purple-600 flex items-center gap-2">
          <Image src="/coinLogo.png" alt="logo-of-app" width={50} height={50} />
          <span className="font-bold">CryptoMoon</span>
        </div>

        {/* home/portfolio */}
        <div className="border border-stone-300 flex gap-14">
          <div className="flex">
            <p>Home</p>
          </div>

          <div className="flex">
            <p>Portfolio</p>
          </div>
        </div>

        {/* search input */}
        <div className="border border-stone-400 flex gap-4">
          <form className="border border-yellow-600 rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              className=" p-1 rounded-md focus:outline-none focus:ring-0"
            />
          </form>

          <button className="border border-stone-300">currency</button>
          <button className="border border-stone-300">theme</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
