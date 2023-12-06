import mark from "../../../../assets/icons/mark.svg";
import CustomButton from "../../../common/custom-button";

type featureProp = {
  title: string;
  description: string;
  points: string[];
  img: string;
};

function Feature({ title, description, points, img }: featureProp) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[45%] flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-xl ">{description}</p>
          <div className="flex flex-col gap-5 text-2xl font-semibold mt-8">
            {points.map((point, index) => (
              <p className="flex gap-4 items-center" key={index}>
                <span>
                  <img src={mark} alt="mark" />
                </span>
                <span>{point}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="w-[45%]">
          <img src={img} alt="secure" />
        </div>
      </div>
      <div className="w-fit mx-auto mt-20">
        <CustomButton background text="All Features" />
      </div>
    </div>
  );
}

export default Feature;
