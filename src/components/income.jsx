import { useState, useEffect } from 'react';
import mCategory from '../assets/Icons/Categories.svg';
import mCalendar from '../assets/Icons/Calendar.svg';
import mEdit from '../assets/Icons/Edit-logo.svg';
import mDelete from '../assets/Icons/Delete-logo.svg';
import mAdd from '../assets/Icons/Add-logo.svg';


const Income = () => {
  const [income, setIncome] = useState([])
  const [sortOrder, setSortOrder] = useState('asc');
  const handleSortToggle = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  useEffect(() => {
    const fetchIncome = async () => {
      const response = await fetch("http://localhost:5000/api/income");
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setIncome(json)
      }
    };
    fetchIncome();
  }, []);

  return (
    < div className="flex">
        <div className="margin mt-20">
          <div className="headings-title-icons flex justify-between items-center h-14 mb-10">
            <h1 className="text-white text-4xl tracking-normal hover:tracking-wider ml-5"></h1>
            <div className="flex flex-col items-center mr-5">
              <button className='text-white text-sm hover:text-blue-500'>
                <img className="add-logo-img h-12 " src={mAdd} alt="Add" />
                Add
              </button>
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
          <div className="income-table-container rounded-10">
            <table className="income-table w-full ">
              <thead>
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
                  {income.map((incomes) => {
                    return (
                      <div key={incomes.id}>
                      <tr className="income-content hover:animate-pulse hover:bg-main">
                        <td className="flex-1 py-2 px-4 text-center text-white">{incomes.income_name}</td>
                        <td className="flex-1 py-2 px-4 text-center text-white">{incomes.income_amount}</td>
                        <td className="flex-1 py-2 px-4 text-center text-white">{incomes.date}</td>
                        <td className="flex-1 py-2 px-4 text-center text-white">2023-01-01</td>
                        <td className="flex-1 py-2 px-4 text-center text-white">{incomes.Category.category_name}</td>
                        <td className="flex-1 py-2 px-4 text-center">
                          <div className="flex justify-evenly">
                            <button className="py-2 px-4">
                              <img src={mEdit} alt="Edit" />
                            </button>
                            <button className="py-2 px-4">
                              <img src={mDelete} alt="Delete" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      </div>
                    )
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