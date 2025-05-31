// Navbar.jsx
import { ChevronDown, Menu, Moon, SunMedium, X } from "lucide-react";
import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { assets, navLinks, pagesLinks } from "../assets/assets";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const dropdownRef = useRef(null);

  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPagesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownKeyDown = (e) => {
    if (e.key === "Escape") {
      setPagesDropdownOpen(false);
    }
    if (e.key === "Enter" || e.code === "Space") {
      e.preventDefault();
      setPagesDropdownOpen((open) => !open);
    }
  };

  return (
    <header
      className={`top-0 left-0 w-full ${
        scroll
          ? "fixed bg-white/[0.97] dark:bg-[#181c31]/[0.97] z-50 border-b border-gray-200 dark:border-gray-700"
          : "absolute bg-transparent z-40"
      }`}
    >
      <nav className="flex justify-between items-center container mx-auto px-6 lg:px-12 py-4">
        <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Home">
          <img
            src={darkMode ? assets.dark_logo : assets.logo}
            alt="logo"
            className="max-w-[140px] sm:max-w-[150px]"
          />
        </Link>

        <ul className="hidden lg:flex gap-10 items-center text-[17px] font-medium text-gray-800 dark:text-white">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
              >
                {label}
              </a>
            </li>
          ))}

          <li className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-gray-800 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition font-medium focus:outline-none"
              aria-haspopup="true"
              aria-expanded={pagesDropdownOpen}
              onClick={() => setPagesDropdownOpen((open) => !open)}
              onKeyDown={handleDropdownKeyDown}
              type="button"
              tabIndex={0}
            >
              Pages
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  pagesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`absolute left-0 top-full mt-4 w-44 bg-white dark:bg-[#181c31] rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50 transition-all duration-200 overflow-hidden mt-10${
                pagesDropdownOpen
                  ? "opacity-100 visible pointer-events-auto"
                  : "opacity-0 invisible pointer-events-none"
              }`}
              role="menu"
            >
              {pagesLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition text-[15px]"
                    role="menuitem"
                    tabIndex={pagesDropdownOpen ? 0 : -1}
                    onClick={() => setPagesDropdownOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          {darkMode ? (
            <SunMedium
              className="text-white cursor-pointer"
              onClick={toggleMode}
              size={22}
              role="button"
              aria-label="Switch to light mode"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleMode()}
            />
          ) : (
            <Moon
              className="text-gray-600 cursor-pointer"
              onClick={toggleMode}
              size={22}
              role="button"
              aria-label="Switch to dark mode"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleMode()}
            />
          )}
          <Link
            to="/login"
            className="hidden lg:block bg-indigo-400 text-white text-[15px] py-1 px-4 rounded font-medium hover:bg-indigo-500 transition"
          >
            Log In
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            <Menu size={22} className="text-gray-700 dark:text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#181c31] border-r border-gray-200 dark:border-gray-700 z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col pt-6`}
      >
        <div className="flex items-center justify-between px-6 mb-6">
          <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Home">
            <img
              src={darkMode ? assets.dark_logo : assets.logo}
              alt="logo"
              className="max-w-[120px]"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Close menu"
          >
            <X size={21} className="text-gray-600 dark:text-white" />
          </button>
        </div>

        <nav className="flex flex-col px-6 space-y-4 overflow-y-auto">
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

          <div>
            <button
              onClick={() => setMobilePagesOpen((open) => !open)}
              className="flex justify-between items-center w-full font-medium text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition py-2"
              aria-expanded={mobilePagesOpen}
              type="button"
            >
              <span>Pages</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  mobilePagesOpen ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>
            <ul
              className={`mt-2 pl-4 border-l border-gray-300 dark:border-gray-700 space-y-2 overflow-hidden transition-[max-height] duration-300 ${
                mobilePagesOpen ? "max-h-96" : "max-h-0"
              }`}
              id="mobile-pages-submenu"
            >
              {pagesLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="mt-6 bg-indigo-400 text-white text-base py-2 px-4 rounded font-medium hover:bg-indigo-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Log In
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-[2px] z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
