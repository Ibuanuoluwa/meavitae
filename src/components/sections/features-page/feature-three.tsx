import legalSvg from "../../../assets/svg/features/legal-svg.svg";
import shareIcon from "../../../assets/icons/feature-icons/share-icon.svg";
import supportIcon from "../../../assets/icons/feature-icons/support-icon.svg";
import legalIcon from "../../../assets/icons/feature-icons/legal-icon.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-3.png";
import { Feature } from "./feature/feature";

const feautrePointsData = [
  {
    title: "Secure Sharing",
    imgSrc: shareIcon,
    description:
      "Share sensitive documents with total confidence, ensuring that your information remains confidential and protected from interception",
  },
  {
    title: "Comprehensive Support",
    imgSrc: supportIcon,
    description:
      "Receive legal and financial support in one centralised location",
  },
  {
    title: "Tranquillity",
    imgSrc: legalIcon,
    description:
      "Interact with legal and financial professionals, ensuring the highest protection for sensitive information",
  },
];

export function FeatureThree() {
  return (
    <div className="md:my-8">
      <Feature
        title="Legal and Financial Advisors"
        number="03"
        description="If you want to enhance your value, MeaVitae, with your consent, can connect you to trusted 3rd party advisors. We believe that if you plan today, tomorrow will look after itself.  It can lead to anxious times when you need legal support, so why not seek advice from our Legal Services partner, who can provide peace of mind at reasonable rates?"
        reviewText="“Meavitae eased my estate planning worries, offering legal advisor access for creating a will. The support turned a daunting task into simplicity”"
        reviewerImg={reviewerImg}
        featureSvg={legalSvg}
        featurePointsData={feautrePointsData}
        pointsBackgroundColor
      />
    </div>
  );
}
