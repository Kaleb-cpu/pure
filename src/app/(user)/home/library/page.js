"use client";
import React, { useState } from "react";
import H1 from "@/components/Text/H1";
import LibrarySongCard from "@/components/Cards/LibrarySongCard";
import LibraryAlbumCard from "@/components/Cards/LibraryAlbumCard";
import H2 from "@/components/Text/H2";
import SubmitButton from "@/components/Buttons/SubmitButton";
import Link from "next/link";

function Library() {
  const librarySong = [
    {
      id: "1",
      artistName: "Lorem Ipsum",
      songName: "ካብ እግርኻ",
      imageSrc: "https://images.pexels.com/photos/24847577/pexels-photo-24847577/free-photo-of-a-wooden-walkway-in-the-fog-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      length: "5",
    },
    {
      id: "2",
      artistName: "Lorem Ipsum",
      songName: "ምንጪ ጽቡቅ ፍረይ",
      imageSrc: "https://images.pexels.com/photos/17591300/pexels-photo-17591300/free-photo-of-entrance-decorated-with-potted-plants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      length: "3",
    },
    {
      id: "3",
      artistName: "Lorem Ipsum",
      songName: "ፍትወይ",
      imageSrc: "https://images.pexels.com/photos/25244962/pexels-photo-25244962/free-photo-of-the-temple-is-made-of-wood-and-has-a-red-roof.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      length: "7",
    },
    {
      id: "4",
      artistName: "Lorem Ipsum",
      songName: "ረዳኢየይ",
      imageSrc: "https://images.pexels.com/photos/25675332/pexels-photo-25675332/free-photo-of-hiking-in-cappadocia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      length: "6",
    },
    
  ];

  const libraryAlbum = [
    
  ];
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const toggleDelete = () => {
    setDeleteConfirm(true);
  };



  return (
    <main className="h-full text-teritary">
      <H1>Songs</H1>
      <div className="grid grid-flow-col mt-5 overflow-auto max-w-6xl">
        {librarySong.map((data) => {
          return (
            <LibrarySongCard
              key={data.id}
              artistName={data.artistName}
              // songName={data.songName}
              imageSrc={data.imageSrc}
            />
          );
        })}
        
      </div>

      {/* Album */}
      <div className="mt-10">
        <H1>Albums</H1>
      </div>
      <div className="grid grid-flow-col overflow-auto">
        {libraryAlbum.map((data) => {
          return (
            <LibraryAlbumCard
              key={data.id}
              artistName={data.artistName}
              albumName={data.albumName}
              songsAmount={`album \u00B7 ${data.songsAmount} songs`}
              imageSrc={data.imageSrc}
            >
            </LibraryAlbumCard>
          );
        })}
        <div className="w-1/4 flex mt-8 flex-col">
        <H2>No albums to show here...</H2>
        
          
            <Link className="w-1/2 mt-5" href="/home/albums">
            <SubmitButton>
              Add an Album
              </SubmitButton>
            </Link>
        
        
          
        
      </div>
      </div>
    </main>
  );
}

export default Library;
