import React from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, FETCH_MENU_URL } from '../Constant';
import SimmerUI from './SimmerUI';
import useRestaurent from '../utility/useRestaurent';
import { useDispatch } from 'react-redux'
import { addItem } from '../utility/cartSlice'

const RestuarentMenu = () => {

    const dispatch = useDispatch()

    const handleAddItem = (name) => {
        dispatch(addItem(name)) // dispatch addItem function with data
    }
    const { id } = useParams();

    const restaurantData = useRestaurent(FETCH_MENU_URL, id)
    const data = restaurantData?.data?.cards[2]?.card?.card?.info
    // console.log(data)

    return (!restaurantData) ? <SimmerUI /> : (
        <div>
            <div className='image'>
                <img className='w-52' src={IMG_CDN_URL + data.cloudinaryImageId} alt="Rstaurent_logo" />
                <h1>{data.name}</h1>
                <h4>{data.avgRating} star</h4>  
                <h4>{data.cuisines}</h4>
                <h1>hbjnkml,;;</h1>
            </div>
            <div className='flex'> <button className='bg-blue-500 text-white px-4 py-2 rounded-md'
                onClick={() => handleAddItem(data.name)}
            >Order Now</button></div>
        </div>

    )
}

export default RestuarentMenu;