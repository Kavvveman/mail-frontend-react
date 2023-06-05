import './App.css';
import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';
import React from 'react'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from '@mui/material';
//onst LOGIN_URL = '/src/context/AuthProvider.js';


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
        // try {
        //     const response = await axios.post("http://localhost:8080/v2/user/login", {
        //         data:{
        //             "user": user,
        //             "password": pwd,
        //         }
        //     })
        //     .then((res) => {
        //         localStorage.setItem("token", res.data.token);
        //         //navigate("/dashboard");
        //     })
        //     console.log(JSON.stringify(response?.data));

        //     console.log(JSON.stringify(response))

        //     setUser('');

        //     setPwd('');

        //     setSuccess(true);
        // }
        // catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if
        //         (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     }
        //     else {
        //         setErrMsg('Login Failed');
        //     }

        //    // errRef.current.focus();
        // }
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

    function ShowPassword()
    {
       debugger
     var cbshowpass = document.getElementById("cbshowpass");
     var txtpassword = document.getElementsByClassName("txtpassword")[0];

      if (cbshowpass.checked){
          txtpassword.type="text"("type", "text");
      }
      else {
          txtpassword.type="password"("type", "passowrd");
      }
  }


//   sendAllData(data) {
//     return axios.post(API_URL + "receiveData",  JSON.stringify(data), 
//         { headers: { "Content-Type": "application/json; charset=UTF-8" },
//         }).then(response=> console.log("repsonse", response.status)) // is 201


//   sendAllData(data) {
//     return axios
//       .post(API_URL + 'receiveData', JSON.stringify(data), {
//         headers: { 'Content-Type': 'application/json; charset=UTF-8' },
//         params: { userId: 2 },
//       })
//       .then((response) => console.log('response', response.status));
//   } // is 201



function LoginUserFunc(user, pwd) {
    console.log(user, pwd);
    axios.post("http://localhost:8080/v2/user/login", {
        user: user,
        password: pwd
        //Check if user exists via Email or ID?
        //Else prompt existing error
    })
    .then
    (
        function (response)
        {
            if(response.status === 200){
                alert("User Successfuly Logged in")
                window.location.href = '/home';       
            }
            console.log(response)
        } 
    )
    .catch
    (
        function (error)
        {
            console.log(error)
        } 
    );
}

    // function LoginUserFunc(user, pwd) {
    //     //Check if user is existing, Spring call?
    //     console.log(user, pwd);
    //     axios.post(
    //         "http://localhost:8080/v2/user/login" ,
    //         null,
    //         {params:{
    //             //UserID
    //             user,
    //             pwd
    //         }}
    //     )
    //     .then
    //     (
    //         function (response)
    //         {
    //             if(response.status === 200){
    //                 alert("User Successfuly Logged in")
    //                 window.location.href = '/home';       
    //             }
    //             console.log(response)
    //         } 
    //     )
    //     .catch
    //     (
    //         function (error)
    //         {
    //             console.log(error)
    //         } 
    //     );
    // }
    return (
        <div className="App">
            <header >
                <title>Samanthas Booking Hotel</title>
            </ header>
            
            <div className='login-container'>

            <form id="login-form"
                onSubmit={handleSubmit}
                method='get'
                >
                
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
                    className="login-form-field"
                    placeholder='Enter Username'
                    ref={userRef}
                    autoComplete="off"
                    required
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                />

                <label htmlFor="password"
                 className='login-lbl' >
                    <b>Password:</b>
                </label>
                <input
                name="txtpassword"
                    type="password"
                    id="txtpassword"
                    className="login-form-field"
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder='Enter Password'
                    value={pwd}
                    required
                />
                
                  <label  >
                        Show password
                  </label>
                  <div>
                    <input type="checkbox" id="cbshowpass" onClick={ShowPassword}/>

                    </div>

                <input
                    type="submit"
                    value="Sign In"
                    onClick={() =>LoginUserFunc(user, pwd)}
                    className='btn-submit'
                    />
            </form>



            {/* Link to reigster Page */}
            <h6>Need an Account?</h6>
            
            <a href="/register">
                <button 
                className="btn-register">
                Register
                </button>
            </a>
            </div>

        </div>
    );
}

export default LoginUser;
