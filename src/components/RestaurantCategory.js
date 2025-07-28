import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    
    //  const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setShowIndex(); 
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer"
                onClick={handleClick}>
                {data.title} ({data.itemCards.length})
                <span className="text-gray-500">🔽</span>
            </div>
           {showItems && <ItemList items={data.itemCards} />}  
        </div>
    );
}

export default RestaurantCategory;