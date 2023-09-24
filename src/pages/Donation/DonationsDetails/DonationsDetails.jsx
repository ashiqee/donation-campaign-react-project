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
            className="p-2 rounded-lg"
            style={{ backgroundColor: Text_bg }}>
            Donate ${Price}
          </button>
        </figcaption>
      </figure>
      <h2 className="text-3xl font-bold mt-0 mb-5">{Title}</h2>
      <p className="text-justify font-normal mb-10">{Description}</p>
    </div>
  );
};

export default DonationsDetails;
