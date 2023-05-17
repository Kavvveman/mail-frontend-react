import axios from '../api/axios';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import ReactDOM from 'react-dom'

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

    // #endregion

    // #region states
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    // #endregion


    // Functions

    function RegisterUserFunc(
        //Usernanme
        user,
        firstname,
        surname,
        email,
        cellnumber,
        idNumber,
        password
        )
       {
        console.log(      
                    //Usernanme  
            user,
            firstname,
            surname,
            email,
            cellnumber,
            idNumber,
            password);
    }

    return (
        <div className="App">
            <header >
            </header>
            <main id="main-holder">
                <form 
                onSubmit={handleSubmit}
                method='Post'>

                <h2> Register as a new User</h2>


                {/* Add Username field to database */}
                <label 
                className=''
                htmlFor="username">
                            Username:
                            <FontAwesomeIcon 
                            //icon={faCheck}
                             className={validPwd ? "valid" : "hide"}   />
                            <FontAwesomeIcon 
                            //icon={faTimes}
                            className={validPwd || !pwd ? "hide" : "invalid"}  />
                 </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            require
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />


                <label htmlFor="firstname">
                            First Name:
                 </label>

                        <input
                            type="text"
                            id="firstname"
                            autoComplete="off"
                            //onChange={(e) => setUser(e.target.value)}
                            //value={user}
                            required
                           // aria-describedby="uidnote"
                           // on                    
                            //onFocus={() => setUserFocus(true)}
                            //onBlur={() => setUserFocus(false)}
                        />


                <label htmlFor="surname">
                           Surname:
                 </label>

                        <input
                            type="text"
                            id="surname"
                            autoComplete="off"
                            //onChange={(e) => setUser(e.target.value)}
                            //value={user}
                            required
                           // aria-describedby="uidnote"
                           // on                    
                            //onFocus={() => setUserFocus(true)}
                            //onBlur={() => setUserFocus(false)}
                        />

                <label htmlFor="email">
                        Email:
                 </label>

                        <input
                            type="email"
                            id="email"
                            autoComplete="off"
                            //onChange={(e) => setUser(e.target.value)}
                            //value={user}
                            required
                           // aria-describedby="uidnote"
                           // on                    
                            //onFocus={() => setUserFocus(true)}
                            //onBlur={() => setUserFocus(false)}
                        />  


                <label htmlFor="cellnumber">
                        Cell Phone Number:
                 </label>

                        <input
                            type="tel"
                            id="cellnumber"
                            autoComplete="off"
                            //onChange={(e) => setUser(e.target.value)}
                            //value={user}
                             required
                           // aria-describedby="uidnote"
                           // on                    
                            //onFocus={() => setUserFocus(true)}
                            //onBlur={() => setUserFocus(false)}
                        />  


                 <label htmlFor="idNumber">
                        Cell Phone Number:
                 </label>

                        <input
                            type="number"
                            id="idNumber"
                            autoComplete="off"
                            //onChange={(e) => setUser(e.target.value)}
                            //value={user}
                             required
                           // aria-describedby="uidnote"
                           // on                    
                            //onFocus={() => setUserFocus(true)}
                            //onBlur={() => setUserFocus(false)}
                        />  

                <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon 
                            //icon={faCheck}
                             className={validPwd ? "valid" : "hide"}   />
                            <FontAwesomeIcon 
                            //icon={faTimes}
                            className={validPwd || !pwd ? "hide" : "invalid"}  />
                 </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />

                    <i 
                    class="fa fa-info-circle" 
                    data-toggle="tooltip" 
                    title="Must include uppercase and lowercase letters, a number and a special character."  >
                    </i>


                    

                        <button class="signup-button;" 
                        onclick={RegisterUserFunc()}>
                            Signup
                            </button>
                     <br/>
           
             </form>
            <p>Already registered?</p> 
             <button class="signin-button;">Sign In</button>
             </main>
        </div>
    );
}

export default RegisterUser;
