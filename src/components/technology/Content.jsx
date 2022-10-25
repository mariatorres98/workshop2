import React, { useState } from 'react'

import vehicule from '../../asset/image-launch-vehicle-portrait.jpg'
import port from '../../asset/image-spaceport-portrait.jpg'
import capsule from '../../asset/image-space-capsule-portrait.jpg'

import { Link } from 'react-router-dom';

const fondo = 'asset/image-space-capsule-portrait.jpg'

function Content() {

    const [spacePage, setSpacePage] = useState(0);
    console.log(spacePage);

    const listContent = [{ name: 'LAUNCH VEHICLE', image: vehicule, inf: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", link: '/technology/Launch' }, { name: 'SPACEPORT', image: port, inf: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.", link: '/technology/SpacePort' }, { name: 'SPACE CAPSULE', image: capsule, inf: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.", link: '/technology/Capsule' }];

    return (
        <>
            <div>
                <div className="tech__bg">
                    <div className="container__img"></div>
                </div>

                <div className="tech">

                    <div className="tech__top">
                        <figure>
                            <img src={listContent[spacePage].image} alt="" />
                        </figure>

                    </div>

                    <div className="tech__bottom">

                        <h2><span aria-hidden="true">03 </span>space launch 101</h2>

                        <ul className="page__links">
                            {
                                listContent.map((item, index) => (
                                    <li key={index}><Link className="dot" to={item.link} numpage={index} onClick={() => { setSpacePage(index) }}>{index+1}</Link></li>
                                ))
                            }
                        </ul>

                        <div className="text__info">
                            <h1><span>The terminology...</span>{listContent[spacePage].name}</h1>

                            <p>{listContent[spacePage].inf}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Content
