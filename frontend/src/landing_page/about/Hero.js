import React from 'react'

const Hero = () => {
  return (
    <div>
    <div className='container mt-2'>
      <div className="row p-5 text-center">
            <h1 style={{fontSize:'3rem'}}>Bring your data to life with</h1>
            <h1 style={{fontSize:'3rem'}}>interactive data visualizations</h1>
            <p>Comprehensive chart guides to help you create no-code, animated, and interactive<br/>data visualizations with Flourish</p>
            <button className='btn btn-dark' style={{width:'10rem',margin:'0 auto'}} >See all templetes</button>
      </div>
      </div>

      <div className='container mt-2' style={{backgroundColor:'#dee2e6'}}>
      <div className="row p-5 text-left">
            <h2 >Unlock the full potential of your data</h2><br/>
            <p className='fs-5'>Flourish templates are your gateway to professional, engaging data visualizations with zero coding required. Whether you’re new to data visualization or already an expert, our wide range of customizable templates makes it easy to tell powerful stories with your data.</p>
      </div>
      </div>

      </div>
  )
}

export default Hero
