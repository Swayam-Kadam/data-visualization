import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark text-light' style={{borderTopLeftRadius:'1rem',borderTopRightRadius:'1rem'}}>
     <div className="container text-light mt-5">

      <div className="row border-bottom p-5">
        <img src="/logo.png" alt="logo" style={{width:'4rem',height:'3rem',backgroundColor:'white',borderRadius:'1rem'}} />
      </div>

      <div className="row p-5 border-bottom d-flex justify-content-around">
        <div className="col-3">
          <h5>SOLUTIONS</h5>
          <p className='fw-bold mt-5'>Cloud Costs</p>
          <p>Multicloud Costs</p>
          <p>FinOps for MSPs</p>
          <p>Business Intelligence</p>
          <p>Payment Monitoring</p>
          <p>Ad campaigns</p>
          <p>See more use cases</p>
        </div>
        <div className="col-3">
        <h5>PLATFORM</h5>
          <p className='fw-bold mt-5'>Cloud Costs</p>
          <p>Cloud Cost Visibility</p>
          <p>Savings Recommendations</p>
          <p>Dashboards and Reporting</p>
          <p>Cost Allocation</p>
          <p>K8s Intelligence</p>
          <p>Detection</p>
          <p>Action</p>
          <p>Forecasting</p>
          <p>Integrations</p>
          <p>Technology</p>
        </div>
        <div className="col-3">
        <h5>INDUSTRIES</h5>
          <p className='fw-bold mt-5'>Gaming</p>
          <p>Adtech</p>
          <p>Telco</p>
          <p>eCommerce</p>
          <p>Fintech</p>
          <p>FinOps Tools</p>
          <p>AWS Cost Optimization</p>
        </div>
        <div className="col-3">
        <h5>COMPANY</h5>
          <p className='fw-bold mt-5'>About Us</p>
          <p>Customers</p>
          <p>Careers </p>
          <p>Press</p>
          <p>Events</p>
          <p>Awards</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="row p-3 ">
          <div className="col-4">
            <p>&copy;CopyRight Reserved By Swayam</p>
          </div>
          <div className="col-4 d-flex">
            <p className='mx-2'><Link style={{textDecoration:'none',color:'white'}}>Terms of Use</Link></p>
            <p className='mx-2'><Link style={{textDecoration:'none',color:'white'}}>Privacy</Link></p>
            <p className='mx-2'><Link style={{textDecoration:'none',color:'white'}}>Security Statement</Link></p>
          </div>
          <div className="col-4">
          <i className="fa fa-twitter-square" aria-hidden="true"/>
          <i className="fa fa-facebook-square mx-3" aria-hidden="true"/>
          <i className="fa fa-instagram " aria-hidden="true"/>
          </div>
      </div>

     </div>
    </div>
  )
}

export default Footer
