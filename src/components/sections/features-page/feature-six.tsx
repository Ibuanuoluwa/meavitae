import aiSvg from "../../../assets/svg/features/ai-svg.svg";
import efficiencyIcon from "../../../assets/icons/feature-icons/efficiency-icon.svg";
import consistencyIcon from "../../../assets/icons/feature-icons/consistency-icon.svg";
import errorIcon from "../../../assets/icons/feature-icons/error-icon.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-6.png";
import { Feature } from "./feature/feature";

const feautrePointsData = [
  {
    title: "Efficiency",
    imgSrc: efficiencyIcon,
    description:
      "Generate personalised letters quickly and efficiently, allowing you to focus on other important tasks",
  },
  {
    title: "Consistency",
    imgSrc: consistencyIcon,
    description:
      "Ensure consistency in your written communication. The AI letter writer creates documents that stay true to your style and tone, providing a cohesive and professional image across various situations",
  },
  {
    title: "Error reduction",
    imgSrc: errorIcon,
    description:
      "Reduce the likelihood of errors in written communication. This tool helps ensure that documents are free from spelling mistakes, grammatical errors, and inconsistencies",
  },
];

export function FeatureSix() {
  return (
    <div className="md:my-8" id="ai-writer">
      <Feature
        title="AI Letter Writer"
        number="06"
        description="Create personalised, mistake-free documents, saving time. These letters stay consistent and fit different situations. You can customise them, use different languages, and make sure they follow your specific rules. This helps you get more done!"
        reviewText="“As a busy legal professional, Meavitae's AI letter writer feature is a lifesaver! Crafting personalised, error-free documents within the platform is easy, and it has helped me be more productive”"
        reviewerImg={reviewerImg}
        featureSvg={aiSvg}
        featurePointsData={feautrePointsData}
        background
        reverseFlex
      />
    </div>
  );
}
