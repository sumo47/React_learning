import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IMG_CDN_URL } from '../Constant';
import UserContext from '../utility/userContext';

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, id }) => {
    const { user } = useContext(UserContext);

    return (
        <div 
            className='flex flex-col justify-between w-52 h-90 bg-purple-300 rounded-md shadow-md mb-3 p-2' key={id} >
            <img 
                className='w-52 h-52 rounded-md object-cover'
                src={cloudinaryImageId ? `${IMG_CDN_URL}${cloudinaryImageId}` : '/path/to/default-image.jpg'}
                alt={`${name} image`}
                onError={(e) => { e.target.onerror = null; e.target.src = '/path/to/default-image.jpg'; }}
            />
            <div className='pl-1 font-semibold'>
                <h2 className='font-bold truncate'>{name}</h2>
                <h5>{cuisines?.slice(0, 3).join(", ")}...</h5>
                <h5>{avgRating ? `${avgRating} stars` : 'No rating available'}</h5>
                {user && (
                    <>
                        <h6 className='text-sm text-gray-700'>{user.name}</h6>
                        <h6 className='text-sm text-gray-500'>{user.email}</h6>
                    </>
                )}
            </div>
        </div>
    );
};

RestaurantCard.propTypes = {
    cloudinaryImageId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cuisines: PropTypes.arrayOf(PropTypes.string),
    avgRating: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}; // gpt

export default RestaurantCard;

// gpt