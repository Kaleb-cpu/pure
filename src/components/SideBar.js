import React from "react";
import Link from "next/link";
import RegularButton from "@/components/RegularButton"
import SubmitButton from "@/components/SubmitButton"
function SideBar() {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-around h-full text-secondary gap-4 text-lg font-navBar">
        <div className="flex flex-col self-center">
          <Link
            
            href="/home"
          >
            <RegularButton>Dashboard</RegularButton>
          </Link>
          <Link
            href="/home/profile"
          >
            <RegularButton>Profile</RegularButton> 
          </Link>
          <Link
            href="/home/library"
          >
            <RegularButton>Library</RegularButton> 
          </Link>
        </div>

        <Link
          className="self-center"
          href="/home/newRelease"
        >
        <SubmitButton>New Release</SubmitButton>
          
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
