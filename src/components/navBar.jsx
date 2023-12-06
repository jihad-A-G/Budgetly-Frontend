import { useState } from "react";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#31353f] flex justify-between">
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
              className="block w-full p-2 ps-10 text-sm text-main border border-main rounded-lg bg-[#31353f]"
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
        <div className="flex items-center p-10 relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="relative z-10 block rounded-md bg-white p-2 focus:outline-none"
          >
            <svg
              className="h-5 w-5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>

          {dropdownOpen && (
            <div
              className="fixed inset-0 h-full w-full z-10"
              onClick={() => setDropdownOpen(false)}
            ></div>
          )}

          {dropdownOpen && (
            <div
              className="absolute right-0 top-20 bg-white rounded-md shadow-lg overflow-hidden z-20"
              style={{ width: "20rem" }}
            >
              <div className="py-2">
                <a
                  href="#"
                  className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                  />
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold" href="#">
                      Sara Salah
                    </span>{" "}
                    replied on the{" "}
                    <span className="font-bold text-blue-500" href="#">
                      Upload Image
                    </span>{" "}
                    artical . 2m
                  </p>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt="avatar"
                  />
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold" href="#">
                      Slick Net
                    </span>{" "}
                    start following you . 45m
                  </p>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                  />
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold" href="#">
                      Jane Doe
                    </span>{" "}
                    Like Your reply on{" "}
                    <span className="font-bold text-blue-500" href="#">
                      Test with TDD
                    </span>{" "}
                    artical . 1h
                  </p>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                    alt="avatar"
                  />
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold" href="#">
                      Abigail Bennett
                    </span>{" "}
                    start following you . 3h
                  </p>
                </a>
              </div>
              <a
                href="#"
                className="block bg-gray-800 text-white text-center font-bold py-2"
              >
                See all notifications
              </a>
            </div>
          )}
        </div>

        {/* <div className="flex items-center p-10">
            <button type="button" >
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
          </div> */}
      </nav>
    </>
  );
};

export default NavBar;
