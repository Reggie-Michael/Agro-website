"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = ({ className }) => {
  const [activePage, setActivePage] = useState("menu");

  return (
    <div
      className={`flex min-h-[10%] w-full items-center justify-between gap-1 px-[5%] font-montserrat ${className}`}
    >
      <Button
        className={`flex flex-col items-center justify-center gap-1 bg-transparent px-2 py-1 text-xs font-medium capitalize shadow-none ${activePage === "menu" ? "rounded-none  border-b-2 border-b-[#FF5714] text-[#FF5714]" : "text-[#686D76]"}`}
      >
        <Image
          src={"/assets/icons/menuIconActive.svg"}
          width={25}
          height={25}
          alt="m"
          className={`aspect-square`}
        />
        Menu
      </Button>
      <Button
        className={`flex flex-col items-center justify-center gap-1 bg-transparent px-2 py-1 text-xs font-medium capitalize shadow-none ${activePage === "discover" ? "rounded-none  border-b-2 border-b-[#FF5714] text-[#FF5714]" : "text-[#686D76]"}`}
      >
        <Image
          src={"/assets/icons/discoverIcon.svg"}
          width={25}
          height={25}
          alt="m"
          className={`aspect-square`}
        />
        Discover
      </Button>
      <Button
        className={`flex flex-col items-center justify-center gap-1 bg-transparent px-2 py-1 text-xs font-medium capitalize shadow-none ${activePage === "message" ? "rounded-none  border-b-2 border-b-[#FF5714] text-[#FF5714]" : "text-[#686D76]"}`}
      >
        <Image
          src={"/assets/icons/messageIcon.svg"}
          width={25}
          height={25}
          alt="m"
          className={`aspect-square`}
        />
        Message
      </Button>
      <Button
        className={`flex flex-col items-center justify-center gap-1 bg-transparent px-2 py-1 text-xs font-medium capitalize shadow-none ${activePage === "order" ? "rounded-none  border-b-2 border-b-[#FF5714] text-[#FF5714]" : "text-[#686D76]"}`}
      >
        <Image
          src={"/assets/icons/orderIcon.svg"}
          width={25}
          height={25}
          alt="m"
          className={`aspect-square`}
        />
        Order
      </Button>
      <Button
        className={`flex flex-col items-center justify-center gap-1 bg-transparent px-2 py-1 text-xs font-medium capitalize shadow-none ${activePage === "account" ? "rounded-none  border-b-2 border-b-[#FF5714] text-[#FF5714]" : "text-[#686D76]"}`}
      >
        <Image
          src={"/assets/icons/accountIcon.svg"}
          width={25}
          height={25}
          alt="m"
          className={`aspect-square`}
        />
        Account
      </Button>
    </div>
  );
};

export default Navbar;
