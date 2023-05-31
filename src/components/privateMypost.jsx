import React from 'react'
import { useContext } from 'react'
import { myContext } from '../CustomProviderComp'
import MyPostsComp from './myPostsComp';
import { useNavigate } from 'react-router-dom';
import LoginComp from './loginComp';
import { Navigate } from 'react-router-dom';
function PrivateMypost({children}) {
    const {isLogin}=  useContext(myContext);
  const navi =   useNavigate();
    
    if(isLogin){
  return (
  children
  )
    }
    else{
       return   <Navigate to="/login"/>
    }
}

export default PrivateMypost