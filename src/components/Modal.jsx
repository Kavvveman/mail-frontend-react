import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';

//import DateCalendar from '@mui/joy/DateCalendar';

import axios from '../api/axios';
import { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';

import {
    MDBBtn,
  } from 'mdb-react-ui-kit';


export default function BasicModalDialog() {
  const [open, setOpen] = React.useState<Boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New project
      </Button>
      <Modal open={false} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}y
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            Create new project
          </Typography>
          <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
            Fill in the information of the project.
          </Typography>
          <form
            // onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            //   event.preventDefault();
            //   setOpen(false);
            // }}
          >
            <Stack spacing={2}>

              <FormControl>
                <FormLabel>Check In</FormLabel>
                <input type="date"/>
              </FormControl>

              <FormControl>
                <FormLabel>Check Out</FormLabel>
                <input type="date"/>
              </FormControl>

            <br/>
              <h6>Cost of booking is : </h6>  

              <h6 
              id='CostOfBooking' 
              hidden='true'>
                0
              </h6>
        
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}