import React from "react";
import '../home/home.scss';


import { useNavigate} from 'react-router-dom'
import Header from "../hearder/Header";


const Home = () => {

  const navigate = useNavigate();
  return (
    <>
      <div className="loading">
        <Header />
        <div>

          <div className="hero-container">
            <div className="hero-img"> </div>

            <div className="space">
              <div className="space-desc">
                <span>so, you want to travel to</span>
                <h1>space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                  hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                  this
                  world experience!
                </p>
              </div>

              <a className="large-btn" href="">explore</a>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Home;
