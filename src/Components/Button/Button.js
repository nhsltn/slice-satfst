import React from "react";

const button = (props) => {
  return (
    <button
      className={`rounded-full px-10 py-2 ${props.bgcolor} ${props.txtcolor} ${props.border}`}
    >
      {props.children}
    </button>
  );
};

export default button;
