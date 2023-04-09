import React from "react";
import { useSelector } from "react-redux";

const Spliter = ({ SpliterIcon, text }) => {
  const lang = useSelector((state) => state.stateLang.lng);

  return (
    <h4 className="flex items-center text-sm boxStyle w-fit mb-6 ">
      <SpliterIcon className={`${lang === "fa" ? "ml-2" : "mr-2"}`} />
      {text}
    </h4>
  );
};

export default Spliter;
