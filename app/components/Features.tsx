import FeatureCard from "./FeatureCard";
import { features } from "../data/data";

function Features() {
  return (
    <section className="px-6 lg:w-5/6 mb-10 lg:my-15 sm:px-8">
      <div className="flex flex-col gap-4 mb-14">
        <h2 className="text-4xl lg:text-5xl font-semibold text-center">
          Everything You <br className="md:hidden"/> Need to Succeed
        </h2>
        <p className="graytext text-center text-xl">
          Powerful features designed to give
          <br className="md:hidden"/>
          you complete control over your
          <br className="md:hidden" /> finances
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {features.map((feature)=> (
            <FeatureCard key={feature.id} src={feature.src} alt={feature.alt} heading={feature.heading} paragraph={feature.paragraph} />
      ))}
      </div>
      
    </section>
  );
}

export default Features;
