import React from 'react';
import '../hearder/header.scss';


import { Link } from 'react-router-dom'

import logo from '../../asset/logo.svg'


const Header = () => {
    const linkNavbar = [{ name: 'HOME', link: '/', number: '00' }, { name: 'DESTINATION', link: '/destination', number: '01' }, { name: 'CREW', link: '/crew', number: '02' }, { name: 'TECHNOLOGY', link: '/technology', number: '03' },]
    return (
        <>
            <section className="headerSec">
                <div className="header">
                    <div className="nav-bar">
                        <div className="brand">
                            <Link to={linkNavbar[0].link} ><img src={logo} alt="Space tourism logo" /></Link>
                        </div>

                        <div className="nav-line"></div>

                        <div className="nav-list">
                            <div className="hamburger">
                                <div className="bar"></div>
                            </div>
                            <ul className="nav__list">
                                {
                                    linkNavbar.map((item, index) => (
                                        <li key={index}><Link to={item.link} className="navbar__link active__link"><span>{item.number}</span>{item.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
