import React from "react";
import SubmitButton from "@/components/Buttons/SubmitButton";
import H1 from "@/components/Text/H1";
import H2 from "@/components/Text/H2";
import Link from "next/link";
function newRelease() {
  const Buttons = [
    { id: "1", name: "Add an Album", href: "/home/Album" },
    { id: "2", name: "Add a song", href: "/home/Song" },
  ];
  return (
    <div className="w-3/4">
      <div className="mb-4">
        <H1>Choose album or song</H1>
      </div>

      <H2>
        You can upload a single song or an album from your computer. Just make
        sure the music you upload isn't on your library.
      </H2>

      <div className="w-3/4 lg:w-2/4 ml-4 lg:ml-10 flex gap-5 mt-10">
        {Buttons.map((data) => {
          return(
            <Link className="w-1/2" key={data.id} href={data.href}>
            <SubmitButton>
              {data.name}
              </SubmitButton>
            </Link>
            
        );
          
        })}
      </div>
    </div>
  );
}

export default newRelease;
