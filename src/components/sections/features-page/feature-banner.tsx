import CustomButton from "../../common/custom-button";

export function FeatureBanner() {
  return (
    <div className="md:px-20 px-6 md:py-20 py-10 flex flex-col items-center gap-8 h-full">
      <h1 className="header-one font-bold lg:w-[70%] mx-auto text-center">
        Be part of this life-changing platform with features designed to
        simplify your life
      </h1>
      <div className=" md:mt-10 mt-4">
        <CustomButton background text="Join Now" />
      </div>
    </div>
  );
}
