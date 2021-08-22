import React, { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'


const Sidebar = ({ handleClick }) => {
  const {coffeeOrder, updatePreference} = useContext(CoffeeContext)

  const clicker = () => {
    updatePreference('Coffee')
  }
  

  // console.log(coffeeOrder)
  
  return (
      
    
    <div className=" flex flex-col font-black md:w-1/4 w-full hidden md:block">
      <div className="flex py-2 cursor-pointer   border-b-2"
        onClick={() => clicker()}>
        <h3 className="">01</h3>
        <h3 className="ml-3">Preferences</h3>
      </div>

      <div className="flex py-2 cursor-pointer   border-b-2">
        <h3 className="">02</h3>
        <h3 className="ml-3">Bean Type</h3>
      </div>

      <div className="flex py-2 cursor-pointer   border-b-2">
        <h3 className="">03</h3>
        <h3 className="ml-3">Quantity</h3>
      </div>

      <div className="flex py-2 cursor-pointer   border-b-2">
        <h3 className="">04</h3>
        <h3 className="ml-3">Grind Options</h3>
      </div>

      <div className="flex py-2 cursor-pointer ">
        <h3 className="">05</h3>
        <h3 className="ml-3">Deliveries</h3>
      </div>
    </div>
    
  )
}

export default Sidebar