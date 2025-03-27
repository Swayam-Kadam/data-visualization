import React from 'react'
import Left from './Left'

const Right = () => {
  return (
    <>
    <div className='container'>
      <div className="row mt-5 " >
      <div className="col-6 text-left p-5">
          <h1><span style={{color:'#fc6b03'}}>No-code data</span>visualization</h1>
          <p className='fs-4'>All our templates are designed with ease-of-use in mind. Simply upload your data, customize, and Flourish will do the rest. Adjust every aspect of your visualization  colors, labels, layout to perfectly match your message or brand.</p>
        </div>
        <div className="col-6 text-center"> 
        <video src="media/about1.webm" className="mt-5" muted autoPlay loop style={{width:'70%'}}></video>
        </div>
      </div>
      </div>
    <Left/>
    <div className='container'>
      <div className="row mt-5 " >
      <div className="col-6 text-left p-5">
          <h1>Designed for <span style={{color:'#fc6b03'}}>data storytelling</span></h1>
          <p className='fs-4'>From magical transitions between charts to more advanced features like scrollytelling, Flourish templates make it easy to create immersive storytelling experiences that flow seamlessly and captivate your audience.</p>
        </div>
        <div className="col-6 text-center"> 
        <video src="media/about3.webm" className="mt-5" muted autoPlay loop style={{width:'70%'}}></video>
        </div>
      </div>
      </div>
    </>
  )
}

export default Right
