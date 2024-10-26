import React from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Constant';
import SimmerUI from './SimmerUI';

const RestuarentMenu = () => {

    const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId="

    const { id } = useParams();
    console.log(id)

    const [restaurantData, setRestaurantData] = React.useState(null);
    React.useEffect(() => {
       features()
    }, [])

    const features = async () => {
        const response = await fetch(url + id);
        const data = await response.json();
        setRestaurantData(data)
    }
    console.log(restaurantData)
    console.log(restaurantData?.data?.cards[2]?.card?.card?.info)


    // const { name, avgRating,areaName, cuisines, city, locality } = restaurantData?.data?.cards[2]?.card?.card?.info;




    return (!restaurantData) ? <SimmerUI /> : (
        <div>
            <div className='image'>
                <img src={IMG_CDN_URL + restaurantData?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId} alt="Rstaurent_logo" />
                <h1>{restaurantData?.data?.cards[2]?.card?.card?.info.name}</h1>
                <h4>{restaurantData?.data?.cards[2]?.card?.card?.info.avgRating} star</h4>
                <h4>{restaurantData?.data?.cards[2]?.card?.card?.info.cuisines}</h4>
                {/* <h4>{areaName}</h4>
                <h4>{city}</h4>
                <h4>{locality}</h4> */}
                <h1>hbjnkml,;;</h1>


            </div>
            {/* <div className='Menu'></div> */}
        </div>

    )
}

export default RestuarentMenu;