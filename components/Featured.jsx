import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Slide = ({ data }) => {
  return (
    <>
      <div className="w-[40rem] xl:w-[355px] bg-[#D9D9D9]   p-[1.6rem] rounded-[5px] border-[0.5px] border-[#A5A5A5] h-[550px]  transition-all duration-500">
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

      {/* <div className="mt-[10rem]">
        <Slider />
      </div> */}
    </div>
  );
};

export default Featured;

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

// import "./styles.css";

// import required modules

// const Slider = () => {
//   return (
//     <>
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation={false}
//         effect="coverflow"
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//           reverseDirection: true,
//         }}
//         loop={true}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 3,
//           slideShadows: false,
//         }}
//         // slidesPerView={width < 992 ? 1 : 3}
//         slidesPerView={3}
//         spaceBetween={25}
//         pagination={{
//           dynamicBullets: true,
//         }}
//         initialSlide={1}
//         style={{
//           width: "100%",
//           margin: "auto",
//           padding: "10px",
//           height: "100%",
//         }}
//       >
//         {slideInfo.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Slide data={item} />
//           </SwiperSlide>
//         ))}

       
//       </Swiper>
//     </>
//   );
// };
