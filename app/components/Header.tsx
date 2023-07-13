"use client";
import React from "react";
import Image from "next/image";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6">
      <Image
        src="/pinterest.svg"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-black text-white p-2 rounded-full px-4 hidden md:block">
        Home
      </button>
      <button className="font-semibold p-2 rounded-full px-4">Create</button>
      <div className="bg-[#e9e9e9] p-3  gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <HiSearch className="text-[25px] text-gray-500 md:hidden" />
      <HiBell className="text-[40px] text-gray-500 cursor-pointer" />
      <HiChat className="text-[40px] text-gray-500 cursor-pointer" />
      {/* <Image
        src="/person.png"
        alt="avatar"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      /> */}
      <button
        className="font-semibold p-2 rounded-full px-4"
        onClick={() => {
          try {
            loginWithRedirect();
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Header;
