import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FullScreenStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(20px);
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1000;

  .loader {
    width: 100px;
    height: 100px;
    display: inline-block;
    position: relative;
  }
  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  .loader::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
const FullScreenLoader = () => {
  return (
    <FullScreenStyle>
      <video muted autoPlay loop>
        <source src={`./Assets/images/SimpleStrings.mp4`} type="video/mp4" />
      </video>
      <div className="loader centerMode"></div>
    </FullScreenStyle>
  );
};

export default FullScreenLoader;
