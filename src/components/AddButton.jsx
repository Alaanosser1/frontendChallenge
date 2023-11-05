import { React, useState } from "react";
import { ReactComponent as Add } from "../assets/images/add.svg";
import AddAccount from "./AddAccount";
import Popup from "./Popup";
import "../styles/Button.css";

const AddButton = () => {
  const [addAccountPopup, setAddAccountPopup] = useState(false);
  return (
    <>
      <Popup trigger={addAccountPopup} setTrigger={setAddAccountPopup}>
        <AddAccount hidePopup={setAddAccountPopup}></AddAccount>
      </Popup>
      <button
        onClick={() => {
          setAddAccountPopup(true);
        }}
        className="custom-button"
      >
        <Add className="add-icon" stroke={1.5} />
        <h3>Add account</h3>
      </button>
    </>
  );
};

export default AddButton;
