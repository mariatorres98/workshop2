import React from 'react'
import { Outlet } from 'react-router-dom';

import '../destination/destination.scss';

import Header from '../hearder/Header';
import Content from './Content';

const Destination = () => {
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
export default Destination;