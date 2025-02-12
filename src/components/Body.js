import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    console.log("listOfRestaurants", listOfRestaurants);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={ () => {
                        const filteredList = listOfRestaurants.filter((res) => res.card.card.info.avgRating > 4.4);
                        setListOfRestaurants(filteredList);
                    }
                    }
                >
                    To Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />)  
                }
                
            </div>
        </div>
    )
}

export default Body;