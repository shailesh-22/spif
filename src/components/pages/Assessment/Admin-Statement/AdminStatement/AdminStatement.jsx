import React from "react";
import "./adminStatement.css";
import { Button, Box } from '@mui/material'
import { useState } from "react";
import useFetch from "../../Custom Hook/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import AdminQuestionDetails from "./AdminQuestionDetails";
import AddSLides from "../Adding-Slides/AddSLides";


// import DraggableComp from "../Sample Dragging Code/draggable";
import SortingSlides from "../Sample Dragging Code/SortingSlides";
import Navbar from "../../../../Menubar/Navbar";
import Sidenav from "../../../../Menubar/Sidenav";

const AdminStatement = () => {


  let { data: questions } = useFetch("http://103.160.153.38:8020/limens/statements_view/");

  const [open, setOpen] = useState(false);

  const [openQA, setOpenQA] = useState(true);

  const [openDD, setOpenDD] = useState( false );

  const [ trapDD, setTrapDD ] = useState( true);

  const [title, setTitle] = useState("Statement");

  const handleClickOpen = () => {
    setOpen(true);
    setOpenQA(false);
    setTitle("Slide Manager");
  };

  const handleDragDrop = () => {
    setOpen(false);
    setOpenQA(true);
    setOpenDD(true);
    setTrapDD(false);
  };

  const handleBack = () =>{
    setOpenDD(false);
    setOpenQA(true);
    setOpen(false);
    setTrapDD(true);
  }

  // const handleClose = () => {
  //     setOpen(false);

  // };

  if (!questions)
    return (
      <CircularProgress
        size="7rem"
        style={{ display: "flex", margin: "auto", height: "98.5vh" }}
      />
    );

  return (
    <>
       <div className='bgcolor'>
      <Navbar/>
      <Box height={50} />
        <Box sx={{ display: 'flex' }}>
        <Sidenav/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="content-wrapper admin-statement px-4">
        <div className="row">
          <div className=" p-3 question-container">
            <div className="adding-part">
              <h3
                style={{
                  fontSize: "25px",
                  fontWeight: "bolder",
                  letterSpacing: "1px",
                }}
              >
                {title}
              </h3>

              <div className="button-part">

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
            {openQA && trapDD && <AdminQuestionDetails questions={questions} />}

            { openDD && <SortingSlides questions = { questions } handleBack={handleBack} />  }
          </div>
        </div>
      </div>
      </Box>
      </Box>
      </div>
    </>
  );
};

export default AdminStatement;
