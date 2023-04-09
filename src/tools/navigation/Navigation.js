import React from "react";
import TooltipLeft from "../tooltip/TooltipLeft";
import {
  BagIcon,
  GmailIcon,
  HomeIcon,
  ListIcon,
  ProjectIcon,
  RectangleGroupIcon,
  UserIcon,
} from "../../svg";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
const Navigation = ({ activeIndex, onClick }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);

  return (
    <div
      className={`navigation boxStyle  ${
        lang === "fa" ? "lg:left-7" : "lg:right-7"
      } bottom-0 ${
        lang === "fa" ? "left-0" : "right-0"
      } lg:w-fit w-full z-10 h-fit flex lg:flex-col items-center justify-between  `}
    >
      <TooltipLeft
        onClick={onClick}
        TooltipIcon={HomeIcon}
        text={"home"}
        className="active"
        active={true}
      />
      <TooltipLeft
        onClick={onClick}
        TooltipIcon={UserIcon}
        text={"aboutMe"}
      />
      <TooltipLeft onClick={onClick} TooltipIcon={BagIcon} text={"resume"} />
      <TooltipLeft
        onClick={onClick}
        TooltipIcon={ListIcon}
        text={"services"}
      />
      <TooltipLeft
        onClick={onClick}
        TooltipIcon={RectangleGroupIcon}
        text={"skills"}
      />
      <TooltipLeft
        onClick={onClick}
        TooltipIcon={ProjectIcon}
        text={"portfolios"}
      />
      <TooltipLeft
        onClick={onClick}
        TooltipIcon={GmailIcon}
        text={"contact"}
      />
    </div>
  );
};

export default Navigation;
