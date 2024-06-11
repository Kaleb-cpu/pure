import React from "react";
import ImageCard from "./ImageCard";


function LibrarySongCard(props) {

  
  return (
    <main className="text-teritary">
      <div className="lg:ml-10 ml-3 w-[200px] md:w-[250px] lg:w-[300px]">
        <ImageCard imageSrc={props.imageSrc} />
        <h3 className="text-teritary font-semibold font-Nunito text-lg md:text-xl">
          {props.artistName}
        </h3>
        <h4 className="text-teritary font-Geez md:text-lg">
          {props.songName}
        </h4>
<div className="flex gap-2 justify-between w-1/2 text-primary mt-3 font-Nunito">

          <button className="bg-secondary w-full p-0.5 hover:shadow hover:shadow-teritary hover:scale-105 hover:font-semibold">
            Delete
          </button>
        
          <button className="bg-secondary p-0.5 w-full hover:scale-105 hover:font-semibold">
            Edit
          </button>
</div>
      </div>
    </main>
  );
}

export default LibrarySongCard;
