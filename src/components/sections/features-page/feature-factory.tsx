import { FeatureConfigs, featureConfigs } from "../../../data/featureConfigs";
import { Feature } from "./feature/feature";
import { FeatureWrapper } from "./feature-wrapper";

export function createFeature(configKey: keyof FeatureConfigs) {
  const featureProps = featureConfigs[configKey];
  return function FeatureComponent() {
    return (
      <FeatureWrapper id={featureProps.id || ""}>
        <Feature {...featureProps} />
      </FeatureWrapper>
    );
  };
}
