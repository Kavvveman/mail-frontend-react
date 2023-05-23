import axios from '../api/axios';
import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';

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

    // #endregion

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(
                JSON.stringify({ 
                    user, 
                    pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response))
            setSuccess(true);
            setUser('');
            setPwd('');
        } 
        catch (err)
         {
            if (!err?.response)
            {
                setErrMsg('No Server Response');
            } 
            else if (err.response?.status === 409) 
            {
                setErrMsg('Username Taken');
            } 
            else 
            {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }


    // Functions
    //Axios Communcation

    function RegisterUserFunc(
        )
       {
        axios({
            method: 'post',
            url: 'http://localhost:8080/v2/user/create',
            data: {
                 user: {
                    
                 }
            }})
        console.log(      
            user,
            firstname,
            surname,
            email,
            cellnumber,
            idNumber,
            pwd);
    }


    function ShowPassword() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return (
        <div className="App">

            <header >
            <title>Samanthas Booking Hotel</title>
            </header>

            <html>

            <body>
            <form 
                onSubmit={handleSubmit}
                method='Post'>

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
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
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
                           // aria-describedby="uidnote"                 
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
                           // aria-describedby="uidnote"                  
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
                            autoComplete="off"
                            onChange={(e) => setcellnumber(e.target.value)}
                            value={cellnumber}
                             required
                           // aria-describedby="uidnote"
                           // on                    
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
                            value={idNumber}
                             required
                           aria-describedby="uidnote"
                           on                    
                            onFocus={() => setidNumberFocus(true)}
                            onBlur={() => setidNumberFocus(false)}
                        />  

                <br/>
                <label
                 htmlFor="password"
                 className='reg-lbl'>
                            Password:
                 </label>
                        <input
                            type="password"
                            id="password"
                            className='reg-form-field'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                      <label>Show Password</label>  
                      <input type="checkbox" onclick="ShowPassword()"/>
                  <br/>

                    <i 
                    class="fa fa-info-circle" 
                    data-toggle="tooltip" 
                    title="Must include uppercase and lowercase letters, a number and a special character."  >
                    </i>


                    <br/>

                    <button 
                    class="signin-button;" 
                        onclick={RegisterUserFunc(
                            {}
                        )}>
                           Submit
                     </button>
                     <br/>


             </form>

             <div>
             <p>Already registered?</p> 
            
             <a href="/login" >
                 <button  class="signin-button;" >Sign in</button>
            </a>

             </div>

            </body> 

            <footer>

            </footer>
            </html>
        </div>
    );
}

export default RegisterUser;
