import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          {' '}
          Crypto <span className="purple">Search</span>
        </h1>{' '}
      </div>{' '}
      {/* <div className="search-bar">
        <div className="input-block">
          <input className="search-input" type="input" placeholder="search coin"></input>
        </div>
      </div> */}
    </Link>
  );
};

export default Navbar;
