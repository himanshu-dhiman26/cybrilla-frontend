import React from "react";
import { Chart } from "react-charts";
import CanvasJSReact from "../../../assets/canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  data: [
    {
      type: "column",
      dataPoints: [
        { label: "Apple", y: 10, color: "#000" },
        { label: "Orange", y: 15 },
      ],
    },
  ],
};

function BarGraph() {
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default BarGraph;
