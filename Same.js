// import React from "react";
// import './Signup.css';
// import { Link } from "react-router-dom";
// // import Signup from "./Signup";
// export default function Same(){
    
//     return(
//         <div class="signup">
//            <center><form >
//             <h1>Welcome</h1>
//             <hr></hr>
//             <Link to="/signup">
//             <button type="button">Sign-up</button>
//             </Link>
//             {/* <button type="submit" onClick={handleOnClick()} >Sign-up</button>*/}
            
//             &nbsp;&nbsp;&nbsp; 
//                 <h3>Do you have an account?<a class="link1" href='Login'>Login</a></h3>
//                 <button type="reset">Reset</button>

//             </form></center> 
//         </div>
//     )
// }

import React from "react";
import './Same.css';
import { Link } from "react-router-dom";

export default function Same() {
  return (
    <div className="signup-container">
      <center>
        <form className="signup-form">
          <h1 class="head">Welcome to GMRIT trainer</h1>
          <hr className="divider" />
          <Link to="/signup" className="signup-button-link">
            <button className="signup-button">Sign-up</button>
          </Link>
          &nbsp;&nbsp;&nbsp; 
          <h3>Do you have an account?<Link className="login-link" to="/login">Login</Link></h3>
          <button type="reset" className="reset-button">Reset</button>
        </form>
      </center>
    </div>
  );
}
