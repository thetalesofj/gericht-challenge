import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navigation() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="text-white flex items-center justify-between font-titles sm:px-4 mobile:px-0 tablet:px-8 sm:py-6">
        <div className="sm:text-3xl text-2xl">GERÍCHT</div>
        {menuOpen ? (
            <FiX className="hover:text-gold block h-6 w-6 cursor-pointer z-40" onClick={toggleMenu} />
            ) : (
            <FiMenu className="hover:text-gold block h-6 w-6 cursor-pointer z-40" onClick={toggleMenu} />
            )}
        <nav className={`pt-7 absolute top-0 left-0 w-screen h-screen bg-background  z-20 flex flex-col items-center justify-center ${menuOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col justify-between space-y-5 items-center w-full h-full list-none p-0 pt-16 m-0 sm:text-lg tablet:text-xl laptop:text-2xl">
            <li className="hover:text-gold w-full text-center">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-gold w-full text-center">
              <a href="/" >Pages</a>
            </li>
            <li className="hover:text-gold w-full text-center">
              <a href="/contact" >Contact Us</a>
            </li>
            <li className="hover:text-gold w-full text-center">
              <a href="/" >Blog</a>
            </li>
            <li className="hover:text-gold w-full text-center">
              <a href="/" >Landing</a>
            </li>
            <li className="hover:text-gold w-full text-center">
              <a href="/" >Log In / Registration</a>
            </li>
            <li className="hover:text-gold w-full text-center">
              <a href="/" >Book Table</a>
            </li>
          </ul>
          <div className="text-gold text-5xl laptop:text-6xl sm:py-10">GERÍCHT</div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation
