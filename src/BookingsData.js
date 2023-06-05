import React from 'react';
import axios from 'axios';
import  { useState, useEffect } from 'react';


const BookingsData = () => {
 const [bookings, setbookings] = useState([]);

 useEffect(() => {
    fetchBookings();
  }, []);
 const fetchBookings = () => {
    axios
      .get('http://localhost:8080/v2/booking/getBookingsByUserID')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Bookings</h1>
    </div>
  );
};
export default BookingsData;