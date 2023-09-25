import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import {
  getStoredDonation,
  saveDonation,
} from "../../../components/utitlity/localstorage";
import { useParams } from "react-router-dom";

const DonationsDetails = ({ donationData }) => {
  const {
    id,
    Title,
    Description_img,
    Description,
    Category,
    Button_bg,
    Text_bg,
    Card_bg,
    Picture,
    Price,
  } = donationData;

  const notify = () => toast.success("Donation Added Success");

  const handleDonationAdd = () => {
    const getIds = getStoredDonation();
    const exists = getIds.find((getId) => getId === id);
    if (!exists) {
      saveDonation(id);

      notify();
    } else {
      toast.error("Allready Added This Donation");
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <figure className="relative">
        <div href="#">
          <img
            className="rounded-lg h-full w-full md:h-[700px] lg:h-[80vh]"
            src={Description_img}
            alt="image description"
          />
        </div>
        <div className="relative bottom-24 rounded-lg opacity-50 bg-gray-700 w-full h-24 "></div>
        <figcaption className="absolute px-10  text-lg text-white bottom-32">
          <button
            onClick={handleDonationAdd}
            className="p-2 rounded-lg font-bold"
            style={{ backgroundColor: Text_bg }}
          >
            Donate ${Price}
          </button>
        </figcaption>
      </figure>
      <h2 className="text-3xl font-bold mt-0 mb-5">{Title}</h2>
      <p className="text-justify font-normal mb-10">{Description}</p>
      <ToastContainer />
    </div>
  );
};

export default DonationsDetails;
