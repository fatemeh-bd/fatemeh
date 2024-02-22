import Image from "next/image";
import React from "react";
import { DownIcon, HomeIcon } from "../../svg";
import roundText from "../../../public/Assets/images/round-text.png";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { toPersianNum } from "../../tools/helper";
import Spliter from "../Spliter";
import Profile from "../profile/Profile";
import useScreenSize from "../../hooks/useScreenSize";
export const Fatemeh = () => {
  return (
    <div class="flex">
      <div class="letter">F</div>

      <div class="letter">a</div>

      <div class="letter">t</div>

      <div class="letter">e</div>

      <div class="letter">m</div>

      <div class="letter">e</div>

      <div class="letter">h</div>
    </div>
  );
};
const HeroSection = ({toProject}) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
const size=useScreenSize()
  return (
    <section className="lg:mb-32 mb-10">
        {size <1023 ?  <Profile />:""}

      <Spliter text={t("introduce")} SpliterIcon={HomeIcon} />
      <h1 className="introText lg:text-7xl text-4xl">
        {lang === "fa" ? (
          <>
            سلام
            <span className="inline-block mx-2">فاطمه</span>
            بری داریان هستم برنامه نویس فرانت اند
          </>
        ) : (
          <>
            Say Hi from
            {/* <span className="inline-block mx-2">Fatemeh</span> */}
            <div className="inline-block mx-2 cursor-pointer">
              {" "}
              <Fatemeh />
            </div>
            Bari Daryan, Front-End Developer
          </>
        )}
      </h1>
      <p className="lg:text-xl text-lg capitalize !leading-8">{t("introText")}</p>
      <div className="roundText flex items-center justify-between cursor-pointer  ">
        <Image alt="project button" src={roundText} onClick={toProject}/>
        <DownIcon />
      </div>

      <div className="info flex my-20">
        <div>
          <span className="lg:text-7xl text-5xl">{toPersianNum(3, lang)}+</span>
          <p className="text-sm w-20">{t("yearsOfExperience")}</p>
        </div>
        <div className="lg:mx-40 mx-10">
          <span className="lg:text-7xl text-5xl">{toPersianNum(8, lang)}+</span>
          <p className="text-sm w-20">{t("projectsCompleted")}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
