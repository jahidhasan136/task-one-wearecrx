import React from "react";
import Accordion from "../ui/Accordion";
import SectionHeader from "../ui/SectionHeader";

const Questions = () => {
  return (
    <>
      {/* Dynamic Title */}
      <SectionHeader
        headerTitle="Frequently asked questions
"
      />

      {/* Accordion */}
      <Accordion />
    </>
  );
};

export default Questions;
