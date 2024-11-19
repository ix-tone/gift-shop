import Filter from "./Filter";
import { CiGift } from "react-icons/ci";


const AllCategories = () => {
    return(
        <div>
            <h1>YOUR ORDINARY GIFT SHOP <CiGift /></h1>
            {['GIFTS FOR HER', 'GIFTS FOR HIM', 'SWEET GIFTS', 'ALL GIFTS'].map((category, index) => <Filter category={category} key={index} />)}
        </div>
    )
}

export default AllCategories; 
