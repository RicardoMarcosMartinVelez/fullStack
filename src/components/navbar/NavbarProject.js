import React, { useState } from 'react';
import CartIcon from '../CartIcon';

function NavbarProject() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Theme state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className={theme}> {/* Theme as a class name */}
    
      <div className={`nav-container bg-orange-400 dark:bg-orange-900 ${menuOpen ? 'active' : ''}`}>
         <img src="\images\codeburger-logo.png" alt="Photo"/>
      
        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
          <a className="nav-link" href="#cart" onClick={closeMenu}>
          <CartIcon />
          </a>
        <ul className="nav-links">
          <li>
            <a
              className="nav-link"
              href="http://localhost:3000/"
              target="_blank"
              rel="noopener"
              onClick={closeMenu}
            >
              Inicio
            </a>
          </li>
          <li>
            <a className="nav-link" href="#cart" onClick={closeMenu}>
              Productos
            </a>
          </li>
          <li>
            <a className="nav-link" href="#aboutus" onClick={closeMenu}>
              Nosotros
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarProject;