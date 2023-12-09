import React from 'react';
import settingsIcon from "../../../assets/icons/partners-icon/settings-icon.svg"
import supportIcon from "../../../assets/icons/partners-icon/support-icon.svg";


const rewardListItemsData = [
  {
    img: settingsIcon,
    text: "We offer a suite of tools and features that act as a 'one-stop-shop,' allowing customers to record information about and assess the value of their assets and liabilities. Understand your net worth and consider how to best plan for the future",
  },
  {
    img: supportIcon,
    text: "MeaVitae revolutionises how people live, enabling them to plan for their dream house, that long-awaited holiday, or spend more time with family. We recognise that not everyone is an expert, so MeaVitae connects your clients with trusted professionals in wealth management, pensions, and specialised legal areas to help them make the most of what they have and prepare for the unexpected",
  },
];

export function RewardSection() {
  return (
    <div className="md:px-20 md:py-20 px-6 py-10  md:my-20 my-10 bg-lightPurple">
      <h1 className="header-one font-bold text-center">
        Rewards That Reflect Our Commitment
      </h1>
      <p className="lg:text-2xl text-lg my-3 md:my-8">
        Beyond collaboration, we believe in rewarding our partners. We offer
        commissions for every customer you bring to our platform, ensuring your
        advocacy is recognised and returned. Join our dynamic team of partners
        at MeaVitae!
      </p>
      <div className="my-3 md:my-10">
        {rewardListItemsData.map((item, index) => (
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
      <p className="lg:text-2xl text-lg my-5">
        Join us and be a part of transforming lives and simplifying planning
      </p>
    </div>
  );
}

