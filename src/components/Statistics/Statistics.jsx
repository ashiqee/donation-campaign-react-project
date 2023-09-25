import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from "chart.js";

import { getStoredDonation } from "../utitlity/localstorage";
import { useLoaderData } from "react-router-dom";
ChartJS.register(Tooltip, Title, ArcElement, Legend);

const Statistics = () => {
  const donations = useLoaderData();
  const [displayAllDonation, setDisplayDonation] = useState([]);

  useEffect(() => {
    const donationStoreIds = getStoredDonation();

    if (donations.length > 0) {
      const donationSubmit = [];
      for (const id of donationStoreIds) {
        const donation = donations.find((dn) => dn.id === id);
        if (donation) {
          donationSubmit.push(donation);
        }
      }

      setDisplayDonation(donationSubmit);
    }
  }, [donations]);

  const [food, setFood] = useState(0);
  const [health, setHealth] = useState(0);
  const [clothe, setClothe] = useState(0);
  const [edu, setEdu] = useState(0);

  const data = displayAllDonation;
  console.log(data);
  useEffect(() => {
    if (data) {
      data.map((dn) => {
        if (dn.Category === "Food") {
          const foodData = data.filter((food) => food.Category === "Food");
          let totalFoodPrice = 0;
          foodData.map((p) => (totalFoodPrice += p.Price));
          setFood(totalFoodPrice);
        } else if (dn.Category === "Health") {
          const healthData = data.filter(
            (health) => health.Category === "Health"
          );
          let totalHealthPrice = 0;
          healthData.map((p) => (totalHealthPrice += p.Price));
          setHealth(totalHealthPrice);
        } else if (dn.Category === "Clothing") {
          const clotheData = data.filter(
            (clothe) => clothe.Category === "Clothing"
          );
          let totalClothePrice = 0;
          clotheData.map((p) => (totalClothePrice += p.Price));
          setClothe(totalClothePrice);
        } else if (dn.Category === "Education") {
          const educationData = data.filter(
            (edu) => edu.Category === "Education"
          );
          let totalEduPrice = 0;
          educationData.map((p) => (totalEduPrice += p.Price));
          setEdu(totalEduPrice);
        }
      });
    }
  }, [data]);

  console.log(food);
  const dataC = {
    labels: ["Food", "Health", "Clothing", "Education"],
    datasets: [
      {
        data: [food, health, clothe, edu],
        backgroundColor: ["#0052FF", "#FF444A", "#79C23F", "#F87147"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#F8714710"],
      },
    ],
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <Pie data={dataC} />
    </div>
  );
};
export default Statistics;
