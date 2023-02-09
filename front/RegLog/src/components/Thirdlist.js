import React from "react";

import "../App.css";

function Thirdlist() {
  return (
    <div>
      <div class="custom-field third">
        <h6>
          <span>Axis</span>
        </h6>
        <div class="container">
          <form>
            <label class="checkbox-inline">
              <input type="checkbox" class="checkinp" value="" />X
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" class="checkinp" value="" />Y
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" class="checkinp" value="" />Z
            </label>
          </form>
        </div>
      </div>
      <div class="custom-field third">
        <h6>
          <span>Time Range</span>
        </h6>
        <div class="container">
          <div class="row" style={{ marginBottom: "5px" }}>
            <div class="col-sm">
              <label class="side" style={{ marginRight: "5px" }}>
                From
              </label>
              <select
                class="custom-select"
                id="inputGroupSelect02"
                style={{ width: "80%" }}
              >
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-sm">
              <label class="side" style={{ marginRight: "20px" }}>
                To
              </label>
              <select
                class="custom-select"
                id="inputGroupSelect02"
                style={{ width: "80%" }}
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
      <div class="custom-field third">
        <h6>
          <span>Units</span>
        </h6>
        <div class="container">
          <form>
            <label class="checkbox-inline">
              <input type="checkbox" class="checkinp" value="" />
              SI
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" class="checkinp" value="" />
              MKS
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" class="checkinp" value="" />
              CGS
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Thirdlist;
