import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mCategory from '../assets/Icons/Categories.svg';
import mCalendar from '../assets/Icons/Calendar.svg';
import mEdit from '../assets/Icons/Edit-logo.svg';
import mDelete from '../assets/Icons/Delete-logo.svg';
import mAdd from '../assets/Icons/Add-logo.svg';
import SideBar from './sideBar';
import NavBar from './navBar';
import AddForm from './addForm';
import EditForm from './editForm';

const Expense = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [expense, setExpense] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const handleSortToggle = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };


  const deleteExpense = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/expense/${id}`, {
        headers: {
          'authorization': `Bearer: ${localStorage.getItem('token')}`
        }
      });
      console.log(response.data);
      if (response.status === 403) {
        return redirect('/login');
      }
    }

    catch (error) {
      alert('An error occurred check your console');
      console.log(error);
      return redirect('/login');
    }
  }


  useEffect(() => {
    const fetchExpense = async () => {
      const response = await fetch("http://localhost:5000/api/expense", {
        headers: {
          'authorization': `Bearer: ${localStorage.getItem('token')}`
        }
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setExpense(json)
      }
    };
    fetchExpense();
  }, []);

  return (
    < div className="flex">
      <div className='flex flex-col w-1/5 justify-center'>
        <SideBar />
      </div>
      <div className="income-container w-4/5 mr-auto ml-auto flex flex-col font-inter shadow-2xl rounded-lg bg-contentBackground">
        <NavBar />
        <div className="margin mt-20">
          <div className="headings-title-icons flex justify-between items-center h-14 mb-10">
            <h1 className="text-white text-4xl tracking-normal hover:tracking-wider ml-5">Expense</h1>
            <div className="flex flex-col items-center mr-5">
              <button onClick={() =>{ setIsOpen(true)}} className='text-white text-sm hover:text-blue-500'>
                <img className="add-logo-img h-12 " src={mAdd} alt="Add" />
                Add
              </button>
              {isOpen&&<AddForm setIsOpen={setIsOpen} isExpense={true} />}
              {isEditOpen&& <EditForm setIsEditOpen={setIsEditOpen} />}  
            </div>
          </div>
          <div className="filtration flex justify-end mb-6 mr-5">
            <div className="flex gap-10 justify-between items-center">
              <div className="flex flex-col items-center">
                <button className='text-white text-sm hover:text-blue-500 '>
                  <div className="flex flex-col items-center">
                    <img className="add-logo-img h-12 transform transition-transform duration-300 hover:-translate-y-1/4" src={mCategory} alt="Categories" />
                    <span className="mt-1">Categories</span>
                  </div>
                </button>
              </div>
              <div className="flex flex-col gap- items-center">
                <button className='text-white text-sm hover:text-blue-500 flex-col'>
                  <div className="flex flex-col items-center">
                    <img className="add-logo-img h-12 transform transition-transform duration-300 hover:-translate-y-1/4" src={mCalendar} alt="Calendar" />
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
                  <th className="flex-1 py-2 px-4 text-center text-main">Description</th>
                  <th className="flex-1 py-2 px-4 text-center text-main">Amount</th>
                  <th className="flex-1 py-2 px-4 text-center text-main" onClick={handleSortToggle}>
                    Date
                    {sortOrder === 'asc' && <span>&#8593;</span>}
                    {sortOrder === 'desc' && <span>&#8595;</span>}
                  </th>
                  <th className="flex-1 py-2 px-4 text-center text-main">Created At</th>
                  <th className="flex-1 py-2 px-4 text-center text-main">Category</th>
                  <th className="flex-1 py-2 px-4 text-center text-main">Action</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {expense.map((expenses) => {
                    return (
                      <tr className="income-content hover:animate-pulse hover:bg-main" key={expenses.id}>
                        <td className="flex-1 py-2 px-4 text-center text-white">{expenses.expense_name}</td>
                        <td className="flex-1 py-2 px-4 text-center text-white">{expenses.expense_amount}</td>
                        <td className="flex-1 py-2 px-4 text-center text-white">{expenses.date}</td>
                        <td className="flex-1 py-2 px-4 text-center text-white">{expenses.createdAt}</td>
                        {/* <td className="flex-1 py-2 px-4 text-center text-white">{incomes.Category.category_name}</td> */}
                        <td className="flex-1 py-2 px-4 text-center">
                          <div className="flex justify-evenly">
                            <button onClick={() => setIsEditOpen(true)}  className="py-2 px-4">
                              <img src={mEdit} alt="Edit" />
                            </button>
                            <button onClick={() => deleteExpense(expenses.id)} className="py-2 px-4">
                              <img src={mDelete} alt="Delete" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Expense;