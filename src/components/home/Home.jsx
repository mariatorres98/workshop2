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
      <button type="submit" className="s" onClick={compra}>
            {" "}
            <p className="tituloVuelos">Buscar vuelos </p>{" "}
          </button>
      </div>
    </>
  );
};

export default Home;
