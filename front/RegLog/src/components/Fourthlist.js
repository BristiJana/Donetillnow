import React from "react";

import "../App.css";

function Fourthlist() {
  return (
    <div class="container" style={{ width: "50%", marginLeft: "0px" }}>
      <div class="row">
        <div class="col-sm">
          <button type="button" class="btn btn-light">
            Graph
          </button>
        </div>
        <div class="col-sm">
          <button type="button" class="btn btn-light">
            Query
          </button>
        </div>
        <div class="col-sm">
          <button type="button" class="btn btn-light">
            Comparative Analysis
          </button>
        </div>
        <div class="col-sm">
          <button type="button" class="btn btn-light">
            Spectrum Analysis
          </button>
        </div>
        <div class="col-sm">
          <button type="button" class="btn btn-light">
            Rainflow Counting
          </button>
        </div>
        <div class="col-sm">
          <button type="button" class="btn btn-light">
            Report Generator
          </button>
        </div>
        <div class="col-sm">
          <button type="button" class="btn btn-light">
            Lab
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fourthlist;
