import React from "react";

const LeftPart = () => {
  return (
    <div className="flex gap-5 items-center">
      <i className="text-5xl bg-white px-2 py-2 rounded-lg text-blue-800 ri-space-ship-2-line"></i>
      <div className="flex flex-col gap-1 items-start justify-center">
        <h1 className="font-bold text-3xl">Ready to simplify your banking?</h1>
        <p className="font-normal text-lg">
          Join thousands of happy customers who trust our digital banking
          platform.
        </p>
      </div>
    </div>
  );
};

export default LeftPart;
