import React from "react";

interface SectionHeaderProps {
  headerTitle: string;
  style: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  headerTitle,
  style,
}) => {
  return (
    <div
      className={` ${style} font-bold xs:text-2xl md:text-[32px] lg:text-5xl text-center tracking-[-0.48px]`}
    >
      {headerTitle}
    </div>
  );
};

export default SectionHeader;
