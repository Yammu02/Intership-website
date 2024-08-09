import React from "react";
import './Nav.css';
export default function Nav(){
    return(
        <div style={{maxWidth:"100%"}}class="container">
            <img class="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovUFImuMwWaLtmf42zzmdBefZMZJvqV1pgyViSA-W6w&s" alt="logo"></img>
        <nav>
            <ul>
                <li><a style={{textDecoration:"none"}}href="App">Home</a></li>
                <li><a style={{textDecoration:"none"}} href="Admin">Admin</a></li>
                <li><a style={{textDecoration:"none"}}href="Same">Trainer</a></li>
                <li><a style={{textDecoration:"none"}}href="Student">Student</a></li>
            </ul>
        </nav>
        </div>
        
    )
}