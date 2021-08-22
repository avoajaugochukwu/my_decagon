
import BeanType from "./steps/BeanType"
import Delivery from "./steps/Delivery"
import Grind from "./steps/Grind"
import Preference from "./steps/Preference"
import Quantity from "./steps/Quantity"


const MainSection = () => {
  return (
    <div className="w-full">
      <Preference />
      <BeanType />
      <Quantity />
      <Grind />
      <Delivery />
    </div>
  )
}

export default MainSection
