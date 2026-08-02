import React from 'react'
import Column1 from './Column1'
import Column2 from './Column2'
import Column3 from './Column3'
import Column4 from './Column4'
import Column5 from './Column5'
import Line from './Line'
import EndCredits from './EndCredits'

const FooterContent = (props) => {
  return (
    <div className="px-5 py-8 flex flex-col sm:px-6 md:px-10 xl:px-15 xl:py-10">
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:flex lg:flex-row lg:items-start lg:justify-evenly lg:gap-0">
          <div className="sm:col-span-2 md:col-span-1">
            <Column1 />
          </div>
          <Column2 products={props.footerLinks.Products}/>
          <Column3 company={props.footerLinks.Company}/>
          <Column4 support={props.footerLinks.Support}/>
          <div className="sm:col-span-2 md:col-span-1">
            <Column5 />
          </div>
        </div>
        {/* Horizontal Line */}
        <Line />
        {/* Bottom Footer */}
        <EndCredits />
      </div>
  )
}

export default FooterContent
