import dataGifts from "../../data/dataGifts";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {

    const gifts = dataGifts.find(item => item.id === cartItem.giftId);
    const dispatch = useDispatch();
    
    return (
        <div>
            <p>{gifts.name}</p>
             <p>{cartItem.quantity} item(s) </p>
             <p>Price: ${gifts.price * cartItem.quantity}</p>
             <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} >
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="bin"/> 
            </span>
       </div>
    )
}

export default CartItem;
