import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '../hearder/Header';
import Content from './Content';

import '../crew/crew.scss';

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