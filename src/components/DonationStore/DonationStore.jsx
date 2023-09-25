import { Link } from "react-router-dom";

const DonationStore = (dn) => {
  const {
    id,
    Title,
    Description_img,
    Category,
    Price,
    Button_bg,
    Text_bg,
    Card_bg,
  } = dn.dn;

  return (
    <div>
      <div
        style={{ backgroundColor: Card_bg }}
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border shadow-md "
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
          <img
            src={Description_img}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div style={{ color: Text_bg }} className="p-6">
          <button
            style={{ backgroundColor: Button_bg }}
            className="mb-4 p-1 px-2 rounded  block font-sans text-base font-semibold  leading-relaxed  "
          >
            {Category}
          </button>
          <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {Title}
          </h4>
          <p
            style={{ color: Text_bg }}
            className="mb-4 block text-2xl font-semibold leading-relaxed text-gray-700 antialiased"
          >
            ${Price}
          </p>
          <Link to={`/donationDetail/${id}`}>
            <button
              style={{ backgroundColor: Text_bg }}
              className="flex btn select-none items-center gap-2 rounded-lg py-3  px-6 text-center align-middle font-sans text-lg font-bold  text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationStore;
