"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// Accordion Data
const faqData = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer:
      "Plumber costs can vary depending on the job, location, and time of day. On average, you can expect to pay between $45 and $200 per hour.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer:
      "Plumbers offer a wide range of services including fixing leaks, unclogging drains, installing fixtures, and repairing or replacing pipes.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer:
      "To find a reliable plumber, ask for recommendations from friends or family, read online reviews, and check for proper licensing and insurance.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-[120px] grid gap-5">
      {faqData.map((item, index) => (
        <div key={index} className="grid gap-5 border-b pb-8 border-border">
          {/* Questions */}
          <div
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between cursor-pointer"
          >
            <h2 className="font-semibold xs:text-base md:text-[20px] lg:text-[28px] xs:leading-6 md:leading-7 lg:leading-10 tracking-[-0.48px] text-blackFontH">
              {item.question}
            </h2>
            <IoIosArrowDown
              className={`text-arrow transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Answers */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="font-normal text-lg leading-[30px] text-blackFontP">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
