import { useState, useEffect } from "react";
import { Paper, Box, Button, Typography, TextareaAutosize } from "@mui/material";
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
  sOptions: [
    {
      "text": "",
      "value": "",
      "isAnswer": "",
      "isPrompt": ""
    }
  ]
}

export default function EditData() {

  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { sStatementID } = useParams();
  const [isAnswer, setIsAnswer] = useState(Boolean);


  useEffect(() => {
    getUserdata();
  }, [])

  const getUserdata = async () => {
    let response = await getUser(sStatementID);
    setUser(response.data);
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user);
  }


  const handleSubmit = async () => {
    await editUser(user, sStatementID)
    Swal.fire("Updated !", "Statement has been Updated.", "success")
    navigate("/Data-table")
  };

  const handleChange = (event) => {
    setIsAnswer(event.target.checked)
    console.log(event.target.checked);
  }


  return (

    <>

      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant='h5' align="center" style={{ marginBottom: "5px", marginTop: "0px" }} >
              Update Statement
            </Typography>

            <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
                      {/* <TableCell align="left">  <TextField fullWidth onChange={(e) => onValueChange(e)} name='sDescription' id='outlined basic' variant='standard' size='small' value={user.sDescription} sx={{ minWidth: 'auto' }} />  </TableCell> */}
                      <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    defaultValue={user.sDescription}
                    value={user.sDescription}
                    style={{
                      width: "100%",
                      height: "150px",
                      padding: "10px",
                      outline: "none",
                      border: "1px solid rgba(55, 59, 59, 0.2)",
                      borderRadius: "5px",
                    }}
                    
                  /> 
                    </TableRow>

                  </TableBody>

                </Table>

                <Table stickyHeader aria-label="sticky table">


                  <TableHead>
                    {/* <TableHead style={{display:'flex', alignItems:'center'}}>Update Statement</TableHead> */}

                    <TableRow>

                      {/* <TableCell align="left">Q.No</TableCell> */}
                      <TableCell align="center" style={{ width: "60px" }}>No </TableCell>
                      <TableCell align="center"> Options</TableCell>
                      <TableCell align="center"> Prompt</TableCell>
                      <TableCell align="center"> Answer</TableCell>

                    </TableRow>
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
                            <TableCell align="center"> {i + 1} </TableCell>
                            <TableCell align="center">  <TextField fullWidth onChange={(e) => onValueChange(e)} name='text' id='outlined basic' variant='standard' size='small' value={option.text} sx={{ minWidth: 'auto' }} /> </TableCell>
                            <TableCell align="center">  <TextField fullWidth onChange={(e) => onValueChange(e)} name='isPrompt' id='outlined basic' variant='standard' size='small' value={option.isPrompt} sx={{ minWidth: 'auto' }} />   </TableCell>
                            <TableCell align="center">    <Switch checked={option.isAnswer} onChange={handleChange} name="isAnswer" value={option.isAnswer} /> </TableCell>

                          </TableRow>

                        </TableBody>

                      </>
                    )
                  })}
                </Table>
              </TableContainer>

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
