import React from "react";
import { assets } from "../assets/assets";

const AppScreenshot = () => {
  return (
    <section id="how-it-works" className="py-16 dark:bg-[#181c31] bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            App Screenshots
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover how our app looks in action. Each screen is designed to be
            clean, user-friendly, and optimized for all devices.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
          <img
            src={assets.screen_1}
            alt="App screen 1"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src={assets.screen_2}
            alt="App screen 2"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src={assets.screen_3}
            alt="App screen 3"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AppScreenshot;
