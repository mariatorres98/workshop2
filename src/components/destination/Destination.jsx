import React from 'react'
import { Outlet } from 'react-router-dom';
import '../destination/destination.scss'

import moonImg from '../../asset/image-moon.png'
import marsImg from '../../asset/image-mars.png'
import europaImg from '../../asset/image-europa.png'
import titanImg from '../../asset/image-titan.png'

// const destinationContent = [{ name: 'MOON', image: moonImg, inf: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.', distance: '384,400', time: '3 DAYS' }, { name: 'MARS', image: marsImg, inf: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!', distance: '225 MIL', time: '9 MONTHS' }, { name: 'EUROPA', image: europaImg, inf: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.', distance: '628 MIL.', time: '3 YEARS' }, { name: 'TITAN', image: titanImg, inf: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.', distance: '1.6 BIL.', time: '7 YEARS' },]


const Destination = () => {
  const destinationContent = [{ name: 'MOON', image: moonImg, inf: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.', distance: '384,400', time: '3 DAYS' }]
  return (
    <>
      <div>
        {
          destinationContent.map((item, index) => (
            <>
              <figure key={index}>
                <img src={item.image} alt="" />
              </figure>
              <p key={index}> {item.inf}</p>
            </>
          ))
        }
      </div>

      <Outlet />

    </>

  )
}
export default Destination;