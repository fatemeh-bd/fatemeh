import React from "react";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import { startMobileWidth } from "../../variable";
const ToolTipStyle = styled.div`
  @media (min-width: ${startMobileWidth}) {
    p {
      padding:1px 0.5rem 0;
      /* min-height: 24px; */
      background: #404042;
      :before {
        content: "";
        width: 10px;
        height: 10px;
        background: #404042;
        position: absolute;
        ${({ lang }) => (lang === "fa" ? "left: -3px" : " right: -3px")};
        top: 50%;
        transform: rotate(54deg) skew(-8deg, -39deg);
        margin-top: -5px;
        z-index: -1;
      }
    }
  }
`;
const TooltipLeft = ({ TooltipIcon, text, className, active, onClick }) => {
  const size = useScreenSize();
  const lang = useSelector((state) => state.stateLang.lng);
const {t}=useTranslation()
  return (
    <ToolTipStyle
      className={`group relative  flex justify-center ${className}  items-center flex-col`}
      lang={lang}
      onClick={onClick}
    >
      <TooltipIcon className={"rounded text-sm  shadow-sm"} />
     {
      size>900&& <p
      className={`tooltip lg:absolute ${
        lang === "fa" ? "lg:left-9" : "lg:right-9"
      } z-10 h-full top-0 bottom-2 scale-0 transition-all rounded text-xs text-white group-hover:scale-100 w-fit !text-center ${
        size < 900 ? active && "scale-100" : ""
      } `}
    >
      {t(text)}
    </p>
     }
    </ToolTipStyle>
  );
};

export default TooltipLeft;
