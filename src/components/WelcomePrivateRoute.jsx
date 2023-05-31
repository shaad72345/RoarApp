import React from 'react'
import { useContext } from 'react'
import { myContext } from '../CustomProviderComp'

import AllRoutes from '../AllRoutes';
import AllpostsComp from './allpostsComp';
import WelcomeComp from './WelcomeComp';
import LoginComp from './loginComp';
import { useNavigate } from 'react-router-dom';

function WelcomePrivateRoute({children}) {
    const navi = useNavigate();
    const {isWelcome} =  useContext(myContext);
    if(!isWelcome){
        return(
            <WelcomeComp/>
        )
    }
    else{
        return(
          <AllRoutes/>
        )
    }
 
}

export default WelcomePrivateRoute