import React from "react";
import { useTranslation } from "next-i18next";
import FadeY from "../../tools/motions/FadeY";
import { CodeIcon, ListIcon } from "../../svg";
import Spliter from "../Spliter";
import { useSelector } from "react-redux";

const Specializations = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);

  return (
    <section className="lg:mb-32 mb-10">

      <Spliter text={t("services")} SpliterIcon={ListIcon} />
      <h1 className="lg:text-5xl text-4xl mb-10">
        {lang === "fa" ? (
          <>
            <span className="mainColor inline-block mx-2">{t("advantages")}</span>
            {t("my") + " "}
          </>
        ) : (
          <>
            {t("my") + " "}
            <span className="mainColor">{t("advantages")}</span>
          </>
        )}
      </h1>
      <FadeY
        component={
          <div className="boxStyle flex justify-between !w-full !rounded-2xl !p-7 my-4 ">
            <div className="w-fit">
            



              <h3 className="text-xl mb-4">{t("highQuality")}</h3>
              <p className="grayColor lg:text-lg text-base">
           {t("highQualityDes")}
              </p>
              {/* <p className=" text-sm mt-9">4 project</p> */}
            </div>
            <CodeIcon />
          </div>
        }
      />
      <FadeY
        component={
          <div className="boxStyle flex justify-between !w-full !rounded-2xl !p-7 my-4 ">
            <div>
              <h3 className="text-xl mb-4">{t("implementationLikeUi")}</h3>
              <p className="grayColor lg:text-lg text-base">
        {t("implementationLikeUiDes")}
              </p>
              {/* <p className=" text-sm mt-9">4 project</p> */}
            </div>
            <CodeIcon />
          </div>
        }
      />
    </section>
  );
};

export default Specializations;
