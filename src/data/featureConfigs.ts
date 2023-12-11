import secureSvg from "../assets/svg/features/secure-svg.svg";
import reviewerImgOne from "../assets/images/reviewer-profile-images/profile-img-1.png";
import featuresItemData from "./featuresItemData";
import netWorthSvg from "../assets/svg/features/net-worth-svg.svg";
import reviewerImgTwo from "../assets/images/reviewer-profile-images/profile-img-2.png";
import legalSvg from "../assets/svg/features/legal-svg.svg";
import reviewerImgThree from "../assets/images/reviewer-profile-images/profile-img-3.png";
import willSvg from "../assets/svg/features/will-svg.svg";
import reviewerImgFour from "../assets/images/reviewer-profile-images/profile-img-4.png";
import msgSvg from "../assets/svg/features/msg-svg.svg";
import reviewerImgFive from "../assets/images/reviewer-profile-images/profile-img-5.png";
import aiSvg from "../assets/svg/features/ai-svg.svg";
import reviewerImgSix from "../assets/images/reviewer-profile-images/profile-img-6.png";
import reviewerImgSeven from "../assets/images/reviewer-profile-images/profile-img-7.png";

export const featureConfigs = {
  featureOne: {
    id: "secure-digital",
    title: "Secure Digital Vault",
    number: "01",
    description:
      "Where you can store everything important. Replace mountains of paper and rows of filing cabinets by storing your paperwork in one place, saving you countless hours trying to find the necessary things. Utilising cutting-edge hardware technology, your data remains exclusively accessible to you.",
    reviewText:
      "“Meavitae transformed my paperwork approach, bringing organisation and stress-free document management into my life”",
    reviewerImg: reviewerImgOne,
    featureSvg: secureSvg,
    featureItemsData: featuresItemData.featureOne,
    itemsBackgroundColor: true,
  },
  featureTwo: {
    title: "Net Worth Calculator",
    number: "02",
    description:
      "Record information about your assets, liabilities and outgoings to help manage and track your worth for easy financial management. With your financial and investment information all in one place, you can see your Net Worth whenever and wherever you like at the touch of a button.",
    reviewText:
      "“Meavitae's Net Worth Calculator revolutionised my financial management—recording assets and liabilities for easy tracking and insights anytime, anywhere”",
    reviewerImg: reviewerImgTwo,
    featureSvg: netWorthSvg,
    featureItemsData: featuresItemData.featureTwo,
    background: true,
    reverseFlex: true,
  },
  featureThree: {
    title: "Legal and Financial Advisors",
    number: "03",
    description:
      "If you want to enhance your value, MeaVitae, with your consent, can connect you to trusted 3rd party advisors. We believe that if you plan today, tomorrow will look after itself.  It can lead to anxious times when you need legal support, so why not seek advice from our Legal Services partner, who can provide peace of mind at reasonable rates?",
    reviewText:
      "“Meavitae eased my estate planning worries, offering legal advisor access for creating a will. The support turned a daunting task into simplicity”",
    reviewerImg: reviewerImgThree,
    featureSvg: legalSvg,
    featureItemsData: featuresItemData.featureThree,
    itemsBackgroundColor: true,
  },
  featureFour: {
    title: "Will and Document Creation",
    number: "04",
    description:
      "Record the beneficiaries of gifts in your will against the assets to help speed up the administration of your estate. Keep your will in sync with assets & personal finance. Use asset information to ensure that you give the items that mean the most to you to the right people. Plus, explore a variety of templates from legal, financial, and health sectors, enhancing your life management experience",
    reviewText:
      "Enlightened me on early will creation's importance for young parents. The platform makes it easy, emphasising it's for everyone caring about family",
    reviewerImg: reviewerImgFour,
    featureSvg: willSvg,
    featureItemsData: featuresItemData.featureFour,
    background: true,
    reverseFlex: true,
  },
  featureFive: {
    title: "Secure Messaging",
    number: "05",
    description:
      "Take private communication to the next level. Communicate with Meavitae friends and share information with 3rd parties using our secure messaging system, ensuring no service provider can ever read your mails",
    reviewText:
      "“As a digital marketing specialist obsessed with privacy, Meavitae's secure messaging is a game-changer. Trusting this platform was a no-brainer”",
    reviewerImg: reviewerImgFive,
    featureSvg: msgSvg,
    featureItemsData: featuresItemData.featureFive,
    itemsBackgroundColor: true,
  },
  featureSix: {
    title: "AI Letter Writer",
    number: "06",
    description:
      "Create personalised, mistake-free documents, saving time. These letters stay consistent and fit different situations. You can customise them, use different languages, and make sure they follow your specific rules. This helps you get more done!",
    reviewText:
      "“As a busy legal professional, Meavitae's AI letter writer feature is a lifesaver! Crafting personalised, error-free documents within the platform is easy, and it has helped me be more productive”",
    reviewerImg: reviewerImgSix,
    featureSvg: aiSvg,
    featureItemsData: featuresItemData.futureSix,
    background: true,
    reverseFlex: true,
  },
  featureSeven: {
    title: "Knowledge Base",
    number: "07",
    description:
      "We offer valuable insights and information to further assist you in navigating various aspects of life management",
    reviewText:
      "“When crafting my NDA, the wealth of information and insights available in the knowledge base was very helpful. It streamlined the process and gave me a deeper understanding of the documents I was completing”",
    reviewerImg: reviewerImgSeven,
    featureSvg: secureSvg,
    featureItemsData: featuresItemData.futureSix,
    itemsBackgroundColor: true,
  },
};
