import React from "react";
import { Outlet } from "react-router-dom";
const Technology = () => {
  return (
    <>
      <Outlet />
      <div>estoy en technology</div>
    </>
  );
};
export default Technology;
