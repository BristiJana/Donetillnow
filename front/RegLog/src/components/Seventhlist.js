import React from "react";

import "../App.css";

function Seventhlist() {
  return (
    <div>
      <div class="custom-field third">
        <h6>
          <span>Analysis</span>
        </h6>
        <div class="container">
          <div class="row" style={{ marginBottom: "10px" }}>
            <div class="col-sm">
              <label class="side" style={{ marginRight: "6px" }}>
                Modal Analysis
              </label>
              <select
                class="custom-select"
                id="inputGroupSelect02"
                style={{ width: "70%" }}
              >
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="row" style={{ marginBottom: "10px" }}>
            <div class="col-sm">
              <label class="side" style={{ marginRight: "32px" }}>
                Regression
              </label>
              <select
                class="custom-select"
                id="inputGroupSelect02"
                style={{ width: "70%" }}
              >
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="row" style={{ marginBottom: "10px" }}>
            <div class="col-sm">
              <label class="side" style={{ marginRight: "60px" }}>
                I-Pulse
              </label>
              <select
                class="custom-select"
                id="inputGroupSelect02"
                style={{ width: "70%" }}
              >
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seventhlist;
