import React from 'react'
import Image from 'next/image'
function ImageCard(props) {
  return (
    <div className="w-[200px] md:w-[250px] lg:w-[300px] h-[150px] relative -z-10">
      
            <Image
              className="object-cover"
              
              src={props.imageSrc}
              // layout="responsive"
              fill={true}
              alt="Picture of Artist"
            ></Image>
          </div>
  )
}

export default ImageCard
