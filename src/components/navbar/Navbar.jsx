import React from 'react';
import './navbar.css';
import homeIcon from '../../assets/icons/icon-home.png';

const Navbar = ({ onHomeClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="src/assets/icons/svac.png" alt="Logo" className="navbar-logo" />
        <span className="navbar-appname">Bojja'sPlayfy</span>

        {/* Updated Home Button */}
        <button className="navbar-homebutton" onClick={onHomeClick}>
          <img src={homeIcon}
               alt="Home Icon" className="home-icon"/>
        </button>
      </div>

      <div className="navbar-middle">
        <h1>Annamacharya Nitya Sankeerthanam</h1>
      </div>

      <div className="navbar-right">
        <button className="navbar-button">Install App</button>
        <button className="navbar-button">Login</button>
        <button className="navbar-button navbar-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;