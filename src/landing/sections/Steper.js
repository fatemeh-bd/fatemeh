import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styled from "styled-components";
import FadeX from "../../tools/motions/FadeX";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { convertDate, toPersianNum } from "../../tools/helper";
const StepStyle = styled.div`
  > div {
    position: relative;
    padding-bottom: 2rem;
    cursor: default;
    :hover span {
      color: var(--mainColor);
    }
    h4 {
      color: var(--whitePen);
    }
    ::before {
      content: "";
      position: absolute;
      width: 14px;
      height: 14px;
      ${({ lang }) => (lang === "fa" ? " right: 0;" : " left: 0;")}
      top: 6px;
      border-radius: 50%;
      background-color: var(--grayPen);
    }
    ::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      top: 6px;
      ${({ lang }) => (lang === "fa" ? " right: 6px;" : " left: 6px;")}
      background-color: var(--grayPen);
    }
    :hover {
      ::before,
      ::after {
        background-color: var(--mainColor) !important;
      }
    }
  }
`;
export default function Steper() {
  const lang = useSelector((state) => state.stateLang.lng);
  const { t } = useTranslation();

  return (
    <StepStyle className=" my-10" lang={lang}>
    
      <FadeX
        component={

          <div
            className={`lg:px-14 ${
              lang === "fa" ? "pl-0 pr-8 " : "pr-0 pl-8 "
            }`}
          >
            <span className="text-base">
              {toPersianNum(convertDate("2022/12/2", lang).split("/")[0], lang)} - {toPersianNum(convertDate("2024/3/19", lang).split("/")[0], lang)}
       
            </span>
            <h4 className="lg:text-2xl text-xl">{t("frontEndDev")}</h4>
            <p className="pb-4 text-sm">{t("ziber")}</p>
            <h4 className="lg:text-2xl text-xl">{t("frontEndDev")}</h4>
            <p className="pb-4 text-sm">{t("plofPlatform")}</p>
          </div>
        }
      />
      <FadeX
        component={
          <div
            className={`lg:px-14 ${
              lang === "fa" ? "pl-0 pr-8 " : "pr-0 pl-8 "
            }`}
          >
            <span className="text-base">
              {toPersianNum(convertDate("2021/12/2", lang).split("/")[0], lang)} -{" "}
              {toPersianNum(convertDate("2022/12/2", lang).split("/")[0], lang)}
            </span>
            <h4 className="lg:text-2xl text-xl">{t("frontEndDev")}</h4>
            <p className="pb-4 text-sm">{t("karmaCompany")}</p>
            <h4 className="lg:text-2xl text-xl">{t("frontEndDev")}</h4>
            <p className="pb-4 text-sm">{t("asanBtcCompany")}</p>
          </div>
        }
      />
      <FadeX
        component={
          <div
            className={`lg:px-14 ${
              lang === "fa" ? "pl-0 pr-8 " : "pr-0 pl-8 "
            }`}
          >
            <span className="text-base">
              {toPersianNum(convertDate("2020/2/2", lang).split("/")[0], lang)} -{" "}
              {toPersianNum(convertDate("2022/2/2", lang).split("/")[0], lang)}
            </span>
            <h4 className="lg:text-2xl text-xl">{t("karajUni")}</h4>
            <p className="pb-4 text-sm">
              {t("gpa")}:{toPersianNum("17/51", lang)}
            </p>
          </div>
        }
      />
    </StepStyle>
  );
}
