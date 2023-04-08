import React from 'react'
import Knife from '../assets/knife.png'
import VectorSpoon from '../assets/VectorSpoon.jpg'
import Letter from '../assets/DarkG.png'

const About = () => {
  return (
    <div className='bg-settings p-5'>
      <div className='flex sm:flex-col laptop:flex-row text-white laptop:gap-40 sm:space-y-16 mobile:space-y-28 laptop:space-y-0 laptop:-space-x-44'>
          <div className='flex flex-col sm:items-center laptop:items-end justify-center sm:text-center sm:space-y-3 laptop:text-right z-10'>
              <div className='page-titles'>About Us</div>
              <div className='flex justify-center items-center laptop:justify-start'>
                <img className='laptop:object-left' src={VectorSpoon} alt="" />
              </div>
              <div className='para-font laptop:pl-10 desktop:pl-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</div>
              <button className='button font-titles p-2'>Know More</button>
          </div>
        <div className='flex items-center justify-center z-1'>
          <img className='flex sm:w-2/4 laptop:w-full  overflow-visible' src={Letter} alt="" />
          <img className='absolute sm:w-[10%] tablet:w-[8%] laptop:w-[3%]' src={Knife} alt="" />
        </div>
        <div className='flex flex-col sm:items-center laptop:items-start justify-center sm:text-center sm:space-y-3 laptop:text-left z-10'>
          <div className='page-titles'>Our History</div>
          <div className='flex justify-center items-center laptop:justify-start'>
            <img className='laptop:object-left' src={VectorSpoon} alt="" />
          </div>
          <div className='para-font laptop:pr-10 desktop:pr-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</div>
          <button className='button font-titles p-2'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default About