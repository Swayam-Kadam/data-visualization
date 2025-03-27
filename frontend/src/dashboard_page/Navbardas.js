import React from 'react'
import { Link,useNavigate} from 'react-router-dom'

const Navbardas = () => {
    const navigate = useNavigate(); 

    const login = ()=>{
        if(localStorage.getItem('token')){
          //logout functionality
          localStorage.removeItem('token');
          window.location.reload()
        }else{
          navigate('/login');
        }
    }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <Link className="navbar-brand" to="/"><img
            src="/logo.png" // Path to logo in public folder
            alt="Hospital Logo"
            style={{ height: '40px', marginRight: '10px',borderRadius:'10px',border:'3px solid black'}}
          /></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/dashboard" >Dashboard</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-link" to="/dashboard/profile">Profile</Link>
      </li> 
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>        
    </ul>
    <div className='d-flex'>
      <button className='btn btn-outline-dark mx-2'><Link className="nav-link" to="/signup">SignUP</Link></button>
    <button className= {`btn ${localStorage.getItem('token') ? 'btn-danger' : 'btn-dark'}`}  onClick={login}>{localStorage.getItem('token') ? 'LogOut' : 'LogIn'}</button>
      </div>
  </div>
</div>
</nav>
  </div>
  )
}

export default Navbardas
