import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Gift = ({gift}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return (
        <div>
            <img src={`${gift.img}.jpg`} alt="gift" />
            <h2>{gift.name}</h2>
            <p>${gift.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />

            <button onClick={() => {dispatch(addItemToCart({gift, quantity}))}} >Add to cart</button>
        </div>
    )
}

export default Gift; 