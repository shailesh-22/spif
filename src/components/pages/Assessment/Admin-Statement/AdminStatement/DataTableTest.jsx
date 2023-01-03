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
//////////////-------------------------------------------------------------------------
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from '@mui/material'
import { Switch, FormControlLabel } from '@mui/material'
///////////-------------------------------------------------------------------------------

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


  }, []);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  useEffect(() => {
    if (rowdata) {
      setRows([rowdata]);
    } else {
      axios.get(baseURL).then((response) => {
        setRows(response.data)
      });
    }

  }, [rowdata]);

  //////////////////---------------------------------------------------------------------------------------

  let [checked, setChecked] = useState(false);

  let [optionValue, setOptionValue] = useState("1")

  let handleAnswer = (event) => {
    // if ( questions.sOptions.isAnswer ) {
    //     setChecked(true)
    // } else {
    //     setChecked( false )
    // }

    setChecked(event.target.checked);
  };

  let handleOption = (e) => {
    setOptionValue(e.target.id)
  }

  let [textField, setTextField] = useState([]);

  const handleAdd = () => {
    const addOption = [...textField, []];
    setTextField(addOption);
  };

  const handleDelete = (index, i) => {
    const delVal = [...textField];
    delVal.splice(i, 1);
    setTextField(delVal);
    console.log(delVal);
  };

  const handleChange = (onChangeValue, i) => {
    const inputData = [...textField];
    inputData[i] = onChangeValue.target.value;
    setTextField(inputData);
    localStorage.setItem("onChangeValue", onChangeValue.target.value)
  };

  ////////////-------------------------------------------------------------------------------------


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
                  getOptionLabel={(rows) => rows.sDescription || ""}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Statements" />
                  )}
                />
              </Box>


              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <h5> Option Details </h5>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    {/* <TableHead>
                      <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left"> Questions</TableCell>
                        <TableCell align="left">Options</TableCell>
                      </TableRow>
                    </TableHead> */}
                    <TableBody>
                      {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          return (
                            <div>
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.sStatementID}
                              >
                                <TableCell align="left">  {row.sStatementID} </TableCell>
                                <TableCell align="left">  {row.sDescription} </TableCell>
                                {/* <TableCell align="left">  {row.sOptions[1].text} </TableCell> */}



                              {/* {   console.log(""row.sOptions[0].text"")} */}
                              </TableRow>
                               <TableHead>
                                <TableRow sx={{ fontSize: 40 }}>
                                  <TableCell
                                    align="center"
                                    sx={{ fontSize: 20, color: "#007A3E" }}
                                  >
                                    {" "}
                                    Options{""}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    sx={{ fontSize: 20, color: "#007A3E" }}
                                  >
                                    Correct(Yes/No)
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    sx={{ fontSize: 20, color: "#007A3E" }}
                                  >
                                    Prompt(Wrong Answer)
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    sx={{ fontSize: 20, color: "#007A3E" }}
                                  >
                                    Action
                                  </TableCell>
                                </TableRow>
                              </TableHead> 
                              {/* <TableBody>
                                {row.sOptions.map((option, i) => (
                                  <TableRow
                                    key={i}

                                    sx={{
                                      "&:last-child td, &:last-child th": {
                                        border: 0,
                                      },
                                    }}
                                  >
                                    <TableCell component="th" scope="row">
                                      <TextareaAutosize
                                        maxRows={4}
                                        aria-label="maximum height"
                                        defaultValue={option.text}
                                        onChange={handleChange}
                                        style={{
                                          width: "100%",
                                          fontSize: 17,
                                          padding: "10px",
                                          outline: "none",
                                          border: "1px solid rgba(55, 59, 59, 0.2)",
                                          borderRadius: "5px",
                                        }}
                                      />
                                    </TableCell>
                                    <TableCell align="center">
                                      <FormControlLabel
                                        control={
                                          <Switch
                                            checked={option.isAnswer}
                                            onChange={handleAnswer}
                                            color="primary"
                                          />
                                        }
                                      />
                                    </TableCell>
                                    <TableCell align="center">
                                      <TextareaAutosize
                                        maxRows={4}
                                        aria-label="maximum height"
                                        defaultValue={option.isPrompt}
                                        style={{
                                          width: "100%",
                                          fontSize: 17,
                                          padding: "10px",
                                          outline: "none",
                                          border: "1px solid rgba(55, 59, 59, 0.2)",
                                          borderRadius: "5px",
                                        }}
                                      />
                                    </TableCell>
                                    <TableCell align="center">
                                      <button
                                        style={{
                                          height: "50px",
                                          width: "50px",
                                          borderRadius: "10px",
                                        }}
                                        onClick={() => {
                                          handleDelete(i);
                                        }}
                                      >
                                        <DeleteIcon />
                                      </button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody> */}
                              {/* {row.sOptions.length !== 0 && (
                                <div>
                                  <h5> Option Details </h5>
                                  <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                      <TableHead>
                                        <TableRow sx={{ fontSize: 40 }}>
                                          <TableCell
                                            align="center"
                                            sx={{ fontSize: 20, color: "#007A3E" }}
                                          >
                                            {" "}
                                            Options{""}
                                          </TableCell>
                                          <TableCell
                                            align="center"
                                            sx={{ fontSize: 20, color: "#007A3E" }}
                                          >
                                            Correct(Yes/No)
                                          </TableCell>
                                          <TableCell
                                            align="center"
                                            sx={{ fontSize: 20, color: "#007A3E" }}
                                          >
                                            Prompt(Wrong Answer)
                                          </TableCell>
                                          <TableCell
                                            align="center"
                                            sx={{ fontSize: 20, color: "#007A3E" }}
                                          >
                                            Action
                                          </TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {row.sOptions.map((option, i) => (
                                          <TableRow
                                            key={i}

                                            sx={{
                                              "&:last-child td, &:last-child th": {
                                                border: 0,
                                              },
                                            }}
                                          >
                                            <TableCell component="th" scope="row">
                                              <TextareaAutosize
                                                maxRows={4}
                                                aria-label="maximum height"
                                                defaultValue={option.text}
                                                onChange={handleChange}
                                                style={{
                                                  width: "100%",
                                                  fontSize: 17,
                                                  padding: "10px",
                                                  outline: "none",
                                                  border: "1px solid rgba(55, 59, 59, 0.2)",
                                                  borderRadius: "5px",
                                                }}
                                              />
                                            </TableCell>
                                            <TableCell align="center">
                                              <FormControlLabel
                                                control={
                                                  <Switch
                                                    checked={option.isAnswer}
                                                    onChange={handleAnswer}
                                                    color="primary"
                                                  />
                                                }
                                              />
                                            </TableCell>
                                            <TableCell align="center">
                                              <TextareaAutosize
                                                maxRows={4}
                                                aria-label="maximum height"
                                                defaultValue={option.isPrompt}
                                                style={{
                                                  width: "100%",
                                                  fontSize: 17,
                                                  padding: "10px",
                                                  outline: "none",
                                                  border: "1px solid rgba(55, 59, 59, 0.2)",
                                                  borderRadius: "5px",
                                                }}
                                              />
                                            </TableCell>
                                            <TableCell align="center">
                                              <button
                                                style={{
                                                  height: "50px",
                                                  width: "50px",
                                                  borderRadius: "10px",
                                                }}
                                                onClick={() => {
                                                  handleDelete(i);
                                                }}
                                              >
                                                <DeleteIcon />
                                              </button>
                                            </TableCell>
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                      <div style={{ margin: " 20px " }}>
                                        <Button
                                          className=" btn btn-outline-success"
                                          style={{
                                            textAlign: "center",
                                            width: "auto",
                                            height: "40px",
                                          }}
                                          onClick={() => handleAdd()}
                                        >
                                          Add Option
                                        </Button>
                                      </div>
                                    </Table>
                                  </TableContainer>
                                </div>
                              )} */}
                            </div>
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
      ) : (
        <h2>Loading...</h2>
      )}

    </>
  );
}
