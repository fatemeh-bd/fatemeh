import React, { useRef } from "react";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { BagIcon, DownloadIcon } from "../../svg";
import Spliter from "../Spliter";
import FadeY from "../../tools/motions/FadeY";
import Steper from "./Steper";
import SecondlyButton from "../../tools/buttons/SecondlyButton";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <section className="lg:mb-32 mb-10">

      <Spliter SpliterIcon={BagIcon} text={t("resume")} />

      <FadeY
        component={
          <>
            <div className="lg:w-5/6">
              <h1 className="lg:text-5xl text-4xl">
                {t("education") + " " + " & "}
                <span className="mainColor">{t("experience")}</span>
              </h1>
              <FadeY component={<Steper />} />
            </div>
          </>
        }
      />
      <a href={"/Assets/images/baridaryan.pdf"} download>
        <SecondlyButton text={t("downloadCV")} icon={<DownloadIcon />} />
      </a>
    </section>
  );
};

export default Resume;
