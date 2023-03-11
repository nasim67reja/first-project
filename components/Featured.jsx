import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Test from "./Test";

const Featured = () => {
  return (
    <div >
      <div className="max-w-[650px] px-[20px] mx-auto mb-[8rem]">
        <h3 className="text-center text-t-color text-[40px] font-bold mb-[3rem]">
          Featured Franchises
        </h3>
        <p className="text-center text-[16px] text-t-color">
          Your highly experienced Franchise Coach will help you through the
          entire process. Questions about the best brands? Franchises to avoid?
          Legal? Financing? Your Franchise Coach is here to help.
        </p>
      </div>

      <Test />
    </div>
  );
};

export default Featured;
