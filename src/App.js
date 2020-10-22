import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Homepage from './components/Homepage/Homepage';
import LogIn from './components/LogIn/LogIn';
import { createContext } from 'react';
import Booking from './components/Booking/Booking';
import LandingPage from './components/LandingPage/LandingPage';
import Error from './components/Error/Error';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

export const UserContext = createContext()







function App() {

  const [loggedInUser , setLoggedInUser ] = useState({
    name : "",
    placeFrom : "",
    placeTo : "",
    email : "",
    photo : '',
    id : '',
    timeFrom : '',
    timeTo : '',
    longDescription : '',
    isSignedIn : false ,
    photo : '',
    error : '',
    success : false ,

    })

  
  return (
    
    <UserContext.Provider value = {[loggedInUser , setLoggedInUser]}>
      <Router>
        <Switch>
        <Route exact path="/">
              <Homepage></Homepage>
          </Route>
          <Route path="/home">
              <Homepage></Homepage>
          </Route>
          <Route path="/booking">
              <Booking></Booking>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/logIn">
              <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/confirm">
          <LandingPage></LandingPage>
          </PrivateRoute>
          <Route exact path="*">
              <Error></Error>
          </Route>
        </Switch>
      </Router>

      
      
      

      


      

    </UserContext.Provider>

  
    
  );
}

export default App;
