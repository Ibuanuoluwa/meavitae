import partnersPoints from "../../../../data/partnersItem";
import PartnersItem from "./partners-item";

export function SolutionSection() {
  return (
    <div className="md:px-20 md:py-12 px-6 py-10  md:my-20 my-10">
      <h1 className="header-one font-bold text-center">
        Tailored Solutions for Varied Professions
      </h1>
      <div className="flex flex-wrap gap-4 w-full md:mt-24 mt-8">
        {partnersPoints.map((item, index) => (
          <PartnersItem
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
