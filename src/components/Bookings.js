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

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


//import Box from '@mui/material/Box';
import { DataGrid, GridRow, GridColumnHeaders } from '@mui/x-data-grid';
//import { useDemoData } from '@mui/x-data-grid-generator';
import { useBookingData } from '@mui/x-data-grid-generator'

import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import { withStyles } from "@material-ui/core/styles";

import Autocomplete from '@mui/base/useAutocomplete';

import * as moment from 'moment';


import {
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Calculate, Work } from '@mui/icons-material';


function Bookings() {


  const [value, setValue] = React.useState('1');

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  //Pull data unique to User
  const MemoizedRow = React.memo(GridRow);

  const MemoizedColumnHeaders = React.memo(GridColumnHeaders);

  const [checkin, setcheckin] = useState('');
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  const [checkout, setcheckout] = useState('');
  // const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  const [roomtype, setroomtype] = useState('');

  const [priceofbooking, setpriceofbooking] = useState('');

  const [ErrorText, seterrortext] = useState('');

  const RedTextTypography = withStyles({
    root: {
      color: "#ff0000"
    }
  })(Typography);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
}




function isWeekend(date = new Date()) {
  return date.getDay() === 6 || date.getDay() === 0;
}

function CheckDates(checkin, checkout){
  if(checkout > checkin){
    //Create a label for errors
    alert("Check out date must be before the check out date")
  }
}

