import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router';
import axios from 'axios';

const AddForm = (props) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [tdate, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [user, setUser] = useState('');
    // const navigate = useNavigate();

    const handleSaveTransaction = async (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            income_name: formData.description,
            income_amount: formData.amount,
            date: formData.date,
            CategoryId: formData.category,
            expense_name: formData.description,
            expense_amount: formData.amount
        };
        console.log("data to save", data)

        try {
            const response = await axios.post(`http://localhost:5000/api/${isExpense ? "expense" : "income"}`, data, {
                headers: {
                    'authorization': `Bearer: ${localStorage.getItem('token')} `
                }
            })
            console.log(response.data);
            setIsOpen(false);
            // navigate('/incomes')
        } catch (error) {
            alert('An error occurred check your console')
            console.log(error);
        }
    }


    // name= same name as backend, import form router dom .

    //we used ? : instead of && because && is always true so the form will stay open but the ternary will give if else true false
    return (
      <div
        className={
          open
            ? "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
            : "hidden"
        }
      >
        <form className="bg-contentBackground p-6 rounded shadow-lg w-3/5 h-3/5">
          <div className="flex flex-col mb-4">
            <label htmlFor="fname" className="block text-main text-lg mb-2">
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
            <label htmlFor="lname" className="block text-main text-lg mb-2">
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
            <label htmlFor="date" className="block text-main text-lg mb-2">
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
              {categories.map((c) => {
                return (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-center space-x-10">
            <button type='button'
              onClick={() => setIsOpen(false)}
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
    );
}
export default AddForm;