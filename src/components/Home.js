import './App.css';
import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';
import React from 'react'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'

// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import {Icon} from "@mui/icons-material";
// import {IconName} from "@mui/icons-material";
// import { IconButton } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';





function Home() {
    return (
        <div className="App">
          <div id="divBG">


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
                    <title>Samanthas Booking Hotel</title>
                    <h3>
                        Welcome to Samanthas booking Hotel. 
                    </h3>
                    <br/>
                    <br/>
                    <h6>Please choose what you would like to do</h6>
                    <br/>

                    </div>
                    </div>
            </div>
    );
}

export default Home;
