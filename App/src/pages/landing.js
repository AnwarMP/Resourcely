import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/landing.css'; // Ensure this file exists and styles your components as needed
import Logo from '../assets/logofrontpage.png';

function Landing() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        // Assuming validation or other logic is handled elsewhere
        navigate('/home'); // Navigate to the Feed page
    };


    return (
        <div className="landing">
            <div className="content">
                <img src={Logo} alt="Resourcely Logo" className="logo" />
                <h1 className="text-heading">Resourcely,</h1>
                <p className="text-subheading">Connecting communities in crisis</p>
                <p className="text-info">We're Resourcely, an application that enables users to crowdsource and share critical resources such as food, water, shelter, and medical supplies during emergencies.</p>
            </div>

            <div className="top-right-corner">
                <a href="/signup" className="signup-link">Sign up</a>
            </div>

            <div className="forms-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-header">Login</div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {error && <p className="error-message">{error}</p>}  {/* Display error message */}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Landing;
