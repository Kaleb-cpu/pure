import React, { useState } from "react";

import Link from "next/link";
import Button from "@/components/Buttons/Button";
import SubmitButton from "@/components/Buttons/SubmitButton";
import UserIcon from "../UserIcon";
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
    <div className="lg:ml-16 h-full">
      {/* button */}
      <div className="lg:grid grid-rows-sideBarLayoutRow h-full text-secondary text-lg font-navBar lg:bg-transparent">
        <button
          onClick={toggleMenu}
          className="relative group lg:hidden mt-2 ml-3"
        >
          <div
            onClick={toggleMenu}
            className={`tham tham-e-spin tham-w-8 ${isOpen ? "tham-active" : "tham-box"}`}
          >
            <div class="tham-box">
              <div class="tham-inner bg-secondary" />
            </div>
          </div>
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} lg:block lg:static lg:w-full lg:bg-transparent lg:mt-0 bg-secondary mt-2 h-full absolute w-3/6`}
        >
          <div className="flex justify-end lg:justify-start">
            <UserIcon userName="Kaleb" />
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

          <Link
            className="flex justify-center mt-36"
            href="/home/newRelease"
            onClick={closeMenu}
          >
            <SubmitButton>New Release</SubmitButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
