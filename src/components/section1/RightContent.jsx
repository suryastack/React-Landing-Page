import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full p-6 w-2/3  flex flex-row gap-3 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elems,indx){
        return <RightCard key={indx} id={indx} img={elems.img} review={elems.intro} tag={elems.tag}/>
      })}
    </div>
  )
}

export default RightContent
