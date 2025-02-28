import React from 'react';

const AnimatedBackground = ({ children }) => {
  return (
    <div className="min-h-screen animated-gradient bg-cover bg-no-repeat">
      {children}
    </div>
  );
};

export default AnimatedBackground;
