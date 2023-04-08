import React from 'react'
import Chicken from '../assets/chicken.jpg'
import VectorSpoon from '../assets/VectorSpoon.jpg'
import Group1 from '../assets/Group1.png'
import Group2 from '../assets/Group2.png'
import Group3 from '../assets/Group3.png'
import Group5 from '../assets/Group5.png'
import Logo from '../assets/Logo.png'
import Letter from '../assets/G.png'

const Awards = () => {
  return (
    <div className='py-10 bg-settings'>
            <div className='pl-10 pb-5'>
                <img className='sm:w-20 tablet:w-32 animate-spin-slow' src={Logo} alt="" />
            </div>
            <div className='flex sm:flex-col sm:items-center laptop:flex-row laptop:px-10 laptop:space-x-32'>
                <div className='text-white sm:w-3/4 tablet:w-1/2 laptop:w-1/2 flex flex-col justify-center items-center laptop:items-start desktop:space-y-10'>
                    <div className=''>
                        <div className='font-titles'>Awards & Recognition</div>
                        <img className='tablet:object-left' src={VectorSpoon} alt="" />
                        <div className='page-titles mobile:text-2xl tablet:text-4xl'>Our Laurels</div>
                    </div>
                    <div>
                        <div className='sm:space-y-3 sm:py-3 laptop:space-y-0 laptop:py-2 flex sm:flex-col laptop:flex-row'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-3/4' src={Group1} alt="" />
                                    <div className='flex items-center justify-center absolute'>
                                        <span className='text-sm font-titles font-bold'>1</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-titles laptop:text-sm text-gold'>Bib Gourmond</p>
                                    <p className='para-font laptop:text-xsm'>Lorem ipsum dolor sit amet, consectetur.</p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-3/4' src={Group2} alt="" />
                                    <div className='flex items-center justify-center absolute'>
                                        <span className='text-sm font-titles font-bold'>2</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-titles laptop:text-sm text-gold'>Rising Star</p>
                                    <p className='para-font laptop:text-xsm'>Lorem ipsum dolor sit amet, consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className='sm:space-y-3 sm:py-3 laptop:space-y-0 laptop:py-2 flex sm:flex-col laptop:flex-row'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-3/4' src={Group5} alt="" />
                                    <div className='flex items-center justify-center absolute'>
                                        <span className='text-sm font-titles font-bold'>5</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-titles laptop:text-sm text-gold'>AA Hospitality</p>
                                    <p className='para-font laptop:text-xsm'>Lorem ipsum dolor sit amet, consectetur.</p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-3/4' src={Group3} alt="" />
                                    <div className='flex items-center justify-center absolute'>
                                        <span className='text-sm font-titles font-bold'>3</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-titles laptop:text-sm text-gold'>Outstanding Chef</p>
                                    <p className='para-font laptop:text-xsm'>Lorem ipsum dolor sit amet, consectetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:pt-6 laptop:pt-0 flex items-center justify-center relative'>
                    <img className='w-4/5' src={Chicken} alt="" />
                    <img className='absolute bottom-0 left-0 max-w-[50%]' src={Letter} alt="" />
                </div>
            </div>
        </div>
  )
}

export default Awards