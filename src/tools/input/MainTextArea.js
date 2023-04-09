import React from "react";

const MainTextArea = ({ label, onChange, value, placeHolder }) => {
  return (
    <div className="flex flex-col lg:my-6 my-4 lg:w-2/4 w-full ">
      {label && <label className="mb-1 uppercase">{label}</label>}
      <textarea
        onChange={onChange}
        value={value}
        className="boxStyle lg:!w-11/12 !w-full h-40 "
        placeholder={placeHolder}
        style={{backgroundColor:"var(--darkColor)"}}

      />
    </div>
  );
};

export default MainTextArea;
