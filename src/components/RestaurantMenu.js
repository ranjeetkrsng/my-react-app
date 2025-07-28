import { useEffect, useState } from "react";
import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);

    const {resId} = useParams();
    console.log("Params", resId);

    const resInfo = useRestaurantMenu(resId);

    const {name, cuisines, avgRating, costForTwoMessage, sla} = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
// console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories =  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log("categories", categories);
    return (
        <div className="text-center">
            {resInfo === null ? (
                <Simmer />
            ) : (
                <>
                    <h1 className="font-bold my-10 text-2xl">{name}</h1>
                    <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
                 {/* categories accordion  */}   
                 {categories.map((category, index) => (
                    <RestaurantCategory 
                    key={category?.card?.card?.title}
                    data={category?.card?.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)} />
                 ))}
                </>
            )}
            
        </div>
        
    );
};

export default RestaurantMenu;