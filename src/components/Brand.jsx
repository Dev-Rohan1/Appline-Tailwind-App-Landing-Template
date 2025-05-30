import React from "react";
import { assets } from "../assets/assets";

const Brand = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-[#15182B]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          <img
            src={assets.client_1}
            alt="Client 1"
            className="h-8 object-contain"
          />
          <img
            src={assets.client_2}
            alt="Client 2"
            className="h-8 object-contain"
          />
          <img
            src={assets.client_3}
            alt="Client 3"
            className="h-8 object-contain"
          />
          <img
            src={assets.client_4}
            alt="Client 4"
            className="h-8 object-contain"
          />
          <img
            src={assets.client_5}
            alt="Client 5"
            className="h-8 object-contain"
          />
          <img
            src={assets.client_6}
            alt="Client 6"
            className="h-8 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Brand;
