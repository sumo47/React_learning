import React from 'react'

// By Name export
export const Title = () => (
    <div className='logo'>
        <img src="https://www.ujudebug.com/wp-content/uploads/2019/08/food_villa-min.jpg" alt="logo" />
    </div>
)


// Composing Component
//! Read Optional chaning
const Header = () => {
    return <div className='header'>
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

// Default Export  ** can export one thing by default
export default Header