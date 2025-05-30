import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      {/* Top Footer Section */}
      <footer
        className={`py-16 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
        } border-t border-gray-200 dark:border-t-0`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-12">
            {/* Logo and Description */}
            <div>
              <Link to="/">
                <img
                  src={darkMode ? assets.dark_logo : assets.logo}
                  alt="logo"
                  className="max-w-[150px] mb-4"
                />
              </Link>
              <p className="text-sm leading-relaxed">
                This membership will help you plan and execute a variety of
                projects efficiently and effectively.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Home",
                  links: ["Product", "Pricing", "Business", "Enterprise"],
                },
                {
                  title: "Company",
                  links: ["About Us", "Leadership", "Careers", "Diversity"],
                },
                {
                  title: "Support",
                  links: [
                    "Help Center",
                    "Forum",
                    "App Directory",
                    "Contact Us",
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    "Leadership Styles",
                    "Executive Tips",
                    "Prevent Burnout",
                    "What are OKRs?",
                  ],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-3">{section.title}</h3>
                  <ul className="space-y-2 text-sm">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="hover:underline">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Bar */}
      <footer
        className={`py-6 ${
          darkMode ? "bg-[#181c31] text-white" : "bg-indigo-500 text-white"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            © 2025 Appline. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-300">
              <Github size={20} />
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
