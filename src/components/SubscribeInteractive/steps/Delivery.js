import React, { useState, useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeeContext'

import { getWeeklyPrice, getBiWeeklyPrice, getMonthPrice } from '../../../helpers/deliveryComputation'

import upCaret from '../../../img/up_caret.png'
import downCaret from '../../../img/down_caret.png'


const Delivery = () => {
  const [activeButton, setActiveButton] = useState()

  const { coffeeOrder, updateDelivery } = useContext(CoffeeContext)


  const handleSelect = (delivery) => {
    setActiveButton(delivery)
    updateDelivery(delivery)
  }

  let showDeliveryOptions = false

  if (coffeeOrder.grind === '') {
    showDeliveryOptions = false
    if (coffeeOrder.preference === 'Capsule' && coffeeOrder.quantity !== '') {
      showDeliveryOptions = true
    }
  } else {
    showDeliveryOptions = true
  }

  


  return (
    <div className="my-12 mx-8">
      <div className="flex mb-3 relative">
        <h1 className="text-3xl font-black dark-grey-blue-color">How often should we deliver?</h1>
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
      <div className={`flex md:flex-row flex-col md:space-x-16 m-3 mx-auto ${showDeliveryOptions ? 'block' : 'hidden'}`}>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Every week' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Every week')}>
          <h3 className="pb-4 font-black text-xl">
            Every week
          </h3>
          <p> ${getWeeklyPrice(coffeeOrder.quantity)} per shipment. Includes free first-class shipping. </p>
        </div>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Every 2 weeks' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Every 2 weeks')}>
          <h3 className="pb-4 font-black text-xl">
            Every 2 weeks
          </h3>
          <p> ${getBiWeeklyPrice(coffeeOrder.quantity)} per shipment. Includes free priority shipping. </p>
        </div>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Every month' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Every month')}>
          <h3 className="pb-4 font-black text-xl">
            Every month
          </h3>
          <p> ${getMonthPrice(coffeeOrder.quantity)} per shipment. Includes free priority shipping.</p>
        </div>

      </div>
    </div>

  )
}

export default Delivery
