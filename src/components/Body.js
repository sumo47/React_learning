import React, { useEffect, useState } from 'react'
import { restaurentList } from '../Constant'
import RestaurentCard from './RestaurentCard'
import SimmerUI from './SimmerUI'

//! what is cors - cors plugin
// what is state 
// What is Hook - function in react written by facebook developer gives us variaous functionality
// What is useState - function in react returns Array and first element of Array is name of local State Variable 
// Components renders in two state -- 1. Either my state changes or 2. Either props changes
const filterData = (SearchText, allRestaturent) => {
    return allRestaturent.filter((resturents) => resturents?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase()))
}

const Body = () => {
    const [allRestaturent, setAllRestaurent] = useState([])
    const [filteredRestaurent, setFilteredRestaurent] = useState([])

    const [SearchText, setSearchText] = useState("KFC") // function to update the variable / initial value kfc

    // --------------useEffect hook --------------------------------
    useEffect(() => {
        console.log("call this when dependancy changes")
    }, [SearchText]) // call back function not called immediately , it will call when my useEffect wants to call 
    // if we don't  wan't to call useEffect-callBack anytime , - pass in dependancy arry in to it
    // overall - useEffect takes two parameters - 1. callback function 2.  dependancy array
    // [] - Empty array - determines that call once //* after initial render (reload)
    // [SearchText] -once after initial render +  whenever SearchText changes useEffect will call again and again


    useEffect(() => {
        fetchApi();

    }, [SearchText == ""])


    const fetchApi = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        // optional chaining
        setAllRestaurent(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log("render()") // whenever state variable changes react component will render again but apply only changes/updated node on actual dom 
    // render again and check that what is updated in virtual dom so , the React fiber updated only updated things on actual dom
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
                            return <RestaurentCard {...restaurent.info} key={restaurent.info.id} />;
                        })
                    )
                }

            </div>
        </>
    )
}
export default Body