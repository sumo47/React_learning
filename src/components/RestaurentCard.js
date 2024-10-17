import React from 'react'
import { IMG_CDN_URL } from '../Constant'

// no key (not acceptable) << index key (use only if you don't have anything) << unique key
const RestaurentCard = ({ cloudinaryImageId, name, cuisines, avgRating, id }) => {
    // const { cloudinaryImageId, name, cuisines, avgRating } = resturent.card.card.info
    // console.log(props)
    return (
        <div className='card'>   {/** //! why we can not use key in card class  */}

            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{avgRating} stars</h5>
        </div>
    )
}

export default RestaurentCard