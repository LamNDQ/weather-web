import React from 'react'
import { FaSoundcloud } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            <div className='flex justify-center items-center p-4 space-x-4'>
                <FaSoundcloud className='w-[50px] h-[50px] text-blue-900' />
            </div>
            <nav className="p-4 mx-auto flex space-x-8 justify-center items-center">
                <a href="#" className="text-black font-bold hover:text-blue-900">Home</a>
                <a href="#" className="text-black font-bold hover:text-blue-900">News</a>
                <a href="#" className="text-black font-bold hover:text-blue-900">About</a>
            </nav>

        </div>
    )
}

export default Header