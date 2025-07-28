import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => { 
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    const {loggedInUser} = useContext(UserContext);
    console.log("cloudinaryImageId", CDN_URL+cloudinaryImageId);
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img
                className="rounded-lg" 
                src={CDN_URL+cloudinaryImageId }
                alt="res-logo"
            />   
            <h3 className="font-bold py-4 text-lg">{name}</h3> 
            <h4>{cuisines.join(", ")}</h4> 
            <h4>{avgRating} stars</h4> 
            <h4>{sla.deliveryTime} mins</h4> 
            <h4>User: {loggedInUser}</h4> 
            <h4>{costForTwo}</h4> 
        </div>
    )
}

// Higher Order Component

// input - RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <div className="absolute top-0 left-0 bg-black text-white p-2 rounded-lg">Promoted</div>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;