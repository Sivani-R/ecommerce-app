import React from 'react';

const Header = () => {
  return (
    <header>
      <input type="text" placeholder="Search for products..." />
      <div className="icons">
        <span>Profile</span>
        <span>Cart</span>
      </div>
    </header>
  );
};

export default Header;
