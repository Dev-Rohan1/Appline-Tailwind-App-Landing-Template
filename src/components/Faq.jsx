import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      id: 1,
      title: "What services do you offer?",
      description:
        "We offer digital product design, branding, and development services tailored to startups and growing businesses.",
    },
    {
      id: 2,
      title: "How long does a project typically take?",
      description:
        "Project duration depends on complexity, but most branding and website projects are completed within 4–6 weeks.",
    },
    {
      id: 3,
      title: "Do you work with international clients?",
      description:
        "Absolutely! We collaborate with clients around the world using digital tools to ensure seamless communication.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#181c31]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-10">
          Find answers to the most common questions about our services, process,
          and how we help your business grow.
        </p>
        <div className="max-w-2xl mx-auto divide-gray-200 dark:divide-gray-700 divide-y  border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={faq.id}>
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#1e253d] transition cursor-pointer"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-xl font-medium">{faq.title}</span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-5 pt-5 text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out border-t border-gray-200 dark:border-gray-700">
                  {faq.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
