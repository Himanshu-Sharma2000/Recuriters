import React  from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">

  <div className="container-fluid">
  <Link className="navbar-brand mx-4 fs-2" to="/">
      <img src="https://e7.pngegg.com/pngimages/396/230/png-clipart-samsung-knox-logo-android-the-international-consumer-electronics-show-others-angle-company.png" alt="Logo" width="60" height="46" className="d-inline-block align-text-top "/>
      <strong style={{color:"rgb(1, 4, 30)"}}>Recuriters</strong>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link  fs-5" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fs-5" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Candidate Profiles </Link></li>
            <li><Link className="dropdown-item" to="/">Notifications </Link></li>
            <li><Link className="dropdown-item" to="/">Branding </Link></li>
            <li><Link className="dropdown-item" to="/">Automations</Link></li>
            <li><Link className="dropdown-item" to="/">Mobile optimised</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fs-5" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Blog</Link></li>
            <li><Link className="dropdown-item" to="/">Job Description</Link></li>
            <li><Link className="dropdown-item" to="/">Case Studies</Link></li>
            <li><Link className="dropdown-item" to="/">Tech Salary data </Link></li>
            <li><Link className="dropdown-item" to="/">Connect with other Developers via our chat bot</Link></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link fs-5" to="/about">About</Link>
        </li>

        

      </ul>
      <button class="btn btn-outline-dark my-2 my-sm-0  ms-5" type="button">Login</button>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar