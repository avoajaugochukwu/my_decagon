

export const preferenceNotCapsule = ({ preference, beanType, quantity, grind, delivery }, type) => {
  const str = <div>
    <h2 className={`text-3xl font-black  mb-10 ${type === 'checkout' ? 'order-text-grey' : ''}`}>
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
    {
      type === 'checkout' &&
      <p style={{"fontFamily": "arial", "color": "#83888F"}}>
        Is this correct? You can proceed to checkout or go back to plan selection if something is off. 
        Subscription discount codes can also be redeemed at the checkout. 
      </p>
    }
    
  </div>

  return str
}


export const preferenceIsCapsule = ({ preference, beanType, quantity, delivery }, type) => {
  const str = <div>
  <h2 className={`text-3xl font-black mb-10 ${type === 'checkout' ? 'order-text-grey' : ''}`}>
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
  {
      type === 'checkout' &&
      <p style={{"fontFamily": "arial", "color": "#83888F"}}>
        Is this correct? You can proceed to checkout or go back to plan selection if something is off. 
        Subscription discount codes can also be redeemed at the checkout. 
      </p>
    }
  </div>

  return str
}