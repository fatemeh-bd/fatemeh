import React from "react";
import { useTranslation } from "next-i18next";
import {
  ApiIcon,
  BootStrapIcon,
  CSSIcon,
  HtmlCssIcon,
  HtmlIcon,
  JavaScriptIcon,
  NextJsIcon,
  ReactJsIcon,
  RectangleGroupIcon,
  ReduxIcon,
  TailwindIcon,
} from "../../svg";
import Spliter from "../Spliter";
import FadeX from "../../tools/motions/FadeX";
import FadeXleft from "../../tools/motions/FadeXleft";
import { toPersianNum } from "../../tools/helper";
import { useSelector } from "react-redux";
import { MainBox } from "../../../styles/GlobalStyled";
const ToolBox = ({ Logo, percent, text }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <div className="mx-1 mb-6 text-center">
      <MainBox
        hover
        className="boxStyle lg:!w-44 !w-36 lg:h-56 h-52 flex items-center flex-col justify-center"
        style={{ borderRadius: "85px" }}
      >
        <Logo />
        <span className="mainColor lg:text-4xl text-4xl mt-8">
          {" "}
          {toPersianNum(percent, lang)}%
        </span>
      </MainBox>
      <p className="mt-2" style={{ color: "var(--whitePen)" }}>
        {text}
      </p>
    </div>
  );
};
const MySkills = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <section className="lg:mb-32 mb-10">

      <Spliter SpliterIcon={RectangleGroupIcon} text={t("skills")} />
      <h1 className="lg:text-5xl text-4xl mb-10">
        {lang === "fa" ? (
          <>
            <span className="mainColor ml-2 inline-block">مهارت های</span>
            {t("my") + " "}
          </>
        ) : (
          <>
            {t("my") + " "}
            <span className="mainColor">{t("skills")}</span>
          </>
        )}
      </h1>
      <div className="flex  justify-between flex-wrap">
        <FadeXleft
          delay={0.3}
          component={<ToolBox Logo={NextJsIcon} percent={80} text="Next js" />}
        />
        <FadeXleft
          component={
            <ToolBox Logo={ReactJsIcon} text="React js" percent={80} />
          }
        />
        <FadeX
          component={
            <ToolBox Logo={JavaScriptIcon} text="JavaScript ES6" percent={60} />
          }
        />
        <FadeX
          delay={0.3}
          component={<ToolBox Logo={ReduxIcon} text="Redux" percent={80} />}
        />
        <FadeXleft
          delay={0.3}
          component={
            <ToolBox Logo={TailwindIcon} text="Tailwind css" percent={40} />
          }
        />
        <FadeXleft
          component={
            <ToolBox Logo={BootStrapIcon} text="Bootstarp" percent={70} />
          }
        />
        <FadeX
          component={<ToolBox Logo={HtmlCssIcon} text="HTML & CSS" percent={85} />}
        />
        <FadeX
          delay={0.3}
          component={<ToolBox Logo={ApiIcon} text="Restful Api" percent={80} />}
        />
      </div>
    </section>
  );
};

export default MySkills;
