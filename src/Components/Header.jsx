import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaHeart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md shadow-xs z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-400">
          MyApology
        </Link>
        <nav className="flex space-x-6">
          <Link
            to="/create-apology"
            className="flex items-center text-white bg-pink-400 rounded-lg px-4 py-2 hover:bg-pink-300 cursor-pointer shadow"
          >
            <FaHeart className="mr-2" />
            Apologise
          </Link>
          <Link
            to="/admin-login"
            className="flex items-center text-white bg-pink-400 rounded-lg px-4 py-2 hover:bg-pink-300 cursor-pointer shadow"
          >
            <FaSignInAlt className="mr-2" />
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
