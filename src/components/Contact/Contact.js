import React from 'react';
import "./Contact.css";
import icon from '../../image-source/Icon/mohammadshuvo.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="">

        <div className='contactPage'>
            
            <h1 id="contactSlogan">Contact With Me</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 align-items-center">
                <div className="col leftCard-img" >
                    <img src={icon} className="" alt="" srcset=""/>
                </div>
                <div className="col rightCard">
                    <h3 className="headings"> Name :  <span id='myName'>Mohammad Rafiq Shuvo</span></h3>
                    <p style={{fontFamily:'verdana'}} className="headings"> Skill : <span id="skills">HTML5 , CSS3 , Bootstrap ,  Javascript , ReactJS , Firebase </span></p>
                    <h3 style={{textAlign:'center'}} id="connect">Go Through the Buttons</h3>
                    <Button href='https://www.facebook.com/mohammadrafiq.shuvo.9/' className="btn-block">
                        Facebook
                    </Button>
                    <Button href='https://www.messenger.com/t/mohammadrafiq.shuvo.9' className="btn-block">
                        Messenger
                    </Button>
                    <Button href='https://www.fiverr.com/shuvomohammad' className="btn-block">
                        Place Order on Fiverr
                    </Button>
                    <Button href='https://www.linkedin.com/in/tareq-mohammad-rafiq-shuvo/' className="btn-block">
                        Job inquiry LinkedIn
                    </Button>
                    <Button href="mailto:mohammadsvo1423@gmail.com?subject=Contacting From TravelGuru" className="btn-block">
                        Mail me on Gmail
                    </Button>
                    <br/>
                    <center>
            <Link to="/home">
            <Button variant="outline-info" className="btn-block" >
                Go To Home
            </Button>
            </Link>
            </center>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Contact;