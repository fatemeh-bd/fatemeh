import React from "react";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import MainInput from "../../tools/input/MainInput";
import MainTextArea from "../../tools/input/MainTextArea";
import MainButton from "../../tools/buttons/MainButton";
import { GmailIcon } from "../../svg";
import Fade from "../../tools/motions/Fade";
import FadeY from "../../tools/motions/FadeY";
import Spliter from "../Spliter";

const ContactMe = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);

  return (
    <section className="lg:mb-32 mb-10">

      <Spliter SpliterIcon={GmailIcon} text={t("contactMe")} />
    <FadeY
      component={
        <div>
          <h1 className="lg:text-5xl text-4xl">
            {lang === "fa" ? "بیایید" : "Let's Work "}
            <span className="mainColor mx-1">
              {lang === "fa" ? "با هم " : "Together !"}
            </span>
            {lang === "fa" && "  کار کنیم ! "}
          </h1>
          <p className="py-4">{t("contactMeDes")}</p>
          <div className="flex flex-wrap">
            <MainInput placeHolder={t("yourFullName")} label={t("fullName")} />
            <MainInput
              placeHolder={t("yourEmailAddress")}
              label={t("email")}
              type="email"
            />
            <MainTextArea placeHolder={t("yourMessage")} label={t("message")} />
            <MainInput
              placeHolder={t("yourPhoneNumber")}
              label={t("phone") + " " + t("optional")}
              type="tell"
            />
          </div>
          <MainButton
            text={t("send")}
            className="lg:!w-1/3 !w-1/2 mt-6 mb-12 m-auto"
            icon={<GmailIcon />}
          />
        </div>
      }
    />
    </section>
  );
};

export default ContactMe;
