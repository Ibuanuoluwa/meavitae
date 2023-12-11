import msgSvg from "../../../assets/svg/features/msg-svg.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-5.png";
import { Feature } from "./feature/feature";
import featuresItemData from "../../../data/featuresItemData";
import { FeatureWrapper } from "./feature-wrapper";


export function FeatureFive() {
  return (
    <FeatureWrapper id="secure-msg">
      <Feature
        title="Secure Messaging"
        number="05"
        description="Take private communication to the next level. Communicate with Meavitae friends and share information with 3rd parties using our secure messaging system, ensuring no service provider can ever read your mails"
        reviewText="“As a digital marketing specialist obsessed with privacy, Meavitae's secure messaging is a game-changer. Trusting this platform was a no-brainer”"
        reviewerImg={reviewerImg}
        featureSvg={msgSvg}
        featureItemsData={featuresItemData.featureFive}
        itemsBackgroundColor
      />
    </FeatureWrapper>
  );
}
