"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/utils/constants";

export default function Navbar() {
  const [active, setActive] = useState("Discover");
  return (
    <div>
      <nav className="h-[86px] flex items-center justify-between pl-5 pr-5">
        <div className="flex flex-row gap-8 items-center">
          <h1 className="font-bold text-2xl bg-linear-to-r from-[#9C48EA] to-[#CC97FF] bg-clip-text text-transparent">
            Hackelo
          </h1>
          {navItems.map((item, i) => {
            return (
              <Link
                key={i}
                href={"/"}
                onClick={() => {
                  setActive(item);
                }}
                className={`text-[16px] font-normal ${active === item ? "text-[#CC97FF] border-b-2" : "text-[#DEE5FF]"}  `}
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row gap-6">
          <div className="bg-[#192540] w-60 h-[54px] flex justify-center items-center rounded-[12px] gap-2">
            <Image
              src={"/images/search-icon.png"}
              alt="Search icon"
              width={10.5}
              height={10.5}
            />
            <input
              type="text"
              placeholder="Search Hackathos..."
              className="text-[#A3AAC480] text-[14px] h-9 outline-none"
            />
          </div>
          <div className="flex items-center gap-6">
            <Image
              src={"/images/bell-icon.png"}
              alt="Notification icon"
              width={15}
              height={19}
            />
            <button className="w-[135px] h-[34px] text-[14px] font-bold text-[#360061] bg-linear-to-r from-[#9C48EA] to-[#CC97FF] rounded-[19px]">
              Host Hackathon
            </button>
            <Image
              src={"/images/user-logo.png"}
              alt="User profile"
              width={40}
              height={40}
            />
          </div>
        </div>
      </nav>
      <div className="h-12 bg-linear-to-b from-gray-800/30 to-transparent"></div>
    </div>
  );
}
