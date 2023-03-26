import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [show, setShow] = useState(false)
    const handleNav = () => {
        setShow(!show)
    }
    return (
        <>
            <header>
                {/* <!--navbar--> */}
                <nav>
                    <div className="logo-box">

                        {/* <!-- logo --> */}
                        <Link style={{ textDecoration: 'none' }} to={'/'}><h1>Maria</h1></Link>
                    </div>

                    <ul id="myDropdown" className={show ? "list-nav show" : "list-nav"}>
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/work">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Me</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                    <button style={{ cursor: 'pointer' }} onClick={handleNav} className="dropbtn hamburger" >
                        <i className="fas fa-bars"></i>
                    </button>
                </nav>
            </header></>
    )
}

export default Header