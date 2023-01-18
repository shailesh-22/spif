import React, { useState } from 'react'
import { Box, Card, Typography } from '@mui/material'
import FormDialog from './Dialog'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Menubar/Navbar';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup";

const Register2 = () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    lastName: Yup.string().required("Last Name is required"),
    firstName: Yup.string().required("First Name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City name is required"),
    state: Yup.string().required("State name is required"),
    country: Yup.string().required("Country name is required"),
    zip: Yup.number().typeError("Zip code is required"),
    profession: Yup.string().required("Profession is required"),
    date_of_birth: Yup.date().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    number: Yup.number().typeError("Phone Number is required").min(10, 'Min value 10.').required("Required"),
    email: Yup.string().required("Email is required").email("Email is invalid")
  })



  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const LastFirstDonotMatch = (value) => {
    if (!value || !getValues('firstName')) {
      return true;
    }
    return value !== getValues('firstName')
  }

  const onSubmit = (data) => {

    console.log(JSON.stringify(data, null, 2));
    setOpen(true);  
     
  };

  return (
    <div class="container">

      <Navbar />
      <Box height={50} />
      <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            gutterbutton="true"
            variant="h5"
            align="center"
            style={{ maxWidth: "1000px", margin: "0 auto", padding: "5px" }}
          >
            User Profile Details
          </Typography>
          <Card
            style={{ maxWidth: "100%", margin: "5px auto", padding: "10px 10px 10px 10px" }}
            elevation={10}
          >
            <div class="p-2">
              <h5>General information</h5>
            </div>


            <form className="row g-3 p-2 needs-validation" >
              <div className="col-md-6">

                <label htmlFor="validationDefault01" className="form-label">First Name</label>
                <input type="text"
                  name='firstName'
                  className="form-control"
                  id="validationDefault01"
                  required
                  {...register("firstName")}
                  error={errors.firstName ? true : false} />

                <Typography variant="standard" color="#dc4c64" >
                  {errors.firstName?.message}
                </Typography>

              </div>

              <div className="col-md-6">
                <label htmlFor="validationDefault02" className="form-label">Last Name</label>
                <input
                  type="text"
                  name='lastName'
                  className="form-control"
                  id="validationDefault02"
                  required
                  {...register("lastName", { validate: LastFirstDonotMatch })}
                  error={errors.lastName ? true : false}
                />
                <Typography variant="standard" color="#dc4c64">
                  {errors.lastName?.message}
                </Typography>
                {/* {errors.lastName?.type ==="pattern" && ( 
                  <Typography className='invalid-feedback' >
                Last Name and First Name can't be same
                </Typography>
                )} */}
              </div>

              <div className="col-md-6">
                <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">@</span>
                  <input
                    type="mail"
                    name='email'
                    className="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    {...register("email")}
                    error={errors.email ? true : false}
                  />
                </div>
                <Typography variant="standard" color="#dc4c64">
                  {errors.email?.message}
                </Typography>
              </div>

              <div className="col-md-6">
                <label htmlFor="validationDefaultNumber" className="form-label">Phone</label>
                <input
                  type="number"
                  name='number'
                  className="form-control"
                  id="validationDefaultNumber"
                  {...register("number")}
                  error={errors.number ? true : false}
                />
                <Typography variant="inherit" color="#dc4c64">
                  {errors.number?.message}
                </Typography>
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

              <div className="col-md-4" >


                <label htmlFor="validationDefaultUsername" className="form-label">Gender</label>
                <Controller
                  control={control}
                  name="gender"
                  
                  id="gender"
                  {...register("gender")}
                  error={errors.gender ? true : false}
                  inputRef={register()}
                  render={({ field: { onChange } }) => (
                <select class="form-select" type="select"  onChange={(e) => onChange(e.target.value)} aria-label="Default select example" required>
                  <option selected value>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                   
                </select>
                    )}
                    />
                    <Typography variant="inherit" color="#dc4c64">
                    {errors.gender?.message}
                     </Typography>
              </div>

              <div className="col-md-4" >
                <label htmlFor="validationDefault05" className="form-label">Date-of-birth</label>
                <Controller
                      control={control}
                       name="date_of_birth"
                       {...register("date_of_birth")}
                       error={errors.date_of_birth ? true : false}
                     
                      inputRef={register()}
                      render={({ field: { onChange } }) => (
                <input
                  type="date"
                  className="form-control"
                  id="validationDefault05"
                  style={{ padding: "6px" }}
                  onChange={(e) => onChange(e.target.value)}
                />
                )}       
                />
                <Typography variant="inherit" color="#dc4c64">
                  {errors.date_of_birth?.message}
                </Typography>  
              </div>


              <div className="col-md-4" >
                <label htmlFor="validationDefaultUsername" className="form-label">Profession</label>
                <Controller
                  control={control}
                  name="profession"
                  defaultValue=""
                  {...register("profession")}
                  error={errors.profession ? true : false}
                  inputRef={register()}
                  render={({ field: { onChange } }) => (

                    <select class="form-select" onChange={(e) => onChange(e.target.value)} type="select" aria-label="Default select example" required>
                      <option selected value>Select</option>
                      <option value="Employed">Employed</option>
                      <option value="Business Owners">Business Owners</option>
                      <option value="Seeking Employemen">Seeking Employement</option>
                      <option value="Student">Student</option>
                      <option value="Parent">Parent</option>
                      <option value="Others">Others</option>
                    </select>
                  )}
                />
                <Typography variant="inherit" color="#dc4c64">
                  {errors.profession?.message}
                </Typography>
               
              </div>


              <div style={{ marginBottom: "0px", marginTop: "40px", }}>
                <h5>Location</h5>
              </div>

              <div className="col-md-9">
                <label htmlFor="validationDefault03" className="form-label">Address</label>
                <input
                  type="text"
                  name='address'
                  className="form-control"
                  id="validationDefault03"
                  {...register("address")}
                  error={errors.address ? true : false}
                />
                <Typography variant="standard" color="#dc4c64">
                  {errors.address?.message}
                </Typography>
              </div>

              <div className="col-md-3">
                <label htmlFor="validationDefault05" className="form-label">City</label>
                <input
                  type="text"
                  name='city'
                  className="form-control"
                  id="validationDefault05"
                  {...register("city")}
                  error={errors.city ? true : false}
                />
                <Typography variant="standard" color="#dc4c64">
                  {errors.city?.message}
                </Typography>
              </div>

              <div className="col-md-4">
                <label htmlFor="validationDefault05" className="form-label">State</label>
                <input
                  type="text"
                  name='state'
                  className="form-control"
                  id="validationDefault05"
                  {...register("state")}
                  error={errors.state ? true : false}
                />
                <Typography variant="standard" color="#dc4c64">
                  {errors.state?.message}
                </Typography>
              </div>

              <div className="col-md-4">
                <label htmlFor="validationDefault05" className="form-label">Country</label>
                <input
                  type="text"
                  name='country'
                  className="form-control"
                  id="validationDefault05"
                  {...register("country")}
                  error={errors.country ? true : false}
                />
                <Typography variant="standard" color="#dc4c64">
                  {errors.country?.message}
                </Typography>
              </div>

              <div className="col-md-4">
                <label htmlFor="validationDefault05" className="form-label">Zip</label>
                <input
                  type="number"
                  name='zip'
                  className="form-control"
                  id="validationDefault05"
                  {...register("zip")}
                  error={errors.zip ? true : false}
                />
                <Typography variant="standard" color="#dc4c64">
                  {errors.zip?.message}
                </Typography>
              </div>

              <div align="right" text-align="center">

                {/* <div className="col-12" >
    <div className="form-check"  >
      <div align="right">
    
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="invalidCheck2">
        Agree to terms and conditions
      </label>
      </div>
    </div>
  </div> */}

                <div className="col-12 " >
                  <button className="btn btn-primary mx-2" type="reset" value="reset"  >Reset</button>
                  <button className="btn btn-primary " type="submit" value="submit"  onClick={handleSubmit(onSubmit)}>Register</button>
                </div>
              </div>


            </form>
          </Card>
          <FormDialog open={open} handleClose={handleClose} />
        </Box>
      </Box>



    </div>
  )
}

export default Register2