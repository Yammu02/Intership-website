import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function Studentpage(){
   const[data,setData]=useState([])
//   //  const [completed,setCompleted] = useState()
//   //  const [processing,setProcessing] = useState()
//   //  const [newjob,setNewjob] = useState()
   const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 100);
   }, []);
   const useparam = useParams();
   const{id}=useparam
  useEffect(()=>{
    console.log('this is useeffect')
    axios.get(`http://localhost:8000/student/${id}`).then((res)=>{
      setData(res.data);
    })
},[])
  return( 
    <div>
    {isLoading ? (
      <p style={{textAlign:'center'}}><div class="spinner-border text-danger"></div>Loading...</p>
    ) : (
    <div>
    {/* <div style={{backgroundImage: `url("https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29sb3JmdWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80")`}}> */}
<table class="table table-striped">

<thead>
      <tr>
        <th scope="col">id</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">totalfee</th>
      <th scope="col">discount</th>
      <th scope="col">balance</th>
      <th scope="col">duedate</th>
      <th scope="col">clearedfee</th>
      <th scope="col">action</th>
        
      </tr>
    </thead>
    
    {data.map((item)=>
    <tbody>
    
      <tr>
        <td>{item.id}</td>
      <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.totalfee}</td>
        <td>{item.discount}</td>
        <td>{item.balance}</td>
        <td>{item.duedate}</td>
        <td>{item.clearedfee}</td>
        <td>
      {/* <td><button type="button" class="btn btn-outline-success"><Link to='/payment'>Pay</Link></button></td> */}
       
        {/* <button type="button" class="btn btn-outline-warning"><Link to={`vendoredit/${item.id}`}><i class="bi bi-pen"style={{colour:'white'}} data-toggle="tooltip" title="Edit"></i></Link></button> */}
         <button type="button" class="btn btn-outline-warning"><Link to={`/pay`}>Pay</Link></button></td>
      </tr>
     
      </tbody>
 )}

</table>

   </div> )}
   </div>
  )
}
export default Studentpage;