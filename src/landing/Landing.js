import React, { useEffect, useRef, useState } from "react";
import { LandingStyle } from "./LandingStyled";
import { GmailIcon, MenuIcon } from "../svg";
import HeroSection from "./sections/HeroSection";
import Profile, { changeTheme } from "./profile/Profile";
import useLocalStorage from "../hooks/useLocalStorage";
import FullScreenLoader from "../tools/loader/FullScreenLoader";
import { useDispatch, useSelector } from "react-redux";
import { changeMovie } from "../redux/global/globalAction";
import About from "./sections/About";
import {
  BagIcon,
  HomeIcon,
  ListIcon,
  ProjectIcon,
  RectangleGroupIcon,
  UserIcon,
} from "../svg";
import TooltipLeft from "../tools/tooltip/TooltipLeft";
import { useTranslation } from "next-i18next";
import Resume from "./sections/Resume";
import Specializations from "./sections/Specializations";
import MySkills from "./sections/MySkills";
import Projects from "./sections/Projects";
import ScrollToTop from "react-scroll-to-top";
import ContactMe from "./sections/ContactMe";
import useScreenSize from "../hooks/useScreenSize";

const Landing = () => {
  const size = useScreenSize();
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.stateLang.lng);
  const movie = useSelector((state) => state.stateGlobal);
  const refs = useRef([]);
  const container = useRef();
  const [activeIndex, setActiveIndex] = useState(1); // button active status
  const [offsetTops, setOffsetTops] = useState([]);
  if (typeof window !== "undefined") {
    var root = document.documentElement;
  }
  useEffect(() => {
    setOffsetTops(refs.current.map((ref) => ref.offsetTop));
  }, [refs]);
  const handleScroll = () => {
    if (
      container.current.scrollTop >=
      container.current.scrollHeight - container.current.offsetHeight
    ) {
      setActiveIndex(allSections.length - 1);
    } else {
      offsetTops.forEach((offsetTop, index) => {
        if (container.current.scrollTop >= offsetTop) setActiveIndex(index);
      });
    }
  };
  const handleClick = async (index) => {
    await container.current.scrollTo({
      top: refs.current[index].offsetTop,
      behavior: "smooth",
    });
  };
  const [allSections] = useState([
    {
      name: 1,
      component: <HeroSection toProject={() => handleClick(6)} />,
      icon: HomeIcon,
      tooltip: "home",
    },
    { name: 2, component: <About />, icon: UserIcon, tooltip: "aboutMe" },
    {
      name: 3,
      component: <Specializations />,
      icon: ListIcon,
      tooltip: "specializations",
    },
    {
      name: 4,
      component: <Resume />,
      icon: BagIcon,
      tooltip: "workExperience",
    },
    {
      name: 5,
      component: <MySkills />,
      icon: RectangleGroupIcon,
      tooltip: "skills",
    },
    {
      name: 6,
      component: <Projects />,
      icon: ProjectIcon,
      tooltip: "projects",
    },
    {
      name: 7,
      component: <ContactMe />,
      icon: GmailIcon,
      tooltip: "contactMe",
    },
  ]);
  const [config, setConfig] = useLocalStorage("config", "");

  useEffect(() => {
    setLoader(false);
    changeTheme(config?.theme);
    if (config?.movie) {
      dispatch(changeMovie(`./Assets/images/${config.movie}.mp4`));
      if (
        config.movie === "LiquidsWavy" ||
        config.movie === "EarthLinesSphere" ||
        config.movie === "SimpleStrings"
      ) {
        config?.theme !== "light" &&
          root.style.setProperty("--lowOpacity", "0.3");
        config?.theme !== "light" &&
          root.style.setProperty("--backColor", "#161616");
      } else {
        root.style.setProperty("--lowOpacity", "0.1");
        root.style.setProperty("--backColor", "#1f1f1f");
      }
    }
    config?.backColor &&
      root.style.setProperty("--mainColor", config.backColor);
  }, []);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [movie]);
  return (
    <LandingStyle
      className={`  ${
        lang === "fa" ? "lg:pr-7 lg:pl-0" : "lg:pl-7 lg:pr-0"
      } px-6 m-auto`}
      lang={lang}
      ref={container}
      onScroll={handleScroll}
    >
      {loader && <FullScreenLoader />}
      {!loader && (
        <video muted autoPlay loop id="video">
          <source src={movie.video} type="video/mp4" />
        </video>
      )}
      <div className="lg:grid lg:grid-cols-12 gap-0 lg:w-full ">
        {size < 1023 ? "" : <Profile />}
        <div
          className={`relative content mt-6 lg:pt-14 pt-4 ${
            lang === "fa" ? "lg:mr-20" : "lg:ml-16"
          }  lg:col-span-7 lg:row-span-2  xl:col-span-7`}
        >
          {allSections.map((i, index) => (
            <div key={index} ref={(el) => (refs.current[i.name] = el)}>
              {i.component}
            </div>
          ))}
        </div>
        <div>
          <MenuIcon
            className={`boxStyle fixed lg:top-20 top-3 ${
              lang === "fa" ? "lg:left-7 left-5" : "lg:right-7 right-5"
            } cursor-pointer !p-3`}
          />
          <div
            className={`navigation boxStyle fixed z-10  ${
              lang === "fa" ? "lg:left-7" : "lg:right-7"
            } bottom-0 ${
              lang === "fa" ? "left-0" : "right-0"
            } lg:w-fit w-full z-10 h-fit flex lg:flex-col items-center justify-between `}
          >
            {allSections.map((item, i) => {
              return (
                <TooltipLeft
                  key={i}
                  TooltipIcon={item.icon}
                  text={item.tooltip}
                  className={activeIndex === item.name ? "active" : ""}
                  active={activeIndex === item.name}
                  onClick={() => handleClick(item.name)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LandingStyle>
  );
};

export default Landing;
