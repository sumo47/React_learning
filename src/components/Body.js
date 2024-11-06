import React, { useEffect, useState, useContext } from 'react';
import RestaurentCard from './RestaurentCard';
import ShimmerUI from './Shimmer';
import { Link } from 'react-router-dom';
// import useIsOnline from '../utility/useIsOnline';
import UserContext from '../utility/userContext';

const filterData = (searchText, allRestaurants) => {
    return allRestaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
};

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("KFC");

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        try {
            const response = await fetch(
                'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );
            const data = await response.json();
            const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setAllRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

    const handleSearch = () => {
        const data = filterData(searchText, allRestaurants);
        setFilteredRestaurants(data);
    };

    // if (!useIsOnline()) {
    //     return <h1>🔴 No internet</h1>;
    // }

    return allRestaurants.length === 0 ? (
        <ShimmerUI />
    ) : (
        <>
            <div className="search-container p-5 bg-indigo-200 my-5">
                <input
                    data-testid="search-input"
                    type="text"
                    className="search-input rounded p-2 focus:bg-purple-50"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    data-testid="search-btn"
                    className="p-2 bg-purple-400 hover:bg-purple-600 mx-2 rounded-md"
                    onClick={handleSearch}
                >
                    Search
                </button>

                <input
                    type="text"
                    value={user.name}
                    onChange={(e) =>
                        setUser({
                            ...user,
                            name: e.target.value,
                        })
                    }
                    className="ml-3 p-2 rounded"
                    placeholder="Your name"
                />
                <input
                    type="text"
                    value={user.email}
                    onChange={(e) =>
                        setUser({
                            ...user,
                            email: e.target.value,
                        })
                    }
                    className="ml-3 p-2 rounded"
                    placeholder="Your email"
                />
            </div>

            <div data-testid="res-list" className="restaurant-list flex justify-around gap-4 flex-wrap p-3">
                {filteredRestaurants.length === 0 ? (
                    <h2>No restaurants match your search</h2>
                ) : (
                    filteredRestaurants.map((restaurant) => (
                        <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                            <RestaurentCard {...restaurant.info} />
                        </Link>
                    ))
                )}
            </div>
        </>
    );
};

export default Body;
