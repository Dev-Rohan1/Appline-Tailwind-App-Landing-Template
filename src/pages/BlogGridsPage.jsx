import { Link } from "react-router-dom";
import { assets, blogs } from "../assets/assets";
import { CalendarDays, CircleUserRound } from "lucide-react";

const BlogGridsPage = () => {
  return (
    <section className="min-h-screen pt-30 pb-20 bg-white dark:bg-[#181c31]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden transition "
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2 flex justify-between items-center text-white text-sm">
                  <div className="flex items-center gap-2">
                    <CircleUserRound size={16} />
                    <span>{blog.userName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <Link
                  to={"/blog-details"}
                  className="text-lg font-semibold text-gray-900 dark:text-white mb-2 cursor-pointer hover:text-indigo-400 transition-colors"
                >
                  {blog.title}
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGridsPage;
