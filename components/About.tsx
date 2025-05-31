import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { NumberTicker } from "./magicui/number-ticker";
import { Landmark } from "lucide-react";

const About = () => {
  return (
    <div className="md:h-screen flex justify-center items-center px-6 md:px-[10rem] py-[6rem]">
      <div className="flex flex-col lg:flex-row items-stretch gap-10 justify-between w-full">
        <div className="order-1 lg:order-2">
          <Image
            src="/mock1.jpg"
            alt="mock"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="order-1 lg:order-2 w-full lg:w-[50%] flex flex-col justify-between flex-1 py-6 md:gap-0 gap-6">
          <div>
            <p className="text-sm uppercase text-blue-400 font-medium">
              Learn more about us
            </p>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl">
              Founded on Experience, <br />
              Built on Ambition
            </h1>
            <div className="space-y-6">
              <p className="text-neutral-600 text-md tracking-tight">
                Ameraa Finnway, based in Lucknow, provides High Value Project
                Finance from Government Banks to Fuel Large-Scale Business
                Expansion and Infrastructure Development Across India.
              </p>
            </div>
            <div className="flex justify-between divide-x divide-gray-300">
              <div className="flex-1 pr-4">
                <NumberTicker
                  value={95}
                  className="whitespace-pre-wrap text-3xl md:text-5xl font-normal text-blue-300 tracking-tighter dark:text-white"
                />
                <span className="text-3xl md:text-5xl font-normal text-blue-300 tracking-tighter">
                  %
                </span>
                <h1 className="text-black font-medium tracking-tight md:text-sm text-xs">
                  Customer Loyalty
                </h1>
              </div>

              <div className="flex-1 px-4 text-center">
                <NumberTicker
                  value={10}
                  className="whitespace-pre-wrap text-3xl md:text-5xl font-normal text-blue-300 tracking-tighter dark:text-white"
                />
                <span className="text-3xl md:text-5xl font-normal text-blue-300 tracking-tighter">
                  cr+
                </span>
                <h1 className="text-black font-medium tracking-tight md:text-sm text-xs">
                  Project Funding
                </h1>
              </div>

              <div className="flex-1 pl-8">
                <NumberTicker
                  value={5}
                  className="whitespace-pre-wrap text-3xl md:text-5xl font-normal text-blue-300 tracking-tighter dark:text-white"
                />
                <span className="text-3xl md:text-5xl font-normal text-blue-300 tracking-tighter">
                  +
                </span>
                <h1 className="text-black font-medium tracking-tight md:text-sm text-xs">
                  Govt Bank Partners
                </h1>
              </div>
            </div>
          </div>

          <Button className="rounded-full w-fit bg-blue-300 text-black text-xs font-medium px-6 shadow-sm hover:bg-yellow-200 hover:cursor-pointer">
            Learn More<span className="ml-1">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
