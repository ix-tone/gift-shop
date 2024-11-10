import { useSelector } from "react-redux";
import dataGifts from "../../data/dataGifts";
import Gift from "./Gift";
import { getSelectedCategory } from "../../redux/giftsSlice";

const Gifts = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    
    return(
        <div>
            {dataGifts
            .filter(gift => {
                if (selectedCategory === 'ALL GIFTS') return true; 
                return selectedCategory === gift.category;
            })
            .map(gift => <Gift gift={gift} /> )}
        </div>
    )
}
export default Gifts; 