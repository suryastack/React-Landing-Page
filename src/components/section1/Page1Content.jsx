import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-4 pb-10 flex flex-col justify-between items-center h-auto gap-6 sm:px-6 sm:pb-14 sm:gap-8 md:px-8 md:pb-16 md:gap-10 lg:flex-row lg:h-[85vh] xl:px-8 xl:pb-20 xl:h-[90vh]'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
