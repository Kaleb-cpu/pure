import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import SubmitButton from "@/components/SubmitButton";
import Image from "next/image";
function SideBar() {
  return (
    <div className="lg:ml-16 h-full">

    {/* button */}
    <button class="relative group lg:hidden mt-2 ml-3">
        <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-fourth ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
            <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

            <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
              <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
              <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
            </div>
          </div>
        </div>
      </button>
      <div className="lg:grid hidden grid-rows-sideBarLayoutRow h-full text-secondary text-lg font-navBar">
        <div>
          <Link className="flex flex-row" href="/">
            <Image
              className="rounded-full h-12 object-cover"
              src="/user.jpg"
              width="50"
              height="50"
              alt="user image"
            ></Image>
            <p className="self-center px-2 font-Inter">Kaleb</p>
          </Link>
        </div>

        <div className="flex flex-col self-center">
          <Link href="/home">
            <Button>Dashboard</Button>
          </Link>
          <Link href="/home/library">
            <Button>Library</Button>
          </Link>
          <Link href="/home/profile">
            <Button>Profile</Button>
          </Link>
          <Link href="/">
            <Button>Log out</Button>{" "}
          </Link>
        </div>

        <Link className="self-center" href="/home/newRelease">
          <SubmitButton>New Release</SubmitButton>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
