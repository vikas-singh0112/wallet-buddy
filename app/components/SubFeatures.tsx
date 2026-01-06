import { CircleCheck, MoveUpRight } from "lucide-react";
import { subFeaturesList } from "../data/data";
function SubFeatures() {
  return (
    <section className="w-full lg:w-5/6 px-6 sm:px-8">
      <div className="bg-linear-to-br from-[#9616fa] via-[#5251fb] to-[#4940f7] p-10 rounded-2xl flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to <br className="sm:hidden" /> Take Control <br /> of Your{" "}
            <br className="sm:hidden" /> Finances?
          </h2>
          <p>
            Join thousands of users who are already managing their{" "}
            <br className="hidden md:flex" /> money smarter with{" "}
            <span className="font-bold underline">Wallet Buddy</span>
          </p>
          <ul className="flex flex-col gap-4">
            {subFeaturesList.map((feature) => (
              <li key={feature.id} className="flex items-center gap-4">
                <CircleCheck className="text-green-300" />
                <p>{feature.subFeature}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <button className="btn-base w-full py-2 flex justify-center items-center font-bold text-[#b056fb] bg-[#fafafa]  border-2 border-[#b056fb] rounded-lg transition-transform duration-300 ease-in hover:scale-102 shadow-md hover:shadow-lg">
                Start Free Today
                <MoveUpRight height={15} />
              </button>
              <button className="btn-base w-full py-2 font-bold text-[#b056fb] bg-[#fafafa]  border-2 border-[#b056fb] rounded-lg transition-transform duration-300 ease-in hover:scale-102 shadow-md hover:shadow-lg">
                Contact Us
              </button>
            </div>
            <div>
              <p className="flex flex-row">
                No credit card required - Free forever - Cancel anytime
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <ul className="grid grid-cols-2 gap-5">
            <li className="flex flex-col items-center border border-[#6a6acb] rounded-2xl py-4 bg-[#535cf9] drop-shadow-2xl">
              <p className="font-bold text-2xl">50K+</p>
              <p>
                Active <br /> Users
              </p>
            </li>
            <li className="flex flex-col items-center border border-[#6a6acb] rounded-2xl py-4 bg-[#535cf9] drop-shadow-2xl">
              <p className="font-bold text-2xl">50K+</p>
              <p>
                Active <br /> Users
              </p>
            </li>
            <li className="flex flex-col items-center border border-[#6a6acb] rounded-2xl py-4 bg-[#535cf9] drop-shadow-2xl">
              <p className="font-bold text-2xl">50K+</p>
              <p>
                Active <br /> Users
              </p>
            </li>
            <li className="flex flex-col items-center border border-[#6a6acb] rounded-2xl py-4 bg-[#535cf9] drop-shadow-2xl">
              <p className="font-bold text-2xl">50K+</p>
              <p>
                Active <br /> Users
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SubFeatures;
