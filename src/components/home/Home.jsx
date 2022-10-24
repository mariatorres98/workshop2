import React from "react";
import '../home/home.scss';
import logo from '../../asset/logo.svg'


import { useNavigate, Link } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <body class="loading">
        <section id="header">
          <div class="header">
            <div class="nav-bar">
              <div class="brand">
                <a href="./index.html"><img src={logo} alt="Space tourism logo" /></a>
              </div>

              <div class="nav-line"></div>

              <div class="nav-list">
                <div class="hamburger">
                  <div class="bar"></div>
                </div>
                <ul id="nav__list">
                  <li><a class="navbar__link active__link" href="./index.html"><span>00</span> home</a></li>
                  <li><a class="navbar__link" href="./destination.html"><span>01</span> destination</a></li>
                  <li><a class="navbar__link" href="./crew.html"><span>02</span> crew</a></li>
                  <li><a class="navbar__link" href="./technology.html"> <span>03</span> technology</a></li>
                </ul>
              </div>
            </div>
          </div>

        </section>
        <main>

          <div class="hero-container">
            <div class="hero-img"> </div>

            <div class="space">
              <div class="space-desc">
                <span>so, you want to travel to</span>
                <h1>space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                  hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                  this
                  world experience!
                </p>
              </div>

              <a class="large-btn" href="">explore</a>
            </div>

          </div>

        </main>

      </body>
    </>
  );
};

export default Home;
