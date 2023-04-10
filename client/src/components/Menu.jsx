import React from 'react';

const Menu = () => {
  return (
    <div className='bg-background text-white py-10'>
        <div className='flex flex-col items-center justify-center pt-2 space-y-2'>
            <div className='text-base font-titles'>Menu that fits you palatte</div>
            <div className='flex justify-center items-center laptop:justify-start'>
                <img src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127552/GERICHT%20-%20CHALLENGE%20FOLDER/VectorSpoon_b7psvy.jpg' alt="" />
            </div>
            <div className='page-titles pb-10 laptop:pb-14'>Today's Special</div>
        </div>
        <div className='flex sm:flex-col laptop:flex-row sm:justify-center laptop:justify-between sm:px-5 laptop:px-10'>
            <div className='flex flex-col sm:items-center'>
                <div className='font-titles page-titles tablet:text-2xl laptop:text-3xl desktop:text-4xl text-white sm:pt-5 sm:pb-2 desktop:pb-5'>
                    <div>Wine & Beer</div>
                </div>
                <div className='space-y-5 desktop:space-y-8'>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>Chapel Hill Shiraz</div>
                            <div className='para-font laptop:text-xsm'>AU | Bottle</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$56</div>
                    </div>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>Catena Malbec</div>
                            <div className='para-font laptop:text-xsm'>AR | Bottle</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$59</div>
                    </div>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>La Vieille Rosé</div>
                            <div className='para-font laptop:text-xsm'>FR | 750 ml</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$44</div>
                    </div>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>Rhino Pale Ale</div>
                            <div className='para-font laptop:text-xsm'>CA | 750 ml</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$31</div>
                    </div>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>Irish Guinness</div>
                            <div className='para-font laptop:text-xsm'>IE | 750 ml</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$26</div>
                    </div>
                </div>
            </div>
            <div className='laptop:ml-[50px] desktop:ml-[70px] flex flex-col space-y-2 items-center justify-center'>
                <img className='w-3/4 tablet:w-2/4 laptop:w-3/4' src='https://res.cloudinary.com/drecxkgks/image/upload/v1681127552/GERICHT%20-%20CHALLENGE%20FOLDER/Shaker_yl5new.jpg' alt="" />
                <div className='sm:pt-5'>
                    <button className='button font-titles py-1 px-3'>View More</button>
                </div>
            </div>
            <div className='flex flex-col sm:items-center'>
                <div className='font-titles page-titles tablet:text-2xl laptop:text-3xl desktop:text-4xl text-white sm:pt-5 sm:pb-2 desktop:pb-5'>
                    <div>Cocktails</div>
                </div>
                <div className='space-y-5 desktop:space-y-8'>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>Daiquiri</div>
                            <div className='para-font laptop:text-xsm'>Rum | Citrus juice | Sugar</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$10</div>
                    </div>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>Dark 'N' Stormy</div>
                            <div className='para-font laptop:text-xsm'>Dark rum | Ginger beer | Slice of lime.</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$15</div>
                    </div>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>Old Fashioned</div>
                            <div className='para-font laptop:text-xsm'>Bourbon | Brown sugar | Angostura Bitters</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$31</div>
                    </div>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>Aperol Spritz</div>
                            <div className='para-font laptop:text-xsm'>Aperol | Villa Marchesi prosecco | soda | 30ml</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$20</div>
                    </div>
                    <div className='menu'>
                        <div>
                            <div className='font-titles laptop:text-sm text-gold'>Negroni</div>
                            <div className='para-font laptop:text-xsm'>Gin | Sweet Vermouth | Campari | Orange garnish</div>
                        </div>
                        <div className='sm:px-8 laptop:px-0 laptop:pr-8 flex pt-2'>
                            <hr className='sm:mx-2 sm:mb-1 border-none h-[1px] w-20 laptop:w-10 bg-gold border-b-2 mt-1'/>
                        </div>
                        <div className='font-titles laptop:text-sm'>$26</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu