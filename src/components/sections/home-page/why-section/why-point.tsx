import React from "react";

type whyPointProps = {
  title: string;
  imgSrc: string;
  description: string;
};

function WhyPoint({ title, imgSrc, description }: whyPointProps) {
  return (
    <div className="bg-lightGray p-8 flex flex-col gap-5 w-[32%]">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">{title}</p>
        <p>
          <img src={imgSrc} alt="point"></img>
        </p>
      </div>
      <p className="text-xl">{description}</p>
    </div>
  );
}

export default WhyPoint;
