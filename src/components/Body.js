import React, { useState } from 'react'
import { restaurentList } from '../Constant'
import RestaurentCard from './RestaurentCard'

// what is state 
// What is Hook - function in react written by facebook developer gives us variaous functionality
// What is useState - function in react returns Array and first element of Array is name of local State Variable 

const filterData = (SearchText, restaurentList) => {
    return restaurentList.filter((resturents) => resturents.card.card.info.name.includes(SearchText))
}

const Body = () => {
    const [restaturent, setRestaurent] = useState(restaurentList)
    const [SearchText, setSearchText] = useState("KFC") // function to update the variable
    return (
        <>
            <div className="search-container">

                <input type="text"
                    className='search-input'
                    placeholder='Search'
                    value={SearchText}
                    onChange={(e) => {
                        // e.target.value ==> whatever you write in input
                        setSearchText(e.target.value)
                    }}
                />

                <button
                    onClick={() => {
                        // need to filter data 
                        const data = filterData(SearchText, restaurentList);
                        console.log(data)
                        // update the state 
                        setRestaurent(data);
                    }}
                >Search</button>
            </div>

            <div className='restaurent-list'>
                {restaturent.map((restaurent) => {
                    return <RestaurentCard {...restaurent.card.card.info} key={restaurent.card.card.info.id} />; {/* just like function call  */ };
                })}
            </div>
        </>
    )
}
export default Body