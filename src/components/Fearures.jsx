import React from "react";
import {
  Layers,
  LayoutTemplate,
  Gauge,
  SlidersHorizontal,
  RefreshCcw,
  PencilRuler,
} from "lucide-react";

const featuresData = [
  {
    id: 1,
    icon: <PencilRuler className="w-8 h-8" />,
    title: "Crafted for App Landing",
    description:
      "Tailored sections and structure designed specifically for showcasing mobile and web apps effectively.",
  },
  {
    id: 2,
    icon: <Layers className="w-8 h-8" />,
    title: "High-quality Design",
    description:
      "Pixel-perfect layouts with sleek visuals that look professional across all devices.",
  },
  {
    id: 3,
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: "All Essential Sections",
    description:
      "Includes everything from feature highlights to testimonials and FAQs—ready to go.",
  },
  {
    id: 4,
    icon: <Gauge className="w-8 h-8" />,
    title: "Speed Optimized",
    description:
      "Built with performance in mind to ensure fast load times and smooth user experience.",
  },
  {
    id: 5,
    icon: <SlidersHorizontal className="w-8 h-8" />,
    title: "Fully Customizable",
    description:
      "Easily adapt layout, colors, fonts, and components to match your unique brand.",
  },
  {
    id: 6,
    icon: <RefreshCcw className="w-8 h-8" />,
    title: "Regular Updates",
    description:
      "Stay current with continuous improvements, feature additions, and best practices.",
  },
];

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
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-white dark:bg-[#1e293b] rounded-2xl shadow-xs hover:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-xl text-[#7083f5] hover:bg-[#7083f5] hover:text-white dark:bg-[#2a2e44] dark:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
