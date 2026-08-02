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
    <div className="px-15  py-10 flex flex-col">
        <div className="flex items-start justify-evenly">
          <Column1 />
          <Column2 products={props.footerLinks.Products}/>
          <Column3 company={props.footerLinks.Company}/>
          <Column4 support={props.footerLinks.Support}/>
          <Column5 />
        </div>
        {/* Horizontal Line */}
        <Line />
        {/* Bottom Footer */}
        <EndCredits />
      </div>
  )
}

export default FooterContent
