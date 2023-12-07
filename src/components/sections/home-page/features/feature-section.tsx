import React, { useState } from "react";
import featureData from "../../../../data/feature";
import Feature from "./feature";
import styled from "styled-components";
import CustomButton from "../../../common/custom-button";

export function FeatureSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabContent = [
    "Secure Storage",
    "Secure Communication",
    "Financial Management",
    "Legacy Management",
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `;
  interface TabProps {
    isActive: boolean;
  }

  const Tab = styled.div<TabProps>`
    padding: 10px 20px;
    cursor: pointer;
    .border {
      height: 8px;
      border-radius: 4px;
      border: none !important;
      margin: 15px 0;
      background-color: ${(props) =>
        props.isActive ? "#8686C3" : "transparent"};
    }
  `;

  return (
    <div className="md:px-20 px-6 py-16 flex flex-col md:mt-16 mt-8 gap-8">
      <h1 className="header-one font-bold text-center">Features</h1>
      <p className="md:text-2xl text-lg text-center">
        Centralizing life aspects for streamlined, secured management and peace
        of mind
      </p>
      <div className="md:flex hidden items-center justify-between my-8 text-2xl">
        {tabContent.map((content, index) => (
          <Tab
            key={index}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          >
            <p>{content}</p>
            <div className="border" />
          </Tab>
        ))}
      </div>
      <div>
        <div className="hidden md:block">
          {activeTab === 0 && (
            <div>
              <Feature
                title={featureData[0].title}
                description={featureData[0].description}
                points={featureData[0].points}
                img={featureData[0].img}
              />
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <Feature
                title={featureData[1].title}
                description={featureData[1].description}
                points={featureData[1].points}
                img={featureData[1].img}
              />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <Feature
                title={featureData[2].title}
                description={featureData[2].description}
                points={featureData[2].points}
                img={featureData[2].img}
              />
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <Feature
                title={featureData[3].title}
                description={featureData[3].description}
                points={featureData[3].points}
                img={featureData[3].img}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6 md:hidden">
        {featureData.map((feature, index) => (
          <Feature
            title={feature.title}
            description={feature.description}
            points={feature.points}
            img={feature.img}
            key={index}
          />
        ))}
      </div>
      <div className="md:w-fit mx-auto mt-20">
        <CustomButton background text="All Features" />
      </div>
    </div>
  );
}
