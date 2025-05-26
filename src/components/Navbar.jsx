import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, Moon, SunMedium, X } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Support", href: "#support" },
    { label: "Pages", href: "#pages" },
  ];

  const toggleMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <header className="bg-white dark:bg-[#181c31]">
      <nav className="flex justify-between items-center container mx-auto px-6 lg:px-12 py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={darkMode ? assets.dark_logo : assets.logo}
            alt="logo"
            className="max-w-[140px] sm:max-w-[150px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 items-center">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                className="text-[17px] hover:text-indigo-500 dark:text-white transition"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-5">
          {darkMode ? (
            <Moon
              className="text-white cursor-pointer"
              onClick={() => toggleMode()}
              size={22}
            />
          ) : (
            <SunMedium
              className="text-gray-600 cursor-pointer"
              onClick={() => toggleMode()}
              size={22}
            />
          )}

          <button className="hidden lg:block bg-indigo-400 text-white text-[15px] py-1 px-4 rounded font-medium hover:bg-indigo-500 transition cursor-pointer">
            Log In
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {!menuOpen && (
              <Menu size={22} className="text-gray-700 dark:text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#181c31] border-r border-gray-200 dark:border-gray-700 z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col pt-6`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 mb-6">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={darkMode ? assets.dark_logo : assets.logo}
              alt="logo"
              className="max-w-[120px]"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
            aria-label="Close menu"
          >
            <X size={21} className="text-gray-600 dark:text-white" />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col px-6 space-y-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-medium text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <button
            className="mt-6 bg-indigo-400 text-white text-base py-2 px-4 rounded font-medium hover:bg-indigo-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Log In
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-[2px] z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
