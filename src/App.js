import logo from './logo.svg';
import './App.css';
import NavComp from './components/NavComp';
import WelcomeComp from './components/WelcomeComp';
import AllRoutes from './AllRoutes';
import LoginComp from './components/loginComp';
import SignOutComp from './SignOutComp';
import { myContext } from './CustomProviderComp';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupComp from './components/signupComp';
import WelcomePrivateRoute from './components/WelcomePrivateRoute';
function App() {
             const {isWelcome}    = useContext(myContext)
  return (

    <div className="App">
      {!isWelcome?<WelcomeComp/>:<AllRoutes/>}
    </div>
  );
}

export default App;
