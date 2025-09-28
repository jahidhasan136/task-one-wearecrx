import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
  return (
    <div className="mt-[120px] grid gap-5 border-b pb-8 border-border">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-[28px] leading-10 tracking-[-0.48px] text-blackFontH">
          Do plumbers deal with heating?
        </h2>
        <IoIosArrowDown className="text-arrow" />
      </div>
      <p className="font-normal text-lg leading-[30px] text-blackFontP">
        Some of our local plumbers are also gas registered and experienced
        working on heating systems, bathrooms and kitchens.
      </p>
    </div>
  );
};

export default Accordion;
