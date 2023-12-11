import React from "react";

type featureItemProps = {
  title: string;
  imgSrc: string;
  description: string;
  backgroundColor?: boolean;
};

function FeatureItem({
  title,
  imgSrc,
  description,
  backgroundColor,
}: featureItemProps) {
  return (
    <div
      className={`${
        backgroundColor ? "bg-lightGray" : "bg-white"
      } lg:p-8 p-4 flex flex-col gap-5 md:w-[32%] rounded-[12px]`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="lg:text-2xl text-lg font-bold">{title}</p>
        <p className="lg:w-fit w-[35px]">
          <img src={imgSrc} alt="point" className="w-full"></img>
        </p>
      </div>
      <p className="lg:text-xl">{description}</p>
    </div>
  );
}

export default FeatureItem;
