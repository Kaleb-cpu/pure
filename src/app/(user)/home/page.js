"use client";
import H1 from "@/components/H1";
import Image from "next/image";
import React from "react";
import DashboardCard from "@/components/Cards/DashboardCard";

function Home() {
  const Dashboard = [
    {
      id: "1",
      name: "Yonatan and Sosuna",
      type: "Album",
      albumYear: "2022",
      imageSrc: "/yoniSosi.jpg",
    },
    {
      id: "2",
      name: "Efrem Rezene",
      type: "Song",
      albumYear: "2021",
      imageSrc: "/efremRezene.jpg",
    },
    {
      id: "3",
      name: "Kokob",
      type: "Song",
      albumYear: "2023",
      imageSrc: "/kokob.jpg",
    },
    {
      id: "4",
      name: "Yemane Habte",
      type: "Song",
      albumYear: "2024",
      imageSrc: "/yemaneHabte.jpg",
    },
  ];

  return (
    <div className="h-full">
      {/* Dashboard heading */}
      <div>
        <H1>Dashboard</H1>
        <h3 className="text-teritary font-Inter text-md md:text-lg lg:text-xl mt-3 mb-10 lg:pt-2 ml-4 md:ml-10">
          Recently added
        </h3>
      </div>
      <div className="ml-4 md:ml-10 w-3/4 overflow-auto h-5/6">
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
  );
}

export default Home;
