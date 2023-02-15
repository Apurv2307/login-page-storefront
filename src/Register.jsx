import React, { useState } from "react";

export const Register = (props) => {
    const [number, setNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(number);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <label htmlFor="address">Full Address</label>
            <input value={address} name="address" onChange={(e) => setAddress(e.target.value)} id="address" placeholder="Your address Please" />
            <label htmlFor="number">Phone Number</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)}type="number" placeholder="Enter your Phone Number" id="number" name="number" />
            <label htmlFor="otp">OTP</label>
            <input value={otp} onChange={(e) => setOTP(e.target.value)} type="otp" placeholder="****" id="otp" name="otp" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}