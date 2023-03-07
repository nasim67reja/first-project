import BuyFranchise from "@/components/BuyFranchise";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Franchise from "@/components/Franchise";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Member from "@/components/Member";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const HomePage = () => {
  return (
    <>
      {/* <Hero />
      <Help />
      <Franchise />
      <BuyFranchise />
      <Member />
      <Featured />
      <Contact />
      <Experience /> */}

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default HomePage;
