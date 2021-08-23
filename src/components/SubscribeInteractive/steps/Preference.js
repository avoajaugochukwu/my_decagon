import React, { useState, useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeeContext'

import downCaret from '../../../img/down_caret.png'


const Preference = () => {
  const [activeButton, setActiveButton] = useState()

  const { updatePreference } = useContext(CoffeeContext)

  const handleSelect = (preference) => {
    setActiveButton(preference)
    updatePreference(preference)
  }


  return (
    <div className="mx-8">
      <div className="flex mb-3 relative">
        <h1 className="text-3xl font-black dark-grey-blue-color">How do you drink your coffee?</h1>
        <div className="pt-3 absolute top-0 right-0">
          <img className="" alt={downCaret} src={downCaret} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:space-x-16 m-3 mx-auto">

        <div className={`cursor-pointer p-5 my-3 rounded-md ${activeButton === 'Capsule' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`} 
          onClick={() => handleSelect('Capsule')}>
          <h3 className="pb-4 font-black text-xl">
            Capsule
          </h3>
          <p> Compatible with Nespresso systems and similar brewers </p>
        </div>

        <div className={`cursor-pointer p-5 my-3  rounded-md ${activeButton === 'Filter' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`} 
          onClick={() => handleSelect('Filter')}>
          <h3 className="pb-4 font-black text-xl">
            Filter
          </h3>
          <p> For pour over or drip methods like Aeropress, Chemex, and V60 </p>
        </div>

        <div className={`cursor-pointer p-5  my-3 rounded-md ${activeButton === 'Espresso' ? 'select-box-bg-teal' : 'select-box-bg-gray'}`} 
          onClick={() => handleSelect('Espresso')}>
          <h3 className="pb-4 font-black text-xl">
            Espresso
          </h3>
          <p> Dense and finely ground beans for an intense, flavorful experience</p>
        </div>

      </div>
    </div>

  )
}

export default Preference
