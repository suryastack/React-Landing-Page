import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="h-full w-full top-0 left-0 absolute bg-black/20 p-4 flex flex-col justify-between sm:p-5 xl:p-6">
        <h2 className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-lg font-medium sm:h-9 sm:w-9 sm:text-xl xl:h-10 xl:w-10 xl:text-2xl">
          {props.id+1}
        </h2>
        <div>
          <p className="text-shadow-md text-sm leading-relaxed text-white mb-5 sm:text-base sm:mb-7 xl:text-lg xl:mb-10">
            {props.review}
          </p>
          <div className="flex justify-between items-center gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white px-4 py-1.5 text-xs sm:px-6 sm:py-2 sm:text-sm xl:px-8 xl:py-2 xl:text-base">
              {props.tag}
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white px-2.5 py-1.5 sm:px-3 sm:py-2">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent