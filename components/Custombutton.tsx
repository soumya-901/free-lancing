import React from "react";

const Custombutton = ({ btnName = "Explore", styles = {} }) => {
  console.log("inside button component");
  return (
    <button
      className="bg-seoblue text-white rounded-md h-8 px-5 py-1.5 "
      style={{ ...styles }}
    >
      {btnName}
    </button>
  );
};

export default Custombutton;
