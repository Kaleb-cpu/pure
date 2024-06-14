import React from "react";
import Link from "next/link";
import Image from "next/image";
function userIcon(props) {
  return (
    <div>
      <Link
        className="flex flex-row mt-2"
        href="/home/profile"
      >
        <Image
          className="rounded-full h-12 object-cover"
          src="https://images.pexels.com/photos/25020012/pexels-photo-25020012/free-photo-of-close-up-of-a-woman-leaning-against-a-rail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width="50"
          height="50"
          alt="user image"
        ></Image>
        <div>
        <p className="px-2 font-Inter lg:text-teritary text-primary font-semibold tracking-tight">{props.userName}</p>
        <p className="px-2 font-Inter text-secondary tracking-tight leading-3">{props.userEmail}</p>
        </div>
      </Link>
    </div>
  );
}

export default userIcon;
