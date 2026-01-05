import { Sparkles, MoveUpRight, TrendingUp, } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col px-6  gap-14 lg:gap-0 lg:flex-row lg:w-5/6 lg:flex-1">
      <div className="flex flex-col gap-14 lg:gap-12 mt-18 lg:w-1/2">
        <div className="flex gap-2 max-w-fit py-2 px-4 rounded-full text-[#d4adf9] border">
          <Sparkles />
          <h1 className="">Smart Financial Management</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl  sm:text-7xl font-bold">
            Master Your <br /> Money
          </h2>
          <h3 className="graytext text-[1.3rem] sm:text-2xl">
            Track expenses, manage budgets, and visualize your
            <br className="hidden lg:flex" />
            financial future with powerful analytics
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 text-2xl">
          <button className="btn flex items-center w-full justify-center py-3 lg:w-fit lg:px-10">
            Get Started <MoveUpRight height={15} />
          </button>
          <button className="flex items-center w-full justify-center py-3 bg-[#fafafa] text-[#0a0a0a] rounded-lg lg:w-fit lg:px-10">
            Demo
          </button>
        </div>
        <p className="border-[0.5px] border-gray-600 lg:w-4/5"></p>
        <div className="w-full flex justify-around lg:justify-normal lg:gap-40">
          <div className="flex flex-col items-center">
            <p className="flex gap-1 items-center text-green-400 text-2xl font-bold">
              <TrendingUp width={20} height={20} />
              99%
            </p>
            <p>Accuracy</p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-2xl font-bold">50K+</p>
            <p>Active Users</p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-2xl font-bold">$2M+</p>
            <p>Tracked</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end lg:items-center mb-18 lg:mb-0 lg:h-[calc(100vh-4rem)] lg:w-1/2 ">
        <Image
          src="/hero.svg"
          alt="heroimg"
          width={300}
          height={300}
          loading="eager"
          className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]"
        />
      </div>
    </section>
  );
}

export default Hero;
