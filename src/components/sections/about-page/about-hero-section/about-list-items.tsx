import React from "react";
import safeIcon from "../../../../assets/icons/about-icons/safe-icon.svg";
import workIcon from "../../../../assets/icons/about-icons/work-icon.svg";
import securedIcon from "../../../../assets/icons/about-icons/secured-icon.svg";

const aboutListItemsData = [
  {
    img: safeIcon,
    text: "We passionately believe that how we interact with technology today can make planning for the future more accessible, simpler and safer even while we live busy lives",
  },
  {
    img: workIcon,
    text: "We encourage you to dispose of the paper clutter you accumulate daily and to take a more holistic approach to managing your life where it stops being a chore and becomes so easy that it can be managed on the commute to work",
  },
  {
    img: securedIcon,
    text: "Everything we offer is secured using the latest technology, and it costs you less than a cup of coffee a day",
  },
];

function AboutListItems() {
  return (
    <div className="my-16 md:my-20">
      {aboutListItemsData.map((item, index) => (
        <div className="flex gap-4 my-3 md:my-6 md:gap-6 ">
          <div className="min-w-[24px]">
            <img
              src={item.img}
              alt={`about icon ${index}`}
              className="w-full"
            />
          </div>
          <p className="lg:text-xl text-left md:w-[90%] ">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutListItems;
