import React from "react";

const Footer = () => {
  return (
    <div className="bg-backg text-white py-[6rem]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] lg:gap-[2rem] px-[3rem] lg:px-[1rem]">
          <div className="flex flex-col justify-between">
            <div>
              <div className="center">
                <img src="/images/logo.svg" alt="logo" className="mb-[2rem]" />
              </div>
              <p className="text-[14px] lg:text-[15px] opacity-80 text-center">
                Mariel Miller has over 17 years of valuable experience in the
                legal community and insurance industry. He is not afraid to
                fight for justice for you and your family.
              </p>
            </div>
            <p className="text-[14px] lg:text-[15px] opacity-80 text-center  ]">
              ©2023 Mariel Miller ®All Rights Reserved.
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-[5rem] py-[2.5rem]">
            <h4 className="text-center">CONTACT INFO</h4>
            <p className="text-[14px] lg:text-[15px] opacity-80 text-center">
              Mariel Miller Espat & Johnson, P.A. 410 South Ware Blvd. Suite
              #400 Tampa, FL 33619
            </p>
          </div>

          {/* 3 */}

          <div className="flex flex-col gap-[5rem] py-[2.5rem] opacity-80">
            <h4 className="text-center">USEFUL LINKS</h4>
            <p className="text-[14px] lg:text-[15px] px-[6px] md:px-[10px] lg:px-[16px] text-center">
              Apollo Beach, Arcadia, Auburndale, Avon Park, Bartow, Brandon,
              Bradenton, Brooksville, Clearwater, Crystal River, Dade City,
              Davenport, Dundee, Dunedin, Haines City, Holiday, Homosassa,
              Inverness,
            </p>
          </div>

          {/* 4 */}

          <div className="flex flex-col gap-[5rem] py-[2.5rem]">
            <h4 className="text-center">SERVICE</h4>

            <ul className="text-[14px] lg:text-[15px] column-custom gap-[5px] opacity-80 center">
              <li>PERSONAL INJURY</li>
              <li>CAR ACCIDENTS</li>
              <li>BICYCLE ACCIDENTS</li>
              <li>DUI ACCIDENTS</li>
              <li>SLIP AND FALLS</li>
              <li>MOTORCYCLE</li>
              <li>ACCIDENTS</li>
              <li>WRONGFUL DEATH</li>
            </ul>
            <div className="center gap-[1rem]">
              <a href="https://www.facebook.com/">
                <img src="/images/facebook.svg" alt="facebook -logo" />
              </a>
              <a href="https://www.linkedin.com/">
                <img src="/images/linkedin.svg" alt="linkedin -logo" />
              </a>
              <a href="https://www.instagram.com/">
                <img src="/images/instagram.svg" alt="instagram -logo" />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/images/you-tube.svg"
                  alt="youtube -logo"
                  className="translate-y-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
