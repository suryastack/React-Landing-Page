import React from 'react'

const BottomCards = () => {
  return (
    <div className='flex justify-center gap-15'>
    <div className='px-5 py-5  w-1/4 rounded-3xl shadow-xl/20'>
      <div className='flex flex-col gap-1 items-start'>
        <i className="ri-double-quotes-l text-4xl text-blue-800"></i>
        <p className='font-medium'>The Banking website is fast, secure, and easy<br/><span>to navigate, Transfering money and</span><br /><span>checking account details is completely</span><br />hassle-free.</p>
      </div>
      <div className="border-t border-gray-400 my-3"></div>
      <div className='flex flex-row gap-2 mt-5 text-gray-500'>
        <img className='w-15 h-15 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1690294614341-cf346ba0a637?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvcnBvcmF0ZSUyMHByb2Zlc3Npb25hbCUyMHNpbmdsZSUyMGltYWdlJTIwcG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <div className='flex flex-col gap-px justify-center'>
          <h3 className='font-bold text-black text-lg'>Priya Sharma</h3>
          <p className='text-gray-600'>Marketing Manager</p>
        </div>
      </div>
    </div>
    <div className='px-5 py-5  w-1/4 rounded-3xl shadow-xl/20'>
      <div className='flex flex-col gap-1 items-start'>
        <i className="ri-double-quotes-l text-4xl text-blue-800"></i>
        <p className='font-medium'>Excellent user experience with a clean<br/><span>interface. Bill payment, account</span><br /><span>management, and transaction history are</span><br />smooth and reliable every time.</p>
      </div>
      <div className="border-t border-gray-400 my-3"></div>
      <div className='flex flex-row gap-2 mt-5 text-gray-500'>
        <img className='w-15 h-15 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8" alt="" />
        <div className='flex flex-col gap-px justify-center'>
          <h3 className='font-bold text-black text-lg'>Rahul Verma</h3>
          <p className='text-gray-600'>Software Engineer</p>
        </div>
      </div>
    </div>
    <div className='px-5 py-5  w-1/4 rounded-3xl shadow-xl/20'>
      <div className='flex flex-col gap-1 items-start'>
        <i className="ri-double-quotes-l text-4xl text-blue-800"></i>
        <p className='font-medium'>I love the simple design and quick login<br/><span>process. Customer support is responsive,</span><br /><span>making online banking convient and</span><br />stress-free.</p>
      </div>
      <div className="border-t border-gray-400 my-3"></div>
      <div className='flex flex-row gap-2 mt-5 text-gray-500'>
        <img className='w-15 h-15 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1661699523943-8d00165bd809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8" alt="" />
        <div className='flex flex-col gap-px justify-center'>
          <h3 className='font-bold text-black text-lg'>Ananya Das</h3>
          <p className='text-gray-600'>Business Analyst</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BottomCards
