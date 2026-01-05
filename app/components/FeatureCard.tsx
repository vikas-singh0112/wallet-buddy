import Image from "next/image";

type FeatureCardProps = {
  src: string;
  alt: string;
  heading: string;
  paragraph: string;
};

function FeatureCard({ src, alt, heading, paragraph }: FeatureCardProps) {
  return (
    <div className="border border-[#5a597a] rounded-2xl p-6 bg-[#292655] mb-6">
      <Image src={src} alt={alt} width={70} height={70} />
      <h4 className="mt-4 mb-3 font-bold text-2xl">{heading}</h4>
      <p className="graytext text-xl leading-tight">{paragraph}</p>
    </div>
  );
}

export default FeatureCard;
