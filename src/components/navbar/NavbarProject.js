
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


  return (
    <nav className='fixed top-0 z-[100] w-screen bg-orange-400 dark:bg-orange-900' >
    <div className='container bg-orange-400 dark:bg-orange-900 fixed justify-center sm:static w-full md:w-max shadow-lg md:shadow-none'>
      <div className={`nav-container w-screen ${menuOpen ? 'active' : ''}`}>
        {/* imagen/logo */}
        <div className='z-20 hidden md:contents'>
          <img src="/images/codeburger-logo.png" alt="logo_code" />
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* cuerpo de menu */}
        <div>
          {/* boton responsive */}
          <input type='checkbox' name='hamburguer' id='hamburguer' className='peer' hidden/>
          <label for='hamburguer' className='peer-checked:hamburguer block cursor pointer md:hidden transition p-5 rounded'>
            <div className='h-0.5 w-6 ml-60 bg-black transition'></div>
            <div className='mt-2 h-0.5 w-6 ml-60 bg-black transition'></div>
          </label>

          {/* boton de enlaces */}
          <div className={`${theme} bg-orange-400 dark:bg-orange-900 z-5 w-max h-max shadow-lg transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-max md:static md:translate-x-0 md:flex-row md:shadow-none`}>
            <div className='px-6 pt-20 flex flex-col md:flex-row md:items-center gap-3 md:p-0 '>
              <a
                className="tracking-wide cursor-pointer px-3 py-2 transition nav-link"
                href="#inicio"
                rel="noopener"
                onClick={closeMenu}
              >
                Inicio
              </a>

              <a className="tracking-wide cursor-pointer px-3 py-2 transition nav-link" href="#cart" onClick={closeMenu}>
                Productos
              </a>

              <a className="tracking-wide cursor-pointer px-3 py-2 transition nav-link" href="#aboutus" onClick={closeMenu}>
                Nosotros
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </nav>
  );
}

export default NavbarProject;