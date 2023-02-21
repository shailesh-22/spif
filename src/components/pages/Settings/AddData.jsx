import React, { useState } from "react";
import {
  Box,
  Paper,
  Switch,
  Button,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TextField from "@mui/material/TextField";
import TableRow from "@mui/material/TableRow";
import { addUser } from "../../../service/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../Menubar/Navbar";
import Sidenav from "../../Menubar/Sidenav";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";

const initialValues = {
  sDescription: "",
  sOptions: [
    {
      text: "",
      value: "",
      isAnswer: "",
      isPrompt: "",
    },
  ],
};

export default function AddData() {
  const [user, setUser] = useState(initialValues);
  const [inputs, setInputs] = useState([""]);

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const addUserDetails = async () => {
    await addUser(user);

    Swal.fire("Added!", "Statement has been added.", "success");
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
            <Typography variant="h5" align="center">
              Add Statement
            </Typography>
          </Box>

          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  {/* <TableHead style={{display:'flex', alignItems:'center'}}>Update Statement</TableHead> */}

                  <TableRow>
                    {/* <TableCell align="left">Q.No</TableCell> */}
                    <TableCell align="left" style={{ fontSize:'18px',fontWeight: 500 }}>Questions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    {/* <TableCell align="left">  <TextareaAutosize fullWidth onChange={(e) => onValueChange(e)} name='sDescription' id='outlined basic' variant='standard' size='small'  sx={{ minWidth: 'auto' }} />  </TableCell> */}
                    <TextareaAutosize
                      maxRows={4}
                      // value={sDescription}
                      aria-label="maximum height"
                      placeholder="Enter Your Statement"
                      style={{
                        width: "100%",
                        height: "150px",
                        padding: "10px",
                        outline: "none",
                        border: "1px solid rgba(55, 59, 59, 0.2)",
                        borderRadius: "5px",
                      }}
                      // onChange={(e) => {
                      //   setDescription(e.target.value);
                      // }}
                    />
                  </TableRow>

                  <TableHead>
                  <TableCell align="left" style={{ fontSize:'18px',fontWeight: 500 }}> No</TableCell>
                    <TableCell align="left" style={{ fontSize:'18px',fontWeight: 500 }}> Options</TableCell>
                    <TableCell align="left" style={{ fontSize:'18px',fontWeight: 500 }}> Prompt</TableCell>
                    <TableCell align="left" style={{ fontSize:'18px',fontWeight: 500 }}> Answer</TableCell>
                  </TableHead>

                  <TableBody fullWidth>
                    {inputs.map((input, index) => (
                      <TableRow hover role="checkbox" tabIndex={-1}>
                         <TableCell align="center"> {index + 1} </TableCell>
                        <TableCell  component="th" scope="row" >
                          {/* <TextField
                            fullWidth
                            name="text"
                            id="outlined basic"
                            variant="standard"
                            size="small"
                            sx={{ minWidth: "auto" }}
                          /> */}
                          <TextareaAutosize
                            maxRows={4}
                            aria-label="maximum height"
                            // value={text}
                            style={{
                              width: "100%",
                              fontSize: 17,
                              padding: "10px",
                              outline: "none",
                              border: "1px solid rgba(55, 59, 59, 0.2)",
                              borderRadius: "5px",
                            }}
                            // onChange={(e) => {
                            //   setText(e.target.value);
                            // }}
                          />
                        </TableCell>

                        <TableCell align="center" component="th" scope="row" >
                         
                          {/* <TextField
                            name="isPrompt"
                            fullWidth
                            id="outlined basic"
                            variant="standard"
                            size="small"
                            sx={{ minWidth: "auto" }}
                          /> */}

                          <TextareaAutosize
                            maxRows={4}
                            aria-label="maximum height"
                            // value={text}
                            style={{
                              width: "100%",
                              fontSize: 17,
                              padding: "10px",
                              outline: "none",
                              border: "1px solid rgba(55, 59, 59, 0.2)",
                              borderRadius: "5px",
                            }}
                             // onChange={(e) => {
                            //   setText(e.target.value);
                            // }}
                          />

                        </TableCell>

                        <TableCell align="center">
                        
                          <Switch name="isAnswer" fullWidth />
                        </TableCell>

                        <Box style={{ padding: "20px" }}>
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleRemoveInput(index)}
                          >
                            <DeleteIcon />
                          </Button>
                        </Box>
                      </TableRow>
                    ))}
                  </TableBody>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "right",
                      marginRight: "340px",
                      marginTop: "15px"
                    }}
                  >
                  
                    <Button
                      style={{ alignContent: "right" }}
                      variant="contained"
                      color="success"
                      onClick={handleAddInput}
                    >
                      Add option
                    </Button>
                  </Box>
                </TableBody>
              </Table>
            </TableContainer>
            <hr />
            <Box
              padding={1}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Link to="/Data-table">
               
                <Button variant="contained" align="center">
                  <ArrowBackIcon />
                </Button>
              </Link>

              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  addUserDetails();
                }}
              >
                Add
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
