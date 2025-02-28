import React from 'react';

const Footer = () => {
  return (
    <footer className=" fixed bottom-0 left-0 w-full">
      <hr className="w-full border-t border-gray-300" />
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-sm text-gray-700">
          © {new Date().getFullYear()} MyApology. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
