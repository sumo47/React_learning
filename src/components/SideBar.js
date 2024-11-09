import React from 'react'
import {Link} from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="flex flex-col w-60 h-screen bg-white shadow-lg p-4">
        {/* Home, Shorts, and Subscriptions Section */}
        <div className="space-y-4">
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 hover:text-red-500 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">home</span>
                <Link to="/"><span>Home</span></Link>
            </ul>
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 hover:text-red-500 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">play_arrow</span>
                <span>Shorts</span>
            </ul>
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 hover:text-red-500 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">subscriptions</span>
                <span>Subscriptions</span>
            </ul>
        </div>
    
        <hr className="my-4" />
    
        {/* Library Section */}
        <div className="space-y-4">
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">history</span>
                <span>History</span>
            </ul>
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">playlist_play</span>
                <span>Playlists</span>
            </ul>
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">video_library</span>
                <span>Your videos</span>
            </ul>
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">watch_later</span>
                <span>Watch later</span>
            </ul>
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out">
                <span className="material-icons mr-2">thumb_up</span>
                <span>Liked videos</span>
            </ul>
        </div>
    
        <hr className="my-4" />
    
        {/* Subscriptions Section */}
        <div className="space-y-2">
            <h1 className="text-lg font-semibold">Subscriptions</h1>
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">subscriptions</span>
                <span>IndiaTV</span>
            </ul>
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">subscriptions</span>
                <span>IndiaTV</span>
            </ul>
            <ul className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out">
                <span className="material-icons mr-2">subscriptions</span>
                <span>IndiaTV</span>
            </ul>
        </div>
    </div>
    
    )
}

export default SideBar
