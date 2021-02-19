import React from 'react'
import {NavLink,Link} from 'react-router-dom';
const Navbar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <NavLink exact className="navbar-brand" to="/">My Shop</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
          </div>
          <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
  </div>
</nav>
    )
}
export default Navbar;