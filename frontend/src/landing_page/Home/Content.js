import React from 'react'

const Content = () => {
  return (
    <div className='container'>
      <div className="row mt-5 " style={{backgroundColor:'#dee2e6'}}>
        <div className="col-6 text-center"> 
        <video src="media/home3.mp4" className="mt-5" muted autoPlay loop style={{width:'70%'}}></video>
        </div>
        <div className="col-6 text-center p-5">
          <h1>Your data, fully <span style={{color:'#fc6b03'}}>interactive</span></h1>
          <p className='fs-3'>Transform raw data into interactive visualizations that are as sleek as they<br/> are engaging. Say goodbye to static<br/> charts and let your audience explore, connect, and truly understand your story.</p>
        </div>
      </div>

      <div className="row mt-5 " style={{backgroundColor:'#dee2e6'}}>

      <div className="col-6 text-center p-5">
          <h1><span style={{color:'#fc6b03'}}>Team up</span>, stay on brand</h1>
          <p className='fs-3'>Simplify collaboration and ensure your visuals stay polished and on-brand. Advanced sharing and customization options let your team create with confidence.</p>
        </div>
        <div className="col-6 text-center"> 
        <video src="media/home4.mp4" className="mt-4" muted autoPlay loop style={{width:'70%'}}></video>
        </div>
      </div>

    </div>
  )
}

export default Content
