import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { useLoaderData } from "react-router-dom";

const Donations = (props) => {
  const donations = useLoaderData();

  const inputData = props.passedString;

  const [displayDonationData, setDisplayDonationData] = useState([]);

  useEffect(() => {
    // console.log(inputData);
    if (
      inputData === "food" ||
      inputData === "health" ||
      inputData === "clothing" ||
      inputData === "education"
    ) {
      const filData = donations.filter(
        (d) => inputData === d.Category.toLowerCase()
      );

      setDisplayDonationData(filData);
    } else {
      setDisplayDonationData(donations);
    }
  }, [inputData, donations]);

  return (
    <div className="max-w-7xl mx-auto  ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {displayDonationData?.map((donate) => (
          <DonationCard key={donate.id} donate={donate} />
        ))}
      </div>
    </div>
  );
};

export default Donations;
