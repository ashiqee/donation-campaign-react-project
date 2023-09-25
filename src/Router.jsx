import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import Statistics from "./components/Statistics/Statistics";
import DonationDetail from "./pages/Donation/DonationsDetails/DonationDetail";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/donationsData.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/donationsData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/donationsData.json"),
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
