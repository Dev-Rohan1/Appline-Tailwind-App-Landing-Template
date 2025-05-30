import React from "react";

const ContactForm = () => {
  return (
    <section id="support" className="py-16 dark:bg-[#181c31]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Let's Stay Connected
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-10">
          We’d love to hear from you. Fill out the form below and we’ll get back
          to you shortly.
        </p>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
              <input
                type="text"
                placeholder="Company (optional)"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Tell us about yourself"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            ></textarea>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              By clicking the contact us button, you agree to our{" "}
              <a href="#" className="text-blue-500 hover:underline">
                terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 hover:underline">
                privacy policy
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
