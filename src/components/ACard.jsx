// const ACard = () => {
//   return (
//     <>
//       <div className="flex flex-wrap bg-dashboard m-4">
//         <div className="bg-sidebar w-60 h-48 border-t-2 border-r-2  border-main rounded-lg shadow-md hover:shadow-lg flex flex-wrap m-2">
//           <div className="flex flex-col p-4 space-y-10">
//             <div className="mb-2 flex space-x-36">
//               <div className="flex flex-col w-10 h-10 bg-main rounded-full justify-center items-center">
//                 <svg
//                 className="text-sidebar"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 20 20"
//                 >
//                   <path fill="currentColor" d="M5 7h13v10H2V4h7l2 2H4v9h1V7z" />
//                 </svg>
//               </div>
//               <button className="flex-col">
//                 <svg
//                   className="text-main "
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="flex flex-col space-y-2">
//                 <div className="flex text-white text-xl transformrounded-10 transition-transform duration-300 hover:-translate-y-1/4">Category</div>
//                 <div className="flex text-white font-bold transform transition-transform duration-300 hover:-translate-y-1/4">Rent</div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-sidebar w-60 h-48 border-t-2 border-r-2  border-main rounded-lg shadow-xl flex flex-wrap m-2">
//           <div className="flex flex-col p-4 space-y-10">
//             <div className="mb-2 flex space-x-36">
//               <div className="flex flex-col w-10 h-10 bg-main rounded-full justify-center items-center">
//                 <svg
//                 className="text-sidebar"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 20 20"
//                 >
//                   <path fill="currentColor" d="M5 7h13v10H2V4h7l2 2H4v9h1V7z" />
//                 </svg>
//               </div>
//               <button className="flex-col">
//                 <svg
//                   className="text-main "
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="flex flex-col space-y-2">
//                 <div className="flex text-white text-xl transform transition-transform duration-300 hover:-translate-y-1/4">Category</div>
//                 <div className="flex text-white font-bold transform transition-transform duration-300 hover:-translate-y-1/4">Rent</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ACard;

import { useState } from "react";

const ACard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-86% mt-28 ml-16">
        <div className="flex flex-wrap ">
          <div
            className={`bg-sidebar w-60 h-48 border-t-2 border-r-2 border-main rounded-lg shadow-md hover:shadow-lg flex flex-wrap m-2 ${
              isMenuOpen ? "" : "space-x-36"
            }`}
          >
            <div className="flex flex-col p-4 space-y-10">
              <div className="mb-2 flex space-x-36">
                <div className="flex flex-col w-10 h-10 bg-main rounded-full justify-center items-center">
                  <svg
                    className="text-sidebar"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M5 7h13v10H2V4h7l2 2H4v9h1V7z"
                    />
                  </svg>
                </div>
                <button
                  className="flex flex-col z-10 m-2"
                  onClick={handleButtonClick}
                >
                  <svg
                    className="text-main"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z"
                    />
                  </svg>
                </button>
                {/* Menu */}
                {isMenuOpen && (
                  <div className=" mt-12 w-40 bg-white border border-gray-300 rounded-lg shadow-md z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => alert("Edit clicked")}
                    >
                      Edit
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => alert("Delete clicked")}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex text-white text-xl transform transition-transform duration-300 hover:-translate-y-1/4">
                  Category
                </div>
                <div className="flex text-white font-bold transform transition-transform duration-300 hover:-translate-y-1/4">
                  Rent
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div
            className={`bg-sidebar w-60 h-48 border-t-2 border-r-2 border-main rounded-lg shadow-md hover:shadow-lg flex flex-wrap m-2 ${
              isMenuOpen ? "" : "space-x-36"
            }`}
          >
            <div className="flex flex-col p-4 space-y-10">
              <div className="mb-2 flex space-x-36">
                <div className="flex flex-col w-10 h-10 bg-main rounded-full justify-center items-center">
                  <svg
                    className="text-sidebar"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M5 7h13v10H2V4h7l2 2H4v9h1V7z"
                    />
                  </svg>
                </div>
                <button
                  className="flex flex-col z-10 m-2"
                  onClick={handleButtonClick}
                >
                  <svg
                    className="text-main"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z"
                    />
                  </svg>
                </button>
                {/* Menu */}
                {isMenuOpen && (
                  <div className="absolute top-0 right-0 mt-12 w-40 bg-white border border-gray-300 rounded-lg shadow-md z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => alert("Edit clicked")}
                    >
                      Edit
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => alert("Delete clicked")}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex text-white text-xl transform transition-transform duration-300 hover:-translate-y-1/4">
                  Category
                </div>
                <div className="flex text-white font-bold transform transition-transform duration-300 hover:-translate-y-1/4">
                  Rent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ACard;

// import { useState } from "react";

// const ACard = ({ cardData }) => {
//   if (!Array.isArray(cardData) || cardData.length === 0) {
//     return null; // or handle the case accordingly
//   }
//   // Initialize state for each card with a default value of false
//   const [isMenuOpen, setMenuOpen] = useState(Array(cardData.length).fill(false));

//   const handleButtonClick = (index) => {
//     // Create a copy of the array and toggle the state for the specified card
//     const updatedMenuOpen = [...isMenuOpen];
//     updatedMenuOpen[index] = !updatedMenuOpen[index];
//     setMenuOpen(updatedMenuOpen);
//   };

//   return (
//     <>
//       {cardData.map((data, index) => (
//         <div key={index} className="w-86% mt-28 ml-16">
//           <div className="flex flex-wrap ">
//             <div
//               className={`bg-sidebar w-60 h-48 border-t-2 border-r-2 border-main rounded-lg shadow-md hover:shadow-lg flex flex-wrap m-2 ${
//                 isMenuOpen[index] ? "" : "space-x-36"
//               }`}
//             >
//               <div className="flex flex-col p-4 space-y-10">
//                 <div className="mb-2 flex space-x-36">
//                   <div className="flex flex-col w-10 h-10 bg-main rounded-full justify-center items-center">
//                     <svg
//                       className="text-sidebar"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M5 7h13v10H2V4h7l2 2H4v9h1V7z"
//                       />
//                     </svg>
//                   </div>
//                   <button
//                     className="flex flex-col z-10 m-2"
//                     onClick={() => handleButtonClick(index)}
//                   >
//                     <svg
//                       className="text-main"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z"
//                       />
//                     </svg>
//                   </button>
//                   {/* Menu */}
//                   {isMenuOpen[index] && (
//                     <div className="mt-12 w-40 bg-white border border-gray-300 rounded-lg shadow-md z-10">
//                       <button
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         onClick={() => alert("Edit clicked")}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         onClick={() => alert("Delete clicked")}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex flex-col space-y-2">
//                   <div className="flex text-white text-xl transform transition-transform duration-300 hover:-translate-y-1/4">
//                     Category
//                   </div>
//                   <div className="flex text-white font-bold transform transition-transform duration-300 hover:-translate-y-1/4">
//                     Rent
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default ACard;
