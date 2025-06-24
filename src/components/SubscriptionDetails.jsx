import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const SubscriptionDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [viewDetails, setViewDetails] = useState({});
  const [reviewText, setReviewText] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    const subscribeDetails = data.find(
      (singleCardData) => singleCardData.id == id
    );
    setViewDetails(subscribeDetails);
  }, [data, id]);

  const handleReviewSubmit = () => {
    const ratingNum = parseFloat(ratingValue);
    if (
      !reviewText.trim() ||
      isNaN(ratingNum) ||
      ratingNum < 1 ||
      ratingNum > 5
    ) {
      alert("Please enter a valid review and a rating between 1 and 5");
      return;
    }

    const newReview = {
      id: Date.now(),
      text: reviewText.trim(),
      rating: ratingNum,
    };

    setUserReviews((prev) => [...prev, newReview]);
    setReviewText("");
    setRatingValue("");
  };

  const renderStars = (rating) => {
    const fullStars = Math.round(rating);
    return (
      <>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < fullStars ? "⭐" : "☆"}</span>
        ))}
      </>
    );
  };
  useEffect(() => {
    document.title = "Our Best Subscriptions | Cratezy";
  }, []);
  return (
    <div className="w-11/12 mx-auto rounded-3xl px-4 md:px-6 py-10 md:py-12 mt-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
        Subscription Service Details
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border border-indigo-600 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full">
          <img
            src={viewDetails.thumbnail}
            alt={viewDetails.name}
            className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none max-h-[300px] sm:max-h-[400px] lg:max-h-full"
          />
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-indigo-600">
            {viewDetails.name}
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            {viewDetails.description}
          </p>

          <div className="text-sm space-y-1">
            <p className="font-semibold text-gray-800">
              Category: {viewDetails.category}
            </p>
            <p className="text-gray-600">Frequency: {viewDetails.frequency}</p>
            <p className="text-gray-600">
              Rating: ⭐ {viewDetails.ratings} ({viewDetails.number_of_reviews}{" "}
              reviews)
            </p>
          </div>

          <div className="pt-4">
            <p className="text-lg md:text-xl font-bold text-green-600">
              Only ${viewDetails.price} / {viewDetails.frequency}
            </p>
            <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6 text-gray-800">
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              What's Inside
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
              {viewDetails.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              Subscription Benefits
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
              {viewDetails.subscription_benefits?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 pt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Leave a Review
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Write your review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="number"
            placeholder="Rating (1-5)"
            min={1}
            max={5}
            value={ratingValue}
            onChange={(e) => setRatingValue(e.target.value)}
            className="w-full sm:w-32 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            onClick={handleReviewSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Review
          </button>
        </div>

        {userReviews.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              User Reviews:
            </h3>
            <ul className="space-y-2">
              {userReviews.map((review) => (
                <li
                  key={review.id}
                  className="border p-4 rounded-lg bg-white shadow-sm"
                >
                  <p className="text-gray-800">{review.text}</p>
                  <p className="text-sm text-gray-500">
                    Rating: {renderStars(review.rating)} ({review.rating})
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
