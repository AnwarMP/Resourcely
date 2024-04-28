import React, { useState } from 'react';
import '../styles/signup.css'; // Ensure this CSS file styles your signup components appropriately

function Signup() {
    const [name, setName] = useState('');  // Added state for name
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // To display error messages

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/api/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name, password }) // Sending name, email, password
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const result = await response.json();
            if (result.error) {
                setError(result.error);
                return;
            }

            console.log('User successfully created');
            setError('');  // Resetting error on successful registration
        } 
        catch (error) {
            setError('Failed to check email. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="signup">
            <div className="forms-container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="signup-header">
                        Create an account with Resourcely
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
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
