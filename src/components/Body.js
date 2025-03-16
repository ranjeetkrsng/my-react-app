import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
    const onlineStatusCheck = useOnlineStatus();
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=Narmada%20Chain%20of%20Restaurant&trackingId=3bb3a9cd-0daa-f4b1-de31-3a476de9d595&submitAction=ENTER&queryUniqueId=bb329ca1-d30b-6d79-a855-1142ebbe19ac");
            const json = await response.json();
            const restaurants = json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card.restaurants;
            setListOfRestaurants(restaurants);
            setListOfFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    console.log("listOfRest", listOfRestaurants);

    if(listOfRestaurants.length === 0) {
        return <Simmer />
    }

    // const filteredResList = listOfRestaurants.filter((res) => res.info.name.includes(searchText));
    // setListOfRestaurants(filteredResList);
   
    

    if(!onlineStatusCheck) return (
        <h1>Look like you're offline!! Please check your internet connection.</h1>
    )

    return (
        <div className="body">
            <div className="filter flex">
                <div className="searchContainer m-4 p-4">
                    <input className="border border-solid border-black" type="text" placeholder="Search for restaurants" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setListOfFilteredRestaurants(filteredList);
                        }}
                        >
                         Search
                        </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg"
                    onClick={ () => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.4);
                        setListOfFilteredRestaurants(filteredList);
                    }
                    }
                >
                    To Rated Restaurants
                </button>
                </div>
                
            </div>
            <div className="flex items-stretch flex-wrap">
                {
                    listOfFilteredRestaurants.length === 0 ? (
                        <h2>No restaurants found</h2>
                    ) : (
                        listOfFilteredRestaurants.map((restaurant) => <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>)
                    )
                }
                
            </div>
        </div>
    )
}

export default Body;