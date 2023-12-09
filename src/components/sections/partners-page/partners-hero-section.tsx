import partnerHero from "../../../assets/images/partner-hero-img.png"

export function PartnersHeroSection() {
  return (
    <div className="md:px-20 md:py-12 px-6 py-10 flex md:flex-row flex-col items-center md:justify-between md:my-20 ">
      <div className="flex flex-col gap-6 md:w-[50%]">
        <h1 className="header-one font-bold">Unlocking Success Together</h1>
        <p className="lg:text-2xl text-lg">
          At Meavitae, we recognise partners' pivotal role in amplifying our
          platform's reach and impact, making it a mutually beneficial
          collaboration. We understand the value of partnerships that go beyond
          amplifying our reach to include fostering collaboration and mutual
          growth. We welcome collaborative efforts where partners can not only
          bring in customers but also explore opportunities to offer their
          unique services through our platform
        </p>
      </div>
      <div className="md:w-[40%] my-4 md:my-0">
        <img src={partnerHero} alt="about hero" />
      </div>
    </div>
  );
}

