import React, { useState, useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeeContext'

import upCaret from '../../../img/up_caret.png'
import downCaret from '../../../img/down_caret.png'


const BeanType = () => {
  const [activeButton, setActiveButton] = useState()

  const {coffeeOrder, updateBeanType} = useContext(CoffeeContext)


  const handleSelect = (beanType) => {
    setActiveButton(beanType)
    updateBeanType(beanType)
  }

  return (
    <div className="my-12 mx-8">
      <div className="flex mb-3 relative">
        <h1 className="text-3xl font-black dark-grey-blue-color">What type of coffee?</h1>
        <div className="pt-3 absolute top-0 right-0">
          {
            coffeeOrder.preference ===  '' 
            ?
            <img className="" alt={downCaret} src={downCaret} />
            :
            <img className="" alt={upCaret} src={upCaret} />
          }
        </div>
      </div>

      <div className={`flex md:flex-row flex-col md:space-x-16 m-3 mx-auto  ${coffeeOrder.preference === '' ? 'hidden' : 'block'}`}>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Single Origin' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Single Origin')}>
          <h3 className="pb-4 font-black text-xl">
            Single Origin
          </h3>
          <p>Distinct, high quality coffee from a specific family-owned farm </p>
        </div>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Decaf' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Decaf')}>
          <h3 className="pb-4 font-black text-xl">
            Decaf
          </h3>
          <p> Just like regular coffee, except the caffeine has been removed </p>
        </div>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Blended' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Blended')}>
          <h3 className="pb-4 font-black text-xl">
            Blended
          </h3>
          <p> Combination of two or three dark roasted beans of organic coffees</p>
        </div>

      </div>
    </div>

  )
}

export default BeanType
