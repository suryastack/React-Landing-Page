import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-8 pb-20 flex justify-between items-center h-[90vh]  gap-10'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
