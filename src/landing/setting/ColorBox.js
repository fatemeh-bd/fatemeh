import React from "react";
import { useSelector } from "react-redux";
import useLocalStorage from "../../hooks/useLocalStorage";

const ColorBox = ({ colorClass }) => {
  const [config, setConfig] = useLocalStorage("config", "");
  const lang = useSelector((state) => state.stateLang.lng);

  if (typeof window !== "undefined") {
    var root = document.documentElement;
  }
  const getBackColor = (e) => {
    let color = window
      .getComputedStyle(e.target, "")
      .getPropertyValue("background-color");

    setConfig({ ...config, backColor: color });
    root.style.setProperty("--mainColor", color);
  };
  return (
    <div
      className={`${
        lang === "fa" ? "ml-3" : "mr-3"
      } mb-3 !w-12 h-8 cursor-pointer boxStyle ${colorClass}`}
      onClick={getBackColor}
    ></div>
  );
};

export default ColorBox;
