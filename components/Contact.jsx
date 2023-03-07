import React from "react";
import Button from "./reuse/Button";

const Contact = () => {
  return (
    <div className="bg-backg text-white py-[4rem] my-[8rem]">
      <div className="container">
        <h3 className="text-[3rem] lg:text-[32px] font-semibold leading-[1.2] text-center mb-[4.2rem]">
          GET A WEEKLY DOSE OF THE LATEST FRANCHISE OPPORTUNITIES DELIVERED
          STRAIGHT TO YOUR INBOX.
        </h3>
        <form>
          <div className="flex flex-col lg:flex-row gap-[2rem] text-t-color justify-center items-center">
            <input
              type="text"
              className="rounded-md py-[0.8rem] px-[2rem] text-[1.6rem] w-[259px]"
              placeholder="First Name"
            />
            <input
              type="text"
              className="rounded-md py-[0.8rem] px-[2rem] text-[1.6rem] w-[259px]"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="rounded-md py-[0.8rem] px-[2rem] text-[1.6rem] w-[259px]"
              placeholder="Email..."
            />
          </div>
          <div className="center mt-[4rem]">
            {/* <Button text="Submit" /> */}
            <button
              type="submit"
              className="bg-btn-bg text-white rounded-[1rem] hover:outline  hover:outline-2 hover:bg-white hover:text-t-color transition-all flex gap-[0.5rem] items-center text-[14px]"
            >
              <span className="px-[5.4rem]">Submit</span>
              <div className="bg-white px-[25px] py-[6px] lg:py-[12px] rounded-[1rem]">
                <img src="/images/right.svg" alt="" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
