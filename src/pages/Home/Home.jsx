import { useLoaderData } from "react-router-dom";
import Donations from "../Donation/Donations";
import Banner from "../Header/NavBar/Banner";

const Home = () => {
  const donations = useLoaderData();

  return (
    <div>
      <Banner />
      <Donations donations={donations} />
    </div>
  );
};

export default Home;
