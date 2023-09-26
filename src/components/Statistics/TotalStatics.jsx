import { useEffect, useState } from "react";
import { getStoredDonation } from "../utitlity/localstorage";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJS.register(Tooltip, Title, ArcElement, Legend);

const TotalStatics = () => {
  const [pData, setData] = useState(0);
  const donationStore = getStoredDonation();

  const remainingData = 100 - pData;

  function calculate() {
    const getId = donationStore.length;

    const pValue = (getId / 12) * 100;
    setData(pValue.toFixed(2));
  }
  useEffect(() => {
    calculate();
  }, []);

  const dataTotal = {
    labels: ["totalDonation", "Remaining"],
    datasets: [
      {
        data: [pData, remainingData],
        backgroundColor: ["#0052FF", "#FF444A"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };
  return (
    <div>
      <Pie data={dataTotal} />
    </div>
  );
};

export default TotalStatics;
