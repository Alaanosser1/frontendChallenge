import React from "react";
import "../styles/Popup.css";
import { ReactComponent as Close } from "../assets/images/close.svg";

function Popup(props) {
  return props.trigger ? (
    <>
      <div className="popup-inner">
        <div className="close-btn-container">
          <button
            onClick={() => {
              props.setTrigger(false);
            }}
            className="btn-close"
          >
            <Close className={""} stroke={1.5} />
          </button>
        </div>
        {props.children}
      </div>
    </>
  ) : (
    ""
  );
}

export default Popup;
