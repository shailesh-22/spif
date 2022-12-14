import React from 'react'
import { Link } from 'react-router-dom'


const Login2 = () => {
  return (
    <div>
<section className="vh-100" >
  <div className="container  h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
           
            

            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black ">
                <form>
                  <div className="d-flex justify-content-center align-items-center mb-3 pb-1">
                    
                    <span className="d-flex justify-content-center h1 fw-bold mb-0">
                        <img src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" style={{width:"150px"}} alt="" />
                    </span>
                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into your account</h5>
                  <div className="form-outline mb-4">
                    <input type="email" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password"  className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button className="btn btn-success btn-lg btn-block" type="button">Sign in</button>
                  </div>
                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to="/signup2" style={{color: '#393f81'}}>Register here</Link></p>
                
                </form> 
              </div>
            </div>
            <div className="col-md-6 col-lg-5 d-none d-md-block " style={{backgroundColor:"#00d084",}}  >
              <img src="https://www.spif.in/wp-content/uploads/2021/09/mains.jpg" alt="login form"  className="img-fluid" style={{borderRadius: '1rem 0 0 1rem',  width:"500px", marginTop:"150px"}} />   
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

export default Login2