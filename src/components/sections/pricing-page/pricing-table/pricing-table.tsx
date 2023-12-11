import plansData from "../../../../data/plansData";
import Plan from "./plan";

export function PricingTable() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between md:px-20 md:py-12 px-6 py-10 gap-8">
      {plansData.map((plan, index) => (
        <Plan
          name={plan.details.name}
          price={plan.details.price}
          description={plan.details.description}
          background={plan.details.background}
          planItems={plan.planItems}
          key={index}
        />
      ))}
    </div>
  );
}
