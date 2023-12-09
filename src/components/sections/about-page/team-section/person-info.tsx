import React from "react";
import styled from "styled-components";

interface PersonInfoProps {
  img: string;
  name: string;
  position: string;
  about: string;
}

function PersonInfo({ img, name, position, about }: PersonInfoProps) {
  return (
    <PersonWrapper className="my-10">
      <div className="flex md:flex-row flex-col md:gap-6 gap-4 md:items-center">
        <div className="md:min-w-[300px]">
          <img src={img} alt={name} className="w-full" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-semibold md:text-2xl text-xl">{name}</h1>
          <p className="my-2 md:text-xl text-lg text-secondaryFont">
            {position}
          </p>
          <p className="my-4 md:text-xl text-lg">{about}</p>
        </div>
      </div>
      <div className="line" />
    </PersonWrapper>
  );
}

const PersonWrapper = styled.div`
  .line {
    margin: 20px 0;
    height: 1px;
    width: 60%;
    background-color: #e6e6dc;
  }
`;

export default PersonInfo;
