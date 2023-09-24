import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationsDetails from "./DonationsDetails";

const DonationDetail = () => {
  const [donationData, setDonationData] = useState({});
  const donations = useLoaderData();
  //   console.log(donation);

  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    const findDonation = donations?.find((donation) => donation.id === idInt);
    setDonationData(findDonation);
  }, [idInt, donations]);

  //   console.log(donationData);
  return (
    <div>
      <DonationsDetails donationData={donationData} />
    </div>
  );
};

export default DonationDetail;
