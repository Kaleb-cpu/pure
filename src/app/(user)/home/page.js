"use client";
import H1 from "@/components/Text/H1";
import H2 from "@/components/Text/H2";
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
    <div className="h-full mx-auto">
      {/* Dashboard heading */}
      
      <div className="mx-auto w-3/4 overflow-auto h-5/6">
      <div className="mb-6 flex flex-col gap-10">
        <H1>Dashboard</H1>
        <H2>Recently added</H2>
      </div>
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
