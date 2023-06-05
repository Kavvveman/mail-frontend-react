import './App.css';
import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';
import React from 'react'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

function Profile() {
    return (
        <div id="construction">
             <header >
                <title>Samanthas Booking Hotel</title>
                 <div>
               <script src="https://kit.fontawesome.com/126178d45e.js" crossorigin="anonymous"></script>
               <Sidebar id="side-bar">
                     <Menu>
                   <MenuItem  component={<Link to="/home" />}> 
                   <HomeIcon></HomeIcon>
                   Home 
                    </MenuItem>
                   <MenuItem IconName="" component={<Link to="/bookings" />}>
                  <MenuBookIcon></MenuBookIcon>
                   Bookings
                   </MenuItem>

                   <MenuItem component={<Link to="/profile" />}> 
                    <AccountBoxIcon></AccountBoxIcon>
                    Profile
                    </MenuItem>

                   <MenuItem component={<Link to="/logout" />}> 
                  <PersonRemoveIcon></PersonRemoveIcon>
                   Log out 
                   </MenuItem>
                    </Menu>
                  </Sidebar>

                  </div>
                  <div id="side-bar-body">

                  <label for='UserID'>UserID</label>
                  <p id='UserID'></p>
                  <br/>

                  <label for='FirstName'>FirstName</label>
                  <p id='FirstName'></p>
                  <br/>

                  <label for='Surname'>Surname</label>
                  <p id='Surname'></p>
                  <br/>

                  <label for='email'>email</label>
                  <p id='email'> </p>
                  <br/>

                  <label for='UserImage'>UserImage</label>
                  <p id='UserImage'></p>
                  <br/>
                    </div>
            </ header>
            </div> 
    );
}

export default Profile;
