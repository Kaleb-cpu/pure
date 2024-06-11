import React from "react";
import H1 from "@/components/Text/H1";
import H2 from "@/components/Text/H2";
import UserIcon from "@/components/UserIcon";
import SocialLink from "@/components/SocialLink";
import { CiCamera } from "react-icons/ci";
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

function Profile() {
  const Icons = [
    {
      id: "1",
      name: "Facebook",
      description: "Add your Facebook page",
      icon: FaFacebook,
    },
    {
      id: "2",
      name: "Youtube",
      description: "Add your Youtube channel",
      icon: FaYoutube,
    },
    {
      id: "3",
      name: "TikTok",
      description: "Add your TikTok profile",
      icon: FaTiktok,
    },
    {
      id: "4",
      name: "Instagram",
      description: "Add your Instagram profile",
      icon: FaInstagram,
    },
  ];

  return (
    <section className="max-w-2xl">
      <H1>Profile</H1>
      <div className="mt-10">
        <UserIcon userName="Kaleb" userEmail="kakuj424@gmail.com" />
      </div>
      <div className="mt-12">
        <H2>Profile Photo</H2>
        <div className="text-teritary flex mt-3">
          <div className="self-center text-xl bg-fourth text-teritary rounded-sm p-1">
            <CiCamera />
          </div>
          <input
            className="px-2 block w-full text-sm text-slate-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                     file:bg-fourth file:text-teritary
                     hover:file:bg-secondary hover:file:text-primary     hover:file:cursor-pointer"
            type="file" 
          />
        </div>
      </div>

      <div className="mt-12">
        <H2>Bio</H2>
        <div class="mt-3 max-w-lg bg-secondary p-3 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4 text-primary">
            Tell us about yourself
          </h2>
          <textarea
            class="w-full h-32 rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-primary text-primary"
            placeholder="Write something about yourself..."
          ></textarea>
        </div>
      </div>

      <div className="mt-12">
        <H2>Social Links</H2>
        <div class="mt-3 max-w-lg">
          {Icons.map((data) => {
            return (
              <SocialLink
                key={data.id}
                icon={data.icon}
                name={data.name}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Profile;
