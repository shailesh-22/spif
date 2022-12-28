import React from 'react'
import { Link } from 'react-router-dom'

const Signup2 = () => {
  return (
    <div>
        <section className="vh-100" style={{backgroundColor: '#9A616D'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
            
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-3 p-lg-5 text-black">
                <form>
                  <div className="d-flex justify-content-center align-items-center mb-3 pb-1">
                   
                    <img src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" style={{width:"150px"}} alt="" />
                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign up to your account</h5>

                  <div className="form-outline mb-4">
                    <input type="text"  className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">First Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text"  className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Last Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password"  className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-success btn-lg btn-block" type="button">Sign up</button>
                  </div>

               
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Allready have an account? <Link to="/login2" style={{color: '#393f81'}}>Sign in</Link></p>
                 
                </form>
              </div>
            </div>
            <div className="d-flex align-items-center  col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://www.spif.in/wp-content/uploads/2021/08/contact-image.png" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem', height:"590px"}} />
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