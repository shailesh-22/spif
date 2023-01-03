import { useState, useEffect } from "react";
import { Paper, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Navbar from "../../../../Menubar/Navbar";
import Sidenav from "../../../../Menubar/Sidenav";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'

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
                     <TableCell align="left">ID</TableCell>
                     <TableCell align="left"> Questions</TableCell>
                     <TableCell align="left">Options</TableCell>
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
                           <TableCell align="left">  </TableCell>
                        
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
