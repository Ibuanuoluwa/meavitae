import React from "react";

type PartnersPointProps = {
  title: string;
  imgSrc: string;
  description: string;
};

function PartnersItem({ title, imgSrc, description }: PartnersPointProps) {
  return (
    <div className="bg-lightGray md:p-8 p-4 flex flex-col gap-5 md:w-[32%] w-full">
      <div className="flex items-center justify-between">
        <p className="md:text-2xl text-lg  font-bold">{title}</p>
        <p>
          <img src={imgSrc} alt="point"></img>
        </p>
      </div>
      <p className="md:text-xl">{description}</p>
    </div>
  );
}

export default PartnersItem;
