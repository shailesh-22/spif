import { TextField , Box, styled ,shadows  } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Component = styled(Box)`
border-radius: 1rem;

`

const Login2 = () => {
  return (
    <Component  >
      <section className="vh-100" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container  h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col col-xl-10"  >
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0" >



                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black"  >
                      <form className=''>
                        <div className="d-flex justify-content-center align-items-center mb-3 pb-1" >

                          <span className="d-flex justify-content-center h1 fw-bold mb-0">
                            <img src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" style={{ width: "150px" }} alt="" />
                          </span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 , fontSize: '40px' }}>Sign in to your account</h5>
                        <div className="form-outline mb-4" >
                         <TextField variant='outlined' type='email' label="Email" placeholder='Email' name='email' fullWidth />
                        </div>
                        <div className="form-outline mb-4">
                        <TextField variant='outlined' type='password' label="Password" placeholder='Password' name='password' fullWidth  />
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-primary btn-lg btn-block" type="submit">Sign in</button>
                        </div>
                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p  style={{ color: '#393f81' }}>Don't have an account? <Link to="/signup2" style={{ color: '#393f81' }}>Register here</Link></p>

                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 d-none d-md-block " style={{ backgroundColor: "#00d084" ,  borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem'  }}  >
                    <img src="https://www.spif.in/wp-content/uploads/2021/09/mains.jpg" alt="login form" className="img-fluid" style={{ marginTop: "120px" }} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Component>
  )
}

export default Login2