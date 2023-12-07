import React, { useState } from 'react'
import axios from 'axios';

const editForm = (props) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [tdate, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [user, setUser] = useState('');

    const handleEditIncome = async (event) => {
        event.preventDefault();

        const data = {
            userId: user,
            income_name: description,
            income_amount: amount,
            date: tdate,
            CategoryId: category,
        };
        console.log('dasd',data)
        console.log("data to edit", data)
        try {
            const response = await axios.patch(`http://localhost:5000/api/income/${user}`, data)
            console.log(response.data);
            console.log('user',user)
            setIsOpen(false);
        } catch (error) {
            console.log('an error occurred:', error);
        }
    }

    return (
        <div className={props.open ? 'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50' : 'hidden'}>
            <form className="bg-contentBackground p-6 rounded shadow-lg w-3/5 h-3/5" >
                <div className="flex flex-col mb-4">
                    <label htmlFor="fname" className="block text-main text-lg mb-2">User Id:</label>
                    <input type="text" name="userId" className="border py-2 px-3 text-grey-darkest"
                        value={user}  onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="fname" className="block text-main text-lg mb-2">Description:</label>
                    <input type="text" name="description" className="border py-2 px-3 text-grey-darkest"
                        value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="lname" className="block text-main text-lg mb-2">Amount:</label>
                    <input type="text" name="amount" className="border py-2 px-3 text-grey-darkest"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="date" className="block text-main text-lg mb-2">Date:</label>
                    <input type="date" name="tdate" className="border py-2 px-3 text-grey-darkest"
                        value={tdate}
                        onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="category" className="block text-main text-lg mb-2">Category:</label>
                    <input type="text" name="categoryId" className="border py-2 px-3 text-grey-darkest"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="flex justify-center space-x-10">
                    <button onClick={() => setIsOpen(false)} className="mt-4 p-4 bg-red-500 text-white rounded hover:bg-red-600">Cancel</button>
                    <button onClick={(e) => { handleEditIncome(e) }} className="mt-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default editForm;