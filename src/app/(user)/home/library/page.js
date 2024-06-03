"use client";
import React, { Component } from "react";
import H1 from "@/components/H1";
import LibrarySongCard from "@/components/Cards/LibrarySongCard";
import LibraryAlbumCard from "@/components/Cards/LibraryAlbumCard";

function Library() {
  const librarySong = [
    {
      id: "1",
      artistName: "Biniam Berhe",
      songName: "ካብ እግርኻ",
      year: "2022",
      imageSrc: "/biniamSong.jpg",
      length: "5",
    },
    {
      id: "2",
      artistName: "Efrem Rezene",
      songName: "ምንጪ ጽቡቅ ፍረይ",
      year: "2021",
      imageSrc: "/efremSong.jpg",
      length: "3",
    },
    {
      id: "3",
      artistName: "Goytom Gebreyonas",
      songName: "ፍትወይ",
      year: "2023",
      imageSrc: "/goytomSong.jpg",
      length: "7",
    },
    {
      id: "4",
      artistName: "Kiflu Daygnew",
      songName: "ረዳኢየይ",
      year: "2024",
      imageSrc: "/kifluSong.jpg",
      length: "6",
    },
    {
      id: "5",
      artistName: "Pastor Melake",
      songName: "ከማኻ ዝበለ የለን",
      year: "2020",
      imageSrc: "/meronSong.jpg",
      length: "8",
    },
    {
      id: "6",
      artistName: "Petros Berhe",
      songName: "ኩሉ ሰናይ",
      year: "2022",
      imageSrc: "/petrosAlbum.jpg",
      length: "4",
    },
  ];

  const libraryAlbum = [
    {
      id: "1",
      artistName: "Filmon Mesel",
      albumName: "መንፈስ ቅዱስ",
      year: "2022",
      imageSrc: "/filmonAlbum.jpg",
      songsAmount: "10",
    },
    {
      id: "2",
      artistName: "Petros Berhe",
      albumName: "ኩሉ ሰናይ",
      year: "2021",
      imageSrc: "/petrosAlbum.jpg",
      songsAmount: "12",
    },
    {
      id: "3",
      artistName: "Kokob",
      albumName: "ሰናይ ኢኻ ኣምላኸይ",
      year: "2023",
      imageSrc: "/kokob.jpg",
      songsAmount: "9",
    },
    {
      id: "4",
      artistName: "Yemane Habte",
      albumName: "ብፍቅርኻ ዓብየ",
      year: "2024",
      imageSrc: "/yemaneHabte.jpg",
      songsAmount: "13",
    },
  ];

  return (
    <main className="h-full text-teritary">
      <H1>Songs</H1>
      <div className="mt-5 w-2/6 overflow-auto h-1/6">
        {librarySong.map((data) => {
          return (
            <LibrarySongCard
              key={data.id}
              artistName={data.artistName}
              songName={data.songName}
              year={`song \u00B7 ${data.length} min`}
              imageSrc={data.imageSrc}
            />
          );
        })}
      </div>

      {/* Album */}
      <div className="mt-10">
        <H1>Albums</H1>
      </div>
      <div className="mt-5 w-2/6 overflow-auto h-1/6">
        {libraryAlbum.map((data) => {
          return (
            <LibraryAlbumCard
              key={data.id}
              artistName={data.artistName}
              albumName={data.albumName}
              songsAmount={`album \u00B7 ${data.songsAmount} songs`}
              imageSrc={data.imageSrc}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Library;
