import React from "react";
import Card from "./Card";

const Subscriptions = ({ data }) => {
  return (
    <div className="mt-10 mb-5">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
        Our Best <span className="text-indigo-600 font-bold">Subscription Services</span>
      </h1>
      <p className="max-w-[1009px] mx-auto text-center mb-7">
        Our platform connects you with expertly curated subscription boxes
        tailored to your unique interests — all from the comfort of your home.
        Whether you're looking for monthly surprises or thoughtful gifts,
        explore, subscribe, and enjoy personalized deliveries you’ll love.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((singleData, index) => (
          <Card key={index} singleData={singleData}></Card>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
