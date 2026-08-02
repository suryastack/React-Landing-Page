import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-10 lg:px-14 xl:py-8 xl:px-18'>
      <h4 className='bg-black text-white px-3 py-1.5 text-[10px] rounded-full uppercase sm:px-4 sm:py-2 sm:text-xs md:text-sm xl:px-6 xl:text-base'>Target Audience</h4>
      <button className='bg-gray-200 px-3 py-1.5 uppercase rounded-full tracking-widest text-[9px] sm:px-4 sm:py-2 sm:text-[11px] md:text-sm xl:px-6 xl:py-2 xl:text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
