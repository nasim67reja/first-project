import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Button from "./reuse/Button";

const Navbar = () => {
  return (
    <>
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
