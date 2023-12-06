import React from "react";
import whyPoints from "../../../../data/whyPoints";
import WhyPoint from "./why-point";
import CustomButton from "../../../common/custom-button";

export function WhySection() {
  return (
    <div className="px-24 py-8 flex flex-col mt-16 gap-8">
      <h1 className="text-5xl font-bold text-center">Why choose Meavitae?</h1>
      <div className="flex flex-wrap gap-4 w-full mt-24">
        {whyPoints.map((point, index) => (
          <WhyPoint
            title={point.title}
            imgSrc={point.imgSrc}
            description={point.description}
            key={index}
          />
        ))}
      </div>
      <div className="w-fit mx-auto">
        <CustomButton background text="Join Us" />
      </div>
    </div>
  );
}
