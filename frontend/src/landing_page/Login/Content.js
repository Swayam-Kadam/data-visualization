import React, { useState } from 'react'
import {ToastContainer,toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';  // Ensure correct import

const Content = () => {

  const navigate = useNavigate();
  
  const[formData,setFormData] = useState({
    email:'',
    password:''
  });

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/Auth/login',formData,{
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({email:formData.email,password:formData.password})
      })
      const json = await response.data
      console.log(json);

      if(json.success){
        localStorage.setItem('token',json.authtoken);

        if(json.role=== "admin"){
          toast.success ("Admin Login Successfull")
          setTimeout(()=>{
            navigate("/admin/");
          },500)
        }else{
          toast.success("User Login Successfull")
          setTimeout(()=>{
            navigate("/");
          },500)
        }
      }
    } catch (error) {
      console.log('Error for Sign-Up:',error);
       toast.error("Fail LogIn So Plz Try Again");
    }
  }


   // Google Login Success Handler
   const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Decoded Google User:', decoded);

      const res = await axios.post('http://localhost:9001/Auth/google', {
        token: credentialResponse.credential,
      });
      const json = await res.data
      console.log(json);
      localStorage.setItem('token',json.authtoken);
      console.log('Google Login Success:', res.data);
      toast.success('Google Login Successful');
      navigate("/");
    } catch (error) {
      console.error('Google Login Failed:', error);
      toast.error('Google Login Failed! Please try again.');
    }
  };


  
  return (
    <div className='container'>
      <ToastContainer  position="top-center"  autoClose={3000}   hideProgressBar={false}  newestOnTop={true}  closeOnClick  pauseOnFocusLoss  draggable  pauseOnHover/>
      <div className="container" style={{margin:'0 auto',width: '50%',marginTop:'8rem'}}>
       <form onSubmit={handleSubmit} style={{backgroundColor:'#dee2e6'}}>
        <div className="container text-center p-5">
            <h2>Login</h2>
            <input type="email" placeholder='Email' className='form-control   my-4' name="email" value={formData.email} onChange={handleChange}/>
            <input type="password" placeholder='Password' className='form-control  my-4' name="password" value={formData.password} onChange={handleChange}/>
            <button className='btn btn-success' >Login</button><br/><br/>

            <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => toast.error("Google Login Failed")}
              /><br/>

              <p>Register a New User Click Here <Link to='/signup'>Register/Signup</Link></p>
        </div>
       </form>
      </div>
    </div>
  )
}

export default Content
