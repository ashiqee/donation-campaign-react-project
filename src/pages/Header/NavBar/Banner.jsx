const Banner = () => {
  return (
    <div>
      <div className="relative bottom-40 md:bottom-28 grid h-[46rem]  max-w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div className="absolute inset-0 m-0 h-full w-full opacity-10 overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/NSRX0Pf/bg-img.webp')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>

        <div className="relative p-6 pb-48 px-0 md:px-12">
          <h2 className="mb-1 block font-sans text-2xl md:text-4xl font-medium leading-[1.5] tracking-normal text-black antialiased">
            I Grow By Helping People In Need
          </h2>
          {/* ------------ */}

          <form>
            <div className="flex py-10">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-700 rounded-s-2xl  bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos, Design Templates..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#FF444A] rounded-r-lg border border-[#FF444A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#FF444A] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>

          {/* --------------- */}
        </div>
      </div>
      ;
    </div>
  );
};

export default Banner;
