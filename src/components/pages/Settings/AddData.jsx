import React, { useState } from 'react'
import { Box, Paper, Switch, Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TextField from '@mui/material/TextField';
import TableRow from "@mui/material/TableRow";
import { addUser } from '../../../service/api';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from "../../Menubar/Navbar";
import Sidenav from "../../Menubar/Sidenav";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';


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

export default function AddData() {

  const [user, setUser] = useState(initialValues);
  const [inputs, setInputs] = useState(['']);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(e.target.value);
  }



  const addUserDetails = async () => {
    await addUser(user)
    
    Swal.fire("Added!", "Statement has been added.", "success")
    window.location.reload();
    
  };


  return (

    <div className="bgcolor">
    <Navbar />
    <Box height={70} /> 
    <Box sx={{ display: "flex" }}>
      <Sidenav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      <Box style={{ paddingBottom: "5px" }}>
              <Typography variant='h5' align="center" >
                Add Statement
              </Typography>
      </Box>
   

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer >
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    {/* <TableHead style={{display:'flex', alignItems:'center'}}>Update Statement</TableHead> */}

                    <TableRow>

                      {/* <TableCell align="left">Q.No</TableCell> */}
                      <TableCell align="left">Questions</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>

                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}

                    >

                      <TableCell align="left">  <TextField fullWidth onChange={(e) => onValueChange(e)} name='sDescription' id='outlined basic' variant='standard' size='small'  sx={{ minWidth: 'auto' }} />  </TableCell>


                    </TableRow>

                    <TableHead >

                      <TableCell align="left" > Options</TableCell>
                      <TableCell align="left"> Prompt</TableCell>
                      <TableCell align="left"> Answer</TableCell>

                    </TableHead>
                      
                          <TableBody fullWidth>
                          {inputs.map((input, index) => (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              
                            >
                             
                              <TableCell align="center" >
                                <TextField fullWidth  name='text' id='outlined basic'
                                
                                  variant='standard' size='small' sx={{ minWidth: 'auto' }} />
                              </TableCell>
                              

                              <TableCell align="center" >  <TextField  name='isPrompt' fullWidth id='outlined basic' variant='standard' size='small'  sx={{ minWidth: 'auto' }} /> </TableCell>
                              
                              <TableCell align="center">  <Switch  name="isAnswer" fullWidth  /> </TableCell>
                               
                             <Box style={{ padding: '10px'}}> 
                              <Button
                               variant="outlined"
                               color='error'
                               onClick={() => handleRemoveInput(index)}
                             >
                              <DeleteIcon/>
                             </Button></Box>
                            </TableRow>

                              

                            ))}
                    

                  </TableBody>
                  <Box style={{ display:'flex', justifyContent:"center", marginTop:'5px' }}> <Button style={{ alignContent:'right' }} variant="contained" color="success" onClick={handleAddInput}>Add option </Button>
                           </Box>                            
                          </TableBody>


                </Table>
              </TableContainer> 
              <hr />
              <Box padding={1} style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to="/Data-table">  <Button variant="contained" align="center" ><ArrowBackIcon /> </Button></Link>

                <Button variant="contained" color="success" onClick={() => { addUserDetails() }} >Add</Button>
              </Box>


            </Paper>

      
      </Box>

</Box>
</div>

  );
}

