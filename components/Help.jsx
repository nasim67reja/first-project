import React from "react";
import Button from "./reuse/Button";

const Help = () => {
  return (
    <div className="bg-[#F5F5F5] py-[8rem]">
      <div
        className="max-w-[907px] mx-auto px-[2rem] lg:px-[3rem]
 "
      >
        <h3 className="text-t-color text-[4rem] lg:text-[40px] font-bold leading-[1] text-center mb-[3rem]">
          "Our System Can Help Any Business Improve Their Brand"
        </h3>
        <p className="text-center text-t-color  px-[2.6rem] lg:px-[9.6rem] text-[17px] lg:text-[20px]">
          Are you in any niche or industry? No problem! As long as you know that
          your business isn't doing as well as it could because of unclear
          messaging,<strong> our Brand Building </strong> System can help.
        </p>
        <p className="text-center my-[1.6rem] text-t-color px-[2.6rem] lg:px-[9.6rem] text-[17px] lg:text-[20px]">
          We'll work with you to set clear goals, make sure your message is easy
          to understand, fix up your website, plan out content, and connect with
          your audience.
        </p>
        <p className="text-center text-t-color px-[2.6rem] lg:px-[9.6rem] text-[17px] lg:text-[20px]">
          By following our 4-step process (and complete done-for-you service),
          we can improve your online presence and grow your business. It doesn't
          matter if you're a small company or a big one, our system can work for
          you.
        </p>
        <div className="flex items-center justify-center mt-[3rem]">
          <Button text="Yes, build my brand" />
        </div>
      </div>
    </div>
  );
};

export default Help;
