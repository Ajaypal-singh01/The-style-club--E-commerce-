import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/logo-style-club.jpeg';

const navbar =()=>{
    return(
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img  className="img-logo" src={logo} alt="pic" width="50" height="40"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-10" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    
        <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page"  to="/">Men</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link active"  to="/Women">Women</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link active"  to="/Kid">kid</Link>
        </li>
       
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
    )

}
export default navbar;