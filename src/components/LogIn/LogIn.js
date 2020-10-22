import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
// import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import google from '../../image-source/Icon/google.png'
import './LogIn.css'
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)


const LogIn = () => {

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser , setNewUser] = useState(false)
    // const [user , setUser] = useState({
    //     isSignedIn : false,
    //     name : '',
    //     email : '' ,
    //     photo : '',
    //     error: '',
    //     success: false
    // });

    const [loggedInUser , setLoggedInUser] = useContext(UserContext)

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = (e) => {
        firebase.auth().signInWithPopup(provider)
        .then(res=> {

            var {displayName , photoURL , email} = res.user;
            const newUserInfo = {...loggedInUser};
            newUserInfo.name = displayName
            newUserInfo.email =email
            newUserInfo.error = "";
            newUserInfo.isSignedIn = true;
            newUserInfo.success= true;

            setLoggedInUser(newUserInfo);
            history.replace(from);
            // ...
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;

            console.log(email , errorCode , errorMessage)

          });

        e.preventDefault();

    }

    const handleSignOut = (e) => {
        firebase.auth().signOut()
        .then(function() {
            // Sign-out successful.
            const signedOutUser = {
                isSignedIn : false,
                name : '',
                email : '' ,
                photo : '',
            }
            // setUser(signedOutUser);
            setLoggedInUser(signedOutUser);
            
          })
          .catch(function(error) {
            // An error happened.
          });

        e.preventDefault();

          
        }

    const handleSubmit = (e) => {

        if (newUser) {
            const formEmail = document.getElementById('formEmail').value
            const formPass = document.getElementById('formPass').value
            const formName = document.getElementById('formName').value
    
            firebase.auth().createUserWithEmailAndPassword(formEmail, formPass)
            .then( res=> {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = "";
                newUserInfo.success= true;
                updateUserName(formName);
                setLoggedInUser(newUserInfo)
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // const newUserInfo = {...user};
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = errorMessage;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo)
                
    
                // ...
              });
        }

        if(!newUser) {
            const formEmail = document.getElementById('formEmail').value
            const formPass = document.getElementById('formPass').value

            firebase.auth().signInWithEmailAndPassword(formEmail, formPass)
            .then(res=>{
                const newUserInfo = {...loggedInUser};
                newUserInfo.name = res.user.displayName
                newUserInfo.email = res.user.email
                newUserInfo.error = "";
                newUserInfo.success= true;
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = errorMessage;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo)
              });
        }
        
        e.preventDefault();
        

    }

    const updateUserName = (e) => {
        var user = firebase.auth().currentUser;
        const formName = document.getElementById('formName').value;
            user.updateProfile({
            displayName: formName,
            })
            .then(function() {
            // Update successful.
            console.log('updated successfully')
            
            
            })
            .catch(function(error) {
            // An error happened.
            console.log('updated falied')

            });

        e.preventDefault();

    }

    console.log(loggedInUser)
    return (
        <div>
            <Header></Header>
            
            
            <div className="form-section">
                <h1 id="">
                {
                !newUser 
                    ? "Log In"
                    : "Create an account "
                }
                </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>

                    {
                        newUser &&
                        <div>
                    <Form.Label>Create a Username</Form.Label>
                    <Form.Control type="text" id="formName" placeholder="Type Your Name Here" />
                    </div>
                    
                    }
                    <Form.Label>
                        {
                            !newUser 
                            ? "Enter Your Email Address"
                            : "Your E-mail address "
                        }
                    </Form.Label>
                    <Form.Control type="email" name="email" placeholder="E-mail address"
                     id="formEmail" required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                    {
                        !newUser 
                        ? "Enter Your Password"
                        : "Create a strong password"
                    }
                    </Form.Label>
                    <Form.Control type="password" name="password" placeholder={
                        !newUser 
                        ? "Password"
                        : "Minimum 6 charecter"
                    } id="formPass" required/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                   {
                        !newUser 
                        ? <p id="slogan">I Don't have any account</p>
                        : <p id="slogan">Already have an account</p>
                       }
                    <Form.Check type="checkbox"  name="newUser" onChange={()=>setNewUser(!newUser) } label={
                        !newUser 
                        ? "Create a new Account !!"
                        : "Log In Now !!"
                    } />
                </Form.Group>
                <Button variant="outline-success" className="btn-block" type="submit">
                    { newUser ? "Sign Up" : "Sign In" }
                </Button>
                
            </Form>

            {
                loggedInUser.success 
                ? <p style={{color : "green"}}> Successfully {newUser ? 'Created' : "Logged In"}</p>
                :<p style={{color : "red"}}> {loggedInUser.error}</p>
                
            }
            </div>
            
          <div className="signInWithPopUp">
              <img src={google} alt="" srcset=""/>
          {   
            loggedInUser.isSignedIn 
            ?<Button variant="outline-warning" onClick={handleSignOut}> 
            
            Sign Out From Google 
            </Button>
            :<Button variant="outline-warning"  onClick={handleSignIn}>Sign in With Google </Button>
        }
          </div>  
        

            
        </div>
    );
};

export default LogIn;