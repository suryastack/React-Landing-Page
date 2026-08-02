import React from 'react'
import TopContent from './TopContent'
import BottomContent from './BottomContent'

const Section2 = () => {
  return (
    <div className='w-full h-auto py-8 flex flex-col gap-6 sm:py-10 sm:gap-7 md:py-12 xl:h-screen xl:py-0 xl:gap-5'>
      <TopContent />
      <BottomContent />
    </div>
  )
}

export default Section2
