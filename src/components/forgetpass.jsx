// src/pages/ForgotPassword.jsx (or similar location)
import React, { useState } from 'react';
import { Mail } from 'lucide-react'; 
import { Link } from 'react-router-dom'; // You'll need this for the back-to-login link

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // **PHASE 4: Will send the email to the backend API here**
        console.log("Password reset requested for:", email);

        // For now, just show a message to the console
        alert("If the email is registered, a password reset link has been sent.");
        
        // Optionally, redirect to a confirmation page
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
                <h2 className="text-center text-3xl font-bold text-white mb-8">
                    Reset Password
                </h2>
                
                <form onSubmit={handleSubmit}>
                    <p className="text-sm text-gray-400 mb-6">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                    
                    {/* Email Input Field */}
                    <div className="mb-6 relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
                    >
                        Send Reset Link
                    </button>
                </form>

                {/* Back to Login Link */}
                <div className="mt-6 text-center">
                    <Link to="/login" className="text-sm text-blue-400 hover:text-blue-300">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;