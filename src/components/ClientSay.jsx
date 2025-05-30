import React from "react";
import { assets } from "../assets/assets";
import { Star } from "lucide-react";

const ClientSay = () => {
  const clients = [
    {
      id: 1,
      image: assets.author_1,
      description:
        "Appline has transformed the way I manage my projects. It's intuitive, fast, and packed with features that make my workflow seamless.",
      title: "Web Entrepreneur",
      name: "Musharof Chowdhury",
    },
    {
      id: 2,
      image: assets.author_2,
      description:
        "The design and user experience of this app are top-notch. It feels modern and helps me stay organized without any hassle.",
      title: "Product Designer",
      name: "Naimur Rahman",
    },
    {
      id: 3,
      image: assets.author_3,
      description:
        "From development to deployment, Appline makes the entire process smoother. I highly recommend it for any app developer.",
      title: "App Developer",
      name: "Devid Miller",
    },
    {
      id: 4,
      image: assets.author_4,
      description:
        "With Appline, I've been able to streamline my SEO campaigns and track results more efficiently. It’s a must-have tool!",
      title: "SEO Expert",
      name: "Justin Farnandes",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#181c31]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-10">
          Discover why professionals across industries trust Appline to power
          their productivity. Hear directly from our valued users around the
          world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="border border-gray-200 dark:border-gray-700 dark:bg-[#1f243a] rounded-xl p-6"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {client.description}
              </p>
              <hr className="border-gray-200 dark:border-gray-600 my-4" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {client.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {client.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-yellow-400">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    5.0
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
