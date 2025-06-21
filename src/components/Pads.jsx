import React from "react";
import "../App.css";

const Pads = (props) => {
  return (
    <>
      <button
        style={{ backgroundColor: props.colorspads }}
        className={props.on ? "on" : "off"}
        onClick={() => props.toggle(props.id)}
      >
        {props.on ? (
          <span className="text-black-400">
            SWITCH <br></br>OFF
          </span>
        ) : (
          <span className="text-yellow-400 font-bold">
            SWITCH <br></br>ON
          </span>
        )}
      </button>
    </>
  );
};

export default Pads;
