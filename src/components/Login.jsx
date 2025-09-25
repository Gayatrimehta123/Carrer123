import React from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    // Phase 3: State Management and Logic
    // We will add state hooks for email, password, and form submission here.
    // For now, we'll just log a message to the console.
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login button clicked!");
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        // Full viewport height, dark background, centered content
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            
            {/* The Login Card Container */}
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
                
                {/* Main Heading */}
                <h2 className="text-center text-3xl font-bold text-white mb-8">Login</h2>

                {/* The Form */}
                <form className="space-y-6" onSubmit={handleLogin}>

                    {/* Email Input Field */}
                    <div className="relative flex items-center bg-gray-100 rounded-lg p-3">
                        <Mail className="w-5 h-5 text-gray-500 mr-3" /> 
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Input Field */}
                    <div className="relative flex items-center bg-gray-100 rounded-lg p-3">
                        <Lock className="w-5 h-5 text-gray-500 mr-3" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Your Password"
                            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 pr-10"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition duration-200"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* LOGIN Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#5b52a3] text-white py-3 rounded-lg font-semibold hover:bg-[#48407f] transition duration-200"
                    >
                        LOGIN
                    </button>

                    {/* Forgot Password Link */}
                    <div className="text-center pt-2">
                        <a href="#" className="text-gray-400 text-sm hover:text-gray-200 transition duration-200">
                            Forget Password
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;