import React, { useState } from "react";

import "../App.css";
const data = [
  {
    id: 1,
    full_name: "Delhi",
    sites: [
      { name: "Bridge1", act: "true" },
      { name: "Bridge4", act: "false" },
      { name: "Bridge6", act: "false" },
      { name: "Bridge7", act: "true" },
    ],
  },
  {
    id: 2,
    full_name: "Hyderabad",
    sites: [
      { name: "Bridge8", act: "true" },
      { name: "Bridge12", act: "false" },
      { name: "Bridge4", act: "true" },
    ],
  },
  {
    id: 3,
    full_name: "Mumbai",
    sites: [
      { name: "Bridge11", act: "false" },
      { name: "Bridge9", act: "false" },
    ],
  },
];
function Firstlist() {
  const [site, setsite] = useState([]);
  const [active, setactive] = useState("false");
  var tem;
  return (
    <div>
      <div class="custom-field first">
        <h6>
          <span>Type</span>
        </h6>
        <div class="container">
          <form>
            <label class="checkbox-inline">
              <input type="checkbox" class="checkinp" value="" />
              Periodic
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" class="checkinp" value="" />
              Continuos
            </label>
          </form>
        </div>
      </div>

      <div class="custom-field first">
        <h6>
          <span>Site Selection</span>
        </h6>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <span>Region</span>
              <br />
              <select
                class="custom-select"
                id="inputGroupSelect02"
                onChange={(e) => {
                  const valee = data.filter(
                    (word) => word.full_name == e.target.value
                  );

                  setsite(valee[0].sites);
                }}
              >
                <option selected>Regions...</option>
                {data.map((friend, index) => (
                  <option>{friend.full_name}</option>
                ))}
              </select>
            </div>
            <div class="col-sm">
              <span>Site</span>
              <br />
              <select
                class="custom-select"
                id="inputGroupSelect02"
                onChange={(e) => {
                  const vacting = site.filter(
                    (word) => word.name == e.target.value
                  );

                  setactive(vacting[0].act);
                }}
              >
                <option selected>Sites...</option>
                {site.map((friend, index) => (
                  <option key={index}>{friend.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "240px",
            paddingTop: "20px",
          }}
          class="row"
        >
          <div class="col-sm">
            <div
              style={{
                width: "10px",
                height: "10px",

                backgroundColor: active == "true" ? "green" : "red",
              }}
            ></div>
          </div>
          <div class="col-sm" style={{ fontWeight: "bold" }}>
            {(tem = active == "true" ? "Active" : "InActive")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstlist;
