import willSvg from "../../../assets/svg/features/will-svg.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-4.png";
import { Feature } from "./feature/feature";
import featuresItemData from "../../../data/featuresItemData";
import { FeatureWrapper } from "./feature-wrapper";


export function FeatureFour() {
  return (
    <FeatureWrapper id="will-creation">
      <Feature
        title="Will and Document Creation"
        number="04"
        description="Record the beneficiaries of gifts in your will against the assets to help speed up the administration of your estate. Keep your will in sync with assets & personal finance. Use asset information to ensure that you give the items that mean the most to you to the right people. Plus, explore a variety of templates from legal, financial, and health sectors, enhancing your life management experience"
        reviewText="Enlightened me on early will creation's importance for young parents. The platform makes it easy, emphasising it's for everyone caring about family"
        reviewerImg={reviewerImg}
        featureSvg={willSvg}
        featureItemsData={featuresItemData.featureFour}
        background
        reverseFlex
      />
    </FeatureWrapper>
  );
}
