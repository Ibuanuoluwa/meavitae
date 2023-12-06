import workImg from "../../../assets/images/work-img.png";
import stroke from "../../../assets/icons/stroke.svg";
import pointOne from "../../../assets/icons/point-one.svg";
import pointTwo from "../../../assets/icons/point-two.svg";
import pointThree from "../../../assets/icons/point-three.svg";
import CustomButton from "../../common/custom-button";

export function WorkSection() {
  return (
    <div className="px-24 py-16 flex flex-col mt-16 gap-8">
      <h1 className="text-5xl font-bold">How Meavitae works</h1>
      <p className="text-2xl">Simple, Intuitive, and Tailored for You</p>
      <div className="flex  justify-between">
        <div className="w-[45%]">
          <img src={workImg} alt="work" />
        </div>
        <div className="flex gap-8 w-[50%]">
          <div className="flex flex-col items-center ">
            <div className="absolute z-0 mt-3">
              <img src={stroke} alt="stroke" />
            </div>
            <div className=" z-10">
              <img src={pointOne} alt="one" />
            </div>
            <div className="mt-[80px] z-10">
              <img src={pointTwo} alt="two" />
            </div>
            <div className="mt-[80px] z-10">
              <img src={pointThree} alt="three" />
            </div>
          </div>
          <div className="flex flex-col gap-7 w-[80%]">
            <div>
              <h1 className="text-2xl font-bold">Secure Hardware Key</h1>
              <p className="text-lg mt-3">
                Store all your vital information in an impenetrable fortress,
                accessible only by you
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Life Management Tools</h1>
              <p className="text-lg mt-3">
                Manage your finances, create a will, and be prepared for the
                unexpected
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Expert Guidance</h1>
              <p className="text-lg mt-3">
                Communicate securely with financial and legal experts and
                receive personalised recommendations for your matters
              </p>
            </div>
            <div className="w-fit mx-auto">
              <CustomButton background text="Get Started" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
