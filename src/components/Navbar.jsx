import React from "react";
import img from '../images/processed-b3755818-622d-4bfc-acd7-e12b9dbbb042_q6CuOmDq-removebg-preview.png'
const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-secondary-subtle ">
  <div className="container-fluid py-1 ">
    <a className="navbar-brand" href="/"> <img src={img} alt="Logo" width="auto" height="200 d-inline-block align-text-top"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end px-4" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href=" ">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
     
    </>
  );
};

export default Navbar;
