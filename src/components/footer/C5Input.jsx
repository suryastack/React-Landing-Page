import React from "react";

const C5Input = () => {
  return (
    <div className="relative w-full mt-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-white rounded-lg py-2.5 pl-4 pr-14 text-sm sm:py-3 sm:text-base "
      />

      <button
        className="absolute right-1 top-1/2 -translate-y-1/2
    bg-blue-600 text-white p-1.5 rounded-md sm:p-2"
      >
        <i className="ri-arrow-right-line text-base sm:text-lg"></i>
      </button>
    </div>
  );
};

export default C5Input;
