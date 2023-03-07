import Image from "next/image";

const Box = ({ image, heading }) => {
  return (
    <div className="flex flex-col justify-center gap-6 w-[38rem] sm:w-[42rem]  xl:w-[355px] border-[0.5px] border-[#A5A5A5] px-[2rem] lg:px-[2rem] py-[3rem] rounded-sm ">
      <div className="center">
        <Image
          height={103}
          width={103}
          src={image}
          alt="svg-logo"
          className="h-[90%]"
        />
      </div>
      <h4 className="text-center text-t-color text-[20px] lg:text-[24px]">
        {heading}
      </h4>
      <p className="text-center text-t-color text-[14px] lg:text-[16px]">
        Your highly experienced Franchise Coach will help you through the entire
        process. Questions about the best brands? Franchises to avoid? Legal?
        Financing? Your Franchise Coach is here to help.
      </p>
      <div className="center">
        <button className="bg-[#222A2E] text-white py-[3px] px-[12px] rounded-md text-[15px] lg:text-[16px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Franchise = () => {
  return (
    <>
      <div
        className="max-w-[907px] mt-[4rem] mx-auto px-[3rem]
pt-[4rem] mb-[6rem]"
      >
        <h3 className="text-t-color text-[34px] lg:text-[40px] font-bold leading-[1] text-center mb-[3.2rem]">
          Franchise City Broker Group
        </h3>
        <p className="text-center text-t-color text-[18px] lg:text-[20px]">
          we help franchise buyers avoid mistakes & make educcated decisions
        </p>
      </div>
      <div className="center">
        <div className=" px-[4rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <Box image="/images/message.svg" heading="FRANCHISE COACH" />
            <Box image="/images/search.svg" heading="MORE CHOICES" />
            <Box image="/images/research.svg" heading="RESEARCH TOOLS" />
            <Box image="/images/round.svg" heading="INDUSTRY CONNECTIONS" />
            <Box image="/images/st.svg" heading="KNOW YOUR RISKS!" />
            <Box image="/images/visa.svg" heading="E-2 VISA FRANCHISES" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Franchise;
