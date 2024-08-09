import React from "react";
import './Navbar.css';
export default function Navbar(){
    return(
        <div class="container">
            <img class="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovUFImuMwWaLtmf42zzmdBefZMZJvqV1pgyViSA-W6w&s" alt="logo"></img>
        <nav>
            <ul>
                <li><a href="App">Home</a></li>
                <li><a href="Signup">Sign-Up</a></li>
                <li><a href="Login">Login</a></li>
                <li><a href="Aboutus">AboutUs</a></li>
            </ul>
        </nav>
        </div>
        
    )
}