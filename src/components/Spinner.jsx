import React from "react";

const Spinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <span
        className="loading loading-infinity text-indigo-600"
        style={{ width: "4rem", height: "4rem" }}
      ></span>
    </div>
  );
};

export default Spinner;