function isMonday(date = new Date()) {
  return date.getDay() === 1;
}

  function  WorkCosts()
  {
    debugger
    // You have a limited amount of rooms (
      //5 a week maximum,
      //cant run concurrently[only one room])

    var BookCost;
    var Book2;
    var start = moment(checkin);
    var end = moment(checkout);

    CheckDates();
    var PriceBookingPerRoom = document.getElementById("cmbrooms").value;
    var PriceBookingPerRoom = roomtype;

//var ErrorText = document.getElementById("lbError");

    // change price according to room selected
    //Get room price via option from combobox(ID)?
   var daysDiff = end.diff(start, "days")
      if(daysDiff.isWeekend >5 )
      {
        ErrorText.innerHTML = "You cannot book longer than 5 days over weekend"
         //   alert("You cannot book longer than 5 days over weekend")
      }
   var diff = Math.floor((Date.parse(checkin) - Date.parse(checkout)) / 86400000);

   BookCost = daysDiff * 120;
   Book2 = diff *  120;

   document.getElementById('CostOfBooking').innerHTML = BookCost
   //
   return BookCost
  }

  function CreateBooking()
  {
    debugger
    WorkCosts();
    console.log("1");
          axios.post("http://localhost:8080/v2/booking/create", {
            userID: 1,
            roomID: 1,
            startDate: checkin,
            endDate: checkout,
            costOfBooking: priceofbooking,
            createdOn : '2023/05/30',
            isActiveBooking: true
          })
          .then
          (
              function (response)
              {
                console.log("2");
                  if(response.status === 200){
                   ErrorText.innerHTML = "Booking created between " + checkin +": " + checkout 
                  // setOpen(false);
                  }
                  console.log(response)
              }
          )
          .catch
          (
              function (error)
              {
            //    console.log(response.status);
                  console.log(error)
              }
          )
  }


  // Seperate dataset for rescheduling?


  const { bookings } = useBookingData({
    dataSet: 'bookings',
    rowLength: 100,
    editable: true,
  });

  const [open, setOpen] = useState(false);
    return (

<div>
    <Sidebar id="side-bar">
        <Menu>

            {/* Tabs to view and remove bookins */}

            <MenuItem component={<Link to="/home" />}>
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

    <input type="button"
           value="Bookings"
           component={<Link to="/modal" />}
    onClick={() => {setOpen(true)}}
    />

    <h6 id="construction">
    </h6>

    <Modal open={open}
           onClose={() =>
        setOpen(false)}
        id="BookingsModal">

        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChangeTabs}
                             aria-label="lab API tabs example">
                        <Tab label="Create New Booking" value="1" />
                        <Tab label="Remove a booking" value="2" />
                        <Tab label="Reschedule a booking" value="3" />
                    </TabList>
                </Box>
                {/* Contains all information for creating a new booking */}
                <TabPanel value="1">

                    <Typography id="basic-modal-dialog-title"
                                component="h4">
                        Create a new booking
                    </Typography>
                    <Typography id="basic-modal-dialog-description"
                                textColor="text.tertiary">
                        Choose the dates you would like to check in and out
                    </Typography>

                    <Stack spacing={2}>
                        <form>
                            <FormControl>
                                <FormLabel>Check In date</FormLabel>
                                <input type="date"
                                       id="dtpCheckIn"
                                       required="true"
                                       value={checkin}
                                       onChange={(e) => setcheckin(e.target.value)}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Check Out date</FormLabel>

                                <input type="date"
                                       id="dtpCheckout"
                                       required="true"
                                       value={checkout}
                                       onChange={(e) => setcheckout(e.target.value)}/>
                            </FormControl>

                            <label for="cmbrooms">Choose a Room:</label>

                            <select name="cmbrooms"
                                    onSelect={(e) =>
                                { setroomtype(e.target.value);WorkCosts()}}
                                onChange={(e) => { setroomtype(e.target.value);WorkCosts()}}
                                value={roomtype}
                                id="cmbrooms">
                                <option value="10">Outside (R10 Per Night)</option>
                                <option value="20">Inside (R20 Per Night)</option>
                                <option value="50">Luxury (R50 Per Night)</option>
                            </select>

                            {/* Displays the cost of bopoking */}
                            <br />
                            <Typography textColor="text.tertiary">
                                Cost of booking is :
                            </Typography>


                            <Typography textColor="text.tertiary"
                                        id='CostOfBooking'
                                        hidden='true'>
                            </Typography>
                          
      <RedTextTypography 
       variant="h6"
       id="lbError"
       hidden="true">
       Error Text
      </RedTextTypography>

                        </form>

                        <Button type="submit"
                                onClick={() =>
                            CreateBooking()}>
                            Create booking
                        </Button>
                    </Stack>

                </TabPanel>
                {/* Removing a booking */}
                <TabPanel value="2">
                    <Typography id="basic-modal-dialog-title"
                                component="h4">
                        Remove a booking
                    </Typography>
                    <Typography id="basic-modal-dialog-description"
                                textColor="text.tertiary">
                        Choose the booking you would like to remove
                    </Typography>

                    <Box 
                     sx={{ height: '80%', width: '80%' }}
                     id="dgRemoveBooking">
                        <DataGrid {...bookings}
                                     loading={bookings.rows.length ===0}
                                     rowHeight={38}
                                     checkboxSelection
                                     disableRowSelectionOnClick
                                     components={{
                                      Row: MemoizedRow,
                                    ColumnHeaders: MemoizedColumnHeaders,
                  }} />
                    </Box>
                </TabPanel>



                {/* Reschedule bookins */}
                <TabPanel value="3">

                    <Typography id="basic-modal-dialog-title"
                                component="h4">
                        Reschedule a booking
                    </Typography>
                    <Typography id="basic-modal-dialog-description"
                                textColor="text.tertiary">
                        Choose the booking you would like to reschedule
                    </Typography>

                    <Box 
                    sx={{ height: '80%', width: '80%' }}
                    id="dgUpdateBooking">
                        <DataGrid {...bookings}
                                     loading={bookings.rows.length ===0}
                                     rowHeight={38}
                                     checkboxSelection
                                     disableRowSelectionOnClick
                                     components={{
                                      Row: MemoizedRow,
                                    ColumnHeaders: MemoizedColumnHeaders,
                  }} />
                    </Box>


                </TabPanel>
            </TabContext>
        </Box>
    </Modal>
</div>

    );
}

export default Bookings;
