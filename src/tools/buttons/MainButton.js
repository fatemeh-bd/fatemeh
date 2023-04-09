import React from "react";

import ButtonLoader from "../loader/ButtonLoader";
import { MainButtonStyle } from "./MainButtonStyled";

const MainButton = ({
  text,
  disabled,
  className,
  onClick,
  loader,
  theme,
  size,
  icon,
}) => {
  return (
    <MainButtonStyle
      disabled={disabled}
      className={`${
        className ? className : ""
      }  flex justify-center items-center w-[100%] h-12 text-base`}
      onClick={onClick}
      theme={theme}
      size={size}
      id="main-button"
    >
      {loader ? (
        <ButtonLoader />
      ) : icon ? (
        <>
          {icon}
          {text}
        </>
      ) : (
        text
      )}
    </MainButtonStyle>
  );
};

export default MainButton;
