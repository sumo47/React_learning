import React from 'react'
import logo from '../assets/img/logo.jpeg'
import { Link } from 'react-router-dom'

// By Name export
export const Title = () => (
    <a href='/'>
        <img src={logo} className='h-24 p-2' alt="logo" />
    </a>
)


// Composing Component
//! Read Optional chaning
const Header = () => {
    return <div className='flex justify-between bg-pink-600 shadow-xl' >
        <Title />
        <div className="text-xl font-semibold">
            <ul className='flex p-8'>
                <li><Link className='p-2 hover:bg-purple-200' to='/'>Home</Link></li>
                <li><Link className='p-2' to='/about'>About</Link></li>
                <li><Link className='p-2' to='/contact'> Contact</Link></li>
                <li><Link className='p-2' to='/instamart'> Insta-Mart</Link></li>
                <li><Link className='p-2' to='#'>Cart</Link></li>
            </ul>
        </div>
    </div>
}

// Default Export  ** can export one thing by default
export default Header