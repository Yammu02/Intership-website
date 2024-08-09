import React,{useState}from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import './Login.css'
function Login()
{
    const [data,setData]=useState({username:'',password:''})
 const [show,setShow]=useState(false)
 const usenav = useNavigate();
 
const handler=(e)=>{
  const{name,value}=e.target;

  setData((prevState)=>
  ({...prevState,[name]:value}))
}
const submitHandler=()=>{
  // alert(data.email);
   // alert(data.password);
   setShow(true);

   const login = {username:data.username,password:data.password};
   axios.post('http://localhost:8000/login',login).then((res)=>
   {
   
     console.log(res.data[0].login,res.data[0].roletype);
     localStorage.setItem('username',res.data[0].username);
   
     if(res.data[0].id!=='')
     {
       alert('Login Successfully');
     }
   else
   {
     alert('Invaild Details');
   }
   
   if(res.data[0].roletype==='student' && res.data[0])
   {
      alert('logged in successfully');
      alert('hiiii');
     usenav(`/studentpage/${res.data[0].id}`)
   }
   else if (res.data[0].roletype === 'Admin') {
    alert('Logged in successfully as an admin!');
    // Perform the navigation
    usenav(`/Admin`);
  } else {
    alert('Unknown role type or user not found!');
  }
   data.username=''
   
     })
  }
    return(
        <div class="action">
            <center><form class="login1">
            <h1>Login-Form</h1>        
            <hr className="divider2" />
                <br></br>
                <h3 class="heading1">Please enter your login and password!</h3><br></br>
            <label>UserName:
                <input type ="text" name="username" value={data.username} onChange={handler} required/></label><br></br>
                <label>password:
                <input type ="password" name="password" value={data.password} onChange={handler} required/></label><br></br>
               
                <button type="button" class="submit1" onClick={submitHandler}>Login</button><br></br>
                <p ><a href="#!"  class="link2">Forgot password?</a></p>
                <p class="p2">Don't have an account?</p> <a href="#!" ><Link class="signuplink" to={'/Signup'}>Signup</Link></a>
      
            </form></center>
        </div>
    );
}
export default Login;