import { useState, useEffect } from "react";
import { Paper, Box , Stack, Button} from "@mui/material";
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
import { getUser } from '../../../service/api';

export default function EditData() {

  
const [sDescription, setsDescription] = useState();
const { sStatementID:id } = useParams();

useEffect(() => {
  getUserData();
},[])

const getUserData = async () => {
 let response = await getUser(id);
 console.log(response);
}

const navigate = useNavigate();

  return (

    <>
   
       <div className="bgcolor">
       <Navbar />
       <Box height={70} />
       <Box sx={{ display: "flex" }}>
         <Sidenav />
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
 
 
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
                         
                           <TableCell align="left"> <TextField type="text" value={sDescription} onChange={(e)=>{setsDescription(e.target.value)}} />  </TableCell>
                           <TableCell align="left"> <TextField />   </TableCell>
                           <TableCell align="left"> <TextField />    </TableCell>
                           <TableCell align="left"> <TextField />   </TableCell>
                           <TableCell align="left"> 
                           <Stack spacing={2} direction="row">
                            <Button
                            variant="contained" color="success"
                            // onClick={()=>{ handleSubmit()}}
                            > 
                                Update 
                            </Button>
                           
                           </Stack>
                            </TableCell>
                            
                   </TableRow>
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
