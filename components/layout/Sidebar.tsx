import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PiHouseFill, PiTrendUp, PiBookOpen, PiQuestion, PiRedditLogo } from "react-icons/pi";

const links = [
  {
    icon: PiHouseFill,
    title: "Home",
  },
  {
    icon: PiTrendUp,
    title: "Popular",
  },
];

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

const resources = [
  {
    icon: PiRedditLogo,
    title: "About Reddit",
  },
  {
    icon: PiQuestion,
    title: "Help",
  },
  {
    icon: PiBookOpen,
    title: "Blog",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 py-4 px-4 border-r border-zinc-600 max-w-64 w-full divide-y divide-zinc-600 overflow-y-auto max-h-[calc(100vh_-_70px)] custom-scrollbar">
      <div className="top flex flex-col gap-2 pb-4">
        {links.map((link, idx) => (
          <Link
            href="/"
            className="flex items-center gap-4 px-4 py-2 rounded-lg duration-300 hover:bg-zinc-200/10"
            key={`SidebarTopNav${idx}`}
          >
            <link.icon className="size-6" />
            <span>{link.title}</span>
          </Link>
        ))}
      </div>

      <div className="communities py-4">
        <div className="uppercase text-zinc-400 text-sm mb-4">
          Top Communities
        </div>

        <div className="flex flex-col gap-2">
          {communities.map((community, idx) => (
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
              <span className="lowercase">r/{community.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="resources py-4">
        <div className="uppercase text-zinc-400 text-sm mb-4">Resources</div>

        <div className="flex flex-col gap-2">
          {resources.map((resource, idx) => (
            <Link
              href="/r/reddit"
              className="flex items-center gap-4 px-4 py-1 rounded-lg duration-300 hover:bg-zinc-200/10 text-sm"
              key={`SidebarResource${idx}`}
            >
              <resource.icon className="size-6" />
              <span className="">{resource.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
