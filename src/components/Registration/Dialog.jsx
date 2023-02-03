import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import './dialog.css'
import { useState } from 'react';
import Register2 from './Register2';


export default function AlertDialog({open,handleClose}) {

  let navigate = useNavigate();

  const [resetButton, setResetButton] = useState('Reset');

  const hamdleUpdate = ()=> {

  handleClose();

    Swal.fire({
      title: 'Thank you for filling in your personal details!',
      text: "Would you like to take the Assesement?",
      icon: 'success',
      showCancelButton: true,
      cancelButtonText: 'Later',
      confirmButtonText: 'Now',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', 
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/terms_conditions")
      }
      else{
        setResetButton('Edit')
      }
    })
   
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{textAlign:"center"}}>
          {"Enter the OTP sent to your email address."}
        </DialogTitle>
        <DialogContent>
         <form >
            <div style={{ textAlign:"center"}}>
               <TextField  type="number" />         
            </div>
           
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  autoFocus onClick={()=>{hamdleUpdate()}} >
            Validate
          </Button>
        </DialogActions>
     <Button resetButton={resetButton} />
      </Dialog>
      
    </div>
  );
}
