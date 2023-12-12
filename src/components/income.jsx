import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mCategory from '../assets/Icons/Categories.svg';
import mCalendar from '../assets/Icons/Calendar.svg';
import mEdit from '../assets/Icons/Edit-logo.svg';
import mDelete from '../assets/Icons/Delete-logo.svg';
import mAdd from '../assets/Icons/Add-logo.svg';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';

const Income = () => {
  const [isAddOpen, setisAddOpen] = useState(false);
  const [isEditOpen,setisEditOpen]= useState(false);
  const [income, setIncome] = useState([]);
  const [categories, setCategories] = useState([]);
  const [incomeToEdit,setIncomeToEdit] =useState(null);
  const [id,setId]=useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
      const [description, setDescription] = useState("");
      const [amount, setAmount] = useState("");
      const [tdate, setDate] = useState("");
      const [category, setCategory] = useState("");
  const user = useSelector((state) => state.user?.userCredentials);
  const handleSortToggle = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const deleteIncome = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/income/${id}`
      );
      console.log(response.data);
    } catch (error) {
      alert("An error occurred check your console");
      console.log(error);
      return redirect('/login');
    }
  };

  useEffect(() => {
    const fetchIncome = async () => {
      const response = await fetch("http://localhost:5000/api/income");
      const categories = await axios.get("http://localhost:5000/api/category/");
      setCategories(categories.data);
      const json = await response.json();
      if (response.ok) {
        setIncome(json);
      }
    };
    fetchIncome();
  }, []);

   const handleSaveIncome = async () => {
     // e.preventDefault();
     const data = {
       userId: user.id,
       income_name: description,
       income_amount: amount,
       date: tdate,
       CategoryId: category,
     };
     console.log("data to save", data);
     try {
       const response = await axios.post(
         "http://localhost:5000/api/income/",
         data
       );
       console.log(response.data);
       setisAddOpen(false);
       // navigate('/incomes')
     } catch (error) {
       alert("An error occurred check your console");
       console.log(error);
     }
   };
 
      const handleEditIncome = async () => {
        // event.preventDefault();

        const data = {
          userId: user.id,
          income_name: description,
          income_amount: amount,
          date: tdate,
          CategoryId: category,
        };
        console.log("dasd", data);
        console.log("data to edit", data);
        try {
          const response = await axios.patch(
            `http://localhost:5000/api/income/${id}`,
            data
          );
          console.log(response.data);
          console.log("user", user);
          setisEditOpen(false);
        } catch (error) {
          console.log("an error occurred:", error);
        }
      };

  return (
    <div className="income-container w-4/5 mr-auto ml-auto flex flex-col font-inter shadow-2xl rounded-lg bg-contentBackground">
      <div className="margin mt-20">
        <div className="headings-title-icons flex justify-between items-center h-14 mb-10">
          <h1 className="text-white text-4xl tracking-normal hover:tracking-wider ml-5">
            Income
          </h1>
          <div className="flex flex-col items-center mr-5">
            <button
              onClick={() => setisAddOpen(true)}
              className="text-white text-sm hover:text-blue-500"
            >
              <img className="add-logo-img h-12 " src={mAdd} alt="Add" />
              Add
            </button>
            <div
              className={
                isAddOpen
                  ? "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
                  : "hidden"
              }
            >
              <form className="bg-contentBackground p-6 rounded shadow-lg w-3/5 h-3/5">
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="fname"
                    className="block text-main text-lg mb-2"
                  >
                    name:
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="border py-2 px-3 text-grey-darkest"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="lname"
                    className="block text-main text-lg mb-2"
                  >
                    Amount:
                  </label>
                  <input
                    type="text"
                    name="amount"
                    className="border py-2 px-3 text-grey-darkest"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="date"
                    className="block text-main text-lg mb-2"
                  >
                    Date:
                  </label>
                  <input
                    type="date"
                    name="tdate"
                    className="border py-2 px-3 text-grey-darkest"
                    value={tdate}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="block text-main text-lg mb-2">
                    Category:
                  </label>
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <option selected value="">
                      choose category
                    </option>
                    {categories.map((c) => {
                      return (
                        <option value={c.id} key={c.id}>
                          {`${c.category_name}`}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex justify-center space-x-10">
                  <button
                    type="button"
                    onClick={() => setisAddOpen(false)}
                    className="mt-4 p-4 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => {
                      handleSaveIncome(e);
                    }}
                    className="mt-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {isEditOpen ? (
              <div
                className={
                  "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
                }
              >
                <form className="bg-contentBackground p-6 rounded shadow-lg w-3/5 h-3/5">
                 
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="fname"
                      className="block text-main text-lg mb-2"
                    >
                      Description:
                    </label>
                    <input
                      type="text"
                      name="description"
                      className="border py-2 px-3 text-grey-darkest"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="lname"
                      className="block text-main text-lg mb-2"
                    >
                      Amount:
                    </label>
                    <input
                      type="text"
                      name="amount"
                      className="border py-2 px-3 text-grey-darkest"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="date"
                      className="block text-main text-lg mb-2"
                    >
                      Date:
                    </label>
                    <input
                      type="date"
                      name="tdate"
                      className="border py-2 px-3 text-grey-darkest"
                      value={tdate}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="category"
                      className="block text-main text-lg mb-2"
                    >
                      Category:
                    </label>
                    <select
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      <option value="">
                        choose category
                      </option>
                      {categories.map((c) => {
                        return (
                          <option value={c.id} key={c.id}>
                            {`${c.category_name}`}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex justify-center space-x-10">
                    <button
                      onClick={() => setisEditOpen(false)}
                      className="mt-4 p-4 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={(e) => {
                        handleEditIncome(e);
                      }}
                      className="mt-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            ) : null}
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
        <div className="income-table-container rounded-10 overflow-auto no-scrollbar h-[500px] ">
          <table className="income-table w-full ">
            <thead className="sticky top-0 bg-contentBackground">
              <tr className="income-heading">
                <th className="flex-1 py-2 px-4 text-center text-main">
                  Description
                </th>
                <th className="flex-1 py-2 px-4 text-center text-main">
                  Amount
                </th>
                <th
                  className="flex-1 py-2 px-4 text-center text-main"
                  onClick={handleSortToggle}
                >
                  Date
                  {sortOrder === "asc" && <span>&#8593;</span>}
                  {sortOrder === "desc" && <span>&#8595;</span>}
                </th>
                <th className="flex-1 py-2 px-4 text-center text-main">
                  Created At
                </th>
                <th className="flex-1 py-2 px-4 text-center text-main">
                  Category
                </th>
                <th className="flex-1 py-2 px-4 text-center text-main">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <>
                {income.map((incomes) => {
                  return (
                    <tr
                      className="income-content hover:animate-pulse hover:bg-main"
                      key={incomes.id}
                    >
                      <td className="flex-1 py-2 px-4 text-center text-white">
                        {incomes.income_name}
                      </td>
                      <td className="flex-1 py-2 px-4 text-center text-white">
                        {incomes.income_amount}
                      </td>
                      <td className="flex-1 py-2 px-4 text-center text-white">
                        {incomes.date}
                      </td>
                      <td className="flex-1 py-2 px-4 text-center text-white">
                        {incomes.createdAt}
                      </td>
                      <td className="flex-1 py-2 px-4 text-center text-white">
                        {incomes.Category.category_name}
                      </td>
                      <td className="flex-1 py-2 px-4 text-center">
                        <div className="flex justify-evenly">
                          <button
                            onClick={() => {
                              setAmount(incomes.income_amount);
                              setDate(incomes.date);
                              setDescription(incomes.income_name);
                              setCategory(incomes.Category.id);
                              setisEditOpen(true);
                              setId(incomes.id);
                            }}
                            className="py-2 px-4"
                          >
                            <img src={mEdit} alt="Edit" />
                          </button>
                          <form action="">
                            <button
                              onClick={() => deleteIncome(incomes.id)}
                              className="py-2 px-4"
                            >
                              <img src={mDelete} alt="Delete" />
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Income;