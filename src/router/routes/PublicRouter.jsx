import React from "react";
import PublicAppBar from "../../components/PublicAppBar";
import { Outlet } from "react-router-dom";
import Footer from "../../page/Footer";




const PublicRouter = () => {
  return (
    <>
     <PublicAppBar /> 
    
      <Outlet/>
      <Footer/>
    </>
  );
};

export default PublicRouter;
