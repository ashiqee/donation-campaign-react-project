import { Pie } from "react-chartjs-2";
const data = {
  labels: ["Category 1", "Category 2", "Category 3"],
  datasets: [
    {
      data: [30, 40, 30], // Values for each category
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Colors for each category
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Colors when hovered
    },
  ],
};

const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export { PieChart };
