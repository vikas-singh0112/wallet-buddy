import React from "react";
import { Sparkles, MoveUpRight, TrendingUp } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col gap-14 px-6">
      <div className="flex flex-col gap-14 mt-20">
        <div className="flex gap-2 max-w-fit py-2 px-4 rounded-full text-[#d4adf9] border">
          <Sparkles />
          <h1 className="">Smart Financial Management</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold">Master Your Money</h2>
          <h3 className="graytext text-[1.3rem]">
            Track expenses, manage budgets, and visualize your financial future
            with powerful analytics
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <button className="btn flex items-center w-full justify-center py-4">
            Get Started <MoveUpRight height={15} />
          </button>
          <button className="flex items-center w-full justify-center py-4 bg-[#fafafa] rounded-lg">
            Demo
          </button>
        </div>
        <p className="border-b"></p>
        <div className="w-full flex justify-around">
          <div className="flex flex-col items-center">
            <p className="flex gap-1 items-center text-green-400 text-2xl font-bold">
              <TrendingUp width={20} height={20}/>
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
      <div className="relative h-64 mb-20">
        <Image src="/HeroImgv1.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

export default Hero;
