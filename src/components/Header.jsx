import React from 'react';
import image from './imge.png';
import Navigation from './Navigation';
const Header = () => {
  return (
    <header className="header">
      <img src={image}  alt="Logo" className="header-logo" />
      <h2 className="header-title">Welcome to your profile</h2>
      <Navigation />
    </header>
  );
};
export default Header;
