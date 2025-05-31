import { KeyRound, Mail, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-30 pb-20 dark:bg-[#181c31] bg-white px-6 lg:px-12 py-4">
      <div className="w-full max-w-md p-8 rounded-2xl border border-gray-300 dark:border-gray-700  dark:bg-[#1f243a] text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign in to your account
        </h2>
        <form className="space-y-5">
          {/* Name Field */}

          {/* Email Field */}
          <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 dark:bg-[#2a2f4a] dark:border-gray-700">
            <Mail className="mr-3 text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 dark:bg-[#2a2f4a] dark:border-gray-700">
            <KeyRound className="mr-3 text-gray-500" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-center text-sm space-x-2">
            <input type="checkbox" className="accent-blue-600" />
            <span>Remember me</span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
          >
            Sign In
          </button>

          {/* Login Link */}
          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
