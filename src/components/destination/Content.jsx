import React, { useState } from 'react'

import moonImg from '../../asset/image-moon.png'
import marsImg from '../../asset/image-mars.png'
import europaImg from '../../asset/image-europa.png'
import titanImg from '../../asset/image-titan.png'

import { Link } from 'react-router-dom';

const Content = () => {

    const [destinationPage, setDestinationPage] = useState(0);
    console.log(destinationPage)

    const listContent = [{ name: 'MOON', image: moonImg, inf: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.', distance: '384,400', time: '3 DAYS', link: '/destination/Moon' }, { name: 'MARS', image: marsImg, inf: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!', distance: '225 MIL.', time: '9 MONTHS', link: '/destination/Mars' }, { name: 'EUROPA', image: europaImg, inf: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.', distance: '628 MIL.', time: '3 YEARS', link: '/destination/Europa' }, { name: 'TITAN', image: titanImg, inf: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.', distance: '1.6 BIL.', time: '7 YEARS', link: '/destination/Titan' },];

    return (
        <>
            <section>
                <div className="destination__bg">
                    <div className="container__img"></div>

                    <div className="destination">
                        <div className="destination__top">
                            <h4><span aria-hidden="true">01</span> pick your destination</h4>
                            <div className="destination__place">
                                <img src={listContent[destinationPage].image} alt="" />
                            </div>
                        </div>

                        <div className="destination__bottom">
                            <ul className="page__links">
                                {
                                    listContent.map((item, index) => (
                                        <li key={index}><Link className="navbar__link active__link" to={item.link} numpage={index} onClick={() => { setDestinationPage(index) }}>{item.name}</Link></li>
                                    ))
                                }
                            </ul>

                            <div className="text__info">
                                <h1>{listContent[destinationPage].name}</h1>
                                <p>{listContent[destinationPage].inf}</p>
                                <div className="line"></div>

                                <div className="travel-info">
                                    <h2><span>avg distance</span>{listContent[destinationPage].distance} km</h2>
                                    <h3><span>est. travel time</span>{listContent[destinationPage].time}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content