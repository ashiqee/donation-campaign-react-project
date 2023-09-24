import DonationCard from "./DonationCard";

const Donations = ({ donations }) => {
  return (
    <div className="max-w-7xl mx-auto relative bottom-28 md:bottom-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {donations?.map((donate) => (
          <DonationCard key={donate.id} donate={donate} />
        ))}
      </div>
    </div>
  );
};

export default Donations;
