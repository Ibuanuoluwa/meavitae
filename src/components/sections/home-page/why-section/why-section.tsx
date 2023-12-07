import React from "react";
import whyPoints from "../../../../data/whyPoints";
import WhyPoint from "./why-point";
import CustomButton from "../../../common/custom-button";

export function WhySection() {
  return (
    <div className="md:px-20 px-6 py-8 flex flex-col md:mt-16 mt-8 gap-8">
      <h1 className="header-one font-bold text-center">Why choose Meavitae?</h1>
      <div className="flex flex-wrap gap-4 w-full md:mt-24 mt-8">
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
