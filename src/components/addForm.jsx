import React from 'react'

const addForm = (props) => {
    return (
        <div className='form-container'>
            {props.open && (
                <form action="">
                    <label htmlFor="fname">Description:</label>
                    <input type="text" id="fname" name="fname" value="John" />
                    <label htmlFor="lname">Amount:</label>
                    <input type="text" id="lname" name="lname" value="Doe" />
                    <input type="submit" value="Submit" />
                </form>
            )}

        </div>
    )
}

export default addForm;