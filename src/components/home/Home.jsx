import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";


import {useNavigate, Link} from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const compra =()=>{
    navigate('/compra');
  }
  return (
    <>
      <div className="">

      </div>
    </>
  );
};

export default Home;
