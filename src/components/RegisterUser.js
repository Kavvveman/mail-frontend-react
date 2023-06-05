import axios from '../api/axios';
import { useRef, useState, useEffect } from 'react';
//import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';



import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function RegisterUser() {

   // #region constants
   const userRef = useRef();
   const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const [firstname, setfirstname] = useState('');
    const [validfirstname, setvalidfirstname] = useState(false);
    const [firstnameuserFocus, setfirstnameuserFocus] = useState(false);

    const [surname, setsurname] = useState('');
    const [validsurname, setvalidsurname] = useState(false);
    const [surnameuserFocus, setsurnameFocus] = useState(false);

    const [email, setemail] = useState('');
    const [validemail, setvalidName] = useState(false);
    const [emailFocus, setemailFocus] = useState(false);

    const [cellnumber, setcellnumber] = useState('');
    const [validcellnumber, setvalidcellnumbere] = useState(false);
    const [cellnumberFocus, setcellnumberFocus] = useState(false);

    const [idNumber, setidNumber] = useState('');
    const [valididNumber, setvalididNumber] = useState(false);
    const [idNumberFocus, setidNumberFocus] = useState(false);

    // const [userimage, setuserimage] = useState('');
    // const [validuserImage, setvalidUserImage] = useState(false);
    // const [userImageFocus, setUserImageFocus] = useState(false);

    const [username, setusername] = useState('');
    const [validusername, setvalidusername] = useState(false);
    const [usernameFocus, setusernameFocus] = useState(false);

    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };

      function ShowPassword()
      {
        debugger
       var cbshowpass = document.getElementById("cbshowpass");
       var txtpassword = document.getElementsByClassName("txtpassword")[0];

        if (cbshowpass.checked){
            txtpassword.attr("type", "text");
        }
        else {
            txtpassword.attr("type", "passowrd");
        }
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();


        console.log(user, firstname, surname, email, cellnumber, idNumber, pwd);
            axios.post("http://localhost:8080/v2/user/create", {
              user: {
                user: user,
                firstname: firstname,
                surname: surname,
                email: email,
                cellNumber: cellnumber,
                idNumber: idNumber,
                password: pwd
              },
            })
            .then(function (response){console.log(response)} )
            .catch(function (error){console.log(error)} );

        
        // const v1 = USER_REGEX.test(user);
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        // try
        //  {
        //     const response = await axios.post(
        //         JSON.stringify({ 
        //             user, 
        //             pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );

        //     console.log(JSON.stringify(response?.data));
        //     console.log(JSON.stringify(response))
        //     setSuccess(true);
        //     setUser('');
        //     setPwd('');
        // } 
        // catch (err)
        //  {
        //     if (!err?.response)
        //     {
        //         setErrMsg('No Server Response');
        //     } 
        //     else if (err.response?.status === 409) 
        //     {
        //         setErrMsg('Username Taken');
        //     } 
        //     else 
        //     {
        //         setErrMsg('Registration Failed')
        //     }
        //     errRef.current.focus();
        // }
    }


    // Functions
    //Axios Communcation

    function RegisterUserFunc()
    {
       console.log(
        username, 
        firstname, 
        surname,
         email,
          cellnumber,
           idNumber, 
           pwd);
            axios.post("http://localhost:8080/v2/user/create", {
                username: username,
                firstname: firstname,
                surname: surname,
                email: email,
                cellNumber: cellnumber,
                idNumber: idNumber,
                password: pwd
            })
            .then
            (
                function (response)
                {
                    if(response.status === 200){
                      alert("User created successfully , Please sign in")
                      window.location.href = '/login';       
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




    //     console.log("test");
    //    axios.post("http://localhost:8080/v2/user/create", {
    //     config, 
    //         data:
    //         {
    //     user: user,
    //     firstname: firstname,
    //     surname: surname,
    //     email: email,
    //     cellNumber: cellnumber,
    //     idNumber: idNumber,
    //     userimage : userimage,
    //     password: pwd
    //  }
    //         })
    //     console.log
    //     (
    //         user,
    //         firstname,
    //         surname,
    //         email,
    //         cellnumber,
    //         idNumber,
    //         userimage,
    //         pwd
    //     );
    }



    return (
        <div className="App">

            <header >
            <title>Samanthas Booking Hotel</title>
            </header>

            <form 
                onSubmit={handleSubmit}
                >

                <h2> Register as a new User</h2>


                {/* Add Username field to database */}
                <label 
                htmlFor="username"
                className='reg-lbl'>
                            Username:
                 </label>
                        <input
                            type="text"
                            id="username"
                            className='reg-form-field'
                            autoComplete="on"
                            ref={userRef}
                            onChange={(e) => setusername(e.target.value)}
                            value={username}
                            required
                            defaultValue="Initial value"
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setusernameFocus(true)}
                            onBlur={() => setusernameFocus(false)}
                        />
                <br/>

                <label htmlFor="firstname"
                 className='reg-lbl'>
                            First Name:
                 </label>

                        <input
                            type="text"
                            id="firstname"
                            className='reg-form-field'
                            autoComplete="on"
                            onChange={(e) => setfirstname(e.target.value)}
                            value={firstname}
                            required
                            defaultValue="Initial value"
                            aria-describedby="uidnote"                 
                            onFocus={() => setfirstnameuserFocus(true)}
                            onBlur={() => setfirstnameuserFocus(false)}
                        />

                <br/>
                <label htmlFor="surname"
                 className='reg-lbl'>
                           Surname:
                 </label>
                        <input
                            type="text"
                            id="surname"
                            className='reg-form-field'
                            autoComplete="on"
                            onChange={(e) => setsurname(e.target.value)}
                            value={surname}
                            required
                            defaultValue="Initial value"
                            aria-describedby="ui-note"               
                            onFocus={() => setsurnameFocus(true)}
                            onBlur={() => setsurnameFocus(false)}
                        />
                <br/>
                <label htmlFor="email"
                 className='reg-lbl'>
                        Email:
                 </label>

                        <input
                            type="email"
                            id="email"
                            className='reg-form-field'
                            autoComplete="on"
                            onChange={(e) => setemail(e.target.value)}
                            value={email}
                            required
                            defaultValue="Initial value"     
                            onFocus={() => setemailFocus(true)}
                            onBlur={() => setemailFocus(false)}
                        />  
                <br/>

                <label htmlFor="cellnumber"
                  className='reg-lbl'>
                        Cell Phone Number:
                 </label>

                        <input
                            type="tel"
                            id="cellnumber"
                            className='reg-form-field'
                            onChange={(e) => setcellnumber(e.target.value)}
                            value={cellnumber}
                            required
                            aria-autocomplete='inline'    
                            defaultValue="Initial value"          
                            onFocus={() => setcellnumberFocus(true)}
                            onBlur={() => setcellnumberFocus(false)}
                        />  
                <br/>

                <label
                htmlFor="idNumber"
                className='reg-lbl'>
                 ID Number:
                 </label>

                        <input
                            type="number"
                            id="idNumber"
                            className='reg-form-field'
                            autoComplete="off"
                            onChange={(e) => setidNumber(e.target.value)}
                            required
                           value={idNumber}
                           aria-describedby="uidnote"   
                           defaultValue="Initial value"       
                            onFocus={() => setidNumberFocus(true)}
                            onBlur={() => setidNumberFocus(false)}
                        />  

                <br/>

                {/* <label
                htmlFor="userImage"
                className='reg-lbl'>
                 Users Image:
                 </label>

                        <input
                            type="file"
                            id="UserImage"
                            className='reg-form-field'
                            accept="image/"
                            autoComplete="off"                           
                            onChange={(e) => setuserimage(e.target.value)}
                            value={userimage}
                            // required
                           aria-describedby="uidnote"  
                           defaultValue="Initial value"          
                            onFocus={() => setUserImageFocus(true)}
                            onBlur={() => setUserImageFocus(false)}
                        />  
               */}

                <br/>
                <label
                 htmlFor="password"
                 className='reg-lbl'>
                            Password:
                 </label>
                        <input
                                        name="txtpassword"
                            type="password"
                            id="txtpassword"
                            className='reg-form-field'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            defaultValue="Initial value"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                    
                  <br/> 

                  <label 
                  className='reg-lbl' >
                        Show password
                  </label>
                  <div>
                    <input type="checkbox" id="cbshowpass" onClick={ShowPassword}/>

                    </div>


                    <br/>




             </form>


             <button value="Register"
                    type="input"
                    onClick={() =>{RegisterUserFunc()}}
                    className="btn-register" 
                    handleSubmit="">
                    
                           Register
                     </button>
                     <br/>
                     
             <p>Already registered?</p> 
            
             <a href="/login" >
                 <button  
                 className='btn-submit'
                 >Sign in
            </button>
            </a>
        </div>
    );
}

export default RegisterUser;
