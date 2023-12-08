import React from "react";
import styled from "styled-components";
import featureMenuItems from "../../data/featureMenuItems";

function FeatureMenu() {
  return (
    <FeatureMenuWrapper>
      {featureMenuItems.map((item, index) => (
        <div className="flex gap-4" key={index}>
          <div>
            <img src={item.img} alt={item.title} />
          </div>
          <div className="flex flex-col gap-1 md:max-w-[250px]">
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </FeatureMenuWrapper>
  );
}

const FeatureMenuWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 30px;
  width: 1181px !important;
  width: 80%;
  flex-wrap: wrap;
  border-radius: 16px;
  border: 2px solid var(--White, #fff);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
`;

export default FeatureMenu;
