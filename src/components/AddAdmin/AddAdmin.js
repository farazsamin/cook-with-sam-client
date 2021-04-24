import React, { useState } from 'react';
import axios from 'axios'
const AddAdmin = () => {
    const [adminName, setAdminName] = useState('')
    const [adminEmail, setAdminEmail] = useState('')
    const handleAddAdmin =() =>{
       
        axios.post('https://mighty-tor-77983.herokuapp.com/addAdmin', {
           name : adminName,
           email : adminEmail
        })
            .then((response) => {
                console.log(response)
            })
    }
    return (
        <div>
            <h1>Add Admin</h1>
            <div className="form-group">
                <label htmlFor="">Description : </label>
                <input type="text" name="book-name" id="" onChange={
                    (event) => {
                        setAdminName(event.target.value);
                    }
                } />
            </div>
            <div className="form-group">
                <label htmlFor="">Description : </label>
                <input type="text" name="book-name" id="" onChange={
                    (event) => {
                        setAdminEmail(event.target.value);
                    }
                } />
            </div>

            <button onClick={handleAddAdmin} className="btn btn-success mt-3">Add as Admin</button>

        </div>
    );
};

export default AddAdmin;