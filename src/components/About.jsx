import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { SlideUp } from "../utils/Animation";

const About = () => {
  return (
    <section id="about" className="py-20 dark:bg-[#181c31]">
      <div className="container mx-auto px-6 lg:px-12 space-y-30">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ stiffness: 50, delay: 0.1 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative z-10">
              <img
                className="w-full max-w-md"
                src={assets.about_image}
                alt="Audience Tracking"
              />
              {/* Floating Gems */}
              <img
                className="hidden md:block absolute w-10 top-[5px] right-[-50px]"
                src={assets.gemini}
                alt=""
                aria-hidden="true"
              />
              <img
                className="hidden md:block absolute w-8 top-[30px] right-[-80px]"
                src={assets.gemini}
                alt=""
                aria-hidden="true"
              />
            </div>
            {/* Gradient Background */}
            <div
              style={{
                backgroundImage:
                  "linear-gradient(55.15deg, #8EA5FE -7.09%, #BEB3FD 51.72%, #90D1FF 101.48%)",
              }}
              className="hidden md:block absolute bottom-[-40px] w-[430px] h-[400px] z-0 rounded-2xl pointer-events-none"
            ></div>
          </motion.div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <motion.h3
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-indigo-500 text-lg font-medium"
            >
              Track Audience Activities
            </motion.h3>
            <motion.h2
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
            >
              Monitor Engagement & Optimize Outreach
            </motion.h2>
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-gray-600 dark:text-gray-300"
            >
              Easily monitor how your audience interacts with your content.
              Leverage detailed analytics to post at peak engagement times and
              build smarter strategies that drive results.
            </motion.p>

            {/* Features List */}
            <div className="space-y-6">
              <motion.div
                variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                className="flex items-start gap-4"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 dark:border-gray-700 text-indigo-600 text-xl font-bold shrink-0">
                  01
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Intelligent Scheduling
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Post content when your audience is most active using
                    AI-powered predictions and smart scheduling tools.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={SlideUp(0.7)}
                initial="hidden"
                whileInView="visible"
                className="flex items-start gap-4"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 dark:border-gray-700 text-indigo-600 text-xl font-bold shrink-0">
                  02
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Real-Time Insights
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get real-time feedback on your campaigns, understand
                    behavior patterns, and improve targeting accuracy.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 relative">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <motion.h3
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-indigo-500 text-lg font-medium"
            >
              Create Audience Reports
            </motion.h3>
            <motion.h2
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
            >
              Know More About Your Audience.
            </motion.h2>
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-gray-600 dark:text-gray-300"
            >
              Schedule your posts for times when your audience is most active.
              Choose from our best-time predictions, or create your own
              publishing schedule.
            </motion.p>
            <motion.button
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView="visible"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
            >
              Know More
            </motion.button>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ stiffness: 50, delay: 0.1 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative z-10">
              <img
                className="w-full max-w-md"
                src={assets.about_image_2}
                alt="Create Reports"
              />
              {/* Floating Gems */}
              <img
                className="hidden md:block absolute w-10 top-[5px] right-[-50px]"
                src={assets.gemini}
                alt=""
                aria-hidden="true"
              />
              <img
                className="hidden md:block absolute w-8 top-[30px] right-[-80px]"
                src={assets.gemini}
                alt=""
                aria-hidden="true"
              />
            </div>
            {/* Gradient Background */}
            <div
              style={{
                backgroundImage:
                  "linear-gradient(120.12deg, #FF8FE8 0%, #FFC960 100%)",
              }}
              className="hidden md:block absolute bottom-[-40px] w-[430px] h-[400px] z-0 rounded-2xl pointer-events-none"
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
