import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Button from "./reuse/Button";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#fff] py-[2rem]">
        <div className="container">
          <div className="flex justify-between items-center bg-white">
            <div className="center gap-[2rem]">
              <img src="images/location.svg" alt="location svg" />
              <p className="text-[12px] md:text-[16px]">
                Mariel miller franchise 3225, Se Habla Espanol
              </p>
            </div>
            <div className="center gap-[2rem]">
              <img src="images/phone.svg" alt="phone icon svg" />
              <p className="text-[12px] md:text-[16px]">
                Call Mariel miller{" "}
                <span className="text-[#4B93FF] ml-[1rem]"> 7322980900</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222A2E]">
        <div className="container">
          <div className="flex justify-between items-center ">
            <div>
              <Image
                src="/images/miller.png"
                alt="logo"
                width={147}
                height={147}
                // className=" w-[120px] lg:w-[147px] lg:h-[147px] h-[120px] "
                className=" w-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]  h-[80px] lg:w-[147px] lg:h-[147px] "
              />
            </div>
            <nav>
              <Button text="Get Service" />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
