import React, { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import ShowModal from './ShowOrder'

import { preferenceNotCapsule, preferenceIsCapsule } from '../../helpers/coffeeOrderText'

const OrderSummary = () => {

  const { coffeeOrder } = useContext(CoffeeContext)

  return (
    <div className="p-3">
      <div className=" dark-grey-blue-bgcolor light-cream-color rounded-lg p-8">

        <p className="mb-5">ORDER SUMMARY</p>
        {
          coffeeOrder.preference === 'Capsule'
            ?
            preferenceIsCapsule(coffeeOrder, 'summary')
            :
            preferenceNotCapsule(coffeeOrder, 'summary')
        }


      </div>
      <div className="float-right mt-5 mb-7">
        <ShowModal />
      </div>
    </div>

  )
}

export default OrderSummary
