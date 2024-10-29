import React from 'react'
import logo from '../assets/img/logo.jpeg'
import {Link} from 'react-router-dom'

// By Name export
export const Title = () => (
    <div className='logo'>
        <img src={logo} alt="logo" />
    </div>
)


// Composing Component
//! Read Optional chaning
const Header = () => {
    return <div className='header'>
        <Title />
        <div className="nav-items">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to = '/contact'> Contact</Link></li>
                <li><Link to = '/instamart'> Insta Mart</Link></li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

// Default Export  ** can export one thing by default
export default Header