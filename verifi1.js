import React, { useState,axios } from 'react';
import './sign.css';

export default function Signin() {
   const [data,setData]=useState({username:"",email:"",password:""})
   const [show,setShow]=useState(false);
   


   const handler=(e)=>{
const {value,name}=e.target;
   
   setData((prevstate)=>
   ({...prevstate,[name]:value})
   )}
   const submitHandler=()=>{
      setShow(true);
   const username={username:data.username,email:data.email,password:data.password}
   axios.post('http://localhost:8000/form',username).then((res)=>
   {
      setData(res.data)
      console.log(res.data)
   })

   }
    return(
       <div class="form">
        <center><h1>welcome to sign in page</h1></center>
        <form>
            <center>
           <div>
           <lable>username</lable>
            <input type="text"  class="from-control" name="username" placeholder="username" value={data.username} onChange={handler} required/>
            </div>
         
            <div>
           <lable>email</lable>
            <input type="text"  class="from-control-1" name="email" placeholder="email" value={data.email} onChange={handler} required/>
            </div>
            <div>
           <lable>password</lable>
            <input type="password"  class="from" name="password" placeholder="password" value={data.password} onChange={handler} required/>
            </div>
           <button type="button" class="submit-btn" onClick={submitHandler}> submit</button>
           <p>Dont have an account?<a href="Login">Login</a></p>
        <p> Forgot password?</p>
           </center>  
        </form>
       </div>

    );
}