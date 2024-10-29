import React from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, FETCH_MENU_URL } from '../Constant';
import SimmerUI from './SimmerUI';
import useRestaurent from '../utility/useRestaurent';

const RestuarentMenu = () => {
    const { id } = useParams();

    const restaurantData = useRestaurent(FETCH_MENU_URL, id)

    return (!restaurantData) ? <SimmerUI /> : (
        <div>
            <div className='image'>
                <img src={IMG_CDN_URL + restaurantData?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId} alt="Rstaurent_logo" />
                <h1>{restaurantData?.data?.cards[2]?.card?.card?.info.name}</h1>
                <h4>{restaurantData?.data?.cards[2]?.card?.card?.info.avgRating} star</h4>
                <h4>{restaurantData?.data?.cards[2]?.card?.card?.info.cuisines}</h4>
                <h1>hbjnkml,;;</h1>
            </div>
        </div>

    )
}

export default RestuarentMenu;