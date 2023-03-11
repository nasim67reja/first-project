import BuyFranchise from "@/components/BuyFranchise";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import Featured from "@/components/Featured";
import Franchise from "@/components/Franchise";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Member from "@/components/Member";
import Tab from "@/components/Tab";
import Test from "@/components/Test";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Help />
      <Tab />

      <div className="my-[8rem] mx-auto max-w-[1474px] px-[3rem]">
        <img
          src="/images/ad.png"
          alt="forbes,usa-today logo "
          className="w-full"
        />
      </div>
      <Featured />
      <Contact />
      <Experience />
      <Faq />
    </>
  );
};

export default HomePage;

// <Franchise />
// <Member />
{
  /* <BuyFranchise /> */
}
