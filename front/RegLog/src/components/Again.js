import React from "react";
import "../App.css";
import { CChartLine } from "@coreui/react-chartjs";

function Fifthlist(props) {
  return (
    <div className="main">
      <CChartLine
        data={{
          labels: [
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
          ],
          datasets: [
            {
              label: "Analysis",
              backgroundColor: "rgba(567, 123, 56, 0.2)",
              borderColor: "rgba(567, 123, 56, 1)",
              pointBackgroundColor: "rgba(567, 123, 56, 1)",
              pointBorderColor: "#fff",
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 56, 30, 33],
            },
          ],
        }}
        options={{
          indexAxis: props.cordi,
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
      <div class="custom-field third">
        <h6>
          <span>Observation</span>
        </h6>
        <div class="container" style={{ marginLeft: "4px" }}>
          <center>
            <div className="d-grid" style={{}}>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </li>
                <li>
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </li>
              </ul>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Fifthlist;
