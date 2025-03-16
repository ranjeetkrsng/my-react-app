import { useState, useEffect } from 'react';
import { API_URL } from './constants';

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const resData = await fetch(API_URL + resId);
        const json = await resData.json();
        console.log(json);
        setResInfo(json);
    }


    return resInfo;
}

export default useRestaurantMenu;