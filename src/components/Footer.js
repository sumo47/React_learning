import React from 'react';


const Footer = () => (
    <footer className='bg-gray-800 text-white p-4 mt-10'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            {/* Footer Title */}
            <h4 className='text-lg font-semibold mb-3 md:mb-0'>Footer</h4>

            {/* Links Section */}
            <div className='flex space-x-4 mb-3 md:mb-0'>
                <a href='/about' className='hover:underline'>About Us</a>
                <a href='/contact' className='hover:underline'>Contact</a>
                <a href='/privacy' className='hover:underline'>Privacy Policy</a>
            </div>

            {/* Social Media Icons */}
            <div className='flex space-x-4'>
                <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-facebook-f'></i> {/* Facebook Icon */}
                </a>
                <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-twitter'></i> {/* Twitter Icon */}
                </a>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-instagram'></i> {/* Instagram Icon */}
                </a>
            </div>
        </div>

        {/* Copyright */}
        <div className='text-center text-sm mt-4'>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
    </footer>
);

export default Footer;
