import React from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, FETCH_MENU_URL } from '../Constant';
import SimmerUI from './Shimmer';
import useRestaurent from '../utility/useRestaurent';
import { useDispatch } from 'react-redux';
import { addItem } from '../utility/cartSlice';

const RestuarentMenu = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    // Fetch restaurant data
    const restaurantData = useRestaurent(FETCH_MENU_URL, id);
    const data = restaurantData?.data?.cards[2]?.card?.card?.info;

    // Add item to cart
    const handleAddItem = () => {
        if (data) {
            dispatch(addItem(data)); // Dispatching entire data object
        }
    };

    // Show loading shimmer if data is not yet loaded
    if (!restaurantData) return <SimmerUI />;

    return (
        <div className='p-4' >
            <div className='flex flex-col items-center'>
                {/* Restaurant Image */}
                <div className='image mb-4'>
                    <img 
                        className='w-52 rounded-md shadow-lg' 
                        src={IMG_CDN_URL + data?.cloudinaryImageId} 
                        alt={`${data?.name} Logo`} 
                    />
                </div>

                {/* Restaurant Details */}
                <h1 className='text-2xl font-bold mb-2'>{data?.name || "Restaurant Name"}</h1>
                <p className='text-gray-600'>{data?.avgRating || "N/A"} ⭐</p>
                <p className='text-gray-700'>{data?.cuisines?.join(', ') || "Cuisines"}</p>

                {/* Order Button */}
                <button data-testid="order"
                    className='bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600'
                    onClick={handleAddItem}
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default RestuarentMenu;
