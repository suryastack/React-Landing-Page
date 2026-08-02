import React from "react";

const LeftPart = () => {
  return (
    <div className="flex gap-3 items-center sm:gap-4 md:gap-5">
      <i className="text-3xl bg-white px-2 py-2 rounded-lg text-blue-800 ri-space-ship-2-line sm:text-4xl md:text-5xl"></i>
      <div className="flex flex-col gap-1 items-start justify-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Ready to simplify your banking?</h1>
        <p className="font-normal text-sm sm:text-base md:text-lg">
          Join thousands of happy customers who trust our digital banking
          platform.
        </p>
      </div>
    </div>
  );
};

export default LeftPart;
