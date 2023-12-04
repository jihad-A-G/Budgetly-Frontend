import { useState, useEffect } from "react";
import mCategory from "../assets/Icons/Categories.svg";
import mCalendar from "../assets/Icons/Calendar.svg";
import mEdit from "../assets/Icons/Edit-logo.svg";
import mDelete from "../assets/Icons/Delete-logo.svg";
import mAdd from "../assets/Icons/Add-logo.svg";
import AupArrow from "../assets/Icons/AupArrow.svg";
import AdownArrow from "../assets/Icons/AdownArrow.svg";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortToggle = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  

  // Add a category
  

  //edit a category


  //Delete a category
    const handleDeleteCategory = async (categoryId) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this category?");
      if (confirmDelete) {
        try {
          const response = await fetch(`http://localhost:5000/api/category/${categoryId}`, {
            method: "DELETE",
          });
  
          if (response.ok) {
            console.log("Category deleted successfully");
            setCategories((prevCategories) =>
              prevCategories.filter((category) => category.id !== categoryId)
            );
          } else {
            console.error("Failed to delete category");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/category");
        const json = await response.json();

        if (response.ok) {
          setCategories(json);
        } else {
          console.error("Failed to fetch categories:", json);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex ">
      <div className="margin mt-20">
        <div className="headings-title-icons flex justify-between items-center h-14 mb-10">
          <h1 className="text-white text-4xl tracking-normal hover:tracking-wider ml-5"></h1>
          <div className="flex flex-col items-center mr-5">
            <button className="text-white text-sm hover:text-blue-500">
              <img className="add-logo-img h-12 " src={mAdd} alt="Add" />
              Add
            </button>
          </div>
        </div>
        <div className="filtration flex justify-end mb-6 mr-5">
          <div className="flex gap-10 justify-between items-center">
            <div className="flex flex-col items-center">
              <button className="text-white text-sm hover:text-blue-500 ">
                <div className="flex flex-col items-center">
                  <img
                    className="add-logo-img h-12 transform transition-transform duration-300 hover:-translate-y-1/4"
                    src={mCategory}
                    alt="Categories"
                  />
                  <span className="mt-1">Categories</span>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap- items-center">
              <button className="text-white text-sm hover:text-blue-500 flex-col">
                <div className="flex flex-col items-center">
                  <img
                    className="add-logo-img h-12 transform transition-transform duration-300 hover:-translate-y-1/4"
                    src={mCalendar}
                    alt="Calendar"
                  />
                  <span className="mt-1">Calendar</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="income-table-container rounded-10">
          <table className="income-table w-full border border-main ">
            <thead>
              <tr className="income-heading bg-main text-black text-bold">
                <th className="flex-1 py-2 px-4 text-center ">
                  Category ID
                </th>
                <th className="flex-1 py-2 px-4 text-center ">
                  Category
                </th>
                <th
                  className="flex-1 py-2 px-4 text-center "
                  onClick={handleSortToggle}
                >
                  Date
                  {sortOrder === "asc" && (
                  
                      <img className="inline-flex m-1" src={AupArrow}></img>
                    
                  )}
                  {sortOrder === "desc" && (
                    <img className="inline-flex m-1" src={AdownArrow}></img>
                  )}
                </th>
                <th className="flex-1 py-2 px-4 text-center ">
                  Created At
                </th>
                <th className="flex-1 py-2 px-4 text-center ">User</th>
                <th className="flex-1 py-2 px-4 text-center ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr
                  className="income-content hover:animate-pulse hover:bg-main"
                  key={category._id}
                >
                  <td className="flex-1 py-2 px-4 text-center text-white">
                    {category.id}
                  </td>
                  <td className="flex-1 py-2 px-4 text-center text-white">
                    {category.category_name}
                  </td>
                  <td className="flex-1 py-2 px-4 text-center text-white">
                    {category.date}
                  </td>
                  <td className="flex-1 py-2 px-4 text-center text-white">
                    2023-01-01
                  </td>
                  <td className="flex-1 py-2 px-4 text-center text-white">
                    {category.userId}
                  </td>
                  <td className="flex-1 py-2 px-4 text-center">
                    <div className="flex justify-evenly">
                      <button className="py-2 px-4">
                        <img src={mEdit} alt="Edit" />
                      </button>
                      <button className="py-2 px-4" onClick = {()=> handleDeleteCategory(category.id)}>
                        <img src={mDelete} alt="Delete" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
