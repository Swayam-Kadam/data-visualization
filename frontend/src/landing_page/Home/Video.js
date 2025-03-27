import React from 'react'
import Content from './Content'
import Hero from './Hero'

const Video = () => {
  return (
    <>
      <Hero/>
    <div className='container mt-5'>
    <div className="row align-items-center bg-dark" >
        <div className="col" >
      <div className="card" style={{width:'70%',margin:'0 auto',marginTop:'-2rem'}}>
        <video src="media/homeV12.mp4" className="card-img-top" muted autoPlay loop onLoad={alert}></video>
        </div>
        <h3 className='text-center text-light mt-2'>Trusted by leaders worldwide to reach audiences of millions every day</h3>
        </div>
  </div>
    </div>
    <Content/>
    </>
  )
}

export default Video
