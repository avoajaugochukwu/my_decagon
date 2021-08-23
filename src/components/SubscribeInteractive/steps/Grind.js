import React, { useState, useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeeContext'

import upCaret from '../../../img/up_caret.png'
import downCaret from '../../../img/down_caret.png'


const Grind = () => {
  const [activeButton, setActiveButton] = useState()

  const { coffeeOrder, updateGrind } = useContext(CoffeeContext)

  const handleSelect = (grind) => {
    setActiveButton(grind)
    updateGrind(grind)
  }

  console.log(coffeeOrder)

  return (
    <div className="my-12 mx-8">
      <div className="flex mb-3 relative">
        <h1 className={`text-3xl font-black 
          ${coffeeOrder.preference === 'Capsule' ? 'dark-grey-color cursor-not-allowed' : 'dark-grey-blue-color' }`}
          >Want us to grind them?</h1>
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
      <div className={`flex md:flex-row flex-col md:space-x-16 m-3 mx-auto 
      ${(coffeeOrder.quantity === '' || coffeeOrder.preference === 'Capsule') ? 'hidden' : 'block'}`}
      >

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Wholebean' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Wholebean')}>
          <h3 className="pb-4 font-black text-xl">
            Wholebean
          </h3>
          <p> Best choice if you cherish the full sensory experience </p>
        </div>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Filter' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Filter')}>
          <h3 className="pb-4 font-black text-xl">
            Filter
          </h3>
          <p> For drip or pour-over coffee methods such as V60 or Aeropress. </p>
        </div>

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Cafetiére' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`}
          onClick={() => handleSelect('Cafetiére')}>
          <h3 className="pb-4 font-black text-xl">
            Cafetiére
          </h3>
          <p> Course ground beans specially suited for french press coffee</p>
        </div>

      </div>
    </div>

  )
}

export default Grind
