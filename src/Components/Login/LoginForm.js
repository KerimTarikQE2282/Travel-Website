import React from 'react'
import Axios from 'axios'
import NavBar from '../../NavBar/NavBar'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate=useNavigate()
  const url="https://localhost:44389/api/Admin/AdminLogin"
  const [Credentials,setCredentials]=React.useState(
    {
      Email:"",
      Password:""
    }
  )
  function handelChange(e){
    const newdata={...Credentials}
newdata[e.target.id]=e.target.value
setCredentials(newdata)
console.log(Credentials)
  }
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      Email:Credentials.Email,
      Password : Credentials.Password
  
    }).then(res=>
      {
     if(res.data.id!=null){
      navigate('/AdminDashBoard')
     }
  
      }
    )
    }
  return (
    <div>
    <NavBar/>
    <div className='LoginForm'>
      <form onSubmit={(e)=>submit(e)}>
        <p>Email</p>
        <input type="text"
       
        onChange={(e)=>handelChange(e)}
        id='Email'
        value={Credentials.Email}
        ></input>
        <br>
        </br>
        <p>Password</p>
        <input type="password"
       
        onChange={(e)=>handelChange(e)}
        id='Password'
        value={Credentials.Password}
        ></input>
     <button>submit</button>
      </form>
    </div>
    </div>
  )
}

export default LoginForm
