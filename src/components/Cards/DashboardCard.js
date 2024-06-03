import React from "react";
import ImageCard from "./ImageCard";
function DashboardCard(props) {
  return (
    <>
      {/* Dashboard parent */}
      <div>
        {/* Dashboard child */}
        <div className="flex lg:justify-between flex-col lg:flex-row">
          <div className="mb-2">
            <h1 className="text-teritary font-Nunito text:md md:text:lg lg:text-xl">
              {props.name}
            </h1>
            <h2 className="text-teritary font-Nunito sm:text-md md:text-lg lg:text-xl">
              {props.albumYear}
            </h2>
          </div>
          <div className="mb-10">
            <ImageCard imageSrc={props.imageSrc} />
          </div>
        </div>

        {/* Dashboard child end... */}
      </div>
    </>
  );
}

export default DashboardCard;
