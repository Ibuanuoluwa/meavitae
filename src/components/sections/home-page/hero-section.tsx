import googleBtn from "../../../assets/icons/google-play-btn.svg";
import appleBtn from "../../../assets/icons/app-store-btn.svg";
import centerImg from "../../../assets/images/blog-img/img-1.png";
import leftImg1 from "../../../assets/images/blog-img/img-1.png";
import leftImg2 from "../../../assets/images/blog-img/img-1.png";
import rightImg1 from "../../../assets/images/blog-img/img-1.png";
import rightImg2 from "../../../assets/images/blog-img/img-1.png";
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
        <div className="flex gap-4 items-center mt-4 md:mt-10">
          <button className="lg:max-w-none max-w-[150px]">
            <img src={googleBtn} alt="google play" className="w-full" />
          </button>
          <button className="lg:max-w-none max-w-[150px]">
            <img src={appleBtn} alt="apple store" className="w-full" />
          </button>
        </div>
      </div>
      <div className="md:w-[45%] mt-8 md:mt-0">
        {/* <img src={heroImg} alt="hero" /> */}
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
