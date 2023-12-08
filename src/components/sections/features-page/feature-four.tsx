import willSvg from "../../../assets/svg/features/will-svg.svg";
import effortIcon from "../../../assets/icons/feature-icons/effort-icon.svg";
import accessIcon from "../../../assets/icons/feature-icons/access-icon.svg";
import paperlessIcon from "../../../assets/icons/feature-icons/paperless-icon.svg";
import { Feature } from "./feature/feature";

const feautrePointsData = [
  {
    title: "Effortless Organisation",
    imgSrc: effortIcon,
    description:
      "Simplifies the organisation of essential documents by providing a platform to categorise and store all your important information in one place",
  },
  {
    title: "Anywhere Access",
    imgSrc: accessIcon,
    description:
      "The convenience of accessing your critical data from anywhere with an internet connection. Whether at home, in the office, or on the go, you can securely retrieve and manage your information, providing flexibility",
  },
  {
    title: "Paperless Efficiency",
    imgSrc: paperlessIcon,
    description:
      "Moving from physical mess to using a digital solution, you contribute to environmental sustainability and enjoy the efficiency of having all your important documents in a digital format, reducing physical space",
  },
];

export function FeatureFour() {
  return (
    <div>
      <Feature
        title="Will and Document Creation"
        number="04"
        description="Where you can store everything important. Replace mountains of paper and rows of filing cabinets by storing your paperwork in one place, saving you countless hours trying to find the necessary things. Utilising cutting-edge hardware technology, your data remains exclusively accessible to you."
        featureSvg={willSvg}
        featurePointsData={feautrePointsData}
        background
        reverseFlex
      />
    </div>
  );
}
