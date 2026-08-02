import React from 'react'

const TopText = () => {
  return (
    <div className='flex flex-col items-center pt-4 gap-3 text-center px-4 sm:pt-5 sm:gap-4 md:pt-6 xl:pt-7 xl:gap-5'>
      <button className='bg-gray-200 text-black px-5 py-2 rounded-full font-semibold text-xs sm:px-6 sm:text-sm md:px-7 md:py-3 md:text-base'>OUR FEATURES</button>
      <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>Banking built for your <span className='text-gray-600 italic'>everyday</span></h1>
      <p className='font-normal text-sm tracking-wide sm:text-base md:text-lg'>Simple, secure, and features to help you manage your finances better.</p>
    </div>
  )
}

export default TopText
