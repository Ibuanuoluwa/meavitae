import React from "react";
import Review from "./review";

import FeatureItem from "./features-items";

interface FeaturePointData {
  title: string;
  imgSrc: string;
  description: string;
}

interface FeatureProps {
  featureItemsData: FeaturePointData[];
  featureSvg: string;
  title: string;
  number: string;
  description: string;
  reviewText: string;
  reviewerImg: string;
  background?: boolean;
  itemsBackgroundColor?: boolean;
  reverseFlex?: boolean;
}

export function Feature({
  featureItemsData,
  featureSvg,
  title,
  number,
  description,
  reviewText,
  reviewerImg,
  background,
  itemsBackgroundColor,
  reverseFlex,
}: FeatureProps) {
  return (
    <div
      className={`lg:px-20 lg:py-16 px-6 py-8 ${background && "bg-lightGray"}`}
    >
      <div
        className={`flex  flex-col md:items-center md:justify-between ${
          reverseFlex ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="md:w-[45%] md:flex md:gap-4">
          <h1 className="header-one font-bold flex gap-3">
            <span className="text-purple">{number}</span>
            <span className="md:hidden">{title}</span>
          </h1>
          <div>
            <h1 className="header-one hidden md:block">{title}</h1>
            <p className="mt-4 lg:text-xl text-lg ">{description}</p>
            <div className="mt-8">
              <Review reviewText={reviewText} reviewerImg={reviewerImg} />
            </div>
          </div>
        </div>
        <div className="md:w-[45%] w-full mt-4 md:mt-0">
          <img src={featureSvg} alt="secure svg" className="w-full" />
        </div>
      </div>
      <div className="mt-16 flex md:flex-row flex-col gap-4 md:justify-between">
        {featureItemsData.map((item, index) => (
          <FeatureItem
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
            key={index}
            backgroundColor={itemsBackgroundColor}
          />
        ))}
      </div>
    </div>
  );
}
