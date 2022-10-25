import React from "react";
import { Outlet } from "react-router-dom";


import '../technology/technology.scss';

import Header from '../hearder/Header';
import Content from './Content';

const Technology = () => {
  return (
    <>
      <div>
        <Header />
        <Content />
      </div>
      <Outlet />
    </>
  )
};
export default Technology;
