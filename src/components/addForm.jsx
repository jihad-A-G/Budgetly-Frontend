import react, { useState } from 'react'

const addForm = (props) => {
    // const [description, setDescription] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');
    // const [category, setCategory] = useState('');

    //we used ? : instead of && because && is always true so the form will stay open but the ternary will give if else true false
    return (
        <div className={props.open ? 'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50' : 'hidden'}>
            <form className="bg-contentBackground p-6 rounded shadow-lg w-3/5 h-3/5">
                <div className="flex flex-col mb-4">
                    <label htmlFor="fname" className="block text-main text-lg mb-2">Description:</label>
                    <input type="text" id="fname" name="fname" className="border py-2 px-3 text-grey-darkest"/>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="lname" className="block text-main text-lg mb-2">Amount:</label>
                    <input type="text" id="lname" name="lname" className="border py-2 px-3 text-grey-darkest" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="date" className="block text-main text-lg mb-2">Date:</label>
                    <input type="date" id="date" name="date" className="border py-2 px-3 text-grey-darkest" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="category" className="block text-main text-lg mb-2">Category:</label>
                    <input type="text" id="category" name="category" className="border py-2 px-3 text-grey-darkest" />
                </div>
                <div className="flex justify-center space-x-10">
                    <button onClick={() => setIsOpen(false)} className="mt-4 p-4 bg-red-500 text-white rounded hover:bg-red-600">Cancel</button>
                    <input type="submit" value="Submit" className="mt-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600" />
                </div>
            </form>



        </div>
    )
}
export default addForm;