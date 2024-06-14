import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="w-full flex justify-end px-10 py-2">
      <Link href="/home">
        <div className="relative w-40 h-40 lg:w-48 lg:h-48">
          <Image
            src="/pure-worship-transparent.png"
            layout="responsive"
              width={200}
              height={200}
            alt="pure logo"
          ></Image>
        </div>
      </Link>
    </div>
  );
}
