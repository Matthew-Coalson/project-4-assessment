import React from "react";
import "./Circles.css";

const Circles = (props) => {
  return (
    <div className="Circles">
      <div className={props.active === 1 ? "selected" : ""}>1</div>
      <div className={props.active === 2 ? "selected" : ""}>2</div>
      <div className={props.active === 3 ? "selected" : ""}>3</div>
      <div className={props.active === 4 ? "selected" : ""}>4</div>
    </div>
  );
};

export default Circles;
