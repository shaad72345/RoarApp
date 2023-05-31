import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomeComp from "./components/WelcomeComp";
import LoginComp from "./components/loginComp";
import SignupComp from "./components/signupComp";
import MyPostsComp from "./components/myPostsComp";
import AllpostsComp from "./components/allpostsComp";
import NavComp from "./components/NavComp";

import { useContext } from "react";
import { myContext } from "./CustomProviderComp";
function AllRoutes() {
   const {isLogin} = useContext(myContext);
  return (
    <>
   {
    !isLogin? <WelcomeComp/> :<NavComp/>
   }
  
   <Routes>
      <Route path="/login" element={<LoginComp/>}/>
      <Route path="/signup" element={<SignupComp/>}/>
      <Route path="/myposts" element={<MyPostsComp/>}/>
      <Route path="/allposts" element={<AllpostsComp/>}/>
    </Routes>
   
    
    
    </>
  );
}

export default AllRoutes;