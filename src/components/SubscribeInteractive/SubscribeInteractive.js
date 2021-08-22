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
    <div className="flex">
      <Sidebar handleClick={handleClick} />
      <MainSection />
      <div></div>
    </div>
    </CoffeeProvider>
  )
}

export default SubscribeInteractive