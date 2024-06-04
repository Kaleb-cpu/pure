import React, { useState } from "react";

import Link from "next/link";
import Button from "@/components/Button/Button";
import SubmitButton from "@/components/Button/SubmitButton";
import Image from "next/image";
import UserIcon from "./UserIcon";
function SideBar() {
  let [isOpen, setisOpen] = useState();

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  const closeMenu = () => {
    setisOpen((isOpen = false));
  };

  const sideBarItems = [
    { name: "Dashboard", location: "/home", id: "1" },
    { name: "Library", location: "/home/library", id: "2" },
    { name: "Profile", location: "/home/profile", id: "3" },
    { name: "Log out", location: "/", id: "4" },
  ];
  return (
    <div className="lg:ml-16 h-full ">
      {/* button */}
      <div className="lg:grid grid-rows-sideBarLayoutRow h-full text-secondary text-lg font-navBar lg:bg-transparent">
        <button
          onClick={toggleMenu}
          className="relative group lg:hidden mt-2 ml-3"
        >
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

        <div
          className={`${isOpen ? "block" : "hidden"} lg:block lg:static lg:w-full lg:bg-transparent lg:mt-0 bg-fourth mt-2 h-full absolute w-3/6`}
        >
          <div className="flex justify-end lg:justify-start">

          <UserIcon userName="Kaleb"/>
          </div>

          
          <div className="flex flex-col items-end lg:items-start lg:mt-10">
            {sideBarItems.map((data) => {
              return (
                <Link
                  key={data.id}
                  onClick={closeMenu}
                  className="w-3/6"
                  href={data.location}
                >
                  <Button>{data.name}</Button>
                </Link>
              );
            })}
          </div>

          <Link className="flex justify-center mt-36" href="/home/newRelease">
            <SubmitButton>New Release</SubmitButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
