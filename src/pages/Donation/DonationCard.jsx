const DonationCard = ({ donate }) => {
  const { Title, Picture, Category, Button_bg, Text_bg, Card_bg } = donate;
  console.log(Text_bg);

  return (
    <div className="flex justify-center">
      <div
        style={{ backgroundColor: Card_bg }}
        className={`max-w-full border border-gray-200 rounded-lg shadow  `}>
        <a href="#">
          <img src={Picture} alt="" />
        </a>

        <div style={{ color: Text_bg }} className="p-5">
          <button className={`btn  `}>
            <h2
              className="py-2 p-2 rounded-md "
              style={{ backgroundColor: Button_bg }}>
              {Category}
            </h2>
          </button>
          <a href="#">
            <h5 className={`mb-2 text-xl font-semibold`}>{Title}</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
