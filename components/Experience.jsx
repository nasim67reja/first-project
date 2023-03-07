import React from "react";
import Button from "./reuse/Button";

const Experience = () => {
  return (
    <div className="max-w-[924px] mx-auto px-[3rem] mt-[9rem]">
      <h3 className="text-t-color text-[4rem] lg:text-[40px]font-bold leading-[1] text-center mb-[3.2rem]">
        "Experience the Magic of Storytelling with Our Founder, Mike L. Murphy"
      </h3>
      <p className="text-center my-[2rem] text-[17px] lg:text-[20px]">
        Our founder, Mike L. Murphy, has worked on blockbuster Hollywood brands
        like Harry Potter, Lord of the Rings, and Iron Man. He'll use
        storytelling magic to help your brand stand out and have a clear
        message. Click the button to schedule a short call to explore what it’s
        like to work together...
      </p>
      <strong className="text-center text-[17px] lg:text-[20px]">
        Click the button to schedule a short call to explore what it’s like to
        work together...
      </strong>
      <div className="center my-[4rem]">
        <Button text="Learn more about our service" />
      </div>
    </div>
  );
};

export default Experience;
