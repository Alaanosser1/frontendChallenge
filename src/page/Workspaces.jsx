import React from "react";
import "../styles/Workspaces.css";
import { ReactComponent as Buildings } from "../assets/images/buildings2.svg";
import { ReactComponent as Completed } from "../assets/images/completed.svg";
import { ReactComponent as InProgress } from "../assets/images/inprogress.svg";
import { ReactComponent as Incomplete } from "../assets/images/incomplete.svg";
import { ReactComponent as Delete } from "../assets/images/delete.svg";

export const Workspaces = () => {
  return (
    <table className="table">
      <tr>
        <th></th>
        <th>Account</th>
        <th>Account score</th>
        <th>KYB/KYC status</th>
        <th>Country</th>
        <th>Last updated</th>
        <th></th>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">TimberWorks Energy</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score">60%</p>
        </td>
        <td>
          {" "}
          <Completed className="icn" stroke={1.5} />
        </td>
        <td>Germany</td>
        <td className="secondary-text-wrapper">Today at 8:08 PM</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">John Smith</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score2">40%</p>
        </td>
        <td>
          {" "}
          <Incomplete className="icn" stroke={1.5} />
        </td>
        <td>Brazil</td>
        <td className="secondary-text-wrapper">Last week</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">Emma Robertson</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score3">90%</p>
        </td>
        <td>
          {" "}
          <InProgress className="icn" stroke={1.5} />
        </td>
        <td>South Korea</td>
        <td className="secondary-text-wrapper">2 months ago</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">TimberWorks Energy</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score">60%</p>
        </td>
        <td>
          {" "}
          <Completed className="icn" stroke={1.5} />
        </td>
        <td>Germany</td>
        <td className="secondary-text-wrapper">Today at 8:08 PM</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">John Smith</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score2">40%</p>
        </td>
        <td>
          {" "}
          <Incomplete className="icn" stroke={1.5} />
        </td>
        <td>Brazil</td>
        <td className="secondary-text-wrapper">Last week</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">Emma Robertson</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score3">90%</p>
        </td>
        <td>
          {" "}
          <InProgress className="icn" stroke={1.5} />
        </td>
        <td>South Korea</td>
        <td className="secondary-text-wrapper">2 months ago</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">TimberWorks Energy</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score">60%</p>
        </td>
        <td>
          {" "}
          <Completed className="icn" stroke={1.5} />
        </td>
        <td>Germany</td>
        <td className="secondary-text-wrapper">Today at 8:08 PM</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">John Smith</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score2">40%</p>
        </td>
        <td>
          {" "}
          <Incomplete className="icn" stroke={1.5} />
        </td>
        <td>Brazil</td>
        <td className="secondary-text-wrapper">Last week</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">Emma Robertson</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score3">90%</p>
        </td>
        <td>
          {" "}
          <InProgress className="icn" stroke={1.5} />
        </td>
        <td>South Korea</td>
        <td className="secondary-text-wrapper">2 months ago</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">TimberWorks Energy</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score">60%</p>
        </td>
        <td>
          {" "}
          <Completed className="icn" stroke={1.5} />
        </td>
        <td>Germany</td>
        <td className="secondary-text-wrapper">Today at 8:08 PM</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
      <tr>
        <td>
          <Buildings className="icn" stroke={1.5} />
        </td>
        <td>
          <div class="row">
            <div class="primary-text-wrapper">John Smith</div>
            <div class="secondary-text-wrapper">TW304719</div>
          </div>
        </td>
        <td>
          <p className="score2">40%</p>
        </td>
        <td>
          {" "}
          <Incomplete className="icn" stroke={1.5} />
        </td>
        <td>Brazil</td>
        <td className="secondary-text-wrapper">Last week</td>
        <td>
          <Delete className="dlte" stroke={1.5} />
        </td>
      </tr>
    </table>
  );
};
