import aboutHero from "../../../../assets/images/about-hero-img.png";
import AboutListItems from "./about-list-items";

export function AboutHeroSection() {
  return (
    <div className="md:px-20 md:py-12 px-6 py-10">
      <div className="flex md:flex-row flex-col items-center md:justify-between md:my-20 my-10">
        <div className="flex flex-col gap-6 md:w-[45%]">
          <h1 className="header-one font-bold">About Us</h1>
          <p className="lg:text-2xl text-lg">
            We aim to enhance your focus on life's positive aspects by offering
            tools that facilitate easy planning for the present and the future.
            This ensures peace of mind, knowing your friends and family will be
            well cared for in the long run.
          </p>
        </div>
        <div className="md:w-[45%] my-4 md:my-0">
          <img src={aboutHero} alt="about hero" />
        </div>
      </div>
      <AboutListItems />
    </div>
  );
}
