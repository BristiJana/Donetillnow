import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import Navigation from "./Navigation";
import { CChart, CChartLine } from "@coreui/react-chartjs";
import "chartjs-plugin-zoom";
import Secondlist from "./Secondlist";
import Thirdlist from "./Thirdlist";
import Fourthlist from "./Fourthlist";
import Again from "./Again";
import Sixlist from "./Sixlist";
import Seventhlist from "./Seventhlist";
import Ninthlist from "./Ninthlist";

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
const labee = [
  "2023-02-08",
  "2023-02-09",
  "2023-02-10",
  "2023-02-11",
  "2023-02-12",
  "2023-02-13",
  "2023-02-14",
  "2023-02-15",
  "2023-02-16",
  "2023-02-17",
  "2023-02-18",
  "2023-02-19",
];
const datas = [40, 20, 12, 39, 10, 90, 88, 80, 44, 56, 30, 33];
export default function UserDetails() {
  const [user, setuser] = useState("");
  const [cordi, setcordi] = useState("null");
  const [show, setshow] = useState(false);
  const [unit, setunit] = useState("SI");
  const [type, settype] = useState(false);
  const [stdate, setstr] = useState("");
  const [endate, seten] = useState("");
  const [showee, setshowee] = useState(false);
  const location = useLocation();
  const { from, sensi } = location.state;
  function Fifthlist(val, unit) {
    const valee = labee.filter(
      (word) =>
        labee.indexOf(word) >= labee.indexOf(stdate) &&
        labee.indexOf(word) <= labee.indexOf(endate)
    );
    // console.log(labee.indexOf(stdate));
    // console.log(labee.indexOf(endate));
    const valer = datas.filter(
      (dtr) =>
        datas.indexOf(dtr) >= labee.indexOf(stdate) &&
        datas.indexOf(dtr) <= labee.indexOf(endate)
    );

    return (
      <div className="main">
        <CChartLine
          data={{
            labels: valee,
            datasets: [
              {
                label: "Acceleration (" + unit + ")",
                backgroundColor: "rgba(210, 138, 138, 0.2)",
                borderColor: "rgba(210, 138, 138, 1)",
                pointBackgroundColor: "rgba(210, 138, 138, 1)",
                pointBorderColor: "#fff",
                data: valer,
                stepped: type,
              },
            ],
          }}
          options={{
            indexAxis: val,
            scales: {
              x: {
                beginAtZero: true,
              },
            },
            plugins: {
              zoom: {
                zoom: {
                  wheel: {
                    enabled: true,
                  },
                  // drag:{
                  //   enabled:true
                  // },
                  mode: "x",
                  speed: 100,
                },
                pan: {
                  enabled: true,
                  mode: "x",
                  speed: 0.5,
                },
              },
            },
          }}
        />
      </div>
    );
  }
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
                <input
                  type="checkbox"
                  class="checkinp"
                  value=""
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      settype(true);
                    } else if (e.target.checked === false) {
                      settype(false);
                    }
                  }}
                />
                Periodic
              </label>
              <label class="checkbox-inline">
                <input
                  type="checkbox"
                  class="checkinp"
                  value=""
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      settype(false);
                    } else if (e.target.checked === false) {
                      settype(type);
                    }
                  }}
                />
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
  return (
    <div class="mainclass">
      <Navigation warn={from} senee={sensi} />
      <br />
      <div class="container main" style={{}}>
        <div class="row">
          <div class="col-sm">
            {Firstlist()}
            <Secondlist />

            <div>
              <div class="custom-field third">
                <h6>
                  <span>Axis</span>
                </h6>
                <div class="container">
                  <form>
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="x"
                        onChange={(e) => {
                          setcordi(e.target.value);
                          if (e.target.checked === true) {
                            setshow(true);
                          } else if (e.target.checked === false) {
                            setshow(false);
                          }
                        }}
                      />
                      X
                    </label>
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="y"
                        onChange={(e) => {
                          setcordi(e.target.value);
                          if (e.target.checked === true) {
                            setshow(true);
                          } else if (e.target.checked === false) {
                            setshow(false);
                          }
                        }}
                      />
                      Y
                    </label>
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="z"
                        onChange={(e) => {
                          setcordi(e.target.value);
                          if (e.target.checked === true) {
                            setshow(true);
                          } else if (e.target.checked === false) {
                            setshow(false);
                          }
                        }}
                      />
                      Z
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
                      <input
                        class="custom-select"
                        id="startdate"
                        style={{ width: "80%" }}
                        type="date"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setstr(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-sm">
                      <label class="side" style={{ marginRight: "20px" }}>
                        To
                      </label>
                      <input
                        class="custom-select"
                        id="enddate"
                        style={{ width: "80%" }}
                        type="date"
                        onChange={(e) => {
                          console.log(e.target.value);
                          seten(e.target.value);
                        }}
                      />
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
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="SI"
                        onChange={(e) => {
                          setunit(e.target.value);
                        }}
                      />
                      SI
                    </label>
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="MKS"
                        onChange={(e) => {
                          setunit(e.target.value);
                        }}
                      />
                      MKS
                    </label>
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="CGS"
                        onChange={(e) => {
                          setunit(e.target.value);
                        }}
                      />
                      CGS
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div>
              <div class="custom-field third" style={{ marginBottom: "0px" }}>
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

              <div
                class="container"
                style={{ border: "1px solid", marginLeft: "2px" }}
              >
                <center>
                  <div
                    className="d-grid"
                    style={{
                      width: "30%",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <div class="container-login100-form-btn">
                      <div class="wrap-login100-form-btn">
                        <div class="login100-form-bgbtn"></div>
                        <button
                          type="submit"
                          class="login100-form-btn"
                          onClick={() => {
                            setshowee(!showee);
                            console.log(showee);
                          }}
                        >
                          Display
                        </button>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </div>

            {show === true ? Fifthlist(cordi, unit) : <></>}
            {showee === true ? <Again /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}
