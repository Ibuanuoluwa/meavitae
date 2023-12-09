import willSvg from "../../../assets/svg/features/will-svg.svg";
import assetIcon from "../../../assets/icons/feature-icons/asset-icon.svg";
import mentalIcon from "../../../assets/icons/feature-icons/access-icon.svg";
import paperlessIcon from "../../../assets/icons/feature-icons/paperless-icon.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-4.png";
import { Feature } from "./feature/feature";

const feautrePointsData = [
  {
    title: "Asset Distribution",
    imgSrc: assetIcon,
    description:
      "Ensure your assets are distributed according to your wishes, clarifying and preventing potential disputes among family members",
  },
  {
    title: "Mental Ease",
    imgSrc: mentalIcon,
    description:
      "Having a will in place, knowing that your wishes are documented and your loved ones are provided for according to your intentions",
  },
  {
    title: "Time-saving",
    imgSrc: paperlessIcon,
    description:
      "Save valuable time that would otherwise be spent searching for the right template. Quick access to vital templates means you can focus on what matters most",
  },
];

export function FeatureFour() {
  return (
    <div className="md:my-8" id="will-creation">
      <Feature
        title="Will and Document Creation"
        number="04"
        description="Record the beneficiaries of gifts in your will against the assets to help speed up the administration of your estate. Keep your will in sync with assets & personal finance. Use asset information to ensure that you give the items that mean the most to you to the right people. Plus, explore a variety of templates from legal, financial, and health sectors, enhancing your life management experience"
        reviewText="Enlightened me on early will creation's importance for young parents. The platform makes it easy, emphasising it's for everyone caring about family"
        reviewerImg={reviewerImg}
        featureSvg={willSvg}
        featurePointsData={feautrePointsData}
        background
        reverseFlex
      />
    </div>
  );
}
