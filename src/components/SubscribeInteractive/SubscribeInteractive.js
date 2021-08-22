import React from 'react'
import Sidebar from './Sidebar'
import { CoffeeProvider } from '../../contexts/CoffeeContext'
import MainSection from './MainSection'


const SubscribeInteractive = () => {

  return (
    <CoffeeProvider>
      <div className="flex md:flex-row flex-col my-28 md:px-20 md:space-x-48 md:mx-28">
        <Sidebar />
        <MainSection />
      </div>
    </CoffeeProvider>
  )
}

export default SubscribeInteractive