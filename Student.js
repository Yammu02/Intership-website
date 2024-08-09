import React from "react";
import './Admin.css';
import { Link } from "react-router-dom";

export default function Student() {
  return (
    <div className="Admin">
      <center>
        <form className="Admin-form">
          <h1>Student-Form</h1>
          <hr className="divider1" />
          <br/>
          <Link to="/signup" className="signup-button-link">
            <button className="signup-button">Sign-up</button>
          </Link>
          &nbsp;&nbsp;&nbsp; 
          <h3>Do you have an account?<Link className="login-link1" to="/login">Login</Link></h3>
          <button type="reset" className="reset-button">Reset</button>
        </form>
      </center>
    </div>
  );
}