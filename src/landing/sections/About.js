import React from "react";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { UserIcon } from "../../svg";
import Spliter from "../Spliter";
import FadeY from "../../tools/motions/FadeY";

const About = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);

  return (
    <section className="lg:mb-32 mb-10">
      <FadeY
        component={
          <>
            <Spliter SpliterIcon={UserIcon} text={t("aboutMe")} />
            <div className="lg:w-5/6">
              <h1 className="lg:text-5xl text-4xl">
              {t("introMe")}
                <span className="mainColor mx-2">{t("myself")}</span>
              </h1>
              
              <FadeY
                component={
                  <>
                    <p className="my-6 lg:text-xl !leading-9 text-base capitalize border-b pb-6 border-b-zinc-600">
                    {t("aboutMeDes")}
                    </p>
                    <div className="flex items-start justify-between flex-wrap">
                      <div >
                        <div className="flex mb-3">
                          <h4 className="mx-1">{t("birthdate")} :</h4>
                          <p>{t("myBirthday")}</p>
                    
                        </div>
                        <div className="flex mb-3">
                        <h4 className="mx-1">{t("from")} :</h4>
                          <p>{t("tehranIran")}</p>
                  
                        </div>
                      </div>
                      <div >
                        <div className="flex mb-3">
                        <h4 className="mx-1">{t("fieldOfStudy")} : </h4>
                          <p>{t("computerSoftWare")}</p>
                          
                        </div>
                        <div className="flex mb-3">
                          <h4 className="mx-1">{t("email")} : </h4>
                          <p>baridaryan@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            </div>
          </>
        }
      />
    </section>
  );
};

export default About;
