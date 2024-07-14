// src/components/Header.jsx
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold">Newsletter</h1>
        <div className="flex space-x-4">
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
      </nav>
    </header>
  );
}

export default Header;
