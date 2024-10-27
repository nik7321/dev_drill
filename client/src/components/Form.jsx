import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const useForm = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        age:''
    });

    const navigate = useNavigate();

    //handle state update when user types into any form field
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
                [name]:value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/submit',formData);
            alert(response.data.message);
            navigate('/success');
        }
        catch(error){
            console.error('Error submitting form: ',error);
            alert('Failed to submit form');
        }
    };

    return(
        <div>
            <h2>Enter details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default useForm;