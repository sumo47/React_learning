import React from 'react'
import { IMG_CDN_URL } from '../Constant'

// no key (not acceptable) << index key (use only if you don't have anything) << unique key
const RestaurentCard = ({ cloudinaryImageId, name, cuisines, avgRating, id }) => {
    // const { cloudinaryImageId, name, cuisines, avgRating } = resturent.card.card.info
    // console.log(props)
    return (
        <div className='card w-52  bg-purple-300 h-80 flex-row rounded-md shadow-md mb-3'>   {/** //! why we can not use key in card class  */}

            <img className='w-52 h-52 rounded-md' src={IMG_CDN_URL + cloudinaryImageId} />
           <div className='pl-1 font-semibold'>
           <h2 className='font-bold'>{name}</h2>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{avgRating} stars</h5>
           </div>
        </div>
    )
}

export default RestaurentCard