import React from 'react';


const Chef = () => {
  return (
    <div className='bg-settings text-white'>
        <div className='flex sm:flex-col sm:items-center laptop:flex-row laptop:px-20 laptop:space-x-12'>
            <div className='flex justify-center items-center sm:w-full laptop:w-1/2'>
                <div className='imageT imageB flex justify-center tablet:justify-start sm:w-1/2 laptop:w-full relative'>
                    <img className='sm:py-5 w-full' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127548/GERICHT%20-%20CHALLENGE%20FOLDER/chef_w3hsq9.jpg' alt="" />
                </div>
            </div>
            <div className='text-white sm:w-3/4 tablet:w-1/2 laptop:w-1/2 flex flex-col justify-center items-center laptop:items-start desktop:space-y-10'>
                <div className=''>
                    <div className='font-titles'>Chef's Word</div>
                    <img className='tablet:object-left' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127552/GERICHT%20-%20CHALLENGE%20FOLDER/VectorSpoon_b7psvy.jpg' alt="" />
                    <div className='page-titles mobile:text-2xl tablet:text-4xl'>What We Believe In</div>
                </div>
                <div className='py-4 sm:text-center laptop:text-left desktop:mr-16'>
                        <span className='inline-block -mr-16'>
                            <img className='w-[20%]' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127551/GERICHT%20-%20CHALLENGE%20FOLDER/speech_qphjbm.png' alt="" />
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
            <img src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127553/GERICHT%20-%20CHALLENGE%20FOLDER/restaurant_uxqs3y.jpg' alt="" />
            <div className='absolute flex items-center justify-center'>
                <img className='p-5 w-4/5 rounded-full border-gold border-[1px]' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127550/GERICHT%20-%20CHALLENGE%20FOLDER/Play_odi7xa.svg' alt="" />
            </div>
          </section>
    </div>
  )
}

export default Chef