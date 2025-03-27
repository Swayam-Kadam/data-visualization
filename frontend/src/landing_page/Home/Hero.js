import React,{useEffect} from 'react'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {

  useEffect(()=>{
      toast.info("LogIn Require If You Want To Analize Data")
  },[])
  
  return (
    <div>
      <ToastContainer  position="top-center"  autoClose={3000}   hideProgressBar={false}  newestOnTop={true}  closeOnClick  pauseOnFocusLoss  draggable  pauseOnHover/>
    <div className='container mt-2' style={{backgroundColor:'#dee2e6'}}>
      <div className="row p-5 text-center">
            <h1>Data To <span style={{color:'#fc6b03'}}>insights</span></h1>
            <h1>in miutes</h1>
            <p>Explore your data,build your dashboard,<br/>bring your team together</p>
            <button className='btn btn-dark' style={{width:'10rem',margin:'0 auto'}} >Get Started</button>
      </div>
    </div>
    </div>
  )
}

export default Hero
