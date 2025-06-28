import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Login form submitted');
    alert('Login simulated! In a real app, you would be redirected to the dashboard.');
  
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-6xl mx-auto shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row bg-white">
        {/* Left Side Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/crop.png" 
            alt="Farmers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-800 bg-opacity-30"></div>
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="flex items-center space-x-2 justify-center mb-8">
              <img src="/mrida_logo.png" alt="Mrida Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-green-700">Mrida</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">Login to Mrida</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Mobile Number or Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your mobile or email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-center text-sm mt-4 text-gray-600">
              Don't have an account?
              <Link to="/register" className="text-green-700 font-semibold hover:underline">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
