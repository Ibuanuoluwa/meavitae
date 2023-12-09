import secureSvg from "../../../assets/svg/features/secure-svg.svg";
import docIcon from "../../../assets/icons/feature-icons/doc-icon.svg";
import deepIcon from "../../../assets/icons/feature-icons/deep-icon.svg";
import decisionIcon from "../../../assets/icons/feature-icons/decision-icon.svg";
import reviewerImg from "../../../assets/images/reviewer-profile-images/profile-img-7.png";
import { Feature } from "./feature/feature";

const feautrePointsData = [
  {
    title: "Document Assistance",
    imgSrc: docIcon,
    description:
      "The Knowledge Base accelerates document creation by providing comprehensive information and insights, ensuring a smoother and more efficient crafting experience",
  },
  {
    title: "Deep Comprehension",
    imgSrc: deepIcon,
    description:
      "Users gain a profound understanding of the documents they're completing, thanks to the Knowledge Base's wealth of information and insights, empowering them with greater confidence and clarity",
  },
  {
    title: "Decision confidence",
    imgSrc: decisionIcon,
    description:
      "Providing information on document creation and life management, it accelerates the process, giving you confidence to make informed decisions for effective life management tasks and document creation",
  },
];

export function FeatureSeven() {
  return (
    <div className="md:my-8" id="knowlegde-base">
      <Feature
        title="Knowledge Base"
        number="07"
        description="We offer valuable insights and information to further assist you in navigating various aspects of life management"
        reviewText="“When crafting my NDA, the wealth of information and insights available in the knowledge base was very helpful. It streamlined the process and gave me a deeper understanding of the documents I was completing”"
        reviewerImg={reviewerImg}
        featureSvg={secureSvg}
        featurePointsData={feautrePointsData}
        pointsBackgroundColor
      />
    </div>
  );
}
