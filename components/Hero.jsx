import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./reuse/Button";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-[-3%] left-[42%] z-[50]">
          <Button text="Request for a Free Consultation. " />
        </div>

        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute top-0 left-0 z-[-10]">
            <Image
              src="/images/bg.png"
              alt="flug and buildings"
              width={500}
              height={776}
              className="w-screen min-h-screen"
            />
          </div>
          <div
            className="max-w-[917px] mx-auto px-[1rem]
    pt-[6rem] "
          >
            <h1 className="text-[30px] md:text-[40px] lg:text-[48px] text-white text-center leading-[1.5]">
              Our Services are FREE! Why Risk Buying a Bad Franchise?
            </h1>

            <div className="flex items-center justify-center ">
              <div className="relative w-[90%]  h-[30rem] sm:w-[59rem] sm:h-[31rem] lg:w-[592px] lg:h-[314px]  mt-[5rem] md:mt-[8rem] lg:mt-[10rem] overflow-hidden">
                <div className="absolute top-0 left-0 z-[1]">
                  <Image
                    src="/images/o-bg.png"
                    alt="flug and buildings"
                    width={592}
                    height={312}
                    className="h-[120%] opacity-60"
                  />
                </div>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/watch?v=vkmAhUtoyDw"
                  className="border-2 border-white"
                >
                  <Image
                    src="/images/youTube.svg"
                    alt="you-tube logo"
                    width={60}
                    height={60}
                    className="absolute top-[40%] lg:top-[36%] left-[40%] lg:left-[44%] z-50 cursor-pointer w-[6rem] h-[6rem]"
                  />
                </Link>
                <div className="absolute bottom-[25%] left-[32%] z-50 cursor-pointer text-[30px] md:text-[40px] lg-[64px] text-white">
                  WATCH ME
                </div>

                <div className="absolute left-[25%] bottom-0 z-[5] ">
                  <Image
                    src="/images/women.png"
                    alt="women"
                    width={231}
                    height={290}
                    className="w-[23rem] h-[29rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
