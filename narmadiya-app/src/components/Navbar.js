import React from 'react';
import { Link } from 'react-router-dom'
import NavbarCss from '../Styles/Navbar.module.css'

export const Navbars = () => {
    
    return (
        <>
            <nav className={`${NavbarCss.navMenu} navbar navbar-expand-lg navbar-light nav-menu`}>
                <div className="container-fluid" style={{justifyContent:'flex-end'}}>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                            <Link className={`${NavbarCss.navLinks} nav-link`} to="/">मुख्य प्रष्ठ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${NavbarCss.navLinks} nav-link`} to="/patrika">मुख्य समाचार एवं पत्रिकाएं</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${NavbarCss.navLinks} nav-link`} to="/samajvistar">समाज के बारे मे </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${NavbarCss.navLinks} nav-link`} to="/religious">धार्मिक</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${NavbarCss.navLinks} nav-link`} to="/contactus">संपर्क</Link>
                        </li>
                        <li className={`nav-item dropdown ${NavbarCss.itemHasSatDownDown}`}>
                            <Link className={`${NavbarCss.navLinks} nav-link dropdown-toggle`} to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                            </Link>
                            <div className={`${NavbarCss.hasDropDown} dropdown-menu`} aria-labelledby="navbarDropdown">
                                <Link className={`${NavbarCss.navLinks} nav-link change`} to="/Login">Login</Link>
                                <Link className={`${NavbarCss.navLinks} nav-link`} to="/Register">Register</Link>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}