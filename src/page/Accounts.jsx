import React from "react";
import AddButton from "../components/AddButton";
import { ReactComponent as Buldings } from "../assets/images/buildings.svg";
import "../styles/Accounts.css";

const Accounts = () => {
  return (
    <>
      <div className="active-page">
        <div className="accounts-main">
          <div className="">
            <Buldings className={"buldings-icon"} stroke={1.5} />
          </div>
          <div className="accounts-text">
            <p className="accounts-primary-text">No accounts</p>

            <p className="accounts-secondary-text">
              Add a new account to start monitoring them for KYC compliance
              purposes
            </p>
          </div>
          <div className="add-btn">
            <AddButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
