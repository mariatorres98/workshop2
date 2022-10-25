import React, { useState } from 'react'

import firts from '../../asset/image-douglas-hurley.png'
import second from '../../asset/image-mark-shuttleworth.png'
import thirth from '../../asset/image-victor-glover.png'
import fourth from '../../asset/image-anousheh-ansari.png'
import { Link } from 'react-router-dom'

const Content = () => {

    const [page, setPage] = useState(0);
    console.log(page)

    const listContent = [{ page: 'COMMANDER', name: 'DOUGLAS HURLEY', link: '/crew/Commander', inf: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.', image: firts }, { page: 'MISSION SPECIALIST', name: 'MARK SHUTTLEWORTH', link: '/crew/Mission', inf: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.', image: second }, { page: 'PILOT', name: 'VICTOR GLOVER', link: '/crew/Pilot', inf: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.', image: thirth }, { page: 'FLIGHT ENGINEER', name: 'ANOUSHEH ANSARI', link: '/crew/Flight', inf: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.', image: fourth }];

    return (
        <>
            <div>
                <div className="crew__bg">
                    <div className="container__img"></div>
                </div>

                <div className="crew">
                    <h2><span>02 </span>meet the crew</h2>
                    <div className="crew__top">
                        <div className="crew__img">
                            <img src={listContent[page].image} alt="NASA astronaut" />
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="crew__bottom">
                        <ul className="page__links">
                            {
                                listContent.map((item, index) => (
                                    <li key={index} className="num"><Link className="dot" to={item.link} numpage={index} onClick={() => { setPage(index) }}></Link></li>
                                ))
                            }
                        </ul>
                        <div className="text__info">
                            <h1><span aria-hidden="true">{listContent[page].page}</span>{listContent[page].name}</h1>
                            <p>{listContent[page].inf}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content