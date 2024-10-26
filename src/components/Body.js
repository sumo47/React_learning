import React, { useEffect, useState } from 'react'
// import { restaurentList } from '../Constant'
import RestaurentCard from './RestaurentCard'
import SimmerUI from './SimmerUI'
import {Link} from 'react-router-dom'

const filterData = (SearchText, allRestaturent) => {
    return allRestaturent.filter((resturents) => resturents?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase()))
}

const Body = () => {
    const [allRestaturent, setAllRestaurent] = useState([])
    const [filteredRestaurent, setFilteredRestaurent] = useState([])

    const [SearchText, setSearchText] = useState("KFC") // function to update the variable / initial value kfc

    useEffect(() => {
        fetchApi();

    }, [SearchText == ""]) // if we do not pass 2nd parameter (an array) than useEffect will call every time when render happens


    const fetchApi = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        setAllRestaurent(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log("render()") 
    return (allRestaturent.length === 0) ? <SimmerUI /> : (
        <>
            <div className="search-container">

                <input type="text" className='search-input' placeholder='Search'
                    value={SearchText}
                    onChange={(e) => {
                        // e.target.value ==> whatever you write in input
                        setSearchText(e.target.value)
                        const data = filterData(SearchText, allRestaturent);
                        console.log(data)
                        // update the state 
                        setFilteredRestaurent(data);
                    }} />

                <button
                    onClick={() => {
                        // need to filter data 
                        const data = filterData(SearchText, allRestaturent);
                        console.log(data)
                        // update the state 
                        setFilteredRestaurent(data);
                    }}>Search</button>
            </div>
            {/* {console.log(restaturent)} */}

            <div className='restaurent-list'>
                {
                    filteredRestaurent.length === 0 ? (
                        <h2>No Restaurants match</h2>
                    ) : (
                        filteredRestaurent.map((restaurent) => {
                            return <Link to={"/restaurent/" + restaurent.info.id} key={restaurent.info.id} ><RestaurentCard {...restaurent.info} /></Link>;
                        })
                    )
                }

            </div>
        </>
    )
}
export default Body