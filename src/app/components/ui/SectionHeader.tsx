import React from "react";

interface SectionHeaderProps {
  headerTitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ headerTitle }) => {
  return (
    <div className="font-bold text-5xl text-center text-blackFontH tracking-[-0.48px]">
      {headerTitle}
    </div>
  );
};

export default SectionHeader;
