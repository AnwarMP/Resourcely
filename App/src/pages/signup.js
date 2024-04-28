import React, { useState } from 'react';
import '../styles/signup.css'; // Ensure this CSS file styles your signup components appropriately

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // To display error messages
    const [success, setSuccess] = useState(''); // To display success message

    const handleSubmit = (event) => {
        event.preventDefault();
        // Clear previous success message
        setSuccess('');
        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        // Assume success if validation passes
        setError('');
        setSuccess("Account created successfully");
    };

    return (
        <div className='signup'>
            <div className="home-button-container">
                <a href="/" className="home-link">Home</a>
            </div>
            <form onSubmit={handleSubmit} className="signup-form" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="signup-header">
                    Connect with the community
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                {success && <div style={{ color: 'green', marginTop: '10px' }}>{success}</div>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
