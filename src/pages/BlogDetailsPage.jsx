import {
  CalendarDays,
  Eye,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { assets } from "../assets/assets";

const BlogDetailsPage = () => {
  return (
    <section className="min-h-screen pt-30 pb-20 bg-white dark:bg-[#181c31] text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Blog Image */}
        <div className="mb-10">
          <img
            src={assets.blog_image_3}
            alt="Online Banking Apps Cover"
            className="w-full h-[350px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          50+ High Rated Online Banking Mobile Apps on Playstore
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 dark:text-gray-300 mb-8">
          <div className="flex items-center gap-2">
            <img
              src={assets.author_1}
              alt="Musharof Chy"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>By Musharof Chy</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            <span>12 Jan 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span>50 Comments</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>343 Views</span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-6 leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            The rise of mobile banking has revolutionized how users interact
            with financial services. With convenience, security, and speed being
            key, app developers are racing to offer the best features in the
            palm of your hand.
          </p>

          <p>
            From instant fund transfers to advanced budgeting tools, the
            Playstore is filled with banking apps that serve millions daily.
            Choosing the right one, however, depends on your needs and how much
            you trust the app’s interface and reviews.
          </p>

          <h3 className="text-xl font-semibold mt-8">
            Online Banking Mobile Lists
          </h3>
          <p>
            Here are some of the most recommended and highest-rated mobile
            banking apps that users love in 2025:
          </p>

          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Revolut – Best for global transfers and crypto access.</li>
            <li>Chime – Known for fee-free overdrafts and budgeting tools.</li>
            <li>
              Ally Bank – Award-winning for customer service and usability.
            </li>
            <li>
              PayPal – Still strong with peer-to-peer payments and savings.
            </li>
          </ul>

          <blockquote className="bg-gray-100 dark:bg-[#2c3048] p-4 rounded-lg border-l-4 border-blue-500">
            <p>
              "The future of banking lies in mobile-first design, robust
              security, and seamless integration with our daily lives."
            </p>
          </blockquote>

          <p>
            As banks continue to innovate, users should always review app
            permissions, ratings, and privacy policies before making the switch.
            Trust and usability should remain at the core of any digital banking
            experience.
          </p>
        </div>

        {/* Tags and Share Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="font-semibold">Popular Tags:</span>
            <div className="flex gap-3 mt-2 flex-wrap">
              {["Design", "Development", "UI/UX"].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm dark:bg-blue-900 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold block mb-2">Share Post:</span>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-sky-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
