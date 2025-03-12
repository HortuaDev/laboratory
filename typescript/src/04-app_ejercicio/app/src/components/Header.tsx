import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <Link to="/" onClick={closeMenu} className="header_title_link">
        <h1 className="header_title">App Exercise</h1>
      </Link>

      <nav className="header_list_content">
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
        </div>

        <ul className={`header_list ${menuOpen ? 'visible' : ''}`}>
        <li className="header_list_item">
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="header_list_item">
            <Link to="/help" onClick={closeMenu}>Help</Link>
          </li>
          <li className="header_list_item">
            <Link to="/config" onClick={closeMenu}>Config</Link>
          </li>
          <li className="header_list_item">
            <Link to="/login" onClick={closeMenu}>Log in</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
