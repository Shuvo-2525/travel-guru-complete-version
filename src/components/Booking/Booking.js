import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Booking.css';
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from 'react-router-dom';


const Booking = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext)

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleSubmit(e) {
        const origin = document.getElementById('origin').value;
        const timeFrom = document.getElementById('timeFrom').value
        const timeTo = document.getElementById('timeTo').value
        
        if (origin === "") {
            alert("Please Enter Your Origin First !!!");
            e.preventDefault();
            
        }

        if (timeFrom === timeTo) {
            alert("We don't have 1 day package !! Please Set your Time properly !!!");
            e.preventDefault();
        }

        const placeInformation = {...loggedInUser}
        placeInformation.timeFrom = timeFrom;
        placeInformation.timeTo = timeTo;
        placeInformation.placeFrom = origin;
        setLoggedInUser(placeInformation)

        console.log(loggedInUser)
        // e.preventDefault();

        
    }
    



    return (
        <div>
            <Header></Header>
            <div id="bg">
            <div id="defaultBg"></div>
            <div id="card" >
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
            <div class="col">
            <div id="name">
    <h1 id = "head">{loggedInUser.placeTo}</h1>
    <div className="longDescription">
    <p> {loggedInUser.longDescription}</p>
            </div>
            </div>
            
            </div>
            <div class="col rightside">
                <div className="innerRightside">
                    <Form>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Origin</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Set Your Origin" id="origin"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Destination</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder={loggedInUser.placeTo} disabled id="destination"/>
                        
                    </div>

                    <div class="row">
                        <div className="col">
                        <label for="formGroupExampleInput">From</label>
                        <br/><DatePicker selected={startDate} onChange={date => setStartDate(date)}
                        dateFormat='dd/MM/yyyy' 
                        minDate ={new Date()}
                        id="timeFrom"/>
        
                        </div>
                        <div className="col">
                        <label for="formGroupExampleInput">To</label>
                        <br/><DatePicker selected={endDate} onChange={date => setEndDate(date)} 
                        dateFormat='dd/MM/yyyy' 
                        minDate={startDate}
                        id="timeTo"/>
                        </div>
                    </div>
                    <br/>
                    <center>
                    <Link to="/confirm">
                    <Button type="button" onClick={handleSubmit} className="btn btn-warning btn-block">
                        Confirm Booking
                    </Button>
                    </Link>
                    </center>
                    </Form>
                </div>
            </div>
            </div>

            </div>


            </div>
    
        </div>
    );
};

export default Booking;