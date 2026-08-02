import React from 'react'

const BottomCards = () => {
  return (
    <div className='flex flex-col gap-6 sm:px-2 md:grid md:grid-cols-2 md:gap-6 lg:flex lg:flex-row lg:justify-center lg:gap-10 xl:gap-15'>
    <div className='px-4 py-4 w-full rounded-3xl shadow-xl/20 sm:px-5 sm:py-5 lg:w-1/4'>
      <div className='flex flex-col gap-1 items-start'>
        <i className="ri-double-quotes-l text-3xl text-blue-800 sm:text-4xl"></i>
        <p className='font-medium text-sm sm:text-base'>The Banking website is fast, secure, and easy<br className="hidden xl:block"/><span>to navigate, Transfering money and</span><br className="hidden xl:block" /><span>checking account details is completely</span><br className="hidden xl:block" />hassle-free.</p>
      </div>
      <div className="border-t border-gray-400 my-3"></div>
      <div className='flex flex-row gap-2 mt-5 text-gray-500'>
        <img className='w-12 h-12 rounded-full object-cover sm:w-14 sm:h-14 xl:w-15 xl:h-15' src="https://plus.unsplash.com/premium_photo-1690294614341-cf346ba0a637?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvcnBvcmF0ZSUyMHByb2Zlc3Npb25hbCUyMHNpbmdsZSUyMGltYWdlJTIwcG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <div className='flex flex-col gap-px justify-center'>
          <h3 className='font-bold text-black text-base sm:text-lg'>Priya Sharma</h3>
          <p className='text-gray-600 text-sm'>Marketing Manager</p>
        </div>
      </div>
    </div>
    <div className='px-4 py-4 w-full rounded-3xl shadow-xl/20 sm:px-5 sm:py-5 lg:w-1/4'>
      <div className='flex flex-col gap-1 items-start'>
        <i className="ri-double-quotes-l text-3xl text-blue-800 sm:text-4xl"></i>
        <p className='font-medium text-sm sm:text-base'>Excellent user experience with a clean<br className="hidden xl:block"/><span>interface. Bill payment, account</span><br className="hidden xl:block" /><span>management, and transaction history are</span><br className="hidden xl:block" />smooth and reliable every time.</p>
      </div>
      <div className="border-t border-gray-400 my-3"></div>
      <div className='flex flex-row gap-2 mt-5 text-gray-500'>
        <img className='w-12 h-12 rounded-full object-cover sm:w-14 sm:h-14 xl:w-15 xl:h-15' src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8" alt="" />
        <div className='flex flex-col gap-px justify-center'>
          <h3 className='font-bold text-black text-base sm:text-lg'>Rahul Verma</h3>
          <p className='text-gray-600 text-sm'>Software Engineer</p>
        </div>
      </div>
    </div>
    <div className='px-4 py-4 w-full rounded-3xl shadow-xl/20 sm:px-5 sm:py-5 md:col-span-2 lg:col-span-1 lg:w-1/4'>
      <div className='flex flex-col gap-1 items-start'>
        <i className="ri-double-quotes-l text-3xl text-blue-800 sm:text-4xl"></i>
        <p className='font-medium text-sm sm:text-base'>I love the simple design and quick login<br className="hidden xl:block"/><span>process. Customer support is responsive,</span><br className="hidden xl:block" /><span>making online banking convient and</span><br className="hidden xl:block" />stress-free.</p>
      </div>
      <div className="border-t border-gray-400 my-3"></div>
      <div className='flex flex-row gap-2 mt-5 text-gray-500'>
        <img className='w-12 h-12 rounded-full object-cover sm:w-14 sm:h-14 xl:w-15 xl:h-15' src="https://plus.unsplash.com/premium_photo-1661699523943-8d00165bd809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8" alt="" />
        <div className='flex flex-col gap-px justify-center'>
          <h3 className='font-bold text-black text-base sm:text-lg'>Ananya Das</h3>
          <p className='text-gray-600 text-sm'>Business Analyst</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BottomCards
