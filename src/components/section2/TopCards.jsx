import React from "react";

const TopCards = () => {
  return (
    <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl shadow-lg sm:grid sm:grid-cols-2 sm:gap-6 sm:px-6 md:px-10 md:gap-8 lg:flex lg:flex-row lg:gap-6 lg:px-14 xl:gap-10 xl:px-30">
    <div className="flex items-start gap-4 w-full ">
      <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-blue-100 sm:w-12 sm:h-12">
        <i className="ri-shield-line text-xl text-blue-700 sm:text-2xl"></i>
      </div>
      
      <div>
        <h3 className="font-bold text-base mb-1 sm:text-lg sm:mb-2">Bank-Grade Security</h3>
        <p className="text-gray-500 text-sm whitespace-normal sm:text-base xl:whitespace-nowrap">
          Your data and transactions are <br className="hidden xl:block" /> <span className="xl:whitespace-nowrap"> protected with top-level encryption</span> <br className="hidden xl:block" /> and
          security.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-4 w-full ">
      <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-blue-100 sm:w-12 sm:h-12">
       <i className="ri-flashlight-line text-xl text-blue-700 sm:text-2xl"></i>
      </div>
      
      <div>
        <h3 className="font-bold text-base mb-1 sm:text-lg sm:mb-2">Instant Transfer</h3>
        <p className="text-gray-500 text-sm whitespace-normal sm:text-base xl:whitespace-nowrap">
          Send and recieve money instantly<br className="hidden xl:block" /> <span className="xl:whitespace-nowrap">24/7, with secure and seamless</span> <br className="hidden xl:block" />transactions.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-4 w-full ">
      <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-blue-100 sm:w-12 sm:h-12">
       <i className="ri-bar-chart-line text-xl text-blue-600 sm:text-2xl"></i>
      </div>
      
      <div>
        <h3 className="font-bold text-base mb-1 sm:text-lg sm:mb-2">Smart Insights</h3>
        <p className="text-gray-500 text-sm whitespace-normal sm:text-base xl:whitespace-nowrap">
          Track your spending, set budgets,<br className="hidden xl:block" /> <span>and get insights to save more</span> <br className="hidden xl:block" />efficiently.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-4 w-full ">
      <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-blue-100 sm:w-12 sm:h-12">
       <i className="ri-customer-service-2-line text-xl text-blue-600 sm:text-2xl"></i>
      </div>
      
      <div>
        <h3 className="font-bold text-base mb-1 sm:text-lg sm:mb-2">24/7 Support</h3>
        <p className="text-gray-500 text-sm whitespace-normal sm:text-base xl:whitespace-nowrap">
          Our support team is here for you<br className="hidden xl:block" /> <span>anytime, anywhere, We've got</span> <br className="hidden xl:block" />your back.
        </p>
      </div>
    </div>
    </div>
  );
};

export default TopCards;