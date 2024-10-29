import React from 'react'
const useRestaurent = (FETCH_MENU_URL, id) => {

    const [restaurantData, setRestaurantData] = React.useState(null);

    React.useEffect(() => {
        features()
    }, [])

    const features = async () => {
        const response = await fetch(FETCH_MENU_URL + id);
        const data = await response.json();
        setRestaurantData(data)
    }

    return restaurantData;
}


export default useRestaurent;