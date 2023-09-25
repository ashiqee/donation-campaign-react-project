import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Category 1", "Category 2", "Category 3"],
  datasets: [
    {
      data: [30, 40, 30],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const PieCharts = () => {
  return (
    <div>
      <h2>Pie Chart Example</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieCharts;
