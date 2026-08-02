import React from "react";

const TopCards = () => {
  return (
    <div className="flex gap-10 px-30 py-5 rounded-2xl shadow-lg">
    <div className="flex items-start gap-4 w-full ">
      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-blue-100">
        <i className="ri-shield-line text-2xl text-blue-700"></i>
      </div>
      
      <div>
        <h3 className="font-bold text-lg mb-2">Bank-Grade Security</h3>
        <p className="text-gray-500">
          Your data and transactions are <br /> <span className="whitespace-nowrap"> protected with top-level encryption</span> <br /> and
          security.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-4 w-full ">
      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-blue-100">
       <i className="ri-flashlight-line text-2xl text-blue-700"></i>
      </div>
      
      <div>
        <h3 className="font-bold text-lg mb-2">Instant Transfer</h3>
        <p className="text-gray-500 whitespace-nowrap">
          Send and recieve money instantly<br /> <span className="whitespace-nowrap">24/7, with secure and seamless</span> <br />transactions.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-4 w-full ">
      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-blue-100">
       <i className="ri-bar-chart-line text-2xl text-blue-600"></i>
      </div>
      
      <div>
        <h3 className="font-bold text-lg mb-2">Smart Insights</h3>
        <p className="text-gray-500 whitespace-nowrap">
          Track your spending, set budgets,<br /> <span>and get insights to save more</span> <br />efficiently.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-4 w-full ">
      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-blue-100">
       <i className="ri-customer-service-2-line text-2xl text-blue-600"></i>
      </div>
      
      <div>
        <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
        <p className="text-gray-500">
          Our support team is here for you<br /> <span>anytime, anywhere, We've got</span> <br />your back.
        </p>
      </div>
    </div>
    </div>
  );
};

export default TopCards;
