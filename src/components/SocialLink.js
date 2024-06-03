import React from 'react'
import Link from 'next/link';

function SocialLink(props) {
  const Icon = props.icon;
  return (
    <div>
      <Link
        className="flex flex-row mb-5"
        href="/home/profile"
      >
        <div className="self-center text-xl md:text-2xl text-teritary rounded-md mb-3">
            <Icon />
          </div>
          <div>
          <p className="px-2 text-md font-Inter md:text-lg text-secondary tracking-tight">{props.name}</p>
        <p className="px-2 font-Inter text-sm md:text-md text-secondary tracking-tight md:tracking-tighter md:leading-5 leading-3">{props.description}</p>
        </div>

      </Link>
    </div>
  )
}

export default SocialLink
