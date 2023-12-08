import netWorthSvg from "../../../assets/svg/features/net-worth-svg.svg";
import clarityIcon from "../../../assets/icons/feature-icons/clarity-icon.svg";
import trackerIcon from "../../../assets/icons/feature-icons/tracker-icon.svg";
import mobileIcon from "../../../assets/icons/feature-icons/mobile-icon.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-2.png";
import { Feature } from "./feature/feature";

const feautrePointsData = [
  {
    title: "Clarity",
    imgSrc: clarityIcon,
    description:
      "Consolidate assets and liabilities for a clear snapshot of your financial health",
  },
  {
    title: "Real-time Tracking",
    imgSrc: trackerIcon,
    description:
      "Track your net worth in real-time, allowing for instant insights and informed decision-making as your financial situation evolves",
  },
  {
    title: "Convenient Accessibility",
    imgSrc: mobileIcon,
    description:
      "Easily access your net worth data at the touch of a button, offering the flexibility to check and manage your financial status anytime, anywhere",
  },
];

export function FeatureTwo() {
  return (
    <div className="md:my-8">
      <Feature
        title="Net Worth Calculator"
        number="02"
        description="Record information about your assets, liabilities and outgoings to help manage and track your worth for easy financial management. With your financial and investment information all in one place, you can see your Net Worth whenever and wherever you like at the touch of a button."
        reviewText="“Meavitae's Net Worth Calculator revolutionised my financial management—recording assets and liabilities for easy tracking and insights anytime, anywhere”"
        reviewerImg={reviewerImg}
        featureSvg={netWorthSvg}
        featurePointsData={feautrePointsData}
        background
        reverseFlex
      />
    </div>
  );
}
