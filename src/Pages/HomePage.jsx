import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center pt-20 text-center px-4">
        <span className="p-2 mb-4 rounded-md border border-gray-300 text-sm font-medium tracking-wide text-gray-700">
          Welcome to MyApology
        </span>
        <h1 className="text-4xl font-bold text-pink-300 mb-4">
          Transform Your Apologies Into Meaningful Connections
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Express your heartfelt sincerity and let your words bridge the gap between hearts.
        </p>
        <Link
          to="/create-apology"
          className="px-6 py-3 bg-pink-300 hover:bg-pink-400 text-white rounded-lg cursor-pointer shadow transition duration-300"
        >
          Create an Apology
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
