import React from 'react'
import  './Header.css'
const Header = () => {
    return (
        <div className='Header'>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

        </div>
    )
}

export default Header
