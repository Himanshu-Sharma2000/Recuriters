import React  from 'react'
import { Link } from 'react-router-dom'
import loader from "../samsung.png"
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top text-light " style={{background:"rgb(5 2 38)"}}>

  <div className="container-fluid">
  <Link className="navbar-brand mx-4 fs-2" to="/">
      <img src={loader} style={{filter:"invert(70%)"}} alt="Logo" width="60" height="46" className="d-inline-block align-text-top "/>
      <strong style={{color:"white"}}>Recuriters</strong>
    </Link>

    <div className="collapse navbar-collapse  justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0" >
        <li className="nav-item mx-2">
          <Link className="nav-link  fs-5" aria-current="page" to="/" style={{color:"white"}} >Home</Link>
        </li>
        
        <li className="nav-item dropdown" >
          <Link className="nav-link dropdown-toggle fs-5" to="/" role="button" style={{color:"white"}} data-bs-toggle="dropdown" aria-expanded="false">
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
          <Link className="nav-link dropdown-toggle fs-5" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
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
          <Link className="nav-link fs-5" to="/about" style={{color:"white"}}>About</Link>
        </li>

        

      </ul>
      <button class="btn btn-outline-light my-2 my-sm-0  ms-5" type="button">Login</button>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar