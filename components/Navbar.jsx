import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const NavEl = ({ classes }) => {
  return (
    <ul className={`${classes} flex   lg:gap-[2.5rem] list-none items-center`}>
      {["Home", "Service", "About", "Faq", "Blog", "Contact"].map((el, i) => (
        <li
          key={i}
          className="text-white text-[16px] lg:text-[20px] leading[24px]"
        >
          <Link href={`/${el == "Home" ? "/" : el.toLowerCase()}`}>
            {el == "About" ? "About Us" : el}{" "}
          </Link>
        </li>
      ))}
      <li className="bg-[rgb(197,136,82)] text-white text-[16px] lg:[20px] leading-[24px] px-[36px] py-[17px] rounded-[0.8rem] cursor-pointer transition-all hover:bg-[rgba(197,136,82,0.52)]">
        Get Service
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [mobileNavIsShown, setMobileNavIsShown] = useState(false);
  return (
    <>
      {/* mobile */}

      <nav
        className={` center lg:hidden top-0 left-0 absolute min-h-screen w-screen bg-[rgba(0,0,0,0.7)] z-20  transition-all ${
          !mobileNavIsShown && "translate-x-[100%]"
        } duration-500`}
      >
        <div
          className="absolute top-[5%] right-[3%] z-20 text-white cursor-pointer"
          onClick={() => setMobileNavIsShown(false)}
        >
          <HiOutlineX />
        </div>
        <NavEl classes="flex-col gap-[3rem]" />
      </nav>

      <div className="bg-[#222A2E]">
        <div className="container">
          <div className="flex justify-between items-center  h-[117px]">
            <div className="relative z-20 w-[200px] h-[60px]">
              <Image
                src="/images/logoP.png"
                alt="logo"
                width={267}
                height={82}
                className=" w-[160px] lg:w-[267px] lg:h-[82] h-[70px]"
              />
            </div>
            <div
              className="text-white cursor-pointer lg:hidden"
              onClick={() => setMobileNavIsShown(true)}
            >
              {!mobileNavIsShown && (
                <HiOutlineMenu className="w-[50px] h-[50px] border" />
              )}
            </div>
            {/* large screen */}
            <nav className="lg:block hidden">
              <NavEl classes="gap-[1.5rem]" />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
