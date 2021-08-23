import React, { useContext } from "react";
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { validateCoffeeOrder } from "../../helpers/validateCoffeeOrder";
import { preferenceNotCapsule, preferenceIsCapsule } from '../../helpers/coffeeOrderText'
import { getTotalPrice } from "../../helpers/deliveryComputation";

export default function ShowModal() {
  const [showModal, setShowModal] = React.useState(false);

  const { coffeeOrder } = useContext(CoffeeContext)

  const isCoffeeOrderValid = validateCoffeeOrder(coffeeOrder)

  return (
    <>
      <button
        className={`text-white font-black px-6 py-3 rounded shadow hover:shadow-lg 
          outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
          ${isCoffeeOrderValid ? 'dark-teal-bgcolor' : 'dark-grey-bgcolor cursor-not-allowed'}`}
        type="button"
        onClick={() => setShowModal(true)}
        disabled={!isCoffeeOrderValid}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="dark-grey-blue-bgcolor light-cream-color flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-black">
                    Order Summary
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="light-cream-color h-6 w-6 text-2xl block ">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {
                    coffeeOrder.preference === 'Capsule'
                      ?
                      preferenceIsCapsule(coffeeOrder, 'checkout')
                      :
                      preferenceNotCapsule(coffeeOrder, 'checkout')
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                <div className="text-4xl font-black mr-12">
                    ${ isCoffeeOrderValid ? getTotalPrice(coffeeOrder.quantity, coffeeOrder.delivery) : '' }/ mo
                  </div>
                  <button
                    className="dark-teal-bgcolor  text-white font-black px-6 py-2 outline-none focus:outline-none mr-1 mb-1 rounded"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Checkout
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}