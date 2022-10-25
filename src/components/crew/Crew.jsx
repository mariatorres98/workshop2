import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../hearder/Header';

import '../crew/crew.scss';
import Content from './Content';


const Crew = () => {
  return (
    <>
      <div>
        <Header />
        <Content />
      </div>
      <Outlet />
    </>

  )
}
export default Crew;