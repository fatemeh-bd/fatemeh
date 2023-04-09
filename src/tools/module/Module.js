import React from "react";
import { ModuleStyle } from "./ModuleStyled";
import { useSelector } from "react-redux";
import { CloseIcon } from "../../svg";

const Module = ({
  component,
  open,
  setOpen,
  icon,
  iconPath,
  text,
  className,
  ask,
  onClose,
  size,
}) => {
  const lang = useSelector((state) => state.stateLang.lng);
  const closeHandler = () => {
    if (ask) {
      setShowAsk(true);
    } else {
      setOpen(false);
      if (open && onClose) {
        onClose();
      }
    }
  };
  return (
    <ModuleStyle size={size} lang={lang}>
      <div
        className={` ${
          open
            ? "moduleContainer  fixed top-0 right-0 left-0 z-10 w-screen h-screen "
            : ""
        } `}
        onClick={closeHandler}
      ></div>

      <div
        className={`${
          open ? "module" : "closeModule"
        } fixed bottom-0 right-0 py-1 px-5 left-0 p-10 z-10 w-full max-h-full h-auto overflow-auto ${className} `}
      >
        <div
          className={`moduleheader p-3 mb-2 text-sm flex items-center justify-center relative`}
        >
          <CloseIcon onClick={closeHandler} />
          <div className="flex items-center ">
            {icon && icon}
            {iconPath && <img src={iconPath} />}
            <div className="headerText flex items-center ">
              <h5 className="px-1">{text}</h5>
            </div>
          </div>
        </div>
        {component}
      </div>
    </ModuleStyle>
  );
};

export default Module;
