const NavBar = () => {
  return (
    <>
      <nav className="bg-[#31353f] w-full h-24 flex items-center">
        <div className="flex justify-between items-center p-4 w-full">
          <div className="flex items-center p-10">
            <p className="text-white text-2xl font-semibold font-inter">
              Dashboard
            </p>
          </div>

          <div className="flex items-center">
            <div className="relative hidden md:block ml-auto">
              <div className="absolute inset-y-0 start-0 flex items-center justify-end ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-main"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-white border border-main rounded-lg bg-[#31353f]"
                placeholder="Search..."
              />
            </div>

            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-main rounded-xl text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>

          <div className="flex items-center p-10">
            <button type="button">
            {/* <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75"></span> */}

              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 0 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069l1.292-1.48Z"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95H11V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.206 3.95l.221 3.534a7.376 7.376 0 0 0 1.308 3.754a1.617 1.617 0 0 1-1.135 2.529l-3.407.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.135-2.528a7.377 7.377 0 0 0 1.308-3.754l.221-3.533ZM10.75 19a1.25 1.25 0 0 0 2.5 0v-.75h-2.5V19Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M17.643 1.355a.75.75 0 0 0-.072 1.058l1.292 1.48a3.25 3.25 0 0 1 .8 2.07l.057 2.717a.75.75 0 1 0 1.5-.031l-.057-2.718a4.75 4.75 0 0 0-1.17-3.024l-1.292-1.48a.75.75 0 0 0-1.058-.072Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
