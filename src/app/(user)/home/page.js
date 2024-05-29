"use client";
import H1 from "@/components/H1";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      {/* Dashboard heading */}
      <div>
        <H1>Dashboard</H1>
        <h3 className="text-teritary font-Inter text-md md:text-lg lg:text-xl mt-4 lg:pt-2 ml-4 md:ml-10">
          Recently added
        </h3>
      </div>

      {/* Dashboard parent */}
      <div className="ml-4 md:ml-10 mt-3 h-3/4 w-3/4 overflow-auto">

      {/* Dashboard child */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-teritary font-Nunito text:md md:text:lg lg:text-xl">
              Yonatan & Sosuna
            </h1>
            <h2 className="text-teritary font-Nunito sm:text-md md:text-lg lg:text-xl">
              Album &#183; 2022
            </h2>
          </div>
          <div className="">
            <Image
              className="mb-3 rounded-lg"
              src="/yoniSosi.jpg"
              layout="responsive"
              width={250}
              height={250}
              alt=""
            ></Image>
          </div>
        </div>
        {/* Dashboard child end... */}
{/* Dashboard child */}
{/* Dashboard child */}
<div className="flex justify-between">
          <div>
            <h1 className="text-teritary font-Nunito text:md md:text:lg lg:text-xl">
              Kokob
            </h1>
            <h2 className="text-teritary font-Nunito text:md md:text:lg lg:text-xl">
              Album &#183; 2022
            </h2>
          </div>
          <div className="">
            <Image
              className="mb-3 rounded-lg"
              src="/kokob.jpg"
              layout="responsive"
              width={250}
              height={250}
              alt=""
            ></Image>
          </div>
        </div>
        {/* Dashboard child end... */}
        {/* Dashboard child */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-teritary font-Nunito text:md md:text:lg lg:text-xl">
              Efrem rezene
            </h1>
            <h2 className="text-teritary font-Nunito text:md md:text:lg lg:text-xl">
              Album &#183; 2020
            </h2>
          </div>
          <div className="">
            <Image
              className="mb-3 rounded-lg"
              src="/efremRezene.jpg"
              layout="responsive"
              width={250}
              height={250}
              alt=""
            ></Image>
          </div>
        </div>
        {/* Dashboard child end... */}

        {/* Dashboard child */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-teritary font-Nunito text:md md:text:lg lg:text-xl">
              Yemane
            </h1>
            <h2 className="text-teritary font-Nunito text:md md:text:lg lg:text-xl">
              Album &#183; 2021
            </h2>
          </div>
          <div className="">
            <Image
              className="mb-3 rounded-lg"
              src="/yemaneHabte.jpg"
              layout="responsive"
              width={250}
              height={250}
              alt=""
            ></Image>
          </div>
        </div>
        {/* Dashboard child end... */}

      </div>
    </>
  );
}

export default Home;
