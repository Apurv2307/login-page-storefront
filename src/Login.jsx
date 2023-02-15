import React, { useState } from "react";

export const Login = (props) => {
    const [number, setNumber] = useState('');
    const [otp, setOTP] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(number);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="number">Phone Number</label>
                <input value={number} onChange={(e) => setNumber(e.target.value)}type="number" placeholder="Enter your Phone Number" id="number" name="number" />
                <label htmlFor="otp">OTP</label>
                <input value={otp} onChange={(e) => setOTP(e.target.value)} type="otp" placeholder="****" id="otp" name="otp" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}