import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  GithubIcon,
  GmailIcon,
  InstagramIcon,
  LangIcon,
  Logo,
  MoonIcon,
  SettingIcon,
  SunIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "../../svg";
import MainButton from "../../tools/buttons/MainButton";
import logo from "../../../public/Assets/images/logo.svg";
import myProfile from "../../../public/Assets/images/fatemeh.jpeg";
import { ProfileStyle } from "./ProfileStyled";
import Module from "../../tools/module/Module";
import Setting from "../setting/Setting";
import { setCookies } from "cookies-next";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/lang/langAction";
import { useRouter } from "next/router";
import { leftDir, rightDir } from "../../tools/ChangeRoots";
import { convertDate } from "../../tools/helper";
import useLocalStorage from "../../hooks/useLocalStorage";
if (typeof window !== "undefined") {
  var root = document.documentElement;
}
export const changeTheme = (theme) => {
  if (theme === "light") {
    root.style.setProperty("--whitePen", "#111111");
    root.style.setProperty("--backColor", "#ffffff");
    root.style.setProperty("--darkColor", "#f4f4f4");
    root.style.setProperty("--grayPen", "#474747");
    root.style.setProperty("--lowOpacity", "0.1");
    root.style.setProperty("--mainBorder", "1px solid #b4b4b4");
    root.style.setProperty("--darkGray", "#f4f4f4");
  } else {
    root.style.setProperty("--whitePen", "#ffffff");
    root.style.setProperty("--backColor", "#1f1f1f");
    root.style.setProperty("--darkColor", "#1f1f1f");
    root.style.setProperty("--grayPen", "#a1a1a1");
    root.style.setProperty("--lowOpacity", "0.3");
    root.style.setProperty("--mainBorder", "1px solid #565656");
    root.style.setProperty("--darkGray", "#404042");
  }
};
const Profile = () => {
  const [openSetting, setOpenSetting] = useState(false);
  const lang = useSelector((state) => state.stateLang.lng);
  const [config, setConfig] = useLocalStorage("config", "");

  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const changeHandler = (lng) => {
    dispatch(changeLang(lng));
    setCookies("lang", lng);

    i18n.changeLanguage(lng);
    router.push(
      {
        route: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale: lng }
    );
    console.log(lng === "fa");
    if (lng === "fa") {
      rightDir();
    } else {
      leftDir();
    }
  };

  useEffect(() => {
    dispatch(changeLang(locale));

    i18n.changeLanguage(locale);
    if (locale === "fa") {
      rightDir();
    } else {
      leftDir();
    }
  }, [locale]);

  return (
    <ProfileStyle className="lg:sticky static lg:mt-0 mt-10 mb-16 z-10 lg:top-16   top-20 lg:col-span-4  lg:pt-6 xl:col-span-3 text-center flex flex-col justify-between ">
      <div
        className={`setting lg:absolute fixed !top-5 left-3 ${
          lang === "fa" ? "right-3" : "right-0"
        }  flex items-center justify-start w-full z-10 cursor-pointer`}
      >
        <SettingIcon onClick={() => setOpenSetting(true)} />
        <LangIcon
          onClick={() =>
            locale === "fa" ? changeHandler("en") : changeHandler("fa")
          }
        />
        {config?.theme === "light" ? (
          <MoonIcon
            onClick={() => {
              changeTheme("dark");
              setConfig({ ...config, theme: "dark" });
            }}
          />
        ) : (
          <SunIcon
            onClick={() => {
              changeTheme("light");
              setConfig({ ...config, theme: "light" });
            }}
          />
        )}
      </div>
      <div className="flex items-center justify-between pb-4">
        {/* <Image alt="logo" src={logo} width={140} height={140} /> */}
        <Logo />
        <div>
          <p className=" text-sm">{t("developer")}</p>
        </div>
      </div>
      <div className="info">
        <Image src={myProfile} alt="profile" className="profileImage" />
        <p className="text-2xl  mt-9 ">{t("hellowFateme")}</p>
        <p className="text-2xl mt-x">{t("baseTehran")}</p>
        {/* <p className="text-2xl  mt-9 ">دکمه ارسال پیام رو بزن و باهام ارتباط برقرار کن :)</p> */}
        
        <span className="text-sm my-4 block ">
          {t("lastUpdate")} {convertDate("2023/3/5", lang)}
        </span>
        <div className="flex socials items-center justify-center my-7 ">
          <Link href={"https://instagram.com/_._fateemeh?igshid=YmMyMTA2M2Y="}>
            <InstagramIcon />
          </Link>
          <Link href={"https://t.me/fateemeh_bd"}>
            <TelegramIcon />
          </Link>
          <Link href={"https://github.com/fatemeh-bd"}>
            <GithubIcon />
          </Link>
          <Link href={"https://wa.me/9901433445"}>
            <WhatsAppIcon />
          </Link>
        </div>
      </div>
      <Link
        href={"mailto:baridaryan@gmail.com"}
        target="_blank"
        className="w-full"
      >
        <MainButton
          text={t("hireMe")}
          icon={<GmailIcon />}
          className="uppercase"
        />
      </Link>
      <Module
        open={openSetting}
        setOpen={setOpenSetting}
        text={t("configuration")}
        icon={<SettingIcon />}
        component={<Setting setOpen={setOpenSetting} />}
      />
    </ProfileStyle>
  );
};

export default Profile;
