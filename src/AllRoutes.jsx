import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomeComp from "./components/WelcomeComp";
import LoginComp from "./components/loginComp";
import SignupComp from "./components/signupComp";
import MyPostsComp from "./components/myPostsComp";
import AllpostsComp from "./components/allpostsComp";
import NavComp from "./components/NavComp";
import SignOutComp from "./SignOutComp";
import { useContext } from "react";
import { myContext } from "./CustomProviderComp";
import PrivateMypost from "./components/privateMypost";
import CreatePost from "./components/CreatePost";
import DeleteComp from "./components/DeleteComp";
function AllRoutes() {
   const {isLogin} = useContext(myContext);
  return (
    <>
   
   <NavComp/>
   
   
   <Routes>
      <Route path="/signup" element={<SignupComp/>}/>
      <Route path="/signout" element={<SignOutComp/>}/>
      <Route path="/login" element={<LoginComp/>}/>
      <Route path="/signup" element={<SignupComp/>}/>
      <Route path="/delete/:id" element={<DeleteComp/>}/>

      <Route path="/myposts" element={<PrivateMypost><MyPostsComp/></PrivateMypost> }/>
      <Route path="/allposts" element={<PrivateMypost> <AllpostsComp/> </PrivateMypost> }/>
      <Route path="/createpost" element={<PrivateMypost> <CreatePost/> </PrivateMypost> }/>

    </Routes>
   
    
    
    </>
  );
}

export default AllRoutes;
