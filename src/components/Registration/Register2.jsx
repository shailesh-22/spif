import React, { useState } from 'react'
import { Box, Card, Typography } from '@mui/material'
import FormDialog from './Dialog'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Menubar/Navbar';


const Register2 = () => {

  const [open, setOpen] = useState(false); 

  const handleClose = () => {
    setOpen(false);
  };

 const navigate = useNavigate();

  return (
    <div class="container">

      <Navbar/>
      <Box height={50} />
        <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Typography
        gutterbutton="true"
        variant="h5"
        align="center"
        style={{  maxWidth:"1000px", margin: "0 auto" , padding: "5px"}}
      >
        User Profile Details
      </Typography>
    <Card
        style={{ maxWidth:"100%", margin: "5px auto", padding: "10px 10px 10px 10px"}}
        elevation={10}
      >
        <div class="p-2">
               <h5>General information</h5>
        </div>
       

     <form className="row g-3 p-2">
  <div className="col-md-6">

    <label htmlFor="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01"  required />

  </div>

  <div className="col-md-6">
    <label htmlFor="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02"  required />
  </div>

  <div className="col-md-6">
    <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="mail" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
    </div>
  </div>

  <div className="col-md-6">
    <label htmlFor="validationDefaultNumber" className="form-label">Phone</label>
    <input type="number" className="form-control" id="validationDefaultNumber"  required />
  </div>

  {/* <div className="col-md-6">
    <label htmlFor="validationDefaultNumber" className="form-label">Date Of Birth</label>
    <Datepicker
                type="date"
                name="datepic"
                placeholder="DateRange"
                value={date}
                onChange={(e) => setDate(e.target.value)}
             />
  </div> */}

  <div className="col-md-6" >
  <label htmlFor="validationDefaultUsername" className="form-label">Gender</label>
  <select class="form-select" type="select" aria-label="Default select example" required>
  <option selected disabled value>Select</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
  <option value="3">Others</option>
 </select>
 </div>

 <div className="col-md-6" >
  <label htmlFor="validationDefaultUsername" className="form-label">Profession</label>
  <select class="form-select" type="select" aria-label="Default select example" required>
  <option selected disabled value>Select</option>
  <option value="1">Employed</option>
  <option value="2">Business Owners</option>
  <option value="3">Seeking Employement</option>
  <option value="4">Student</option>
  <option value="5">Parent</option>
  <option value="6">Others</option>
 </select>
 </div>
 

 <div class="p-2">
               <h5>Location</h5>
        </div>

  <div className="col-md-9">
    <label htmlFor="validationDefault03" className="form-label">Address</label>
    <input type="text" className="form-control" id="validationDefault03" required />
  </div>

  <div className="col-md-3">
    <label htmlFor="validationDefault05" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault05" required />
  </div>

  <div className="col-md-4">
    <label htmlFor="validationDefault05" className="form-label">State</label>
    <input type="text" className="form-control" id="validationDefault05" required />
  </div>

  <div className="col-md-4">
    <label htmlFor="validationDefault05" className="form-label">Country</label>
    <input type="text" className="form-control" id="validationDefault05" required />
  </div>

  <div className="col-md-4">
    <label htmlFor="validationDefault05" className="form-label">Zip</label>
    <input type="number" className="form-control" id="validationDefault05" required />
  </div>
  
<div >
<div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck2" required />
      <label className="form-check-label" htmlFor="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>

  <div className="col-12 text-align-center">
    <button className="btn btn-primary " type="submit" onClick={()=> navigate("/terms_conditions")}>Register</button>
  </div>
</div>

</form>
</Card>
<FormDialog open={open} handleClose={handleClose}/> 
</Box>
</Box>

    </div>
  )
}

export default Register2