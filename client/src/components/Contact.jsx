import React from 'react'

const Contact = () => {
  return (
    <div className='bg-settings'>
      <div className='font-titles flex flex-wrap sm:px-3 tablet:px-5 laptop:px-10 py-5 sm:justify-center sm:items-center tablet:justify-between'>
            <div className='flex flex-col items-center text-center tablet:w-2/5 tablet:justify-between'>
                <div className=''>
                    <p className='text-white sm:py-2 tablet:py-4 tablet:text-left desktop:text-xl'>Contact</p>
                    <div className='flex justify-center items-center tablet:justify-start'>
                        <img className='tablet:object-left' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127552/GERICHT%20-%20CHALLENGE%20FOLDER/VectorSpoon_b7psvy.jpg' alt="" />
                    </div>
                    <p className='text-gold font-normal sm:text-4xl desktop:text-6xl sm:px-5 tablet:px-0 tablet:text-left'>Find Us</p>
                    <p className='para-font sm:px-10 sm:py-4 tablet:py-4 tablet:px-0 tablet:text-left'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                    <div className='space-y-4'>
                      <p className='font-titles text-gold sm:text-center tablet:text-left'>Opening Hours</p>
                      <p className='text-white para-font sm:text-center tablet:text-left sm:text-xsm text-sm'>Mon - Fri: 10:00 am - 02:00 am</p>
                      <p className='text-white para-font sm:text-center tablet:text-left sm:text-xsm text-sm'>Sat - Sun: 10:00 am - 03:00 am</p>
                    </div>
                </div>
                <div className='tablet:w-full tablet:flex tablet:justify-start py-10'>
                    <p className='button py-2 sm:px-4 sm:text-xsm'>View More</p>
                </div>
            </div>
            <div className='flex justify-center items-center w-3/5 laptop:w-[45%]'>
                <div className='imageT imageB flex justify-center tablet:justify-start w-full relative'>
                    <img className='sm:py-5 w-full' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127548/GERICHT%20-%20CHALLENGE%20FOLDER/drinks_dlz2s7.jpg' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact