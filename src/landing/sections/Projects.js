import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Spliter from "../Spliter";
import FadeY from "../../tools/motions/FadeY";
import { ProjectIcon } from "../../svg";
import Image from "next/image";
import plof from "../../../public/Assets/images/plof.png";
import melina from "../../../public/Assets/images/melinataj.png";
import melina2 from "../../../public/Assets/images/melina2.png";
import melina3 from "../../../public/Assets/images/melina3.png";
import melina4 from "../../../public/Assets/images/melina4.png";
import melina5 from "../../../public/Assets/images/melina5.png";

import karma from "../../../public/Assets/images/karma.png";
import panelAdmin from "../../../public/Assets/images/panelAdmin.png";
import mediaPanel from "../../../public/Assets/images/panelMedia.png";
import customerPanel from "../../../public/Assets/images/customerPanel.png";
import bot from "../../../public/Assets/images/asanbot.png";
import bot2 from "../../../public/Assets/images/asanbot2.png";
import bot3 from "../../../public/Assets/images/asanbot3.png";
import bot4 from "../../../public/Assets/images/asanbot4.png";
import bot5 from "../../../public/Assets/images/asanbot5.png";
import bot6 from "../../../public/Assets/images/asanbot6.png";

import styled from "styled-components";
import FadeX from "../../tools/motions/FadeX";
import FadeXleft from "../../tools/motions/FadeXleft";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
const ProjectStyle = styled.section`
  .project {
    position: relative;
    cursor: pointer;
    /* ::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      backdrop-filter: brightness(0.7);
    } */
    img {
      transition-duration: 0.6s;
    }
    :hover {
      img {
        transform: scale(1.02);
      }
      .tools {
        display: flex;
        > div {
          background-color: #404042;
          color: #ffffff;
        }
      }
      ::after {
        backdrop-filter: none;
      }
    }

    .tools {
      position: absolute;
      bottom: 1rem;
      padding: 0 1rem;
      display: none;
      transition-duration: 0.6s;
      > div {
        z-index: 100;
        margin: 0 0.3rem;
        border: unset;
        color: var(--darkColor);
        background-color: var(--whitePen);
      }
    }
  }
  p {
    color: var(--whitePen);
    margin-bottom: 2rem;
    span {
      display: inline-block;
      margin: 0 0.3rem;
      text-decoration: underline;
      text-decoration-style: wavy;
      text-underline-offset: 8px;
      text-decoration-color: var(--darkGray);
      text-decoration-thickness: 2px;
    }
  }
  ${({ lang }) =>
    lang === "fa"
      ? ".swiper-button-next { right: auto; left: 6rem; }"
      : ".swiper-button-prev { left: auto; right: 6rem; }"}

  .swiper-pagination-fraction {
    position: absolute;
    width: fit-content;
    ${({ lang }) =>
      lang === "fa"
        ? " left: 3.6rem;right: auto;"
        : " right: 3.6rem;left: auto;"}

    font-size: 10pt;
    bottom: -3rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: var(--whitePen);
    border: var(--mainBorder);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    bottom: -3.5rem;
    top: auto;
    ::after {
      font-size: 12pt;
    }
  }

  .autoplay-progress {
    position: absolute;
    left: 2rem;
    top: 1rem;
    z-index: 10;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--mainColor);
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 2px;
    stroke: var(--mainColor);
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }
  .mySwiper {
    overflow: unset;
    direction: ltr;
  }
`;
const Projects = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const meilnaImages = [melina, melina2, melina3, melina4, melina5];

  const asanbotImages = [bot, bot2, bot3, bot4, bot5, bot6];
  return (
    <ProjectStyle className="lg:mb-32 mb-10" lang={lang}>
      <Spliter text={t("portfolio")} SpliterIcon={ProjectIcon} />
      <h1 className="lg:text-5xl text-4xl mb-10">
        {lang === "fa" ? (
          <>
            <span className="mainColor inline-block mx-1">{t("projects")}</span>
            {t("my") + " "}
          </>
        ) : (
          <>
            {t("my") + " "}
            <span className="mainColor">{t("projects")}</span>
          </>
        )}
      </h1>

      <FadeX
        component={
          <div>
            <Swiper
              effect={"fade"}
              navigation={false}
              speed={600}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="mySwiper"
            >
              {meilnaImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="boxStyle project !p-0 lg:h-[30vw] md:h-[45vw] h-[14rem] !p-0 overflow-hidden">
                    <Image src={item} alt="projectimage" />
                    <div className="flex tools flex-wrap items-center">
                      <div className="boxStyle">next js</div>
                      <div className="boxStyle">redux </div>
                      <div className="boxStyle">mui </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="my-4 text-xl  decoration-zinc-500 ">
              {lang === "fa"
                ? "  سایت ملینا تاج - سایت فروشگاهی و آموزشی یک بلاگر است که با "
                : "melina taj website - A store and training site of a blogger Implemented with"}
              <span>NextJS</span>
              {t("and")} <span>styled component</span> {t("and")}{" "}
              <span>MUI</span>
              {lang === "fa" && "پیاده سازی شده "}
            </p>
          </div>
        }
      />
      <FadeXleft
        component={
          <Link href={"https://asanbtcbot.vercel.app/"} target="_blank">
            <Swiper
              effect={"fade"}
              navigation={false}
              speed={600}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay, Navigation]}
              className="mySwiper"
            >
              {asanbotImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="boxStyle project !p-0 lg:h-[30vw] md:h-[45vw] h-[14rem] !p-0 overflow-hidden">
                    <Image src={item} alt="projectimage" />
                    <div className="flex tools flex-wrap items-center">
                      <div className="boxStyle">Next js</div>
                      <div className="boxStyle">Google Chart </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="my-4 text-xl ">
              {lang === "fa"
                ? "وب سایت کریپتو پکر - سایت معرفی ربات معامله گر اجرا شده با"
                : " crypto pecker Web site - Trader robot introduction site Implemented with"}
              <span>Next js</span>
            </p>
          </Link>
        }
      />
      <div className="lg:flex">
        <FadeY
          className="lg:!w-1/2  !w-full lg:mx-3 "
          component={
            <>
              <div className="boxStyle project !p-0 overflow-hidden lg:h-72 md:h-[45vw] h-[14rem] ">
                <Image src={plof} alt="projectimage" />
                <div className="flex tools flex-wrap items-center">
                  <div className="boxStyle !mb-1">next js</div>
                  <div className="boxStyle !mb-1">redux </div>
                  <div className="boxStyle !mb-1">next-i18next </div>
                  <div className="boxStyle !mb-1">mui </div>
                  <div className="boxStyle !mb-1">pwa </div>
                  <div className="boxStyle !mb-1">swiper </div>
                </div>
              </div>
              <p className="my-4 text-xl ">{t("plofPlatform")}</p>
            </>
          }
        />

        <FadeY
          delay={0.4}
          className="lg:!w-1/2 !w-full"
          component={
            <>
              <div className="boxStyle project !p-0 overflow-hidden lg:h-72 md:h-[45vw] h-[14rem]">
                <Image src={karma} alt="projectimage" />
                <div className="flex tools flex-wrap items-center">
                  <div className="boxStyle">next js</div>
                  <div className="boxStyle">redux </div>
                  <div className="boxStyle">mui </div>
                </div>
              </div>
              <p className="my-4 text-xl ">{t("karmaCompany")}</p>
            </>
          }
        />
      </div>

      <Swiper
        effect={"fade"}
        grabCursor={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        speed={600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="boxStyle project !p-0  lg:h-[30vw] md:h-[45vw] h-[14rem] !p-0 overflow-hidden  ">
            <Image src={mediaPanel} alt="projectimage" />
            <div className="flex tools flex-wrap items-center">
              <div className="boxStyle">next js</div>
              <div className="boxStyle">redux </div>
              <div className="boxStyle">mui </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxStyle project !p-0 lg:h-[30vw] md:h-[45vw] h-[14rem] !p-0 overflow-hidden  ">
            <Image src={customerPanel} alt="projectimage" />
            <div className="flex tools flex-wrap items-center">
              <div className="boxStyle">next js</div>
              <div className="boxStyle">redux </div>
              <div className="boxStyle">mui </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="boxStyle project !p-0 lg:h-[30vw] md:h-[45vw] h-[14rem] !p-0 overflow-hidden  ">
            <Image src={panelAdmin} alt="projectimage" />
            <div className="flex tools flex-wrap items-center">
              <div className="boxStyle">next js</div>
              <div className="boxStyle">redux </div>
              <div className="boxStyle">mui </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <p className="my-4 text-xl ">
        {t("plofPlatform")}- {t("panels")}
      </p>
    </ProjectStyle>
  );
};

export default Projects;
