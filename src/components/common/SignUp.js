import React, { useState } from 'react';

const form = {
    // fname: "",
    // lname: "",
    username: "",
    password: "",
    cPassword: "",
    email: ""
}

export const SignUp = () => {
    const [formValues, setFormValues] = useState(form)

    const handleChanges = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    return (
        <form className="form">
            {/* <label htmlFor="fname" className="signup__label">First Name:</label>
            <input 
                name="fname"
                type="text"
                onChange={handleChanges}
                value={formValues.fname}
                className="signup__input"
            />

            <label htmlFor="lname" className="signup__label">Last Name:</label>
            <input 
                name="lname"
                type="text"
                onChange={handleChanges}
                value={formValues.lname}
                className="signup__input"
            /> */}

            <label htmlFor="username" className="signup__label">Username:</label>
            <input 
                name="username"
                type="text"
                onChange={handleChanges}
                value={formValues.username}
                className="signup__input"
            />

            <label htmlFor="password" className="signup__label">Password:</label>
            <input 
                name="password"
                type="text"
                onChange={handleChanges}
                value={formValues.password}
                className="signup__input"
            />

            <label htmlFor="cPassword" className="signup__label">Confirm Password:</label>
            <input 
                name="cPassword"
                type="text"
                onChange={handleChanges}
                value={formValues.cPassword}
                className="signup__input"
            />

            <label htmlFor="email" className="signup__label">Email Address:</label>
            <input 
                name="email"
                type="text"
                onChange={handleChanges}
                value={formValues.email}
                className="signup__input"
            />
        </form>
    )
}