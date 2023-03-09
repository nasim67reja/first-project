import BuyFranchise from "@/components/BuyFranchise";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Franchise from "@/components/Franchise";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Member from "@/components/Member";



const HomePage = () => {
  return (
    <>
      <Hero />
      <Help />
      <Franchise />
      <BuyFranchise />
      <Member />
      <Featured />
      <Contact />
      <Experience />
    </>
  );
};

export default HomePage;
