import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Demo admin credentials
    const adminEmail = 'apology@admin.com';
    const adminPassword = 'Apologise123';

    if (email === adminEmail && password === adminPassword) {
      setIsLoading(false);
      navigate('/admin-panel');
    } else {
      setError('Invalid email or password');
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/'); // Go back to homepage
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 p-4">
      {/* Container */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        
        
        <div className="md:w-1/2 bg-pink-100 p-6 flex flex-col items-center justify-center relative">
         


          <img
            src="/loginimage.png" 
            alt="Login illustration"
            className="max-w-full h-auto"
          />

          <h3 className="mt-4 text-xl font-bold text-pink-500">
            Welcome, Admin!
          </h3>
          <p className="text-gray-600 text-center">
            Securely log in to manage apologies.
          </p>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <button
            onClick={handleCancel}
            className="absolute top-4 right-4 text-pink-500  cursor-pointer hover:text-pink-600 transition-colors"
          >
            <FaTimes size={24} />
          </button>
          <h2 className="text-3xl font-bold mb-6 text-center text-pink-400">
            Admin Login
          </h2>
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email} placeholder='user@email.com'
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100"
              />
            </div>
            <div>
              <label htmlFor="password"  className="block text-gray-700 mb-1">
                Password
              </label>
              <input placeholder='********'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-pink-400 cursor-pointer hover:bg-pink-500 text-white font-semibold rounded-lg transition duration-200"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
