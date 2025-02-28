import React from "react";
import Image from "next/image";

import {
  PiArrowFatUpBold,
  PiArrowFatDownBold,
  PiChatTeardropBold,
  PiMedalBold,
  PiShareFatBold,
  PiDotsThreeBold,
} from "react-icons/pi";

interface Props {
  media?: boolean;
}

const PostCard = ({ media }: Props) => {
  return (
    <div className="card w-full max-w-2xl px-4 py-2 rounded-xl cursor-pointer duration-300 hover:bg-zinc-500/20">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center text-xs">
          <Image
            src="/communityicon.jpg"
            alt="Community Icon"
            width={24}
            height={24}
            className="rounded-full aspect-square"
          />
          <div className="">r/Reddit</div>
          <div className="date">5 days ago</div>
        </div>

        <div className="right flex items-center gap-2">
          <button className="py-1 px-3 text-xs cursor-pointer bg-indigo-600 text-white rounded-full">
            Join
          </button>
          <button className="py-2 px-3 cursor-pointer hover:bg-zinc-500 rounded-full">
            <PiDotsThreeBold className="size-4" />
          </button>
        </div>
      </div>

      <div className="title text-lg">This is a post!</div>

      {media ? (
        <div
          className="desc text-sm text-zinc-400 relative w-full aspect-video bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: `url("/communityicon.jpg")`,
          }}
        >
          <Image
            src="/communityicon.jpg"
            alt="Post Media"
            fill
            className="rounded-xl object-contain backdrop-blur-lg"
          />
        </div>
      ) : (
        <div className="desc text-sm text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          enim minima error eligendi excepturi tempore rem fugiat in sunt sequi
          voluptatem id natus illo iure, nihil repellendus soluta! Non voluptas
          recusandae minima, accusamus reiciendis, et nemo animi error
          exercitationem vero iusto nihil labore laudantium, dolores eligendi
          dignissimos amet unde voluptate!
        </div>
      )}

      <div className="bottom flex gap-4 text-xs pt-4 pb-2">
        <div className="bg-zinc-700 flex items-center rounded-full">
          <button className="rounded-full aspect-square hover:bg-zinc-600/50 cursor-pointer flex items-center justify-center p-1 hover:text-rose-500 px-2">
            <PiArrowFatUpBold className="size-4" />
          </button>
          <span className="count">1k</span>
          <button className="rounded-full aspect-square hover:bg-zinc-600/50 cursor-pointer flex items-center justify-center p-1 hover:text-blue-500 px-2">
            <PiArrowFatDownBold className="size-4" />
          </button>
        </div>

        <button className="bg-zinc-700 flex gap-2 items-center rounded-full p-2 px-3 cursor-pointer hover:bg-zinc-600">
          <PiChatTeardropBold className="size-4" />
          <span className="count">1k</span>
        </button>

        <button className="bg-zinc-700 flex gap-2 items-center rounded-full p-2 px-3 cursor-pointer hover:bg-zinc-600">
          <PiMedalBold className="size-4" />
        </button>

        <button className="bg-zinc-700 flex gap-2 items-center rounded-full p-2 px-3 cursor-pointer hover:bg-zinc-600">
          <PiShareFatBold className="size-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
