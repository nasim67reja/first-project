import Image from "next/image";
import React from "react";
import Button from "./reuse/Button";

const BuyFranchise = () => {
  return (
    <div className="bg-backg text-white  mt-[19rem]">
      <div className="container">
        <div className="grid  grid-cols-1 lg:grid-cols-[65%_30%]">
          <div className="py-[4rem] ">
            <div>
              <h4 className="text-[28px] lg:text-[38px] mb-[4.3rem] text-center lg:text-start">
                You Want To Buy A Franchise
              </h4>
              <div className="flex flex-col gap-1  items-center lg:items-start">
                <div className="text-[30px] lg:text-[40px] mb-[1rem]">
                  Marlel Miller
                </div>
                <span className="text-[18px] lg:text-[20px]">
                  Franchise investment Advisor
                </span>
              </div>
              <p className="my-[2rem] lg:pr-[30rem] text-[1.6rem] text-center lg:text-start">
                Your highly experienced Franchise Coach will help you through
                the entire process. Questions about the best brands? Franchises
                to avoid? Legal? Financing? Your Franchise Coach is here to
                help.
              </p>
              <div className="center lg:block">
                <Button text="Learn more about our service" />
              </div>
            </div>
          </div>
          <div className="lg:relative center lg:block ">
            <Image
              height={445}
              width={356}
              className="lg:absolute bottom-0 w-[50%] lg:w-[100%]"
              src="/images/womenBig.png"
              alt="women"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyFranchise;
