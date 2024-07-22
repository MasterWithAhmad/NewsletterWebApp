// src/components/Header.jsx
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-blue-500 text-white p-4 w-full rounded-2xl">
        <nav className="flex justify-between items-center container mx-auto">
          <h1 className="text-2xl font-bold">Newsletter</h1>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              News
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/subscribe"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              Subscribe
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none transition duration-300 ease-in-out"
            >
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'h-40 opacity-100' : 'h-0 opacity-0 pointer-events-none'
          } bg-blue-500`}
        >
          <div className="flex flex-col space-y-2 p-4">
            <NavLink
              to="/"
              onClick={closeMenu} // Close menu on NavLink click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/news"
              onClick={closeMenu} // Close menu on NavLink click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              News
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu} // Close menu on NavLink click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/subscribe"
              onClick={closeMenu} // Close menu on NavLink click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              Subscribe
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu} // Close menu on NavLink click
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-300"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </header>
      <div className="pt-16">
        {/* Main content goes here */}
      </div>
    </>
  );
}

export default Header;