"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const communities = [
  {
    title: "Reddit",
  },
  {
    title: "Godot",
  },
  {
    title: "Rust",
  },
  {
    title: "JavaScript",
  },
  {
    title: "Python",
  },
  {
    title: "WebDev",
  },
  {
    title: "ReactJS",
  },
  {
    title: "Node",
  },
  {
    title: "TypeScript",
  },
];

const Rightbar = () => {
  const [clipCommunities, setClipCommunities] = useState(true);

  return (
    <>
      <aside className="hidden md:flex flex-col gap-4 py-4 px-4 mr-8 max-w-72 w-full divide-y divide-zinc-600 overflow-y-auto max-h-[calc(100vh_-_80px)] custom-scrollbar bg-black rounded-2xl mt-8">
        <div className="communities py-4">
          <div className="uppercase text-zinc-400 text-sm mb-4">
            Popular Communities
          </div>

          <div className="flex flex-col gap-2">
            {communities
              .slice(0, clipCommunities ? 5 : communities.length)
              .map((community, idx) => (
                <Link
                  href="/r/reddit"
                  className="flex items-center gap-4 px-4 py-1 rounded-lg duration-300 hover:bg-zinc-200/10 text-sm"
                  key={`SidebarCommunity${idx}`}
                >
                  <Image
                    src="/vercel.svg"
                    alt="Reddit Icon"
                    width={24}
                    height={24}
                    className="rounded-full aspect-square"
                  />
                  <div className="flex flex-col">
                    <span className="lowercase">r/{community.title}</span>
                    <span className="lowercase text-zinc-400">X members</span>
                  </div>
                </Link>
              ))}

            <button
              className="px-2 py-1 hover:bg-zinc-500 rounded-full w-fit cursor-pointer text-xs"
              onClick={() => setClipCommunities(!clipCommunities)}
            >
              See { clipCommunities ? "more" : "less" }
            </button>
          </div>
        </div>
      </aside>

      {/* Dummy element for layout */}
      {/* <div className="hidden md:flex flex-col gap-4 py-4 px-4 max-w-64 w-full"></div> */}
    </>
  );
};

export default Rightbar;
