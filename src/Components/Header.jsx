import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="top-0 left-0 w-full backdrop-blur-md shadow-xs z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-400">
          MyApology
        </Link>
        <nav className="hidden md:flex space-x-6">
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


        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-pink-400 cursor-pointer focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>


      {isMenuOpen && (
        <nav className="md:hidden bg-pink-400">
          <div className="px-4 py-2 flex flex-col space-y-2">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/create-apology"
              className="flex items-center text-white px-4 py-2 hover:bg-pink-300 rounded"
            >
              <FaHeart className="mr-2" />
              Apologise
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/admin-login"
              className="flex items-center text-white px-4 py-2 hover:bg-pink-300 rounded"
            >
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
