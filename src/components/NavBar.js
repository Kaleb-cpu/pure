"use client";
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <main>
      <div className="sm:flex justify-between w-5/6 sm:items-center sm:m-auto mx-3">
        <div className="my-2">
          <Link href="/home/dashboard">
            <Image
              src="/pure-worship-transparent.png"
              width="200"
              height="200"
              alt="pure logo"
            ></Image>
          </Link>
        </div>

        <div className="flex flex-row gap-3 text-secondary text-xl font-Inter">
          <Link className="self-center" href="/home/dashboard">Home</Link>
          <Link className="self-center" href="/">Log out</Link>
          <Link href="/">
            <Image
              className="rounded-full w-12 h-12 object-cover"
              src="/user.jpg"
              width="50"
              height="50"
              alt="user image"
            ></Image>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NavBar;
