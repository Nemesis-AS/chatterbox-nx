import Link from "next/link";
import React from "react";

import { PiMagnifyingGlass } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 border-b border-zinc-600 fixed top-0 left-0 w-full bg-black z-10">
        <Link href="/" className="text-2xl">
          Reddit Clone
        </Link>

        <div className="px-4 bg-gray-600 rounded-full flex items-center gap-2 w-full max-w-xl">
          <PiMagnifyingGlass className="size-5" />

          <input
            type="text"
            className="py-2 outline-none text-sm grow"
            placeholder="Search Reddit"
          />
        </div>

        <div className="buttons">
          <button className="bg-primary px-4 py-2 text-sm rounded-full">
            Log In
          </button>
        </div>
      </header>
      <div className="h-20"></div>
    </>
  );
};

export default Header;
