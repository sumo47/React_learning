import React,{useContext} from 'react'
import logo from '../assets/img/logo.jpeg'
import { Link } from 'react-router-dom'
import UserContext from '../utility/userContext'




// By Name export
export const Title = () => (
    <a href='/'>
        <img src={logo} className='h-24 p-2' alt="logo" />
    </a>
)


// Composing Component
//! Read Optional chaning
const Header = () => {
    const {user} = useContext(UserContext)

    return <div className='flex justify-between items-center bg-pink-600 shadow-xl' >
        <Title />
        <h2 className='text-2xl font-bold text-green-800'>{user.name}</h2>
        <div className="text-xl font-semibold">
            <ul className='flex'>
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