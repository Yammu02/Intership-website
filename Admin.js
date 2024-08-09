import React from "react";
import './Admin.css';
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="Admin">
      <center>
        <form className="Admin-form">
          <h1>Welcome to Admin</h1>
          <hr className="divider1" />
          &nbsp;&nbsp;&nbsp; 
          <h3>Do you have an account?<Link className="login-link1" to="/login">Login</Link></h3>
          {/* <button type="reset" className="reset-button"><Link className="" to="/Edit">Edit</Link></button> */}
          <Link className="" to="/Edit">Edit</Link>
        </form>
      </center>
    </div>
  );
}