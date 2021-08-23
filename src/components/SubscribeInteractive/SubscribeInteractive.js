import React from 'react'
import Sidebar from './Sidebar'
import { CoffeeProvider } from '../../contexts/CoffeeContext'
import MainSection from './MainSection'


const SubscribeInteractive = () => {

  return (
    <CoffeeProvider>
      <div className="flex md:flex-row flex-col lg:my-28 md:my-12 lg:px-20 md:px-8 lg:space-x-48 md:space-x-16 lg:mx-24 md:mx-8 mt-16">
        <Sidebar />
        <MainSection />
      </div>
    </CoffeeProvider>
  )
}

export default SubscribeInteractive