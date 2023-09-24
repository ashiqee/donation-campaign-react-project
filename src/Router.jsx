import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import Statistics from "./pages/Statistics/Statistics";
import DonationDetail from "./pages/Donation/DonationsDetails/DonationDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/donationsData.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/donationDetail/:id",
        element: <DonationDetail />,
        loader: () => fetch("/donationsData.json"),
      },
    ],
  },
]);
export default router;
