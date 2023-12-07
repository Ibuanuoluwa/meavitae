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
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:w-[45%] flex flex-col gap-6">
          <h1 className="md:text-3xl text-xl  font-bold">{title}</h1>
          <p className="md:text-xl text-lg">{description}</p>
          <div className="flex flex-col gap-5 md:text-2xl text-lg font-semibold mt-8">
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
        <div className="md:w-[45%]">
          <img src={img} alt="secure" />
        </div>
      </div>
    </div>
  );
}

export default Feature;
