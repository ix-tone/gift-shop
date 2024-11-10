import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import { CgShoppingCart } from "react-icons/cg";
import CartItem from "./cartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
        <CgShoppingCart />
        <h3>TOTAL: ${totalPrice}</h3>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem} /> )}
     
      </div>
   )
}

export default Cart; 