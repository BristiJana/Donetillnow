import React from "react";

import "../App.css";
import Seventhlist from "./Seventhlist";
import RenderSecond from "./RendorSecond";
function Sixlist() {
  return (
    <div>
      <div class="row" style={{ marginBottom: "14px" }}>
        <Seventhlist />
      </div>
      <div
        class="row"
        style={{
          paddingLeft: "29px",
          marginLeft: "4px",
          marginRight: "4px",
          border: "1px solid",
        }}
      >
        <RenderSecond />
      </div>
      <div
        class="row"
        style={{
          border: "1px solid",
          marginTop: "10px",
          marginLeft: "4px",
          marginRight: "4px",
          marginBottom: "10px",
          paddingLeft: "5px",
        }}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters,
      </div>
    </div>
  );
}

export default Sixlist;
