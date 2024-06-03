import React from "react";
import ImageCard from "./ImageCard";

function LibrarySongCard(props) {
  return (
    <main className="text-teritary">
      <div className="lg:ml-10 ml-3 w-[200px] md:w-[250px] lg:w-[300px]">
        <ImageCard imageSrc={props.imageSrc} />
        <h3 className="text-teritary font-semibold font-Nunito text-lg md:text-xl pb-1">
          {props.artistName}
        </h3>
        <h4 className="text-teritary font-semibold font-Geez md:text-lg">
          {props.songName}
        </h4>
        <h4 className="text-teritary font-semibold md:text-lg font-Nunito">
          {props.year}
        </h4>
      </div>
    </main>
  );
}

export default LibrarySongCard;
