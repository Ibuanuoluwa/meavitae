import msgSvg from "../../../assets/svg/features/msg-svg.svg";
import accessibilityIcon from "../../../assets/icons/feature-icons/accessibility-icon.svg";
import colabIcon from "../../../assets/icons/feature-icons/colab-icon.svg";
import confiIcon from "../../../assets/icons/feature-icons/confi-icon.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-5.png";
import { Feature } from "./feature/feature";

const feautrePointsData = [
  {
    title: "Secure Collaboration",
    imgSrc: colabIcon,
    description:
      "End-to-end encryption ensures that your communications remain confidential, providing peace of mind. Communicate confidently with colleagues, clients, or collaborators",
  },
  {
    title: "Complete Confidentiality",
    imgSrc: confiIcon,
    description:
      "Your messages and data are for your eyes only. The system assures the highest level of confidentiality in your communications",
  },
  {
    title: "Accessibility",
    imgSrc: accessibilityIcon,
    description:
      "Access legal and financial professionals or other Meavitae users easily within this secure messaging system from anywhere",
  },
];

export function FeatureFive() {
  return (
    <div className="md:my-8">
      <Feature
        title="Secure Messaging"
        number="05"
        description="Take private communication to the next level. Communicate with Meavitae friends and share information with 3rd parties using our secure messaging system, ensuring no service provider can ever read your mails"
        reviewText="“As a digital marketing specialist obsessed with privacy, Meavitae's secure messaging is a game-changer. Trusting this platform was a no-brainer”"
        reviewerImg={reviewerImg}
        featureSvg={msgSvg}
        featurePointsData={feautrePointsData}
        pointsBackgroundColor
      />
    </div>
  );
}
