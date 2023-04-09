import React from "react";

import { SecondlyButtonStyle } from "./SecondlyButtonStyled";

const SecondlyButton = ({ text, icon }) => {
  return (
    <SecondlyButtonStyle className=" flex justify-center items-center z-[1] overflow-hidden relative h-12 text-base">
      {text}
      {icon}
    </SecondlyButtonStyle>
  );
};

export default SecondlyButton;
