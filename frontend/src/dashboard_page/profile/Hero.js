import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './profile.css'
import axios from 'axios';

const Hero = () => {
    const[user,setUser]=useState([]);

    useEffect(()=>{
      if (!localStorage.getItem('token')) { 
        toast.error('Plz login first for checking Profile');
    }
    else{
      const Userdata=async()=>{
        try {
          const response = await axios.get('http://localhost:9001/Auth/fetch',{
            headers:{
              'Content-Type':'application/json',
              'auth-token':localStorage.getItem('token')
          }
          });
          setUser(response.data.responce);
        } catch (error) {
          console.error('Error fetching data:', error);
          toast.error("Data fetching error");
        }
      }
      Userdata();
    }
    },[])

    const onchange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }

    const update = async()=>{
      try {
        let userId=user._id;
        const updatedUserData={
          name:user.name,
          address:user.address,
          number:user.number,
          gender:user.gender,
        };
        const response = await axios.patch(`http://localhost:9001/Auth/update/${userId}`,updatedUserData,
          {
            headers:{
              'Content-Type':'application/json'
            }
          }
        );

        if(response.status === 200){
          toast.success("Data updated successfully!");
        } else {
            toast.error("Failed to update data. Please try again.");
        }
      } catch (error) {
        console.error('Error Updating User:', error);
            toast.error('Failed to update data. Please try again.');
      }
    };
  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <div className="container">
          <div className="container my-5" id='round'>
          </div>

          <div className="d-flex justify-content-center " id="content">
  <table className=" d-flex text-center">
      <thead>
      <tr><th>Name:-</th></tr>
      <tr><th>Email:-</th></tr>
      <tr><th>ID:-</th></tr>
      <tr><th>Address:-</th></tr>
      <tr><th>Mobile:-</th></tr>
      <tr><th>Gender:-</th></tr>
      </thead>
     
      <tbody>
        <tr><td>{user.name}</td></tr>
        <tr><td>{user.email}</td></tr>
        <tr><td>{user._id}</td></tr>
        <tr><td>{user.address}</td></tr>
        <tr><td>{user.number}</td></tr>
        <tr><td>{user.gender}</td></tr>
      </tbody>
  </table>
  <div className='mx-2'><i  className="fa fa-pencil-square-o text-primary" aria-hidden="true" style={{cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>
  </div>
      </div>


    {/* model for update data */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Your Profile</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <label htmlFor="title" className="form-label">Name</label>
                                <input type='text' className='form-control' name='name' id='name' value={user.name || ''} onChange={onchange}/>
                                <label htmlFor="title" className="form-label">Address</label>
                                <input type='text' className='form-control' name='address' id='address' value={user.address || ''} onChange={onchange}/>
                                <label htmlFor="title" className="form-label">Number</label>
                                <input type='number' className='form-control' name='number' id='number' value={user.number || ''} onChange={onchange}/>
                                <label htmlFor="title" className="form-label">Gender</label>
                                <input type='text' className='form-control' name='gender' id='gender' value={user.gender || ''} onChange={onchange}/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={update}>Update</button>
                        </div>
                        </div>
                    </div>
                    </div>
    </div>
  )
}

export default Hero
