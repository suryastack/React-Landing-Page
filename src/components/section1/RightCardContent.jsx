import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="h-full w-full top-0 left-0 absolute bg-black/20 p-6 flex flex-col justify-between ">
        <h2 className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl font-medium">
          {props.id+1}
        </h2>
        <div>
          <p className="text-shadow-md text-lg leading-relaxed text-white mb-10">
            {props.review}
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white px-8 py-2">
              {props.tag}
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white px-3 py-2">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
