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
import { Link, useNavigate } from "react-router-dom";


export default function EditData() {

const [initialValues, setInitialValues] = useState();

    const baseURL = 'http://103.160.153.38:8020/limens/statements_view/'
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowdata, setRowdata] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
      axios.get(baseURL).then((response) => {
        setRows(response.data)
      });

    
  },[]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
  if (rowdata)
  {
    setRows([rowdata]);
  } else 
  {
    axios.get(baseURL).then((response) => {
      setRows(response.data)
    });
  }
  
},[rowdata]);


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
                   <TableRow>
                     <TableCell align="left">Q.No</TableCell>
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
                           <TableCell align="left">   </TableCell>
                           <TableCell align="left"> <TextField />  </TableCell>
                           <TableCell align="left"> <TextField />   </TableCell>
                           <TableCell align="left"> <TextField />    </TableCell>
                           <TableCell align="left"> <TextField />   </TableCell>
                           <TableCell align="left"> 
                           <Stack spacing={2} direction="row">
                            <Button
                            variant="contained" color="success"
                            // onClick={}
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
