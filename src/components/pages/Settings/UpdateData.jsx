import { useState, useEffect } from "react";
import { Paper, Box, Stack, Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Navbar from "../../Menubar/Navbar";
import Sidenav from "../../Menubar/Sidenav";
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate, useParams } from "react-router-dom";
import Switch from '@mui/material/Switch';
import Swal from "sweetalert2";
import { getUser, editUser } from "../../../service/api";

const initialValues = {
  sDescription: '',
  sOptions: [],
}

export default function UpdateData() {
  

  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { sStatementID } = useParams();
  const [isAnswer, setIsAnswer] = useState();



  useEffect(() => {
    getUserdata();
  }, [])

  const getUserdata = async () => {
    let response = await getUser(sStatementID);
    setUser(response.data);
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })

  }


  const handleSubmit = async () => {
    await editUser(user, sStatementID)
    Swal.fire("Updated !", "Statement has been Updated.", "success")
    navigate("/Data-table")
   
  };

  const handleChange = (event) => {
    setIsAnswer(event.target.checked)

  }


  return (

    <>

      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

            <Box style={{ paddingBottom: "5px" }}>
              <Typography variant='h5' align="center" >
                Update Statement
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

                      <TableCell align="left">  <TextField fullWidth onChange={(e) => onValueChange(e)} name='sDescription' id='outlined basic' variant='standard' size='small' value={user.sDescription} sx={{ minWidth: 'auto' }} />  </TableCell>


                    </TableRow>

                    <TableHead>

                      <TableCell align="left"> Options</TableCell>
                      <TableCell align="left"> Prompt</TableCell>
                      <TableCell align="left"> Answer</TableCell>

                    </TableHead>

                    {user && user.sOptions.map((option, i) => {
                      return (
                        <>
                          <TableBody>
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}

                            >
                              <TableCell>
                                <TextField fullWidth onChange={(e) => onValueChange(e)} name='text' id='outlined basic'
                                  value={option.text}
                                  variant='standard' size='small' sx={{ minWidth: 'auto' }} />
                              </TableCell>

                              <TableCell align="left">  <TextField onChange={(e) => onValueChange(e)} name='isPrompt' fullWidth id='outlined basic' variant='standard' size='small' value={option.isPrompt} sx={{ minWidth: 'auto' }} /> </TableCell>
                              <TableCell align="left">  <Switch  onChange={(e) => handleChange(e)} name="isAnswer" value={option.isAnswer} /> </TableCell>
                            </TableRow>
                          </TableBody>
                        </>
                      )
                    })}

                  </TableBody>


                </Table>
              </TableContainer>
              <hr />
              <Box padding={1} style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to="/Data-table">  <Button variant="contained" align="center" ><ArrowBackIcon /> </Button></Link>

                <Button variant="contained" color="success" onClick={() => { handleSubmit() }} >Update</Button>
              </Box>


            </Paper>

          </Box>

        </Box>
      </div>


    </>
  );
}
