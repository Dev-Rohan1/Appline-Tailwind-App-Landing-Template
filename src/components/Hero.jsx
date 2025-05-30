import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Play } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";

const Hero = ({ setShowVideo }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="bg-white dark:bg-[#181c31] pt-[150px] pb-[60px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl text-gray-700 dark:text-gray-300">
              Ready to Use Tailwind CSS Web Template.
            </h3>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight mb-6 text-gray-800 dark:text-white">
              Tailwind Template for{" "}
              <span className="text-indigo-400">App & Software</span> Site.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
              All-in-one Tailwind CSS site template for App and Software sites.
              Comes with all essential components.
            </p>

            <div className="flex flex-col sm:flex-row items-start md:items-center gap-5">
              <button className="bg-[#181c31] hover:opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white px-8 py-4 rounded-md flex items-center gap-3 transition-all font-medium cursor-pointer">
                <span>Download App</span>
                <span className="inline-block w-[1px] h-6 bg-gray-400"></span>
                {darkMode ? (
                  <img
                    className="w-6"
                    src={assets.apple_dark}
                    alt="Apple Store"
                  />
                ) : (
                  <img
                    className="w-6"
                    src={assets.apple_light}
                    alt="Apple Store"
                  />
                )}
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <span className="border-2 border-gray-700 dark:border-gray-300 rounded-full w-14 h-14 flex items-center justify-center">
                  <Play className="text-gray-700 dark:text-white" />
                </span>
                <div className="text-left">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Watch Demo
                  </span>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    See how it works
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center mt-10 lg:mt-0">
            <div className="relative z-10">
              <img
                className="w-full max-w-sm relative"
                src={assets.hero_image}
                alt="Hero"
              />
              <img
                className="hidden md:block absolute w-10 top-[5px] right-[-50px]"
                src={assets.gemini}
                alt=""
              />
              <img
                className="hidden md:block absolute w-8 top-[30px] right-[-80px]"
                src={assets.gemini}
                alt=""
              />
            </div>
            <div className="hidden md:block absolute top-[20px]  w-[500px] h-[500px] z-0 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-300 to-sky-300  opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
