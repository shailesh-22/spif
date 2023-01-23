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


export default function AlertDialog({open,handleClose}) {

  let navigate = useNavigate();

  const hamdleUpdate = ()=> {
    
    // swal("Thank you for filling in your personal details. Would you like to take the Assesement?", {
    //   buttons: {
    //     cancel: "Later",
    //     ready : "Now"
    //   },
    // })
    // .then((value) => {
    //   switch (value) {
     
    //     case "ready":
    //       navigate("/terms_conditions");
    //       break;
     
    //     default:
    //       navigate("/");
    //       localStorage.removeItem("token")
    //   }
    // });
  handleClose();
    Swal.fire({
      title: 'Thank you for filling in your personal details!',
      text: "Would you like to take the Assesement?",
      icon: 'question',
      showCancelButton: true,
      cancelButtonColor: '#d33', 
      confirmButtonColor: '#3085d6',
      
      cancelButtonText: 'Later',
      confirmButtonText: 'Now'
      
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Created!',
        //   'Your Profile has been Created.',
        //   'success'
        // )
        // &&
        navigate("/terms_conditions")
      }
      else{
        navigate("/");
       localStorage.removeItem("token")
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
      </Dialog>
    </div>
  );
}
