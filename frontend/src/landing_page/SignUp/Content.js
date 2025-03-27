import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import  jwtDecode  from 'jwt-decode';





const Content = () => {

  const navigate = useNavigate();

  const navigated = () =>{
    toast.success("Sign Up SuccessFully")
    setTimeout(() => {
      navigate('/');
  }, 1000);
  }

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    cpassword:''
  })
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(formData.password !== formData.cpassword){
      toast.error("Passwords and Conform Password do Not Match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:9001/Auth/register',formData,{
        headers:{
          'Content-Type':'application/json',
        },
      })
      console.log("Sign Up Successfull",response.data)
      toast.success("Sign Up Successfully")
      navigated();

      // Optionally, clear the form after successful submission
    setFormData({
      name:'',
      email:'',
      password:'',
      cpassword:''
    });
    } catch (error) {
      console.log('Error for Sign-Up:',error);
       toast.error("Fail SignUp So Plz Try Again");
    }

  }

   // Google Login Success Handler
   const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Decoded Google User:', decoded);

      const res = await axios.post('http://localhost:9001/Auth/google', {
        token: credentialResponse.credential,
      });

      console.log('Google Login Success:', res.data);
      toast.success('Google Login Successful');
      navigated();
    } catch (error) {
      console.error('Google Login Failed:', error);
      toast.error('Google Login Failed! Please try again.');
    }
  };

  return (
    <div className='container mb-5'>
      <ToastContainer  position="top-center"  autoClose={3000}   hideProgressBar={false}  newestOnTop={true}  closeOnClick  pauseOnFocusLoss  draggable  pauseOnHover/>
      <div className="row"></div>
      <div className="container" style={{margin:'0 auto',width: '50%',marginTop:'8rem'}}>
       <form onSubmit={handleSubmit} style={{backgroundColor:'#dee2e6'}}>
        <div className="container text-center p-5">
            <h2 className='text-center'>Sign Up</h2>
            <input type='text' placeholder='name' className='form-control  ' name="name" value={formData.name} onChange={handleChange} />
            <input type="email" placeholder='Email' className='form-control   my-4' name="email" value={formData.email} onChange={handleChange} />
            <input type="password" placeholder='Password' className='form-control  my-4' name="password" value={formData.password} onChange={handleChange}/>
            <input type="password" placeholder='Conform Password' className='form-control   my-4' name="cpassword" value={formData.cpassword} onChange={handleChange} />
            <button className='btn btn-success' >SignUp</button><br/><br/>

            {/* Google Login Button */}
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => toast.error('Google Login Failed! Please try again.')} /><br/>

            <p>Login a Existing User Click Here <Link to='/login'>Login</Link></p>
            <p>Back To Home Click Here <Link to='/'>Home</Link></p>
            

        </div>
       </form>
      </div>
    </div>
  )
}

export default Content
