import React from 'react'
import TimeLine from './TimeLine'

export default function Steps() {
  return (
    <div className="md:px-20 mt-28">
      <div className="dark-grey-blue-bgcolor py-20">
        <TimeLine />

        <div className="flex space-x-28 px-40 pt-16">
          <div>
            <h2 className="pale-orange-color text-6xl font-black pb-8">01</h2>
            <h4 className="light-cream-color text-2xl font-black pb-8">Pick your coffee</h4>
            <p className="light-cream-color">
              Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them.
              There are new coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div>
            <h2 className="pale-orange-color text-6xl font-black pb-8">02</h2>
            <h4 className="light-cream-color text-2xl font-black pb-8">Choose the frequency</h4>
            <p className="light-cream-color">
              Customize your order frequency, quantity, even your roast style and grind type. 
              Pause, skip or cancel your subscription with no commitment through our online portal.
            </p>
          </div>
          <div>
            <h2 className="pale-orange-color text-6xl font-black pb-8">03</h2>
            <h4 className="light-cream-color text-2xl font-black pb-8">Receive and enjoy!</h4>
            <p className="light-cream-color">
              We ship your package within 48 hours, freshly roasted. 
              Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
            </p>
          </div>
        </div>
      </div>



    </div>
  )
}
