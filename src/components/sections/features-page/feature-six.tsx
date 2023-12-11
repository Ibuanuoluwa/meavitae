import aiSvg from "../../../assets/svg/features/ai-svg.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-6.png";
import { Feature } from "./feature/feature";
import featuresItemData from "../../../data/featuresItemData";
import { FeatureWrapper } from "./feature-wrapper";


export function FeatureSix() {
  return (
    <FeatureWrapper id="ai-writer">
      <Feature
        title="AI Letter Writer"
        number="06"
        description="Create personalised, mistake-free documents, saving time. These letters stay consistent and fit different situations. You can customise them, use different languages, and make sure they follow your specific rules. This helps you get more done!"
        reviewText="“As a busy legal professional, Meavitae's AI letter writer feature is a lifesaver! Crafting personalised, error-free documents within the platform is easy, and it has helped me be more productive”"
        reviewerImg={reviewerImg}
        featureSvg={aiSvg}
        featureItemsData={featuresItemData.futureSix}
        background
        reverseFlex
      />
    </FeatureWrapper>
  );
}
