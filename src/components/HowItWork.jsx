import { CircleUser, Download, HeartHandshake } from "lucide-react";

const workData = [
  {
    id: 1,
    icon: <Download className="w-8 h-8" />,
    title: "Install the App",
    description:
      "Get started by downloading the app to your device. It's quick, easy, and completely free.",
  },
  {
    id: 2,
    icon: <CircleUser className="w-8 h-8" />,
    title: "Set Up Your Profile",
    description:
      "Customize your profile with personal information and preferences for a tailored experience.",
  },
  {
    id: 3,
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Enjoy the Features!",
    description:
      "Explore a wide range of powerful tools designed to improve your workflow and productivity.",
  },
];

const HowItWork = () => {
  return (
    <section id="how-it-works" className="py-16 dark:bg-[#181c31]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Follow these three simple steps to get started and make the most out
            of our platform.
          </p>
        </div>

        {/* works Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {workData.map((work) => (
            <div
              key={work.id}
              className="p-6 bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-xl text-[#7083f5] dark:bg-[#2a2e44] hover:bg-[#7083f5] hover:text-white transition-colors">
                {work.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {work.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
