import React from "react";

const SectionSpliter = ({ SectionIcon, text }) => {
  return (
    <h4 className="flex items-center text-sm boxStyle w-fit ">
      <SectionIcon className="mr-2 " />
      {text}
    </h4>
  );
};

export default SectionSpliter;
