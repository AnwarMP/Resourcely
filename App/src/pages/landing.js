import React, { useState } from 'react';
import '../styles/landing.css'; // Ensure this file exists and styles your components as needed

function Landing() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }

            console.log('Login successful');
            setError(''); // Clear error if login is successful
            // Handle successful login here (e.g., redirect or update state)
        } catch (error) {
            setError(error.message); // Display an error if the login fails
        }
    };

    return (
        <div className="landing">
            <div className="forms-container">
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
        </div>
    );
}

export default Landing;
