import googleBtn from "../../../assets/icons/google-play-btn.svg";
import appleBtn from "../../../assets/icons/app-store-btn.svg";

export function FeatureHeroSection() {
  return (
    <div className="md:px-20 px-6 md:py-20 py-10 flex flex-col items-center gap-8 h-full">
      <h1 className="header-one font-bold lg:w-[70%] mx-auto text-center">
        A unique solution for <span className="text-purple">everybody</span> at
        every stage of their lives
      </h1>
      <div className="flex gap-4 align-items-center md:mt-10 mt-4">
        <button className="lg:max-w-none max-w-[150px]">
          <img src={googleBtn} alt="google play" className="w-full" />
        </button>
        <button className="lg:max-w-none max-w-[150px]">
          <img src={appleBtn} alt="apple store" className="w-full" />
        </button>
      </div>
    </div>
  );
}
