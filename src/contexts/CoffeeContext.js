import React, { useState } from 'react'

const initialState = {
  preference: '',
  beanType: '',
  quantity: '',
  grind: '',
  delivery: ''
}

export const CoffeeContext = React.createContext()

export function CoffeeProvider ({ children }) {
 const [ coffeeOrder, setCoffeeOrder ] = useState(initialState)

  const updatePreference = (preference) => {
    if (preference === 'Capsule') {
      setCoffeeOrder({ ...coffeeOrder, preference, grind: '' })  
    } else {
      setCoffeeOrder({ ...coffeeOrder, preference })
    }
  }

  const updateBeanType = (beanType) => {
    setCoffeeOrder({ ...coffeeOrder, beanType })
  }

  const updateQuantity = (quantity) => {
    setCoffeeOrder({ ...coffeeOrder, quantity })
  }

  const updateGrind = (grind) => {
    setCoffeeOrder({ ...coffeeOrder, grind })
  }

  const updateDelivery = (delivery) => {
    setCoffeeOrder({ ...coffeeOrder, delivery })
  }

  return (
    <CoffeeContext.Provider value={{ 
      coffeeOrder: coffeeOrder,
      updatePreference: updatePreference, 
      updateBeanType: updateBeanType,
      updateQuantity: updateQuantity,
      updateGrind: updateGrind,
      updateDelivery: updateDelivery
      }}>
      { children }
    </CoffeeContext.Provider>
  )
}
