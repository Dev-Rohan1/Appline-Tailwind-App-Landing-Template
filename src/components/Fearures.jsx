import React from "react";
import { featuresData } from "../assets/assets";
import { motion } from "framer-motion";
import { SlideLeft } from "../utils/Animation";

const Features = () => {
  return (
    <section id="features" className="py-16 dark:bg-[#181c31]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            Amazing Features to Make Your Work Easier
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover tools crafted to help you streamline your workflow, reduce
            manual effort, and get more done with less stress.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView={"visible"}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuresData.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="p-6 bg-white dark:bg-[#1e293b] rounded-2xl shadow-xs border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-xl text-[#7083f5] hover:bg-[#7083f5] hover:text-white dark:bg-[#2a2e44] dark:text-white transition-colors">
                <Icon className="w-8 h-8" /> {/* Capitalized */}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
