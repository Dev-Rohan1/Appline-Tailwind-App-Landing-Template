import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ThemeContext } from "../contexts/ThemeContext";

const Download = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="bg-white dark:bg-[#181c31] pt-[100px] pb-[60px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-800 dark:text-white mb-6 max-w-xl">
              Download Appline Now & Get started for free.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 max-w-lg">
              Get access to all the latest features by downloading our app.
              Available on both Play Store and App Store.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-md transition-all">
                <img className="w-6" src={assets.play_store} alt="Play Store" />
                <div className="flex flex-col text-left text-sm leading-tight">
                  <span>Download from</span>
                  <span className="font-semibold">Play Store</span>
                </div>
              </button>

              <button className="bg-black dark:bg-white hover:opacity-90 text-white dark:text-black px-6 py-3 rounded-lg flex items-center gap-3 shadow-md transition-all">
                <img
                  className="w-6"
                  src={darkMode ? assets.apple_dark : assets.apple_light}
                  alt="App Store"
                />
                <div className="flex flex-col text-left text-sm leading-tight">
                  <span>Download from</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative z-10 max-w-sm w-full">
              <img
                className="w-full rounded-lg"
                src={assets.hero_image}
                alt="Hero"
              />
              {/* Decorative Icons */}
              <img
                className="hidden md:block absolute w-8 top-[10px] right-[-30px]"
                src={assets.gemini}
                alt=""
              />
              <img
                className="hidden md:block absolute w-6 top-[60px] right-[-60px]"
                src={assets.gemini}
                alt=""
              />
            </div>

            {/* Background Glow */}
            <div
              style={{
                backgroundImage:
                  "linear-gradient(120.12deg, #FF8FE8 0%, #FFC960 100%)",
              }}
              className="hidden md:block absolute top-[20px] w-[500px] h-[500px] z-0 rounded-full opacity-50 pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
