import secureSvg from "../../../assets/svg/features/secure-svg.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-1.png";
import { Feature } from "./feature/feature";
import featuresItemData from "../../../data/featuresItemData";

export function FeatureOne() {
  return (
    <div className="md:my-8" id="secure-digital">
      <Feature
        title="Secure Digital Vault"
        number="01"
        description="Where you can store everything important. Replace mountains of paper and rows of filing cabinets by storing your paperwork in one place, saving you countless hours trying to find the necessary things. Utilising cutting-edge hardware technology, your data remains exclusively accessible to you."
        reviewText="“Meavitae transformed my paperwork approach, bringing organisation and stress-free document management into my life”"
        reviewerImg={reviewerImg}
        featureSvg={secureSvg}
        featureItemsData={featuresItemData.featureOne}
        itemsBackgroundColor
      />
    </div>
  );
}
