import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='w-full h-[45vh] p-3 flex flex-row gap-3 overflow-x-auto rounded-3xl sm:h-[50vh] sm:p-4 sm:rounded-4xl md:h-[55vh] md:gap-4 lg:h-full lg:w-2/3 lg:p-6'>
      {props.users.map(function(elems,indx){
        return <RightCard key={indx} id={indx} img={elems.img} review={elems.intro} tag={elems.tag}/>
      })}
    </div>
  )
}

export default RightContent