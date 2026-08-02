import React from 'react'

const TopText = () => {
  return (
    <div className='flex flex-col items-center pt-7 gap-5'>
      <button className='bg-gray-200 text-black px-7 py-3 rounded-full font-semibold'>OUR FEATURES</button>
      <h1 className='font-bold text-3xl'>Banking built for your <span className='text-gray-600 italic'>everyday</span></h1>
      <p className='font-normal text-lg tracking-wide'>Simple, secure, and features to help you manage your finances better.</p>
    </div>
  )
}

export default TopText
