
import './App.css';
import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';
import React from 'react'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'

const LOGIN_URL = '/src/context/AuthProvider.js';

function LoginUser() {

    // Used for effects on frontend
    //const userRef = useRef();

    // const errRef = useRef();

    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     //userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg(''); 
    // }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ 
                    // user,
                    //  pwd 
                    }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data));

            //console.log(JSON.stringify(response));

           // const accessToken = response?.data?.accessToken;

          //  const roles = response?.data?.roles;

           // setAuth({ user, pwd, roles, accessToken });

            // setUser('');

            // setPwd('');

            // setSuccess(true);
            
        } catch (err) {
            if (!err?.response) 
            {
                //setErrMsg('No Server Response');
            } else if 
            (err.response?.status === 400) 
            {
                //setErrMsg('Missing Username or Password');
            }  
            else {
               // setErrMsg('Login Failed');
            }

           // errRef.current.focus();
        }
    }


    // Make a request for a user with a given ID
    //Login User
    //If userID and Password match

    //API Call O match Here with user Credidentials

    return (
        <div className="App">
            <header >
                <p>

               <code>src/App.js</code>

                </p>
                <form onSubmit={handleSubmit}>
                <h2>Login here</h2>

                <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                           //ref={userRef}
                            autoComplete="off"
                            //onChange={(e) => setUser(e.target.value)}
                            //value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                          //  onChange={(e) => setPwd(e.target.value)}
                           // value={pwd}
                            required
                        />


                <button onClick="btnSignIn"> Sign In</button>
                </form>

                {/* Link to reigster Page */}

                <p>
                        Need an Account?<br />
                        <span className="line">
                            <a href="src/RegisterUser.js">Sign Up</a>
                        </span>
                    </p>

            </header>
        </div>
    );
}

export default LoginUser;
