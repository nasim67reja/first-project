import Image from "next/image";
import React from "react";

import { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <div>
      <div
        className=" b flex justify-between items-center cursor-pointer py-[2rem]  border-t border-backg px-[3rem] rounded-[1rem]"
        onClick={toggleAccordion}
      >
        <h3 className="text-[16px] lg:text-[20px] text-[#000000] leading-[27px] font-normal">
          {title}
        </h3>
        <button className="accordion-toggle">
          <span className={`open-icon ${isOpen ? "hidden" : ""}`}>
            <Image
              width={30}
              height={30}
              src="/images/down.svg"
              alt="down-arrow"
            />
          </span>
          <span className={`close-icon ${isOpen ? "" : "hidden"}`}>
            <Image
              width={25}
              height={25}
              src="/images/close.svg"
              alt="close-arrow"
            />
          </span>
        </button>
      </div>

      <div
        className={` transition-all duration-500 ${
          isOpen
            ? "min-h-[200px] "
            : "h-[0px] overflow-hidden pointer-events-none opacity-0 translate-y-[-5rem]"
        }`}

        // className={`h-0 overflow-hidden`}
      >
        <p className="p-[3rem] border-t rounded-[1rem] border-backg bg-[#F5F5F5] text-[16px] lg:text-[20px]">
          {content}
        </p>
      </div>
    </div>
  );
}

const Faq = () => {
  return (
    <>
      <div className="max-w-[681px] mx-auto px-[3rem] mt-[9rem]">
        <h3 className="text-t-color text-[4rem] lg:text-[40px]font-bold leading-[1] text-center mb-[3.2rem]">
          Frequently Asked Questions (FAQ)
        </h3>
        <p className="text-center my-[2rem] text-[16px] lg:text-[18px]">
          Your highly experienced Franchise Coach will help you through the
          entire process. Questions about the best brands? Franchises to avoid?
          Legal? Financing? Your Franchise Coach is here to help.
        </p>
      </div>

      <div className="container mx-auto  ">
        <div className="border-[0.5px] border-backg rounded-[1rem] my-[4rem]">
          <Accordion
            title="How i am Buy Franchise ?"
            content={<ContentDummy />}
          />
          <Accordion
            title="When i need to buy Franchise?"
            content={<ContentDummy />}
          />
          <Accordion
            title="How i am Buy Franchise ?"
            content={<ContentDummy />}
          />
          <Accordion
            title="How i am Buy Franchise ?"
            content={<ContentDummy />}
          />
        </div>
      </div>
    </>
  );
};

export default Faq;

const ContentDummy = () => {
  return (
    <>
      Absolutely! Email us at b2b@SWOPME.co to start a conversation with us!{" "}
      <br /> <br />
      No! The other person does not need aFranchise or Business to receive your
      Franchise. That's the beauty of Franchised <br /> <br /> If their phone is
      on this list of compatible devices you can pop to their phone. If it is
      not, just use your Franchise QR code on your profile to share!{" "}
    </>
  );
};
