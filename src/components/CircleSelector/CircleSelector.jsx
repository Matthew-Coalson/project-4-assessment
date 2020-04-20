import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => {
  return (
    <div className="CircleSelector">
      <button
        className={props.active === 1 ? "selected" : ""}
        onClick={() => {
          props.setActive(1);
        }}
      >
        {props.active === 1 ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}
      </button>
      <button
        className={props.active === 2 ? "selected" : ""}
        onClick={() => {
          props.setActive(2);
        }}
      >
        {props.active === 2 ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}
      </button>
      <button
        className={props.active === 3 ? "selected" : ""}
        onClick={() => {
          props.setActive(3);
        }}
      >
        {props.active === 3 ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}
      </button>
      <button
        className={props.active === 4 ? "selected" : ""}
        onClick={() => {
          props.setActive(4);
        }}
      >
        {props.active === 4 ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}
      </button>
    </div>
  );
};

export default CircleSelector;
