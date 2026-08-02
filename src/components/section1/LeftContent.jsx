import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='w-full flex flex-col justify-between gap-6 sm:gap-8 lg:h-full lg:w-1/3 lg:gap-0'>
      <HeroText />
      <Arrow />
    </div>
  )
}

export default LeftContent