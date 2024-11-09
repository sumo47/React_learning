import React from 'react';

const Button = ({ name }) => {
    return (
        <div className=''>
            <h1 className='p-2 px-4 m-2 bg-gray-200 rounded-md cursor-pointer hover:bg-black hover:text-white'>{name}</h1>
        </div>
    )
}

export default Button;

