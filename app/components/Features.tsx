import FeatureCard from "./FeatureCard";
import { features } from "../data/featureData";

function Features() {
  return (
    <section className="px-6">
      <div className="flex flex-col gap-4 mb-14">
        <h2 className="text-4xl font-semibold text-center">
          Everything You
          <br />
          Need to Succeed
        </h2>
        <p className="graytext text-center text-xl">
          Powerful features designed to give
          <br />
          you complete control over your
          <br /> finances
        </p>
      </div>

      {features.map((feature)=> (
            <FeatureCard key={feature.id} src={feature.src} alt={feature.alt} heading={feature.heading} paragraph={feature.paragraph} />
      ))}
      
    </section>
  );
}

export default Features;
