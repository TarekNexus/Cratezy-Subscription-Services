import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import sub from "../assets/sub.png";

const Blog = () => {
  const data = useLoaderData();

  useEffect(() => {
    document.title = "Blog | Cratezy";
  }, []);

  return (
    <div className="p-5 font-sans w-11/12 mx-auto">
      {/* Highlight Post */}
      <div className="bg-white rounded-xl flex flex-col lg:flex-row items-center shadow p-5 mb-8 gap-6">
        <div className="w-full lg:w-[500px]">
          <img
            src={sub}
            alt="Highlight Post"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        <div className="mt-4 w-full">
          <h2 className="text-xl md:text-2xl font-bold">
            Subscription Boxes That Are Probably Missing From Your Life
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Owner of Web - May 5, 2025
          </p>
          <p className="mt-2 text-base">
            Every three months, you'll receive a box with 8–10 full-sized
            products across beauty, fashion, wellness, home, tech and fitness.
          </p>
          <a
            href="#"
            className="inline-block mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 text-sm"
          >
            Read More
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Most Popular Blog 🔥</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow overflow-hidden flex flex-col border border-indigo-600"
          >
            <img
              src={post.img}
              alt={`Image for ${post.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {post.author} - {post.date}
              </p>
              <p className="mt-2 text-sm flex-1">{post.desc}</p>
              <a
                href="#"
                className="inline-block mt-3 text-blue-700 text-sm hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
