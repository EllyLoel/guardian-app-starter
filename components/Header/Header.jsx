import React from 'react';

const Header = ({ text }) => {
  return (
    <header>
      <h1 className="font-black font-serif text-5xl text-blue-800">{text}</h1>
    </header>
  );
};

export default Header;
