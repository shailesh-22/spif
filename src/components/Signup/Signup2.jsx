import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup2 = () => {
  return (
    <div>
        <section className="vh-100"  style={{ backgroundColor: '#f5f5f5' }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '1rem'}}>
          <div className="row g-0">

          <div className="d-flex align-items-center  col-md-6 col-lg-5 d-none d-md-block" style={{ backgroundColor: "#00d084" ,  borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem'  }}   >
              <img src="https://www.spif.in/wp-content/uploads/2021/08/contact-image.png" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem', marginTop: '150px' }} />
            </div>
            
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body  text-black">
                <form >
                  <div className="d-flex justify-content-center align-items-center  " >
                   
                    <img src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" style={{width:"150px"}} alt="" />
                  </div>
                  <h5 className="fw-normal " style={{letterSpacing: 1}}>Sign up to your account</h5>

                  <div className="form-outline mb-4">
                  <TextField variant='outlined' type='text' label="First Name" placeholder='Enter Your First Nmae' name='firstName' fullWidth style={{ animationName : 'unset' }}/> 
                  </div>

                  <div className="form-outline mb-4">
                  <TextField variant='outlined' type='text' label="Last Name" placeholder='Enter Your Last Nmae' name='lastName' fullWidth /> 
                  </div>

                  <div className="form-outline mb-4">
                  <TextField variant='outlined' type='email' label="Email" placeholder='Email' name='email' fullWidth style={{borderColor: 'unset'}} />
                  </div>

                  <div className="form-outline mb-4">
                  <TextField variant='outlined' type='password' label="Password" placeholder='Password' name='password' fullWidth style={{borderColor: 'unset'}} />
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-primary btn-lg btn-block" type="button">Sign up</button>
                  </div>

               
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Allready have an account? <Link to="/login2" style={{color: '#393f81'}}>Sign in</Link></p>
                 
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Signup2