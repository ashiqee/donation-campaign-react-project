import { Link } from "react-router-dom";

const DonationCard = ({ donate }) => {
  const { id, Title, Picture, Category, Button_bg, Text_bg, Card_bg } = donate;
  console.log(Text_bg);

  return (
    <div className="flex justify-center">
      <Link
        to={`/donationDetail/${id}`}
        style={{ backgroundColor: Card_bg }}
        className={`max-w-full border border-gray-200 rounded-lg shadow  `}>
        <img src={Picture} alt="" />

        <div style={{ color: Text_bg }} className="p-5">
          <button className={`btn`}>
            <h2
              className="py-2 p-2 rounded-md "
              style={{ backgroundColor: Button_bg }}>
              {Category}
            </h2>
          </button>

          <h5 className={`mb-2 text-xl font-semibold`}>{Title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default DonationCard;
