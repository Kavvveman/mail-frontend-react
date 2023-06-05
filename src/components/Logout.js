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


function Logout() {
    return (
        <div id="construction">
            <header >
                <title>Samanthas Booking Hotel</title>
                <body>
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

                  <div id="side-bar-body">
                    <p>Logout</p>
                    <p>Under Construction</p>
                    </div>

                    
                </body>
            </ header>
            </div>
            
    );
}

export default Logout;
