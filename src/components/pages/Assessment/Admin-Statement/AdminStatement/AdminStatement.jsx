import React, { useEffect } from "react";
import "./adminStatement.css";
import { Button, Box } from "@mui/material";
import { useState } from "react";
import useFetch from "../../Custom Hook/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import AdminQuestionDetails from "./AdminQuestionDetails";
import AddSLides from "../Adding-Slides/AddSLides";

// import DraggableComp from "../Sample Dragging Code/draggable";
import SortingSlides from "../Sample Dragging Code/SortingSlides";
import Navbar from "../../../../Menubar/Navbar";
import Sidenav from "../../../../Menubar/Sidenav";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
//---------------------------------------------------------------------------
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DeleteIcon from "@mui/icons-material/Delete";
import { Switch, FormControlLabel } from '@mui/material'
////////////------------------------------------------------------------------------


const AdminStatement = () => {
  let { data: questions } = useFetch(
    "http://103.160.153.38:8020/limens/statements_view/"
  );

  const [open, setOpen] = useState(false);

  const [openQA, setOpenQA] = useState(true);

  const [openDD, setOpenDD] = useState(false);

  const [trapDD, setTrapDD] = useState(true);

  const [rows, setRows] = useState([]);

  const [rowdata, setRowdata] = useState([]);

  const [slideBack, setSlideBack] = useState(false);

  const [title, setTitle] = useState("Statement");

  ////////////////-------------------------------------------------------------

  const baseURL = 'http://103.160.153.38:8020/limens/statements_view/'
  const [page, setPage] = useState(0);
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

  let [checked, setChecked] = useState(false);
  let [textField, setTextField] = useState([]);

  let handleAnswer = (event) => {
    // if ( questions.sOptions.isAnswer ) {
    //     setChecked(true)
    // } else {
    //     setChecked( false )
    // }

    setChecked(event.target.checked);
  };

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

  ////-----------------------------------------------------------------------------

  const handleClickOpen = () => {
    setOpen(true);
    setOpenQA(false);
    setSlideBack(true);
    setTitle("Slide Manager");
    setOpenDD(false)
  };

  const handleDragDrop = () => {
    setOpen(false);
    setOpenQA(true);
    setOpenDD(true);
    setTrapDD(false);
  };

  const handleBack = () => {
    setOpenDD(false);
    setOpenQA(true);
    setOpen(false);
    setTrapDD(true);
    setSlideBack(false);
    setTitle("Statement");
  };

  useEffect(() => {

    if (rowdata) {
      setRows([rowdata]);
    } else {
      axios.get(questions).then((response) => {
        setRows(response.data)
      });
    }

  }, [rowdata]);


  // const handleClose = () => {
  //     setOpen(false);

  // };

  // if (!questions)
  //   return (
  //     <CircularProgress
  //       size="7rem"
  //       style={{ display: "flex", margin: "auto", height: "98.5vh" }}
  //     />
  //   );



  return (
    <>
      {rows ? (
        <div className="bgcolor">
          <Navbar />
          <Box height={50} />
          <Box sx={{ display: "flex" }}>
            <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <div className="content-wrapper admin-statement px-4">
                <div className="row">
                  <div className=" p-3 question-container">
                    <div className="adding-part">
                      {/* <h3
                   style={{
                     fontSize: "25px",
                     fontWeight: "bolder",
                     letterSpacing: "1px",
                   }}
                 >
                   {title}
                 </h3> */}

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

                      <div className="button-part">

                        {slideBack &&
                          <Button
                            style={{
                              width: "200px",
                              height: "40px",
                              // backgroundColor: "#346BFF",
                              color: "#346BFF",
                              fontWeight: "800",
                              letterSpacing: "0.5px",
                              fontSize: "15px"
                            }}
                            onClick={handleBack}
                          >
                            Back to Manager &#8592;
                          </Button>}

                        {openQA && (
                          <Button
                            style={{
                              width: "250px",
                              height: "40px",
                              // backgroundColor: "#346BFF",
                              color: "#346BFF",
                              fontWeight: "800",
                              letterSpacing: "0.5px",
                              fontSize: "15px",
                            }}
                            onClick={handleDragDrop}
                          >
                            Change Slide Order &#8593; &#8595;
                          </Button>
                        )}

                        {openQA && (
                          <Button
                            style={{
                              width: "250px",
                              height: "40px",
                              backgroundColor: "#346BFF",
                              color: "white",
                              fontWeight: "800",
                              letterSpacing: "1px",
                              fontSize: "17px",
                            }}
                            onClick={handleClickOpen}
                          >
                            ADD SLIDE
                          </Button>
                        )}
                      </div>
                    </div>

                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

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
                            { rows &&
                              rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((row,index) => {
                                return (
                                  <div key={index}>
                                    {/* <TableRow
                                      hover
                                      role="checkbox"
                                      tabIndex={-1}
                                      key={row.sStatementID}
                                    >
                                      <TableCell align="left">  {row.sStatementID} </TableCell>
                                      <TableCell align="left">  {row.sDescription} </TableCell>
                                      {/* <TableCell align="left">  {row.sOptions[1].text} </TableCell> */}



                                    {/* {   console.log(""row.sOptions[0].text"")} */}
                                    {/*</TableRow> */}
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
                                    <h6>{row.sDescription}</h6>
                                    {/* <TableBody>
                                      {
                                        rows.map(((row,i)=>
                                        <div>
                                          {
                                            row.sOptions.map((option,i)=>
                                              <TableRow>

                                              </TableRow>
                                            )
                                          }
                                        </div>
                                        ))
                                      }
                                    </TableBody> */}
                                    {/* <TableBody>
                                      {row.sOptions.map((option,i) =>
                                        
                                          <TableRow
                                            key={i}
                                            sx={{
                                              "&:last-child td, &:last-child th": {
                                                border: 0,
                                              },
                                            }}
                                          >

                                          </TableRow>
                                        )

                                      }
                                    </TableBody> */}
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
                                    </TableBody>   */}
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
                    {/* <div>
                         <TextField
                             className='search-field' id="standard-basic"
                             label="Search here..." variant="standard"
                             inputProps={{ style: { fontSize: 20 } }}
                             InputLabelProps={{ style: { fontSize: 20 } }}
                         />
                     </div> */}

                    {/* <CustomPaginationActionsTable questions={questions} totalQuestions={questions.length} /> */}

                    {open && (
                      <AddSLides
                        questions={questions}
                        setOpen={setOpen}
                        setOpenQA={setOpenQA}
                        setTitle={setTitle}
                      />
                    )}
                    {openQA && trapDD && (
                      <AdminQuestionDetails questions={questions} />
                    )}

                    {openDD && (
                      <SortingSlides
                        questions={questions}
                        handleBack={handleBack}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      ) : (
        <h2>Loading......</h2>
      )}

    </>
  );
};

export default AdminStatement;
