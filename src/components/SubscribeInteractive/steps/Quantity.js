import React, { useState, useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeeContext'

import upCaret from '../../../img/up_caret.png'
import downCaret from '../../../img/down_caret.png'


const Quantity = () => {
  const [activeButton, setActiveButton] = useState()

  const { coffeeOrder, updateQuantity } = useContext(CoffeeContext)

  const handleSelect = (quantity) => {
    setActiveButton(quantity)
    updateQuantity(quantity)
  }


  return (
    <div className="my-12  mx-8">
      <div className="flex mb-3 relative">
        <h1 className="text-3xl font-black dark-grey-blue-color">How much would you like?</h1>
        <div className="pt-3 absolute top-0 right-0">
        {
            coffeeOrder.preference === ''
              ?
              <img className="" alt={downCaret} src={downCaret} />
              :
              <img className="" alt={upCaret} src={upCaret} />
          }
        </div>
      </div>
      <div className={`flex md:flex-row flex-col md:space-x-16 m-3 mx-auto ${coffeeOrder.beanType === '' ? 'hidden' : 'block'}`}>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === '250g' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('250g')}>
          <h3 className="pb-4 font-black text-xl">
            250g
          </h3>
          <p> Compatible with Nespresso systems and similar brewers </p>
        </div>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === '500g' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('500g')}>
          <h3 className="pb-4 font-black text-xl">
            500g
          </h3>
          <p> Perfect option for a couple. Yields about 40 delectable cups. </p>
        </div>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === '1000g' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('1000g')}>
          <h3 className="pb-4 font-black text-xl">
            1000g
          </h3>
          <p> Perfect for offices and events. Yields about 90 delightful cups.</p>
        </div>

      </div>
    </div>

  )
}

export default Quantity
