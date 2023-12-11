import knowledgeSvg from "../../../assets/svg/features/knowlegde-svg.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-7.png";
import { Feature } from "./feature/feature";
import featuresItemData from "../../../data/featuresItemData";
import { FeatureWrapper } from "./feature-wrapper";

export function FeatureSeven() {
  return (
    <FeatureWrapper id="knowlegde-base">
      <Feature
        title="Knowledge Base"
        number="07"
        description="We offer valuable insights and information to further assist you in navigating various aspects of life management"
        reviewText="“When crafting my NDA, the wealth of information and insights available in the knowledge base was very helpful. It streamlined the process and gave me a deeper understanding of the documents I was completing”"
        reviewerImg={reviewerImg}
        featureSvg={knowledgeSvg}
        featureItemsData={featuresItemData.futureSix}
        itemsBackgroundColor
      />
    </FeatureWrapper>
  );
}
