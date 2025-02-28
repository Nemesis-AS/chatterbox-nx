import Link from "next/link";
import React from "react";

import { PiMagnifyingGlass, PiListBold } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-4 md:px-6 border-b border-zinc-600 fixed top-0 left-0 w-full bg-black z-10">
        <div className="flex gap-2 items-center">
          <button className="lg:hidden rounded-lg cursor-pointer hover:bg-zinc-500/60">
            <PiListBold className="size-6" />
          </button>
          <Link href="/" className="text-2xl">
            Reddit Clone
          </Link>
        </div>

        <div className="px-4 bg-gray-600 rounded-full hidden md:flex items-center gap-2 w-full max-w-xl">
          <PiMagnifyingGlass className="size-5" />

          <input
            type="text"
            className="py-2 outline-none text-sm grow"
            placeholder="Search Reddit"
          />
        </div>

        <div className="buttons flex gap-2 items-center">
          <button className="md:hidden p-2 rounded-lg cursor-pointer hover:bg-zinc-500/50">
            <PiMagnifyingGlass className="size-5" />
          </button>
          <button className="bg-primary px-4 py-2 text-sm rounded-full">
            Log In
          </button>
        </div>
      </header>

      {/* Dummy Element for Layout */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
