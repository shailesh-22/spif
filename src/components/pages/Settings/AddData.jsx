import React, { useState } from 'react'
import { Box, Paper, Switch, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TextField from '@mui/material/TextField';
import TableRow from "@mui/material/TableRow";
import { addUser } from '../../../service/api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const initialValues = {
  sDescription: '',
  sOptions: [
    {
      "text": "",
      "value": "",
      "isAnswer": "",
      "isPrompt": ""
    }
  ]
}

export default function AddData({ CloseEvent }) {

  const navigate = useNavigate();

  const [user, setUser] = useState(initialValues);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user);
  }



  const addUserDetails = async () => {
    await addUser(user)
    CloseEvent()
    Swal.fire("Added!", "Statement has been added.", "success")

  };


  return (
    <>
      <Box />
      <Typography variant='h5' align="center" >
        Add Statement
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={CloseEvent}
      >
        <CloseIcon />
      </IconButton>

      <Paper sx={{ width: "100%", overflow: "hidden", width: "1300px" }}>
        <TableContainer >


          <Table stickyHeader aria-label="sticky table">

            <TableHead>
              <TableRow>
                <TableCell align="left">Questions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
              >
                <TableCell align="left">  <TextField fullWidth onChange={(e) => onValueChange(e)} name='sDescription' id='outlined basic' variant='standard' size='small' sx={{ minWidth: 'auto' }} />  </TableCell>

              </TableRow>

            </TableBody>

          </Table>


          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>

                {/* <TableCell align="left">Q.No</TableCell> */}

                <TableCell align="left"> Options</TableCell>
                <TableCell align="left"> Prompt</TableCell>
                <TableCell align="left">Answer </TableCell>


              </TableRow>
            </TableHead>
            <TableBody>


              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}

              >
                <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='text' id='outlined basic' variant='standard' size='small' sx={{ minWidth: 'auto' }} />  </TableCell>
                <TableCell align="left">  <TextField  onChange={(e) => onValueChange(e)} name='isPrompt' id='outlined basic' variant='standard' size='small' sx={{ minWidth: 'auto' }} />    </TableCell>
                <TableCell align="left">   <Switch   onChange={(e) => onValueChange(e)} name="isAnswer"   />   </TableCell>

                <TableCell align="left">





                </TableCell>

              </TableRow>

              {/* <Link to="/Data-table">  <Button variant="contained" align="center"  ><ArrowBackIcon /> </Button></Link> */}

            </TableBody>


          </Table>
        </TableContainer>



      </Paper>

      <Button
      style={{ marginLeft:"620px" , marginTop:"20px" }}
        variant="contained" color="success"
        onClick={() => { addUserDetails() }}
      >
        ADD
      </Button>
    </>
  );
}

