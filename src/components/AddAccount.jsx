import React from "react";
import "../styles/Form.css";

const AddAccount = () => {
  return (
    <>
      <div>
        <form>
          <div className="form-group">
            <div className="radio-group">
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
            </div>

            <div className="radio-group">
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
            <br />
            <div className="form-group">
              <select id="country" name="country">
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <input placeholder="Name" type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <input placeholder="Email" type="text" id="email" name="email" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddAccount;
