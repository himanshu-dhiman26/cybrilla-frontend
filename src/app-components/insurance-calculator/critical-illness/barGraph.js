import React, { useState, useEffect } from "react";
import CanvasJSReact from "../../../assets/canvasjs.react";
import { useSelector } from "react-redux";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function BarGraph() {
  const [costAsToday, setCostAsToday] = useState(0);
  const [costInTenYears, setCostInTenYears] = useState(0);

  const formValues = useSelector((state) => state);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      calculateCosts();
    }, 3000);

    return () => clearTimeout(debounceTimer);
  }, [formValues]);

  const calculateCosts = () => {
    setCostAsToday(
      formValues.desiredIncome +
        formValues.healthcareExpenses +
        formValues.homeExpenses +
        formValues.medicalExpenses -
        formValues.otherExpenses
    );

    setCostInTenYears(
      ((formValues.desiredIncome +
        formValues.healthcareExpenses +
        formValues.homeExpenses +
        formValues.medicalExpenses +
        formValues.otherExpenses) *
        1.2) /
        formValues.recoveryPeriod
    );
  };

  const options = {
    axisY: {
      gridColor: "#eeeeee",
      lineThickness: 0,
      tickThickness: 0,
      labelFontSize: 20,
      interval: 100000,
      labelFormatter: function (e) {
        return "$" + e.value / 1000 + "K";
      },
      labelFontWeight: "lighter",
      labelFontColor: "#2b3636",
    },
    toolTip: {
      enabled: false,
    },
    data: [
      {
        type: "column",
        toolTip: {
          enabled: false,
        },
        dataPoints: [
          { label: "Estimated Cost", y: costAsToday, color: "#5cdcfa" },
          { label: "Estimated Cost", y: costInTenYears, color: "#48b6e1" },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default BarGraph;
