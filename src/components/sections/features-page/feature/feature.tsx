import React from "react";
import Review from "./review";
import FeaturePoint from "./features-points";

interface FeaturePointData {
  title: string;
  imgSrc: string;
  description: string;
}

interface FeatureProps {
  featurePointsData: FeaturePointData[];
  featureSvg: string;
  title: string;
  description: string;
  background?: boolean;
  pointsBackgroundColor?: boolean;
}

export function Feature({
  featurePointsData,
  featureSvg,
  title,
  description,
  background,
  pointsBackgroundColor,
}: FeatureProps) {
  return (
    <div
      className={`lg:px-20 lg:py-16 px-6 py-8 ${background && "bg-lightGray"}`}
    >
      <div className="flex md:flex-row flex-col md:items-center md:justify-between">
        <div className="md:w-[45%]">
          <h1 className="header-one font-bold flex gap-3">
            <span className="text-purple">01</span>
            <span>{title}</span>
          </h1>
          <p className="mt-4 lg:text-xl text-lg ">{description}</p>
          <div className="mt-8">
            <Review />
          </div>
        </div>
        <div className="md:w-[45%] w-full mt-4 md:mt-0">
          <img src={featureSvg} alt="secure svg" className="w-full" />
        </div>
      </div>
      <div className="mt-16 flex md:flex-row flex-col gap-4 md:justify-between">
        {featurePointsData.map((point, index) => (
          <FeaturePoint
            title={point.title}
            imgSrc={point.imgSrc}
            description={point.description}
            key={index}
            backgroundColor={pointsBackgroundColor}
          />
        ))}
      </div>
    </div>
  );
}
