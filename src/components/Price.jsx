import { CheckCheck } from "lucide-react";
import { plans } from "../assets/assets";

const Price = () => {
  return (
    <section className="py-16 dark:bg-[#181c31]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Select the plan that suits your needs. Whether you're just starting
            out or need enterprise-level features, we've got you covered.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-xs transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {plan.category}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {plan.subtitle}
              </p>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                ${plan.price}{" "}
                <span className="text-base font-medium">/ month</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <CheckCheck className="text-green-500 mr-2" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full text-white py-2.5 px-4 rounded-lg font-medium transition-colors hover:opacity-90 cursor-pointer ${plan.bgColor} hover:bg-indigo-500`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
