import React from "react";
import "../styles/Header.css";
import AddButton from "./AddButton";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-text">
          <span>Monitored accounts</span>
        </div>
        <div className="header-btn">
          <AddButton />
        </div>
      </div>
    </>
  );
};
