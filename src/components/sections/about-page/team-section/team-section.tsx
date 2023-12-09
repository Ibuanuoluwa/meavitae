import React from "react";
import teamsData from "../../../../data/team";
import PersonInfo from "./person-info";

export function TeamSection() {
  return (
    <div className="md:px-20 md:py-12 px-6 py-10">
      <h1 className="header-one font-bold">Management Team</h1>
      <p className="text-lg md:text-2xl my-3 ">
        Explore the dedicated team behind the Meavitae system
      </p>
      <div>
        {teamsData.map((person, index) => (
          <PersonInfo
            img={person.img}
            name={person.name}
            position={person.position}
            about={person.about}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
