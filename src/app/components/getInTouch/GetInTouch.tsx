import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { IoMdArrowForward } from "react-icons/io";

const GetInTouch = () => {
  return (
    <div className="grid xs:gap-4 md:gap-6 lg:gap-8 bg-backgroundBlue text-white xs:p-4 md:p-10 lg:p-20 rounded-3xl">
      {/* Section Title */}
      <SectionHeader headerTitle="Get in Touch" style="text-white" />

      {/* Content */}
      <p className="xs:text-sm lg:text-lg xs:leading-[20px] lg:leading-[30px] text-center">
        Contact us now to enquire our plumbing services, whether you have a
        commercial project that requires support, or a domestic plumbing task
        that needs the attention of a trusted professional.
      </p>
      <div className="flex items-center justify-center">
        <button className="bg-white text-backgroundBlue xs:py-[10px] lg:py-4 xs:px-5 md:px-6 rounded-lg font-bold text-base leading-[30px] -tracking-tight flex items-center gap-2">
          Book a Professional Plumber
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
