import { useState, useEffect } from "react";
import { Paper, Box , Stack, Button, Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Navbar from "../../Menubar/Navbar";
import Sidenav from "../../Menubar/Sidenav";
import axios from "axios";
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate, useParams } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Swal from "sweetalert2";
import { getUser, editUser} from "../../../service/api";

const initialValues = {
  sDescription : '',
  sOptions : [
    {
      "text": "",
      "value": "",
      "isPrompt": ""   
    },
    {
      "text": "",
      "value": "",
      "isPrompt": ""   
    },
    {
      "text": "",
      "value": "",
      "isPrompt": ""   
    },
    {
      "text": "",
      "value": "",
      "isPrompt": ""   
    },
    {
      "text": "",
      "value": "",
      "isPrompt": ""   
    },
     {
      "text": "",
      "value": "",
      "isPrompt": ""   
    }
  ]
}

export default function EditData() {

  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { sStatementID } = useParams();
  const [isAnswer, setIsAnswer] = useState(false);


  useEffect(() => {
  getUserdata();
  },[])

  const getUserdata = async () => {
    let response = await getUser(sStatementID);
    setUser(response.data);
  }
  
     const onValueChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value})
      console.log(user);
     }
  
  
  const handleSubmit = async () => {
  await editUser(user, sStatementID)
   Swal.fire("Updated !", "Statement has been Updated.", "success")
   navigate("/Data-table")
  };

  const handleChange = (e) => {
  
    setIsAnswer(e.target.value)
   console.log(e);
  }

  const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  return (

    <>
   
       <div className="bgcolor">
       <Navbar />
       <Box height={70} />
       <Box sx={{ display: "flex" }}>
         <Sidenav />
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Typography variant='h5' align="center" >
          Update Statement
          </Typography> 
 
           <Paper sx={{ width: "100%", overflow: "hidden" }}>
             <TableContainer sx={{ maxHeight: 440 }}>
               <Table stickyHeader aria-label="sticky table">
                 <TableHead>
                  {/* <TableHead style={{display:'flex', alignItems:'center'}}>Update Statement</TableHead> */}
                  
                   <TableRow>
                   
                     {/* <TableCell align="left">Q.No</TableCell> */}
                     <TableCell align="left"> Questions</TableCell>
                     <TableCell align="left"> Options</TableCell>
                     <TableCell align="left"> Prompt</TableCell>
                     <TableCell align="left"> Answer</TableCell>
                     <TableCell align="left">Actions</TableCell>
                
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   
                     
                         <TableRow
                           hover
                           role="checkbox"
                           tabIndex={-1}
                           
                         >
                         
                         <TableCell align="left">  <TextField fullWidth onChange={(e) => onValueChange(e)} name='sDescription' id='outlined basic' variant='standard' size='small' value={user.sDescription} sx={{ minWidth:'auto' }}/>  </TableCell>
                           <TableCell align="left">  <TextField fullWidth onChange={(e) => onValueChange(e)} name='text' id='outlined basic' variant='standard' size='small' value={user.sOptions[0].text} sx={{ minWidth:'auto' }}/> </TableCell>
                           <TableCell align="left">  <TextField fullWidth onChange={(e) => onValueChange(e)} name='isPrompt' id='outlined basic' variant='standard' size='small' value={user.sOptions[0].isPrompt} sx={{ minWidth:'auto' }}/>   </TableCell>
                           <TableCell align="left">     <Switch checked={user.sOptions[0].isAnswer}  onChange={handleChange} name="isAnswer"  {...label} defaultChecked   value={user.sOptions[0].isAnswer} /></TableCell>
                          
                           <TableCell align="left"> 
                           <Stack spacing={2} direction="row">
                            <Button
                            variant="contained" color="success"
                            onClick={()=>{ handleSubmit()}}
                            > 
                                Update 
                            </Button>
                           
                           </Stack>
                            </TableCell>
                            
                   </TableRow>
                 
                   {/* 2nd option */}

                        <TableRow
                           hover
                           role="checkbox"
                           tabIndex={-1}
                           

                           
                         >
                          <TableCell align="left"> <TextField fullWidth id='outlined basic' variant='standard' size='small' sx={{ minWidth:'auto' }} >   </TextField></TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='text' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[1].text} sx={{ minWidth:'auto' }}/> </TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='isPrompt' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[1].isPrompt} sx={{ minWidth:'auto' }}/> </TableCell>
                           <TableCell align="left">     <Switch checked={user.sOptions[1].isAnswer}   onChange={handleChange} name="isAnswer"  inputProps={{ 'aria-label': 'controlled' }} value={user.sOptions[1].isAnswer} /></TableCell>
                         </TableRow>

                         {/* 3rd option */}

                         <TableRow
                           hover
                           role="checkbox"
                           tabIndex={-1}
                           
                         >
                          <TableCell align="left"> <TextField fullWidth id='outlined basic' variant='standard' size='small' sx={{ minWidth:'auto' }} >   </TextField></TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='text' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[2].text} sx={{ minWidth:'auto' }}/> </TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='isPrompt' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[2].isPrompt} sx={{ minWidth:'auto' }}/> </TableCell>
                           <TableCell align="left">     <Switch checked={user.sOptions[2].isAnswer} onChange={handleChange} name="isAnswer"  inputProps={{ 'aria-label': 'controlled' }} value={user.sOptions[2].isAnswer} /></TableCell>

                         </TableRow>

                         {/* 4th option */}

                         <TableRow
                           hover
                           role="checkbox"
                           tabIndex={-1}
                           
                         >
                          <TableCell align="left"> <TextField fullWidth id='outlined basic' variant='standard' size='small' sx={{ minWidth:'auto' }} >   </TextField></TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='text' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[3].text} sx={{ minWidth:'auto' }}/> </TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='isPrompt' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[3].isPrompt} sx={{ minWidth:'auto' }}/> </TableCell>
                           <TableCell align="left">     <Switch checked={user.sOptions[3].isAnswer} onChange={handleChange} name="isAnswer"  inputProps={{ 'aria-label': 'controlled' }} value={user.sOptions[3].isAnswer} /></TableCell>

                         </TableRow>

                            {/* 5th option */}
{/* 
                            <TableRow
                           hover
                           role="checkbox"
                           tabIndex={-1}
                           
                         >
                          <TableCell align="left"> <TextField fullWidth id='outlined basic' variant='standard' size='small' sx={{ minWidth:'auto' }} >   </TextField></TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='text' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[4].text} sx={{ minWidth:'auto' }}/> </TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='isPrompt' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[4].isPrompt} sx={{ minWidth:'auto' }}/> </TableCell>


                         </TableRow> */}

                            {/* 6th option */}

                            {/* <TableRow
                           hover
                           role="checkbox"
                           tabIndex={-1}
                           
                         >
                          <TableCell align="left"> <TextField fullWidth id='outlined basic' variant='standard' size='small' sx={{ minWidth:'auto' }} >   </TextField></TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='text' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[5].text} sx={{ minWidth:'auto' }}/> </TableCell>
                           <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='text' fullWidth id='outlined basic' variant='standard' size='small' value={user.sOptions[5].text} sx={{ minWidth:'auto' }}/> </TableCell>


                         </TableRow> */}
                         

                   
                
                 <Link to="/Data-table">  <Button variant="contained" align="center"  ><ArrowBackIcon /> </Button></Link>
                   
                 </TableBody>
                 

               </Table> 
             </TableContainer>
             
           </Paper>
         </Box>
       </Box>
     </div>
  
   
    </>
  );
}
