import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="relative z-40   ">
      <div className="md:flex justify-center grid mx-auto  py-5  md:justify-between items-center">
        <div>
          <img src="https://i.ibb.co/hMYyQQ7/Logo.png" alt="" />
        </div>
        <div>
          <ul className=" flex mt-5 gap-4 md:gap-10 text-lg  font-bold">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block py-2 pl-3 pr-4 text-white md:underline underline-offset-8  rounded md:bg-transparent  md:text-[#FF444A]  md:dark:text-[#FF444A] dark:bg-[#FF444A] md:dark:bg-transparent"
                  : " py-2 pl-3 pr-4 text-black "
              }
              to="/">
              Home
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "block py-2 pl-3 pr-4 text-white md:underline underline-offset-8 bg-blue-700 rounded md:bg-transparent md:text-[#FF444A]  md:dark:text-[#FF444A] dark:bg-[#FF444A] md:dark:bg-transparent"
                  : "block py-2 pl-3 pr-4 text-black"
              }
              to="/donation">
              Donation
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "block py-2 pl-3 pr-4 text-white md:underline underline-offset-8 bg-blue-700 rounded md:bg-transparent md:text-[#FF444A]  md:dark:text-[#FF444A] dark:bg-[#FF444A] md:dark:bg-transparent"
                  : "block py-2 pl-3 pr-4 text-black"
              }
              to="/statistics">
              Statistics
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
