import React, { useEffect, useState, useContext } from 'react'
// import { restaurentList } from '../Constant'
import RestaurentCard from './RestaurentCard'
import SimmerUI from './SimmerUI'
import { Link } from 'react-router-dom'
import useIsOnline from '../utility/useIsOnline'
import UserContext from '../utility/userContext'

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
        // console.log(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(data)
    }

    if (!useIsOnline()) {
        return <h1>🔴 No internet</h1>
    }

    console.log("render()")
    // console.log(allRestaturent)
    // console.log(filteredRestaurent)


    const { user, setUser } = useContext(UserContext)

    return (allRestaturent.length === 0) ? <SimmerUI /> : (
        <>
            <div className="search-container p-5 bg-pink-300 my-5">

                <input type="text" className='search-input rounded p-2 focus:bg-purple-50' placeholder='Search'
                    // value={SearchText}
                    onChange={(e) => {
                        // e.target.value ==> whatever you write in input
                        setSearchText(e.target.value)
                        const data = filterData(SearchText, allRestaturent);
                        console.log(data)
                        // update the state 
                        setFilteredRestaurent(data);
                    }} />

                <button
                    className='p-2 bg-purple-400 hover:bg-purple-600 mx-2 rounded-md'
                    onClick={() => {
                        // need to filter data 
                        const data = filterData(SearchText, allRestaturent);
                        console.log(data)
                        // update the state 
                        setFilteredRestaurent(data);
                    }}>Search</button>

                <input type="text" value={user.name} onChange={
                    e => setUser({
                        ...user,
                        name: e.target.value,
                    })
                    
                } />
                <input type="text" value={user.email} onChange={
                    e => setUser({
                        ...user,
                        email: e.target.value,
                    })
                    
                } />
            </div>
            {/* {console.log(restaturent)} */}

            <div className='restaurent-list flex justify-around gap-2 flex-wrap p-3'>
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