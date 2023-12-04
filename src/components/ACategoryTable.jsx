
// const CategoryTable = () => {
//   return (
//     <div className="flex bg-main border rounded-lg items-center justify-center ">
//             <table className="w-full text-sm text-left rtl:text-right">
//               <thead className="text-xs text-gray-700 uppercase ">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">
//                     Category Name
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     User
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Date
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Created At
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr className="bg-[#31353f] border-b justify-center text-main hover:bg-main hover:animate-pulse hover:text-white">
//                   <th
//                     scope="row"
//                     className="px-6 py-4 font-medium whitespace-nowrap justify-center flex"
//                   >
//                     Apple MacBook Pro 17
//                   </th>
//                   <td className="px-6 py-4">Silver</td>
//                   <td className="px-6 py-4">Laptop</td>
//                   <td className="px-6 py-4">$2999</td>
//                   <td className="px-6 py-4 ">
//                     <a
//                       href="#"
//                       className="font-medium hover:underline align-center px-4"
//                     >
//                       Edit
//                     </a>

//                     <a
//                       href="#"
//                       className="font-medium hover:underline align-center hover:animate-pulse-text-red-500"
//                     >
//                       Delete
//                     </a>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//   )
// }

// export default CategoryTable


// ... (other imports)
import { useState, useEffect } from "react";
const CategoryTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    // Example: fetch('/api/data').then(response => response.json()).then(data => setTableData(data));

    // For the sake of demonstration, let's assume you receive data like this:
    const newData = [
      { id: 1, name: 'Item 1', column2: 'Value 1', column3: 'Value 2', column4: 'Value 3', column5: 'Value 4' },
      // Add more items as needed
    ];

    setTableData(newData);
  }, []); // Empty dependency array means this effect runs once when the component mounts


  return (
    <>
      <div className="flex flex-col">
        <table className="w-1/2 shadow hover:shadow-lg items-center justify-center border-t-2 border-main border-r-2 border rounded-xl text-center">
          <thead className="bg-main text-dashboard">
            <tr>
              <th scope="col" className="px-6 py-2 rtl:text-right">Category ID</th>
              <th scope="col" className="px-6 py-2 rtl:text-right">Category Name</th>
              <th scope="col" className="px-6 py-2 text-center">User</th>
              <th scope="col" className="px-6 py-2 text-center">Date</th>
              <th scope="col" className="px-6 py-2 text-center">Created At</th>
              <th scope="col" className="px-6 py-2 rtl:text-right">Action</th>
            </tr>
          </thead>
          <tbody className="hover:animate-pulse bg-dashboard text-main hover:bg-main hover:text-white">
            {tableData.map((row) => (
              <tr className="row" key={row.id}>
                <td className="px-6 py-3 rtl:text-right">{row.id}</td>
                <td className="px-6 py-3 rtl:text-right">{row.name}</td>
                <td className="px-6 py-3 text-center">{row.column2}</td>
                <td className="px-6 py-3 text-center">{row.column3}</td>
                <td className="px-6 py-3 text-center">{row.column4}</td>
                <td className="rtl:text-right">
                  {/* Add your action buttons or links here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryTable;
