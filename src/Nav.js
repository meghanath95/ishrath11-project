import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };
  return (
    <nav >

      <h3>Food Pictures</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/Italian">
            <li>Italian</li>
          </Link>
          <Link to='/Indian' style={navStyle}>
            <li >Indian</li>
          </Link>
          <Link style={navStyle} to="/Mexican">
            <li>Mexican</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;