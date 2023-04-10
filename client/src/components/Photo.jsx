import React from 'react'
import {SlSocialInstagram} from 'react-icons/sl'

const Photo = () => {
  return (
    <div className='text-white bg-settings flex py-10 sm:flex-col laptop:flex-row sm:items-center sm:justify-center'>
       <div className='flex flex-col sm:items-center sm:justify-center sm:px-4 tablet:px-32 laptop:items-start'>
          <div className='font-titles'>Instagram</div>
          <img className='tablet:object-left' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127552/GERICHT%20-%20CHALLENGE%20FOLDER/VectorSpoon_b7psvy.jpg' alt="" />
          <div className='page-titles mobile:text-2xl tablet:text-4xl'>Photo Gallery</div>
          <p className='para-font sm:text-center sm:py-4 tablet:py-4 tablet:px-0 laptop:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu</p>
          <button className='button p-2'>View More</button>
        </div>
        <div className='flex sm:flex-col sm:pt-6 laptop:flex-row sm:px-6 laptop:px-0'>
          <div className='flex sm:items-center sm:justify-center sm:space-x-2 laptop:space-x-4'>
          <div className='flex justify-center items-center relative hover:opacity-75'>
              <SlSocialInstagram className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 invisible hover:visible' />
              <img className='border-[0.5px] border-gray-400' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127551/GERICHT%20-%20CHALLENGE%20FOLDER/ramen_wdgo1y.jpg' alt="" 
              onMouseOver={e => e.currentTarget.previousSibling.classList.remove("invisible")} 
              onMouseOut={e => e.currentTarget.previousSibling.classList.add("invisible")}
              />
            </div>
            <div className='flex justify-center items-center relative hover:opacity-75'>
              <SlSocialInstagram className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 invisible hover:visible' />
              <img className='border-[0.5px] border-gray-400' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127548/GERICHT%20-%20CHALLENGE%20FOLDER/drinks_dlz2s7.jpg' alt="" 
              onMouseOver={e => e.currentTarget.previousSibling.classList.remove("invisible")} 
              onMouseOut={e => e.currentTarget.previousSibling.classList.add("invisible")}
              />
            </div>
            <div className='flex justify-center items-center relative hover:opacity-75'>
              <SlSocialInstagram className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 invisible hover:visible' />
              <img className='border-[0.5px] border-gray-400' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127549/GERICHT%20-%20CHALLENGE%20FOLDER/egg_ol0nzz.jpg' alt="" 
              onMouseOver={e => e.currentTarget.previousSibling.classList.remove("invisible")} 
              onMouseOut={e => e.currentTarget.previousSibling.classList.add("invisible")}
              />
            </div>
            <div className='flex justify-center items-center relative hover:opacity-75'>
              <SlSocialInstagram className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 invisible hover:visible' />
              <img className='border-[0.5px] border-gray-400' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127552/GERICHT%20-%20CHALLENGE%20FOLDER/soup_jv1iij.jpg' alt="" 
              onMouseOver={e => e.currentTarget.previousSibling.classList.remove("invisible")} 
              onMouseOut={e => e.currentTarget.previousSibling.classList.add("invisible")}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Photo