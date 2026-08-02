import React from 'react'
import TopText from './TopText'
import TopCards from './TopCards'

const TopContent = () => {
  return (
    <div className='flex flex-col items-center gap-3 sm:gap-4 md:gap-5'>
      <TopText />
      <TopCards />
    </div>
  )
}

export default TopContent
