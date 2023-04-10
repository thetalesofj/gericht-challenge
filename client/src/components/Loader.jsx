import React from 'react'

const Loader = () => {
  return (
    <div>
      <div>
        <video className='absolute top-0 left-0 min-w-full min-h-full object-cover' autoPlay={true} muted loop playsInline={true} ><source src='https://res.cloudinary.com/drecxkgks/video/upload/v1681127550/GERICHT%20-%20CHALLENGE%20FOLDER/bg-video_nzthmd.mp4'/></video>
      </div>
      <div className='flex items-center justify-center pt-[27rem]'>
        <p className='absolute text-white font-titles text-center sm:text-4xl mobile:text-5xl tablet:text-6xl desktop:text-8xl'>GERÍCHT</p> 
      </div>
    </div>
  )
}

export default Loader