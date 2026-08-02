import React from 'react'
import BottomText from './BottomText'
import BottomCards from './BottomCards'

const BottomContent = () => {
  return (
    <div className='px-4 flex flex-col gap-5 sm:px-5 sm:gap-6 md:gap-7'>
      <BottomText />
      <BottomCards />
    </div>
  )
}

export default BottomContent