import React from 'react'
import { Link } from 'react-router-dom'
import loader from '../samsung.png'
const Footer = () => {
  return (
    <footer className="footer mt-5  text-light px-5 pt-5" style={{backgroundColor:"rgb(1, 4, 30)"}}>
      <div className="container d-flex">
        <div className="footer-content   text-center col-md-4">
          <div className='d-flex mx-4'> 
           <img src={loader} alt="Logo" width="60" height="46" className="d-inline-block align-text-top "/>
         <h5 className=' pt-2'>Coursify Task</h5></div>
        <p className='fs-6 p-4 text-start'>Recuriter is on a mission to make hiring the top 5% of IT talent dead simple for leading Indian businesses.</p>
      </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h6>Contact Us</h6>
          <p>If you have any questions, feel free to reach out to us at <Link style={{textDecoration:"none"}} to="mailto:info@recruitmentcompany.com">&#9993; info@recruitmentcompany.com</Link></p>
        </div>
        <div className="col-md-4">
          <h6>Follow Us</h6>
          <ul className="social-icons">
            <li><Link to="https://www.facebook.com/recruitmentcompany"><i className="fa fa-facebook"></i></Link></li>
            <li><Link to="https://www.twitter.com/recruitmentcompany"><i className="fa fa-twitter"></i></Link></li>
            <li><Link to="https://www.linkedin.com/company/recruitmentcompany"><i className="fa fa-linkedin"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    <hr className='text-light'/>
    <div className="footer-content p-2 text-center">
        <p className='text-light-emphasis mb-2'>&copy; 2023 Recuriter. All rights reserved.</p> 
      </div>
  </footer>
  )
}

export default Footer