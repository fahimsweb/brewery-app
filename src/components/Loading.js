import React from "react";
import img from "../spinner.gif";

let Loading = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={img} alt="loading" />
    </div>
  );
};

export default Loading;
