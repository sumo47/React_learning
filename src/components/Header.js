import React, { useContext } from 'react';
import logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';
import UserContext from '../utility/userContext';
import { useSelector } from 'react-redux';
import useIsOnline from '../utility/useIsOnline';

// By Name export for Title component
export const Title = () => (
    <Link to='/'>
        <img data-testid="logo" src={logo} className='h-24 p-2' alt="Website Logo" />
    </Link>
);

// data-testid is understand by jest

// Header Component
const Header = () => {
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    const isOnline = useIsOnline()

    return (
        <header className='flex justify-between items-center bg-blue-400 shadow-xl p-4'>
            <Title />
            <div className='text-center'>
                <h2 className='text-2xl font-bold text-green-800'>
                    {user?.name || 'Guest'}
                </h2>
                <p className='text-sm text-gray-700'>{user?.email || 'Not logged in'}</p>
            </div>
            <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>

            <nav className="text-xl font-semibold">
                <ul className='flex space-x-4'>
                    <li><Link className='p-2 hover:bg-purple-200 rounded' to='/'>Home</Link></li>
                    <li><Link className='p-2 hover:bg-purple-200 rounded' to='/about'>About</Link></li>
                    <li><Link className='p-2 hover:bg-purple-200 rounded' to='/contact'>Contact</Link></li>
                    <li><Link className='p-2 hover:bg-purple-200 rounded' to='/instamart'>Insta-Mart</Link></li>
                    <li><Link data-testid="cart" className='p-2 hover:bg-purple-200 rounded' to='/cart'>Cart [ {cartItems.length} ]</Link></li>
                </ul>
            </nav>
        </header>
    );
};

// Default Export
export default Header;

//gpt