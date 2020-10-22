import React from 'react';
import './LandingPage.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import hotelInfo from './fakeData';
import logo from '../../image-source/Icon/Logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const LandingPage = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [hotels , setHotels] = useState(hotelInfo)
    

    console.log(loggedInUser)
    return (
        <div className="container">
            <header className="">

            <Navbar expand="lg">
                <Link to="/home">
                <Navbar.Brand>
                <div ><img src={logo}  alt="Travel-guru"/></div>
                </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Link to="/home">
                    <Nav.Link href="#link" className="spacing-left"><h1>
                    Go to home </h1></Nav.Link>
                    </Link>
                    
                    <Nav
                     className="spacing-left">
                        User Name - {loggedInUser.name} <br/>
                        E - mail - {loggedInUser.email}
                    </Nav>
                    
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>




            </header>

            <section className="welcome-section">
                <h2 id="welcome">
                    Welcome , {loggedInUser.name}
                    
                </h2>
                <h4>
                    You want to stay in <span className="place">
                        {loggedInUser.placeTo}
                    </span>

                </h4>

    <p>From -  {loggedInUser.timeFrom} <br/> 
    To - {loggedInUser.timeTo}</p>


      <p>We have Found 3 spacial Hotel For You </p>          

            </section>
            <div className="hotel">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
                    <div className="col">
                        {
                            hotels.map(x=>(
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 spacing">
                                        <div className="col innnerMap d-flex align-items-center">
                                            <div>
                                                <img src={x.image} alt="" srcset=""/>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <h6 id="description">
                                                {x.description}
                                            </h6>
                                            <p id="facality">
                                                {x.facality}
                                            </p>
                                            <p id="compatablity">
                                                {x.compatablity}
                                            </p>
                                            <h6 id="price">
                                                <span id="bigPrice">${x.price}</span>
                                                /night
                                            </h6>
                                        </div>
                                    </div>
                            ))
                        }

                    </div>

                    <div className="col map d-flex align-items-center">
                        <h2 style={{color:"red"}}>
                        Opps !!! something went wrong when integrating map 😞 😞
                        </h2>
                    </div>

                </div>

            </div>
        <footer> <hr/>
        <center>
            <p>Thanks For Visiting My Project</p>
            <p>Special Thanks From Me</p>
            <p>Contact me if you want - <a href="https://www.facebook.com/mohammadrafiq.shuvo.9">Mohammad Shuvo</a></p>

        </center>
        </footer>
        </div>
    );
};

export default LandingPage;