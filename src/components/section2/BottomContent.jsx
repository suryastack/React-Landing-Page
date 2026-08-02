import React from 'react'
import BottomText from './BottomText'
import BottomCards from './BottomCards'

const BottomContent = () => {
  return (
    <div className='px-5 flex flex-col gap-7'>
      <BottomText />
      <BottomCards />
    </div>
  )
}

export default BottomContent
