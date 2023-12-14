import styled from "styled-components";
import mark from "../../../../assets/icons/mark.svg";

interface planItemsProp {
  title: string;
  minHeight?: string;
  items: string[];
}

interface planProps {
  background: boolean;
  name: string;
  price: string;
  description: string;
  planItems: planItemsProp[];
}

interface planItemsHeightProp {
  minHeight?: string;
}

const PlanContainer = styled.div`
  .header {
    border-radius: 20px 20px 0px 0px;
  }
`;

const PlanItemContainer = styled.div<planItemsHeightProp>`
  @media (min-width: 768px) {
    ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  }
`;

function Plan({ background, name, price, description, planItems }: planProps) {
  return (
    <PlanContainer className="md:w-[32%] flex flex-col gap-5">
      <div
        className={`header flex flex-col gap-4 bg-lightGray items-center justify-center p-4 ${
          background ? "bg-purple text-white" : ""
        } `}
      >
        <h6 className="md:text-2xl  text-lg">{name}</h6>
        <h1 className="font-bold md:text-3xl text-xl">{price}</h1>
        <p
          className={`italic md:text-lg text-sm ${
            !background ? "text-secondaryFont" : ""
          }`}
        >
          {description}
        </p>
      </div>
      {planItems.map((planItems, index) => (
        <PlanItemContainer
          minHeight={planItems.minHeight}
          className="flex flex-col gap-4 bg-lightGray p-4"
          key={index}
        >
          <h1 className="text-lg md:text-xl font-semibold">{planItems.title}</h1>
          {planItems.items.map((item, index) => (
            <div className="flex items-center gap-4" key={index}>
              <div className="w-[20px] md:w-fit">
                <img src={mark} alt="mark" className="w-full" />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </PlanItemContainer>
      ))}
    </PlanContainer>
  );
}

export default Plan;
