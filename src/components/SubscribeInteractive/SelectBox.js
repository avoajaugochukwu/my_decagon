import React, { useState } from 'react'

const SelectBox = ({ title, description, active }) => {
  // const [ active, setActive ] = useState(false)

  

  return (
    <div className={`cursor-pointer p-5 rounded-md  ${ active === true ? 'select-box-bg-teal' : 'select-box-bg-gray' }`}>
      <h3 className="pb-4 font-black text-xl">
        { title }
      </h3>
      <p> { description } </p>
    </div>
  )
}

export default SelectBox
