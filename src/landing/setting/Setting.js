import { setCookies } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { MainBox } from "../../../styles/GlobalStyled";
import useLocalStorage from "../../hooks/useLocalStorage";
import { changeMovie } from "../../redux/global/globalAction";
import { changeLang } from "../../redux/lang/langAction";
import { IranFlag, USAFlag } from "../../svg";
import { leftDir, rightDir } from "../../tools/ChangeRoots";
import ColorBox from "./ColorBox";

const Setting = ({ setOpen }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const [config, setConfig] = useLocalStorage("config", "");
  if (typeof window !== "undefined") {
    var root = document.documentElement;
  }
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

  const videoName = [
    { name: "WaterWaves", title: "Water Waves" },
    { name: "3DAbstractBall", title: "3D Abstract Ball" },
    { name: "LiquidsWavy", title: "Liquids Wavy" },
    { name: "EarthLinesSphere", title: "  Earth Lines Sphere" },
    { name: "SimpleStrings", title: "  Simple Strings" },
    { name: "SolidColor", title: "Solid Color" },
  ];
  const selectMovie = (name) => {
    dispatch(changeMovie(`./Assets/images/${name}.mp4`));
    setConfig({ ...config, movie: name });
    if (
      name === "LiquidsWavy" ||
      name === "EarthLinesSphere" ||
      name === "SimpleStrings"
    ) {
      config?.theme!=="light"&&  root.style.setProperty("--lowOpacity", "0.3");
    } else {
      root.style.setProperty("--lowOpacity", "0.1");
    }
    setOpen(false);
  };
  return (
    <div className="py-3">
      <h4>{t("lanquage")} </h4>
      <div className=" flex items-center mt-2 mb-4 ">
        <div
          className="boxStyle flex items-center cursor-pointer"
          style={{ borderColor: lang === "en" && "var(--mainColor)" }}
          onClick={() => {
            changeHandler("en");
            setOpen(false);
          }}
        >
          <USAFlag className={lang === "fa" ? "ml-2" : "mr-2"} />
          {t("english")}
        </div>
        <div
          className="boxStyle flex items-center cursor-pointer mx-3"
          style={{ borderColor: lang === "fa" && "var(--mainColor)" }}
          onClick={() => {
            changeHandler("fa");
            setOpen(false);
          }}
        >
          <IranFlag className={lang === "fa" ? "ml-2" : "mr-2"} />
          {t("persian")}
        </div>
      </div>
      <h4>{t("mainColor")}</h4>
      <div className="flex items-center flex-wrap mt-2 mb-4">
        <ColorBox colorClass={"myMainColor"} />
        <ColorBox colorClass={"bg-gray-50"} />
        <ColorBox colorClass={"bg-cyan-400"} />
        <ColorBox colorClass={"bg-red-400"} />
        <ColorBox colorClass={"bg-red-600"} />
        <ColorBox colorClass={"bg-orange-500"} />
        <ColorBox colorClass={"bg-amber-300"} />
        <ColorBox colorClass={"bg-pink-600"} />
        <ColorBox colorClass={"bg-sky-400"} />
        <ColorBox colorClass={"bg-indigo-600"} />
        <ColorBox colorClass={"bg-fuchsia-500"} />
      </div>
      <h4>{t("backgroundVideo")}</h4>
      <div className="flex items-center  flex-wrap mt-2 mb-4">
        {videoName.map((item, index) => (
          <MainBox
            hover
            onClick={() => selectMovie(item.name)}
            key={index}
            className={`${
              lang === "fa" ? "ml-3" : "mr-3"
            } mb-3 cursor-pointer  `}
            style={{
              ":hover": {
                display: "none",
              },
              borderColor: item.name === config.movie && "var(--mainColor)",
            }}
          >
            {t(item.name)}
          </MainBox>
        ))}
      </div>
    </div>
  );
};

export default Setting;
