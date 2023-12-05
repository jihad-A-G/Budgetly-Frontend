import { useState, useEffect } from "react";
import mCalendar from "../assets/Icons/Calendar.svg";
import mEdit from "../assets/Icons/Edit-logo.svg";
import mDelete from "../assets/Icons/Delete-logo.svg";
import mAdd from "../assets/Icons/Add-logo.svg";
import AupArrow from "../assets/Icons/AupArrow.svg";
import AdownArrow from "../assets/Icons/AdownArrow.svg";
import { Form } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [AddForm, setAddForm] = useState(false);
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
  const handleAddCategory = async () => {
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

  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedCategory = {
      category_name: formData.get("category_name"),
      date: formData.get("category.date"),
    };
    try {
      const response = await fetch(
        `http://localhost:5000/api/category/${editingCategory.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(updatedCategory),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Category updated successfully");
        setCategories((prevCategories) =>
          prevCategories.map((category) =>
            category.id === editingCategory.id ? updatedCategory : category
          )
        );
        setEditForm(false);
      } else {
        console.error("Failed to update category");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Delete a category
  const handleDeleteCategory = async (categoryId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/category/${categoryId}`,
          {
            method: "DELETE",
          }
        );

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
          <h1 className="text-white text-4xl tracking-normal hover:tracking-wider ml-5">
            Categories
          </h1>
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
          <Form
            method="POST"
            className="flex flex-col items-center px-5 w-340px"
          >
            {/* Your form input fields */}
            <input
              type="text"
              name="category_name"
              placeholder="Category Name"
            />
            <input type="date" name="date" placeholder="Date" />
            {/* Add more form fields as needed */}
            <button
              type="submit"
              className="bg-main text-black h-14 text-2xl rounded-lg w-full mt-5"
            >
              Add
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </Form>
        )}
        <div className="filtration flex justify-end mb-6 mr-5">
          <div className="flex gap-10 justify-between items-center">
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
                  {category.User ? category.User.username : 'N/A'}
                  </td>
                  <td className="flex-1 py-2 px-4 text-center">
                    <div className="flex justify-evenly">
                      <button
                        className="py-2 px-4"
                        onClick={() => handleEditCategory(category)}
                      >
                        <img src={mEdit} alt="Edit" />
                      </button>
                      {EditForm && (
                        <Form method="PATCH" onSubmit={handleSubmitEdit}>
                          <div className="form--body">
                            <label htmlFor="Category Name">Category Name</label>
                            <input
                              defaultValue={editingCategory.category_name}
                              type="text"
                              name="category_name"
                              placeholder="category_name"
                            />
                            <label htmlFor="date">Date</label>
                            <input
                              defaultValue={editingCategory.date}
                              type="date"
                              name="category.date"
                              placeholder="category date"
                            />
                            <label htmlFor="text">User</label>
                            <input
                              defaultValue={editingCategory.User.username}
                              type="text"
                              name="userId"
                              placeholder="User ID"
                            />
                          </div>
                          <button
                            type="submit"
                            className="bg-main text-black h-14 text-2xl rounded-lg w-full mt-5"
                          >
                            Submit
                          </button>
                          <button type="button" onClick={handleCancelEdit}>
                            Cancel
                          </button>
                        </Form>
                      )}
                      <button
                        className="py-2 px-4"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
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
