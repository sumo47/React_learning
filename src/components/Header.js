import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1 items-center'>
        <img className='h-10 cursor-pointer'
          alt="menu" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" />
        <img className='h-16 cursor-pointer'
          alt="youtube-icon" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" />

      </div>
      <div className=' flex col-span-10 items-center justify-center pr-60'>
        <input placeholder='Search' className='pl-4 shadow-md border border-gray-400 w-1/2  rounded-l-full p-2' type="text" />
        <button className='border shadow-md border-gray-400 rounded-r-full py-2 px-4'>🔍</button>
      </div>
      <div className=' flex items-center col-span-1'>
        <img className='h-8 cursor-pointer'
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" alt="user" />
      </div>
    </div>
  )
}

export default Header
