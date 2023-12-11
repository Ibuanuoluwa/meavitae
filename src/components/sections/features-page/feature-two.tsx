import netWorthSvg from "../../../assets/svg/features/net-worth-svg.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-2.png";
import { Feature } from "./feature/feature";
import featuresItemData from "../../../data/featuresItemData";
import { FeatureWrapper } from "./feature-wrapper";



export function FeatureTwo() {
  return (
    <FeatureWrapper id="net-worth">
      <Feature
        title="Net Worth Calculator"
        number="02"
        description="Record information about your assets, liabilities and outgoings to help manage and track your worth for easy financial management. With your financial and investment information all in one place, you can see your Net Worth whenever and wherever you like at the touch of a button."
        reviewText="“Meavitae's Net Worth Calculator revolutionised my financial management—recording assets and liabilities for easy tracking and insights anytime, anywhere”"
        reviewerImg={reviewerImg}
        featureSvg={netWorthSvg}
        featureItemsData={featuresItemData.featureTwo}
        background
        reverseFlex
      />
    </FeatureWrapper>
  );
}
