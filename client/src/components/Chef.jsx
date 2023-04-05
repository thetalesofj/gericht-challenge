import React from 'react';
import ChefPic from '../assets/chef.jpg'
import Speech from '../assets/speech.png'
import Restaurant from '../assets/restaurant.jpg'
import VectorSpoon from '../assets/VectorSpoon.jpg'
import Play from '../assets/Play.svg'


const Chef = () => {
  return (
    <div className='bg-settings text-white'>
        <div className='flex sm:flex-col sm:items-center laptop:flex-row laptop:px-20 laptop:space-x-12'>
            <div className='flex justify-center items-center sm:w-full laptop:w-1/2'>
                <div className='imageT imageB flex justify-center tablet:justify-start sm:w-1/2 laptop:w-full relative'>
                    <img className='sm:py-5 w-full' src={ChefPic} alt="" />
                </div>
            </div>
            <div className='text-white sm:w-3/4 tablet:w-1/2 laptop:w-1/2 flex flex-col justify-center items-center laptop:items-start desktop:space-y-10'>
                <div className=''>
                    <div className='font-titles'>Chef's Word</div>
                    <img className='w-6 tablet:object-left' src={VectorSpoon} alt="" />
                    <div className='page-titles mobile:text-2xl tablet:text-4xl'>What We Believe In</div>
                </div>
                <div className='py-4 sm:text-center laptop:text-left desktop:mr-16'>
                        <span className='inline-block -mr-16'>
                            <img className='w-[20%]' src={Speech} alt="" />
                        </span>
                    <span className='para-font italic text-sm align-top'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                    </span>
                </div>
                <div>
                    <div className='tablet:pt-4'>
                        <div className='font-titles sm:text-2xl text-3xl text-gold'>Kevin Luo</div>
                        <div className='text-gray-400 text-sm'>Chef & Founder</div>
                    </div>
                    <div className='sm:pt-7 font-signiture text-gray-400 text-4xl'>Kevin Luo</div>
                </div>
            </div>
        </div>
        <section className='flex justify-center items-center'>
            <img src={Restaurant} alt="" />
            <div className='absolute flex items-center justify-center'>
                <img className='p-5 w-4/5 rounded-full border-gold border-[1px]' src={Play} alt="" />
            </div>
          </section>
    </div>
  )
}

export default Chef