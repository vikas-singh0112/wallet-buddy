import Image from "next/image";

type FeatureCardProps = {
  src: string;
  alt: string;
  heading: string;
  paragraph: string;
};

function FeatureCard({ src, alt, heading, paragraph }: FeatureCardProps) {
  return (
    <div className="border border-[#353547] rounded-2xl p-6 bg-linear-to-r from-[#171937] to-[#212048] mb-6 lg:mb-0 ">
      <Image src={src} alt={alt} width={70} height={70} />
      <h4 className="mt-4 lg:mt-2 mb-3 lg:mb-1 font-bold text-2xl lg:text-xl ">{heading}</h4>
      <p className="graytext text-xl lg:text-base leading-tight">{paragraph}</p>
    </div>
  );
}

export default FeatureCard;
