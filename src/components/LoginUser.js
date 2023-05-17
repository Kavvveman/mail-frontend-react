
import './App.css';
import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';
import React from 'react'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
c//onst LOGIN_URL = '/src/context/AuthProvider.js';


function LoginUser() {

      // #region constants

    const userRef = useRef();

    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                {LoginUser},
                "/src/components/LoginUser.js",
                JSON.stringify({ 
                     user,
                     pwd 
                    }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data));

            console.log(JSON.stringify(response));

           // const accessToken = response?.data?.accessToken;

           //  const roles = response?.data?.roles;

           // setAuth({ user, pwd, roles, accessToken });

            setUser('');

            setPwd('');

             setSuccess(true);
            
        } 
        catch (err) {
            if (!err?.response) 
            {
                setErrMsg('No Server Response');
            } else if 
            (err.response?.status === 400) 
            {
                setErrMsg('Missing Username or Password');
            }  
            else {
                setErrMsg('Login Failed');
            }

            //errRef.current.focus();
        }
    }
    // #endregion

    // #region states



    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg(''); 
    }, [user, pwd])

    // #endregion


    
    // Functions

    function LoginUserFunc(user, pwd)
    {
            //TextController
            console.log(user + pwd);
    }



    return (
        <div className="App">
            <header >
                <title>Samanthas Booking Hotel</title>
            </header>
                <form id="login-form" 
                onSubmit={handleSubmit}
                method='Post'>

        <h3 id="login-header">
            Welcome to Samanthas Booking Hotel
        </h3>
       <h5>Please sign in, or Register a new account</h5>

                <label htmlFor="username"
                 className='login-lbl'>
                    <b>Username:</b>
                    </label>
                        <input
                            type="text"
                            id="username"
                            class="login-form-field"
                            placeholder='Enter Username'
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                <br/>
                <label htmlFor="password" className='login-lbl' >
                    <b>Password:</b>
                    </label>
                        <input
                            type="password"
                            id="password"
                            class="login-form-field"
                            onChange={(e) => setPwd(e.target.value)}
                            placeholder='Enter Password'
                            value={pwd}
                            required
                        />

            <div id="login-error-msg-holder">
             <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
            </div>

                <input type="submit" value="Submit" onClick={LoginUserFunc(user, pwd)} id="login-form-submit" />
                </form>

                {/* Link to reigster Page */}
                <h5>Need an Account?</h5>

                <a href="/register">
                  <button id="login-form-submit" >Register</button>
                 </a>

            
        </div>
    );
}

export default LoginUser;
