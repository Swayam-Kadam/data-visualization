import React from 'react'

const Left = () => {
  return (
    <div>
      <div className='container'>
      <div className="row mt-5 " >
        <div className="col-6 text-center"> 
        <video src="media/about2.webm" className="mt-5" muted autoPlay loop style={{width:'70%'}}></video>
        </div>
        <div className="col-6 text-left p-5">
          <h1>Interactive and animated</h1>
          <p className='fs-4'>With Flourish, visualization goes beyond charts. Bring images, text, and video to life through a variety of interactive formats, from quizzes and dynamic carousels to gamified data visualizations.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Left
