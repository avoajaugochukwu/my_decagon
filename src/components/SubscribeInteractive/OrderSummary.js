import React, { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import ShowModal from './ShowOrder'

const OrderSummary = () => {

  const { coffeeOrder } = useContext(CoffeeContext)

  const { preference, beanType, quantity, grind, delivery } = coffeeOrder

  const preferenceNotCapsule = () => {
    const str = <h2 className="text-3xl font-black">
      “I drink my coffee using&nbsp;
      <span className="dark-teal-color">{preference === "" ? "_____" : preference}</span>,
      with a&nbsp;
      <span className="dark-teal-color">{beanType === "" ? "_____" : beanType}</span>
      &nbsp;type of bean.&nbsp;
      <span className="dark-teal-color">{quantity === "" ? "_____" : quantity}</span>
      &nbsp;ground ala&nbsp;
      <span className="dark-teal-color">{grind === "" ? "_____" : grind}</span>
      , sent to me&nbsp;
      <span className="dark-teal-color">{delivery === "" ? "_____" : delivery}</span>
      .”
    </h2>

    return str
  }

  const preerenceIsCapsule = () => {
    const str = <h2 className="text-3xl font-black">
      “I drink my coffee as&nbsp;
      <span className="dark-teal-color">{preference === "" ? "_____" : preference}</span>,
      with a&nbsp;
      <span className="dark-teal-color">{beanType === "" ? "_____" : beanType}</span>
      &nbsp;type of bean.&nbsp;
      <span className="dark-teal-color">{quantity === "" ? "_____" : quantity}</span>
      &nbsp;, sent to me&nbsp;
      <span className="dark-teal-color">{delivery === "" ? "_____" : delivery}</span>
      .”
    </h2>

    return str
  }

  return (
    <div className="p-3">
      <div className=" dark-grey-blue-bgcolor light-cream-color rounded-lg p-8">

        <p className="mb-5">ORDER SUMMARY</p>
        {
          preference === 'Capsule'
            ?
            preerenceIsCapsule()
            :
            preferenceNotCapsule()
        }


      </div>
      <div className="float-right mt-5">
        <ShowModal />
      </div>
    </div>

  )
}

export default OrderSummary
