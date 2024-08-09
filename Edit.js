import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState,useEffect,} from "react";
import {  } from 'react-router-dom';
import { useParams} from 'react-router-dom';

export default function Edit()
{
    const {id}=useParams();
    // const [dropval,setDrop] = useState([])
    console.log('id',id);
    const[data,setData]=useState({username:'',email:'',totalfee:'',discount:'',balance:'',duedata:'',cleardfee:'',})
    const[show,setShow]=useState(false);
    // const usenav=useNavigate();

const handler=(e)=>
{
    const{name,value}=e.target;

    setData((prevState)=>
    ({...prevState,[name]:value}))
}


const submitHandler=()=>{
setShow(true);
const details={username:data.username,email:data.email,totalfee:data.totalfee,discount:data.discount,balance:data.balance,duedate:data.duedate,clearedfee:data.clearedfee}
axios.post(`http://localhost:8000/studentpage/${id}`,details).then((res)=>{
setData(res.data);    
console.log(res.data)
data.details=''


})
}


useEffect(() => {
    console.log('this is useEffect')
    axios.get(`http://localhost:8000/Admin/${id}`).then((res)=>{
      console.log(res.data)
        setData({username:res.data[0].username,email:res.data.email,totalfee:res.data.totalfee,discount:res.data.discount,balance:res.data.balance,duedate:res.data.duedate,clearedfee:res.data.clearedfee})
})
},[])

    return(
        
        
        <div style={{backgroundImage: `url("https://static2.tripoto.com/media/filter/nl/img/950250/TripDocument/1542527715_psx_20181118_131605.jpg")`}}>
       
        <div>
            {/* <section class="h-100 h-custom" style="background-color: #8fc4b7;"> */}
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">

           

              <div class="row mb-1 pb-2 pb-md-0 mb-md-5">
                <div class="col-md-6">

                  <div class="form-outline">
                    <input type="text" class="form-control" name="username" value={data.username} placeholder="username" onChange={handler} required />
                    <label class="form-label" for="form3Example1w">username</label>
                  </div>
                  <div class="form-outline">
                    <input type="text" class="form-control" name="email" value={data.email} placeholder="email" onChange={handler} required />
                    <label class="form-label" for="form3Example1w">email</label>
                  </div>
                  <div class="form-outline">
                    <input type="text" class="form-control" name="totalfee" value={data.totalfee} placeholder="totalfee" onChange={handler} required />          
                              <label class="form-label" for="form3Example1w">totalfee </label>
                  </div>
                  <div class="form-outline">
                    <input type="text" class="form-control" name="discount" value={data.discount} placeholder="discount" onChange={handler} required />          
                              <label class="form-label" for="form3Example1w">discount</label>
                  </div>
                  
                  <div class="form-outline">
                    <input type="text" class="form-control" name="balance" value={data.balance} placeholder="balance"  onChange={handler} required />          
                              <label class="form-label" for="form3Example1w">balance</label>
                  </div>
                  <div class="form-outline">
                    <input type="text" class="form-control" name="duedate" value={data.duedate} placeholder="duedate" onChange={handler} required />          
                              <label class="form-label" for="form3Example1w">duedate</label>
                  </div>
                  <div class="form-outline">
                    <input type="text" class="form-control" name="cleardfee" value={data.clearedfee} placeholder="clearedfee" onChange={handler} required />          
                              <label class="form-label" for="form3Example1w">clearedfee</label>
                  </div>
                  {/* <div>
<label class="form-label" for="form3Example1w">vendorname</label>
        <select onChange={handler} name='roletype'>
        <option></option>
        {dropval.map((item)=> 
        
          <option value={item.id}>{item.username}</option>
        )}
</select>
</div> */}
                  <button type="submit" class="btn btn-success btn-lg mb-1"  onClick={submitHandler}>submit</button><br/>
              {/* <button type="reset" class="btn btn-primary btn-lg mb-1">Reset</button><br/> */}
              {/* <button class="btn btn-primary btn-lg mb-1"><Link to={`client/${id}`} style={{color:'white'}}>Back</Link></button> */}
            
                </div>
                
              </div>

               {/* <button type="submit" class="btn btn-success btn-lg mb-1"  onClick={submitHandler}><Link to='/application'>Submit</Link></button><br/>
              <button type="reset" class="btn btn-primary btn-lg mb-1">Reset</button><br/>
          */}

           

          </div>
        </div>
      </div>
    </div>
  </div>
             
        
    )
}