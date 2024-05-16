import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './logo.png'

const Header = () => {
    const [toggleMenu ,setToggleMenu] = useState(false);

    const handleToogleMenu = () =>{
        setToggleMenu(!toggleMenu);
    }
  return (
    <>
        <header className='main-head'>
            <nav>
                <div className="logo">
                    <Link to="/">
                        {/* <h1>Bharat <span>Control India</span></h1> */}
                        <img src={logo} alt="bci-logo" />
                    </Link>
                </div>
                <div className={`nav-links  ${toggleMenu ? "active" : ""} `}>
                    <ul className="list-unstyled">
                        <li><Link onClick={handleToogleMenu} to="/">Home</Link></li>
                        <li><Link onClick={handleToogleMenu} to="/about-us">About</Link></li>
                        <li><Link onClick={handleToogleMenu} to="/our-products">Our Products</Link></li>
                        <li><Link onClick={handleToogleMenu} to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="toogle-menu" onClick={handleToogleMenu}>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header