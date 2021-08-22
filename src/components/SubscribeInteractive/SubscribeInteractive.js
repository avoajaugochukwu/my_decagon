import React, { createContext, useState } from 'react'
import Sidebar from './Sidebar'
import { CoffeeProvider } from '../../context/CoffeeContext'
import MainSection from './MainSection'


const SubscribeInteractive = () => {


  const handleClick = (clicker) => {
    console.log(clicker)
  }


  return (
    <CoffeeProvider>
    <div className="flex my-28 md:px-20 space-x-48 md:mx-28">
      <Sidebar handleClick={handleClick} />
      <MainSection />
      
    </div>
    </CoffeeProvider>
  )
}

export default SubscribeInteractive