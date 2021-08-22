import React, { useState } from 'react'
import upCaret from '../../../img/up_caret.png'


const Delivery = () => {
  const [activeButton, setActiveButton] = useState()

  const handleSelect = (button) => {
    setActiveButton(button)
  }


  return (
    <div className="my-12">
      <div className="flex mb-3 relative">
        <h1 className="text-3xl font-black dark-grey-blue-color">How often should we deliver?</h1>
        <div className="pt-3 absolute top-0 right-0">
          <img className="" src={upCaret} />
        </div>
      </div>
      <div className="flex space-x-16">

        <div className={`cursor-pointer p-5 rounded-md ${activeButton === 'Every week' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Every week')}>
          <h3 className="pb-4 font-black text-xl">
            Every week
          </h3>
          <p> $7.20 per shipment. Includes free first-class shipping. </p>
        </div>

        <div className={`cursor-pointer p-5 rounded-md ${activeButton === 'Every 2 weeks' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Every 2 weeks')}>
          <h3 className="pb-4 font-black text-xl">
            Every 2 weeks
          </h3>
          <p> $9.60 per shipment. Includes free priority shipping. </p>
        </div>

        <div className={`cursor-pointer p-5 rounded-md ${activeButton === 'Every month' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Every month')}>
          <h3 className="pb-4 font-black text-xl">
            Every month
          </h3>
          <p> $12.00 per shipment. Includes free priority shipping.</p>
        </div>

      </div>
    </div>

  )
}

export default Delivery
