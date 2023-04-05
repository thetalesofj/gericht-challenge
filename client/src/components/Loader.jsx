import React from 'react'
import BackgroundVideo from '../assets/bg-video.mp4'

const Loader = () => {
  return (
    <div>
      <div>
        <video className='absolute top-0 left-0 min-w-full min-h-full object-cover' autoPlay={true} muted loop playsInline={true} ><source src={BackgroundVideo}/></video>
      </div>
      <div className='flex items-center justify-center pt-72'>
        <p className='absolute text-white font-titles text-center sm:text-3xl mobile:text-4xl tablet:text-5xl desktop:text-7xl'>GERÍCHT</p> 
      </div>
    </div>
  )
}

export default Loader