import React from "react";
import flash from "../assets/flash.png";

const Service = () => {
  return (
    <div className="mt-2 md:mt-10 ">
      <section className="py-16 rounded-3xl px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Flexible, Seasonal{" "}
            <span className="text-indigo-600 font-bold">
              Subscription Boxes
            </span>
          </h2>
          <p className="text-gray-600 mb-12">
            Curated surprises delivered to your door — discover joy every month
            with Cratezy.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Tailored to Your Interests
                </h3>
                <p className="text-sm text-gray-600">
                  Choose from Tech, Wellness, Home, Food, Kids, and Pet
                  categories — something for everyone.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Flexible Plans
                </h3>
                <p className="text-sm text-gray-600">
                  Subscribe monthly, weekly, or even quarterly — total freedom
                  at your fingertips.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Locally Curated
                </h3>
                <p className="text-sm text-gray-600">
                  Support small creators and artisans with every box you receive
                  this winter.
                </p>
              </div>
            </div>

            <div className="mx-auto">
              <img
                src={flash}
                alt="Winter Subscription Box"
                className="rounded-lg object-cover w-full h-full max-h-[400px]"
              />
            </div>

            <div className="space-y-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Gift-Worthy Surprises
                </h3>
                <p className="text-sm text-gray-600">
                  Send thoughtful boxes to loved ones or treat yourself — joy in
                  every unboxing.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Fast & Reliable Delivery
                </h3>
                <p className="text-sm text-gray-600">
                  Get your box delivered quickly, securely, and on your chosen
                  schedule.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Unbox Something New
                </h3>
                <p className="text-sm text-gray-600">
                  Each delivery is packed with curated items designed to
                  surprise, delight, and inspire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
