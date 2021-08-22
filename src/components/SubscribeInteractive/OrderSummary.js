import React, { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

const OrderSummary = () => {

  const { coffeeOrder } = useContext(CoffeeContext)

  const { preference, beanType, quantity, grind, delivery } = coffeeOrder


  return (
    <div className="dark-grey-blue-bgcolor light-cream-color p-10 rounded-lg">
      <p className="mb-5">ORDER SUMMARY</p>
      <h2 className="text-3xl font-black">
         “I drink my coffee using&nbsp;
          <span className="dark-teal-color">{preference ===  ""? "_____" : preference }</span>, 
         with a&nbsp;
         <span className="dark-teal-color">{beanType ===  ""? "_____" : beanType }</span> 
          &nbsp;type of bean.&nbsp;
          <span className="dark-teal-color">{quantity ===  ""? "_____" : quantity }</span> 
          , sent to me&nbsp;
          <span className="dark-teal-color">{grind ===  ""? "_____" : grind }</span> 
          .”
      </h2>
    </div>
  )
}

export default OrderSummary
