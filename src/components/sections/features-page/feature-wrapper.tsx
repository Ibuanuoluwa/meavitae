import { ReactNode } from "react";

type featureWrapperProp = {
  id: string;
  children: ReactNode;
};

export const FeatureWrapper = ({ id, children }: featureWrapperProp) => (
  <div className="md:my-8" id={id}>
    {children}
  </div>
);
