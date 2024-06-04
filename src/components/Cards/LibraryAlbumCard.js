import React from 'react'
import ImageCard from './ImageCard'
function LibraryAlbumCard(props) {
  return (
    <div className="w-3/6 mt-5">
        <div className="lg:ml-10 ml-3 w-[200px] md:w-[250px] lg:w-[300px]">
          <ImageCard imageSrc={props.imageSrc} />
          <h3 className="text-teritary font-semibold font-Nunito text-lg md:text-xl">
            {props.artistName}
          </h3>
          <h4 className="text-teritary font-semibold font-Geez md:text-lg">
            {props.albumName}
          </h4>
          <h4 className="text-teritary font-semibold md:text-lg font-Nunito">
            {props.songsAmount}
          </h4>
        </div>
      </div>
  )
}

export default LibraryAlbumCard
