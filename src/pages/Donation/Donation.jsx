import { getStoredDonation } from "../../components/utitlity/localstorage";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import DonationStore from "../../components/DonationStore/DonationStore";
import { key } from "localforage";
const Donation = () => {
  const donations = useLoaderData();

  const [donationsSubmit, setDonationsSubmit] = useState([]);
  const [displayAllDonation, setDisplayDonation] = useState([]);
  const [dataLength, setDataLength] = useState(4);

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
      setDonationsSubmit(donationSubmit);
      setDisplayDonation(donationSubmit);
    }
  }, [donations]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mx-auto">
        <div className="grid grid-cols-1 mx-5 md:mx-0 mt-10 lg:grid-cols-2 gap-8">
          {displayAllDonation.slice(0, dataLength).map((dn) => (
            <DonationStore key={dn.id} dn={dn} />
          ))}
        </div>
      </div>
      <div className={dataLength === displayAllDonation.length ? "hidden" : ""}>
        <div className="flex justify-center">
          <button
            onClick={() => setDataLength(displayAllDonation.length)}
            className="btn p-4  bg-green-600 rounded-lg text-white font-semibold my-6"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
