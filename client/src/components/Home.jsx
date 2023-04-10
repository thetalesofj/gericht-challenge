import React from 'react';
import Navigation from './Navigation';

const Home = () => {
  return (
    <div className='bg-background text-white w-full component-design'>
    <Navigation/>
        <div className='font-titles flex flex-wrap sm:px-3 sm:justify-center sm:items-center tablet:justify-between'>
            <div className='hidden tablet:flex overflow-hidden w-1/7 tablet:-rotate-90 tablet:gap-5 text-sm -mx-5 '>
                <p>#Bar</p>
                <p>#GERÍCHT</p>
            </div>
            <div className='flex flex-col items-center text-center tablet:w-2/5 tablet:justify-between'>
                <div className='tablet:w-full'>
                    <p className='sm:py-2 tablet:py-4 tablet:text-left desktop:text-xl'>Chase the new Flavour</p>
                    <div className='flex justify-center items-center tablet:justify-start'>
                        <img className='tablet:object-left' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127552/GERICHT%20-%20CHALLENGE%20FOLDER/VectorSpoon_b7psvy.jpg' alt="" />
                    </div>
                    <p className='text-gold font-normal sm:text-4xl desktop:text-6xl sm:px-5 tablet:px-0 tablet:text-left'> The Key To Fine Dining</p>
                    <p className='para-font sm:px-10 sm:py-4 tablet:py-4 tablet:px-0 tablet:text-left'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                </div>
                <div className='tablet:w-full tablet:flex tablet:justify-start'>
                    <p className='button sm:py-2 sm:px-4 sm:text-xsm tablet:py-2 '>Explore Menu</p>
                </div>
            </div>
            <div className='flex justify-center items-center tablet:w-2/5'>
                <div className='imageT imageB flex justify-center tablet:justify-start w-full relative'>
                    <img className='sm:py-5 w-full' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127550/GERICHT%20-%20CHALLENGE%20FOLDER/fish_mmwfdb.jpg' alt="" />
                </div>
            </div>
        </div>
            <div className='flex items-center justify-center sm:py-5 tablet:py-8'>
                <p className='font-titles para-text'>01</p>
                <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-5 bg-white border-b-2 mt-1'/>
                <p className='font-titles para-text font-thin text-gold'>02 03 04</p>
            </div>
    </div>
    
  )
}

export default Home