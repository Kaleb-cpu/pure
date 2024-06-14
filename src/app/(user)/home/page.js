"use client";
import H1 from "@/components/Text/H1";
import H2 from "@/components/Text/H2";
import React from "react";
import Link from "next/link";
import DashboardCard from "@/components/Cards/DashboardCard";
import SubmitButton from "@/components/Buttons/SubmitButton";

function Home() {
  const Dashboard = [
    {
      id: "1",
      name: "Lorem Ipsum",
      type: "Album",
      albumYear: "2022",
      imageSrc: "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g",
    },
    {
      id: "2",
      name: "Lorem Ipsum",
      type: "Song",
      albumYear: "2021",
      imageSrc: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg",
    },
    {
      id: "3",
      name: "Lorem Ipsum",
      type: "Song",
      albumYear: "2023",
      imageSrc: "https://images.pexels.com/photos/25649809/pexels-photo-25649809/free-photo-of-colors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

  ];

  const Buttons = [
    { id: "1", name: "Album", href: "/home/Album" },
    { id: "2", name: "Song", href: "/home/Song" },
  ];

  return (
    <div className="h-full mx-auto ml-4">
      {/* Dashboard heading */}

      <div>
        <div className="mb-6 flex flex-col gap-10">
          <H1>Dashboard</H1>
        </div>
        <div className="mb-16 flex flex-col gap-5 mt-10">
        <div className="text-center">

          <H2>Add a Song or an Album</H2>
        </div>
          <div className="flex justify-center gap-5">
            {Buttons.map((data) => {
              return (
                <Link className="w-1/4" key={data.id} href={data.href}>
                  <SubmitButton key={data.id}>{data.name}</SubmitButton>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mb-6">
          <H2>Recently added</H2>
        </div>
        <div className="lg:w-3/4 shadow-sm p-1 h-[350px] lg:h-[400px] overflow-scroll">
          {Dashboard.map((data) => {
            return (
              <DashboardCard
                key={data.key}
                name={data.name}
                albumYear={`${data.type} \u00B7 ${data.albumYear}`}
                imageSrc={data.imageSrc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
