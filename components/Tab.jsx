import Image from "next/image";
import React from "react";

import { useState } from "react";
import Button from "./reuse/Button";

const Content = ({ title }) => {
  return (
    <div className="bg-[#D9D9D9] h-fit flex flex-col md:flex-row items-center md:items-end">
      <div className="w-full p-[3rem] md:w-3/4">
        <h4 className="text-[#2BA59F] text-[22px] md:text-[30px] lg:text-[40px] text-end">
          {title}
        </h4>
        <div className="h-[1px] w-full bg-[#222A2E] my-[3rem]"></div>
        <p className=" mb-[2rem] md:mb-[3rem] text-[14px] md:text-[16px] leading-[24px]">
          Mariel has spent her professional career in franchising and is an
          enthuslastic proponent of entrepreneurship today.Her data-driven yet
          prssionate approach with clients has kept her an award-winning
          consultant for over a decade. Most notably, in 2019 Mariel was
          recognized in the top 1% of Franchise Experts in the country.
        </p>
        <Button text="Contact Us" />
      </div>
      <div className="relative">
        <Image
          width={318}
          height={397}
          alt="a women"
          src="/images/Women.png"
          className="w-[95%]"
        />
        <div className="hidden md:block absolute w-full h-[105%] bg-[rgba(221,141,88,0.26)] right-[-3rem] z-[-1] top-[3%]"></div>
      </div>
    </div>
  );
};

const tabs = [
  {
    title: "Meet Us",
    content: <Content title="Meet Us" />,
  },
  {
    title: "Intelligent Advice",
    content: <Content title="Intelligent Advice" />,
  },
  {
    title: "Why a Franchise?",
    content: <Content title="Why a Franchise?" />,
  },

  {
    title: "Working With an Advisor?",
    content: <Content title="Working With an Advisor?" />,
  },
  {
    title: "Business Education ",
    content: <Content title="Business Education " />,
  },
];

const HorizontalTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="grid h-fit py-[5rem] lg:grid-cols-[24%_64%] justify-between grid-cols-1 gap-[5rem] lg:gap-[2rem]">
      <div className="flex flex-col w-[90%] sm:w-[70%] lg:w-full  gap-[1.5rem] self-start  ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`custom-clip-path px-[1rem] py-[2rem] cursor-pointer text-white text-[14px] md:text-[18px] hover:scale-110 hover:translate-x-[1.5rem] transition-all ${
              index === activeTab ? "bg-[#2BA59F] " : "bg-[#DD8E58]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className=" p-4 justify-self-end">{tabs[activeTab].content}</div>
    </div>
  );
};

const Tab = () => {
  return (
    <div className="max-w-[1362px] px-[3rem] mx-auto">
      <HorizontalTab />
    </div>
  );
};

export default Tab;
