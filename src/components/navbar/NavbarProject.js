import React, { useState } from 'react';

function NavbarProject() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Theme state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    // Toggle the theme between 'light' and 'obscure'
    const newTheme = theme === 'light' ? 'obscure' : 'light';
    setTheme(newTheme);
  };

  return (
    <nav className={theme}> {/* Theme as a class name */}
    
      <div className={`nav-container ${menuOpen ? 'active' : ''}`}>
         <img src="./image/codeburger-logo.png" alt="Photo"/>
      
        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-links">
          <li>
            <a
              className="nav-link"
              href="HTML/home.html"
              target="_blank"
              rel="noopener"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about" onClick={closeMenu}>
              Products
            </a>
          </li>
          <li>
            <a className="nav-link" href="#bingo" onClick={closeMenu}>
              Contact
            </a>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
        <div className="left-buttons"> {/* Container for left buttons */}
          <button id="darkButton" onClick={toggleTheme}>Dark</button> 
          <button id="lightButton" onClick={toggleTheme}>Light</button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarProject;