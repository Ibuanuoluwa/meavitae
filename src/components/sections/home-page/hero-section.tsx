import CustomButton from "../../common/custom-button";
import centerImg from "../../../assets/images/hero-images/classroom-workbench.png";
import leftImg1 from "../../../assets/images/hero-images/shipping-business.png";
import leftImg2 from "../../../assets/images/hero-images/equipment-job.png";
import rightImg1 from "../../../assets/images/hero-images/classroom-workbench.png";
import rightImg2 from "../../../assets/images/hero-images/helicopter-pilot.png";
import googleIcon from "../../../assets/icons/google-icon.svg";
import appleIcon from "../../../assets/icons/apple-icon.svg";
import emailIcon from "../../../assets/icons/email-icon.svg";
import HeroSvg from "./hero-svg";

export function HeroSection() {
  return (
    <div className="flex md:flex-row flex-col items-center md:justify-between md:px-20 md:py-12 px-6 py-10 bg-lightPurple">
      <div className="flex flex-col items-center md:items-start gap-7 md:w-[45%]">
        <h1 className="header-one font-bold text-center md:text-left">
          Your Life, Your Legacy, <span className="text-purple">Securely </span>
          Managed
        </h1>
        <p className="lg:text-2xl text-lg text-center md:text-left">
          Discover Meavitae, your all-in-one digital vault solution for managing
          life's vital aspects with the highest level of security and privacy
        </p>
        <div className="flex flex-col gap-4 w-[60%]">
          <CustomButton imageSrc={googleIcon} text="Continue with Goggle" />
          <CustomButton imageSrc={appleIcon} text="Continue with Apple" />
          <CustomButton
            imageSrc={emailIcon}
            text="SignUp with Email"
            type="primary"
          />
        </div>
      </div>
      <div className="md:w-[45%] mt-8 md:mt-0">
        <HeroSvg
          centerImg={centerImg}
          leftImg1={leftImg1}
          leftImg2={leftImg2}
          rightImg1={rightImg1}
          rightImg2={rightImg2}
        />
      </div>
    </div>
  );
}
