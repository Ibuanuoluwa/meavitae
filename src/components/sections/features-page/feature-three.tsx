import legalSvg from "../../../assets/svg/features/legal-svg.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-3.png";
import { Feature } from "./feature/feature";
import featuresItemData from "../../../data/featuresItemData";
import { FeatureWrapper } from "./feature-wrapper";

export function FeatureThree() {
  return (
    <FeatureWrapper id="legal-advisors">
      <Feature
        title="Legal and Financial Advisors"
        number="03"
        description="If you want to enhance your value, MeaVitae, with your consent, can connect you to trusted 3rd party advisors. We believe that if you plan today, tomorrow will look after itself.  It can lead to anxious times when you need legal support, so why not seek advice from our Legal Services partner, who can provide peace of mind at reasonable rates?"
        reviewText="“Meavitae eased my estate planning worries, offering legal advisor access for creating a will. The support turned a daunting task into simplicity”"
        reviewerImg={reviewerImg}
        featureSvg={legalSvg}
        featureItemsData={featuresItemData.featureThree}
        itemsBackgroundColor
      />
    </FeatureWrapper>
  );
}
