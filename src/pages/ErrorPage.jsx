import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const ErrorPage = () => {
  return (
    <section className="py-20 dark:bg-[#181c31]">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img
            src={assets.error_image}
            alt="Error"
            className="w-full max-w-md object-contain"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Sorry, the page can't be found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl">
            The page you're looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
