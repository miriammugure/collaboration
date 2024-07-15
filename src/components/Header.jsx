import React, { useState } from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
 const [activeNav, setActive] = useState('');

 const handleState = (state) => {
  setActive(state)
 }

<button id="like">Like</button>
    return (
      <div className="header_sect">
        <nav>
          <ul>
            <NavLink
              className="link"
              onClick={() => handleState("home")}
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              to={"/blogs"}
              className='link'
            >
              Blog
            </NavLink>
            <NavLink
              className='link'
              to={"/works"}
            >
              Works
            </NavLink>
          </ul>
        </nav>
      </div>
    );
}


export default Header;