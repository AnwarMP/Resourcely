import React, { useState } from 'react';
import '../styles/landing.css'; // Ensure this file exists and styles your components as needed

function Landing() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Create fetch request here to the backend server
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email, 'Password:', password);
        // Here you would handle login logic, possibly verifying credentials against a backend service
    };

    return (
        //
        <div className="landing">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="login-header">
                    Resourcely
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>

            <div className="signup-prompt">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>

        </div>
    );
}

export default Landing;
