import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-blue-100 shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold text-pink-400">
            MyApology
          </Link>
          
        </div>

        <div className="flex items-center space-x-4">
          
          <Link
            to="/create-apology"
            className="px-4 py-2 border border-gray-300 text-gray-800 rounded hover:bg-gray-200 transition"
          >
            Apologise
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
