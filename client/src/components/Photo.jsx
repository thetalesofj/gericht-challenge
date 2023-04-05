import React from 'react'
import Ramen from '../assets/ramen.jpg';
import Drinks from '../assets/drinks.jpg';
import Egg from '../assets/egg.jpg';
import Soup from '../assets/soup.jpg';
import VectorSpoon from '../assets/VectorSpoon.jpg'
import Instagram from '../assets/instagram.png'

const Photo = () => {
  return (
    <div className='text-white bg-settings flex py-10 sm:flex-col laptop:flex-row sm:items-center sm:justify-center'>
       <div className='flex flex-col sm:items-center sm:justify-center sm:px-4 tablet:px-32 laptop:items-start'>
          <div className='font-titles'>Instagram</div>
          <img className='w-6 tablet:object-left' src={VectorSpoon} alt="" />
          <div className='page-titles mobile:text-2xl tablet:text-4xl'>Photo Gallery</div>
          <p className='para-font sm:text-center sm:py-4 tablet:py-4 tablet:px-0 laptop:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu</p>
          <button className='button p-2'>View More</button>
        </div>
        <div className='flex sm:flex-col sm:pt-6 laptop:flex-row sm:px-6 laptop:px-0'>
          <div className='flex sm:items-center sm:justify-center sm:space-x-2 laptop:space-x-4'>
          <div className='flex justify-center items-center relative hover:opacity-75'>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 invisible hover:visible' src={Instagram} alt="" />
              <img className='border-[0.5px] border-gray-400' src={Ramen} alt="" 
              onMouseOver={e => e.currentTarget.previousSibling.classList.remove("invisible")} 
              onMouseOut={e => e.currentTarget.previousSibling.classList.add("invisible")}
              />
            </div>
            <div className='flex justify-center items-center relative hover:opacity-75'>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 invisible hover:visible' src={Instagram} alt="" />
              <img className='border-[0.5px] border-gray-400' src={Drinks} alt="" 
              onMouseOver={e => e.currentTarget.previousSibling.classList.remove("invisible")} 
              onMouseOut={e => e.currentTarget.previousSibling.classList.add("invisible")}
              />
            </div>
            <div className='flex justify-center items-center relative hover:opacity-75'>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 invisible hover:visible' src={Instagram} alt="" />
              <img className='border-[0.5px] border-gray-400' src={Egg} alt="" 
              onMouseOver={e => e.currentTarget.previousSibling.classList.remove("invisible")} 
              onMouseOut={e => e.currentTarget.previousSibling.classList.add("invisible")}
              />
            </div>
            <div className='flex justify-center items-center relative hover:opacity-75'>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 invisible hover:visible' src={Instagram} alt="" />
              <img className='border-[0.5px] border-gray-400' src={Soup} alt="" 
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