import { useEffect, useState } from "react";
import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const {resId} = useParams();
    console.log("Params", resId);

    const resInfo = useRestaurantMenu(resId);

    const {name, cuisines, avgRating, costForTwoMessage, sla} = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    return (
        <div className="menu">
            {resInfo === null ? (
                <Simmer />
            ) : (
                <>
                    <h1>{name}</h1>
                    <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                    <h2>Menu</h2>
                    <ul>
                        {itemCards.map((item) => (<li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100}</li>))}
                    </ul>
                </>
            )}
            
        </div>
        
    );
};

export default RestaurantMenu;