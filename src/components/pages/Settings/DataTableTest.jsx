import { useState, useEffect } from "react";
import { Paper, Box , Stack} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Navbar from "../../Menubar/Navbar";
import Sidenav from "../../Menubar/Sidenav";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2'
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function DataTableTest() {
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

const deleteUser = (id) => {
  Swal.fire({
    title:"Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      deleteApi()
      // window.location.reload()
    }
  })
}

let deleteApi = async () => {

    const getitem = localStorage.getItem("deleteMe");

    fetch(`http://103.160.153.38:8020/limens/statements_view/${getitem}/`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => Swal.fire("Deleted!", "Your file has been deleted.", "success")   
    ).then(() => { window.location.reload()})  
    localStorage.removeItem("deleteMe");
  
};

const navigate = useNavigate();
  return (

    <>
    {rows ? (
       <div className="bgcolor">
       <Navbar />
       <Box height={70} />
       <Box sx={{ display: "flex" }}>
         <Sidenav />
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
 
 
         <Box component="span" m={1} display="flex" justifyContent="start" >
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={rows}
                    onChange={(e, v) => setRowdata(v)}
                    getOptionLabel={(rows)=> rows.sDescription || ""}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Statements" />
                    )}
                  />
         </Box>
 
 
           <Paper sx={{ width: "100%", overflow: "hidden" }}>
             <TableContainer sx={{ maxHeight: 440 }}>
               <Table stickyHeader aria-label="sticky table">
                 <TableHead>
                   <TableRow>
                     <TableCell align="left">Q.No</TableCell>
                     <TableCell align="left"> Questions</TableCell>
                     <TableCell align="left">Actions</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {rows && rows
                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                     .map((row,i) => {
                       return (
                         <TableRow
                           hover
                           role="checkbox"
                           tabIndex={-1}
                           key={row.sStatementID}
                         >
                           <TableCell align="left">  {i+1} </TableCell>
                           <TableCell align="left">  {row.sDescription} </TableCell>
                           {/* <TableCell align="left">  {row.sOptions[1].text} </TableCell> */}
                             
                           <TableCell align="left"> 
                           <Stack spacing={2} direction="row">
                            <EditIcon
                            
                            style={{
                              fontSize: "20px",
                              color: "blue",
                              cursor: "pointer",
                              
                            }}
                            className="cursor-pointer"
                            onClick={() => {
                              navigate(`/edit-data/${row.sStatementID}`)
                            }}
                            
                            />
                            <DeleteIcon
                            style={{
                              fontSize: "20px",
                              color: "darkred",
                              cursor: "pointer",
                            }}
                            key={i}
                            id={row.sStatementID}
                            className="cursor-pointer"
                            onClick={() => {
                              deleteUser(row.sStatementID);
                            localStorage.setItem("deleteMe", row.sStatementID)
                            }}
                            />
                           </Stack>
                            </TableCell>
                          
                   </TableRow>
                       );
                     })}
                 </TableBody>
               </Table>
             </TableContainer>
             <TablePagination
               rowsPerPageOptions={[10, 25, 100]}
               component="div"
               count={rows.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
             />
           </Paper>
         </Box>
       </Box>
     </div>
    ):(
      <h2>Loading...</h2>
    )}
   
    </>
  );
}
