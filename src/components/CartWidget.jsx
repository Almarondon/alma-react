import { Icon } from "@chakra-ui/icons"
import { FaCartShopping } from "react-icons/fa6";


const CartWidget = () => {
  return (
    <div>
      <Icon as={FaCartShopping} /> 0
    </div>
  )
}

export default CartWidget