import { useState } from "react";
import mCalendar from "../assets/Icons/Calendar.svg";
import mEdit from "../assets/Icons/Edit-logo.svg";
import mDelete from "../assets/Icons/Delete-logo.svg";
import mAdd from "../assets/Icons/Add-logo.svg";
import AupArrow from "../assets/Icons/AupArrow.svg";
import AdownArrow from "../assets/Icons/AdownArrow.svg";
import Aquit from "../assets/Icons/Aquit.svg";
import { Form, useLoaderData } from "react-router-dom";

const Category = () => {
  // const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [AddForm, setAddForm] = useState(false);
  const categoriesLoader = useLoaderData();
  console.log(categoriesLoader);
  // const [formData, setFormData] = useState({
  //   category_name: "",
  //   date: "",
  // });
  const [EditForm, setEditForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleSortToggle = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  // Add a category
  const handleAddCategory = async (event) => {
    event.preventDefault();
    setAddForm(true);
  };

  const handleCancel = () => {
    setAddForm(false);
  };

  // Edit a category
  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setEditForm(true);
  };

  const handleCancelEdit = () => {
    setEditForm(false);
  };

  return (
    <div className="flex ">
      <div className="margin mt-20">
        <div className="headings-title-icons flex justify-between items-center h-14 mb-10">
          {/* <h1 className="text-white text-4xl tracking-normal hover:tracking-wider ml-5">
            Categories
          </h1> */}
          <div className="flex flex-col items-center mr-5">
            <button
              className="text-white text-sm hover:text-blue-500"
              onClick={handleAddCategory}
            >
              <img className="add-logo-img h-12 " src={mAdd} alt="Add" />
              Add
            </button>
          </div>
        </div>
        {AddForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            <Form
              onSubmit={() => setAddForm(false)}
              method="POST"
              className="relative justify-center z-10 bg-white inset-0 sm:my-8 sm:w-full sm:max-w-lg mx-auto overflow-hidden rounded-lg shadow-xl pt-4 pb-4"
            >
              <div className="flex justify-end mr-5">
                <button
                  type="button"
                  className="font-bold text-red hover:font-red-600"
                  onClick={handleCancel}
                >
                  <img src={Aquit} alt="Cancel" />
                </button>
              </div>

              <label className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                Category Name:
              </label>
              <input
                type="text"
                name="category_name"
                placeholder="Category Name"
                className="text-sm font-medium leading-6 text-gray-900 border border-main rounded-lg"
              />
             
             {/* <label className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                Username:
              </label>
              <input
                type="text"
                name="category.User.userId"
                placeholder="UserId"
                className="text-sm font-medium leading-6 text-gray-900 border border-main rounded-lg"
              /> */}

              <div className="flex justify-center mt-4">
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="text-sm font-medium leading-6 text-gray-900"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-5">
                <button
                  type="submit"
                  className="flex bg-main text-black h-8 text-m rounded-lg border border-main justify-center items-center font-bold w-20 hover:bg-contentBackground hover:text-main hover:border-contentBackground"
                >
                  Add
                </button>
              </div>
            </Form>
          </div>
        )}

        <div className="filtration flex justify-end mb-6 mr-5">
          <div className="flex gap-10 justify-between items-center">
            <div className="flex flex-col items-center">
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
        <div className="income-table-container rounded-10 max-h-[400px] overflow-y-auto " >
          <table className="income-table w-full border border-main  ">
            <thead className="sticky top-0">
              <tr className="income-heading bg-main text-black text-bold">
                <th className="flex-1 py-2 px-4 text-center ">Category ID</th>
                <th className="flex-1 py-2 px-4 text-center ">Category</th>
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
                <th className="flex-1 py-2 px-4 text-center ">Created At</th>
                <th className="flex-1 py-2 px-4 text-center ">User</th>
                <th className="flex-1 py-2 px-4 text-center ">Action</th>
              </tr>
            </thead>
            <tbody>
              {categoriesLoader.map((category) => (
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
                    {category.createdAt
                      ? new Date(category.createdAt).toLocaleDateString()
                      : "Invalid Date"}
                  </td>
                  <td className="flex-1 py-2 px-4 text-center text-white">
                    {category.User ? category.User.username : "N/A"}
                  </td>
                  <td className="flex-1 py-2 px-4 text-center">
                    <div className="flex justify-evenly">
                      <button
                        className="py-2 px-4"
                        onClick={() => handleEditCategory(category)}
                      >
                        <img src={mEdit} alt="Edit" />
                      </button>

                      <Form action={`destroy/${category.id}`} method="DELETE">
                        <button type="submit" className="py-2 px-4">
                          <img src={mDelete} alt="Delete" />
                        </button>
                      </Form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
          {EditForm && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
              <Form
                method="PATCH"
                action={`edit/${editingCategory.id}`}
                onSubmit={() => setEditForm(false)}
                className="relative justify-center z-10 bg-white inset-0 sm:my-8 sm:w-full sm:max-w-lg mx-auto overflow-hidden rounded-lg shadow-xl pt-4 pb-4"
              >
                <div className="flex justify-end mr-5">
                  <button
                    type="button"
                    className="font-bold text-red hover:font-red-600"
                    onClick={handleCancelEdit}
                  >
                    <img src={Aquit} alt="Cancel" />
                  </button>
                </div>
                <div className="form--body">
                  <label
                    htmlFor="Category Name"
                    className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 font-bold"
                  >
                    Category Name
                  </label>
                  <input
                    defaultValue={editingCategory.category_name}
                    type="text"
                    name="category_name"
                    placeholder="category_name"
                    className="text-sm font-medium leading-6 text-gray-900 border border-main rounded-lg pl-2"
                  />
                  <div className="flex justify-center mt-4">
                    {/* <label htmlFor="date" className="px-4 font-bold">
                      Date
                    </label> */}
                    <input
                      defaultValue={editingCategory.date}
                      type="date"
                      name="date"
                      placeholder="category date"
                      className="text-sm font-medium leading-6 text-gray-900 border border-main rounded-lg pl-2 bg-main"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <label htmlFor="text" className="px-4 font-bold">
                      User
                    </label>
                    <input
                      defaultValue={editingCategory.User.username}
                      type="text"
                      name="userId"
                      placeholder="User ID"
                      className="text-sm font-medium leading-6 text-gray-900 border border-main rounded-lg pl-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-5">
                  <button
                    type="submit"
                    className="flex bg-main text-black h-8 text-m rounded-lg border border-main justify-center items-center font-bold w-20 hover:bg-contentBackground hover:text-main hover:border-contentBackground"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
