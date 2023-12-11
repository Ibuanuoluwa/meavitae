import pricingHero from "../../../assets/images/pricing-hero-img.png";

export function PricingHeroSection() {
  return (
    <div className="flex md:flex-row flex-col items-center md:justify-between md:px-20 md:py-12 px-6 py-10 gap-8">
      <div className="flex flex-col gap-6 ">
        <h1 className="header-one font-bold">Our Pricing</h1>
        <p className="lg:text-2xl text-lg">
          This is what it costs to get peace of mind
        </p>
      </div>
      <div className=" my-4 md:my-0">
        <img src={pricingHero} alt="about hero" />
      </div>
    </div>
  );
}
