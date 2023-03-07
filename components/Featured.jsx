import Image from "next/image";
import React from "react";

const Slide = ({ data }) => {
  return (
    <>
      <div className="w-[40rem] xl:w-[355px] bg-[#D9D9D9]  p-[1.6rem] rounded-[5px] border-[0.5px] border-[#A5A5A5] h-[550px]">
        <div className="flex flex-col justify-between h-full">
          <h4 className="text-[16px] xl:text-[20px] font-semibold text-[#2D2525] text-center">
            {data.heading}
          </h4>
          <Image
            width={321}
            height={188}
            src={data.image}
            alt={data.alt}
            className="w-full h-fit"
          />
          <div>
            <p className="text-t-secondary text-[14px] xl:text-[16px]">
              As of September of 2019, Handyman Matters was acquired by Ace
              Hardware.Founded in 1998 and now focused on “The Next 20” after
              celebrating 20 years in business, Handyman Matters is a national
              franchise organization that offers home and commercial
              maintenance, improvement and...
            </p>
            <div className="flex flex-col items-start gap-[2px] mt-[1rem]">
              <button className="bg-[#4B93FF] text-white rounded-[5px] px-[3.6rem] py-[0.5rem] text-[16px] hover:outline hover:outline-1 hover:bg-white hover:text-t-color transition-all">
                Read
              </button>
              <button className="text-white px-[3.6rem] py-[0.5rem] text-[16px]">
                more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const slideInfo = [
  {
    heading: "ACE HANDYMAN SERVICES",
    alt: "image-acelogo",
    image: "/images/ace.png",
    description: `As of September of 2019, Handyman Matters
    was acquired by Ace Hardware.Founded in
    1998 and now focused on “The Next 20”
    after celebrating 20 years in business,
    Handyman Matters is a national franchise
    organization that offers home and
    commercial maintenance,
    improvement and...`,
  },
  {
    heading: "WATERSTATION TECHNOLOGY(WST)",
    image: "/images/waterStation.png",
    alt: "image-waterstation",

    description: `Market Opportunity in the Vending Industry
    Welcome to the largest "all-cash" business
    in the world - the booming, $42 Billion Dollar
    Vending Industry! New convenient
    innovations like RedBox continue to propel
    this remarkable industry to new heights. In
    fact, every minute, over $79,000 is put in
    vending machines in the United States alo...`,
  },
  {
    heading: "TWO MAIDS & A MOP",
    image: "/images/twomaids.png",
    alt: "twomaids-logo",
    description: `About Two Maids & A MopTwo Maids & A
    Mop is a residential housekeeping company
    headquartered in Birmingham, Alabama.
    The nation's fastest growing residential
    cleaning company and an Inc. 5000
    company, the business uses a proprietary
    "Pay for Performance" compensation scale,
    where...`,
  },
  // {
  //   heading: "ACE HANDYMAN SERVICES",
  //   alt: "image-acelogo",
  //   image: "/images/ace.png",
  //   description: `As of September of 2019, Handyman Matters
  //   was acquired by Ace Hardware.Founded in
  //   1998 and now focused on “The Next 20”
  //   after celebrating 20 years in business,
  //   Handyman Matters is a national franchise
  //   organization that offers home and
  //   commercial maintenance,
  //   improvement and...`,
  // },
];

const Featured = () => {
  return (
    <div className="container">
      <div className="max-w-[650px] px-[20px] mx-auto">
        <h3 className="text-center text-t-color text-[40px] font-bold mb-[3rem]">
          Featured Franchises
        </h3>
        <p className="text-center text-[16px] text-t-color">
          Your highly experienced Franchise Coach will help you through the
          entire process. Questions about the best brands? Franchises to avoid?
          Legal? Financing? Your Franchise Coach is here to help.
        </p>
      </div>
      <div className="mt-[6rem] flex justify-center gap-[3rem] items-center  relative ">
        <div className="left-0 top-[45%] absolute cursor-pointer px-2">
          <img src="/images/l-arr.svg" alt="left-svg" />
        </div>
        <div className="right-0 top-[45%] absolute cursor-pointer  px-2">
          <img src="/images/r-arr.svg" alt="left-svg" />
        </div>
        {/* <div className="relative border-4 border-black "> */}
        {slideInfo.map((el, i) => (
          <div key={i}>
            <Slide data={el} />
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Featured;
