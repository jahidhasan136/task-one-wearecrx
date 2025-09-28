import React from "react";

interface SectionHeaderProps {
  headerTitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ headerTitle }) => {
  return (
    <div className="font-bold xs:text-2xl md:text-[32px] lg:text-5xl text-center text-blackFontH tracking-[-0.48px]">
      {headerTitle}
    </div>
  );
};

export default SectionHeader;
