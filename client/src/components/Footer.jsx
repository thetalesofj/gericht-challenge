import React, {useState,useEffect} from 'react'
import {SlSocialFacebook, SlSocialTwitter, SlSocialInstagram} from 'react-icons/sl'
import VectorSpoon from '../assets/VectorSpoon.jpg'

const Footer = () => {

    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        function handleScroll() {
          if (window.scrollY > 200) {
            setShowDiv(true);
          } else {
            setShowDiv(false);
          }
        }
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, []);


  return (
    <footer className='bg-settings w-full inset-x-0 bottom-0'>
        <div className='flex justify-center'>
            <section className='border-[1px] border-gray-600 flex justify-center text-center items-center flex-col text-white sm:w-[75%] sm:px-10 w-[50%] space-y-2 bg-[#0C0C0C] py-4'>
                <div className='font-titles text-sm tablet:text-base'>Newsletter</div>
                <div className='flex justify-center items-center tablet:justify-start'>
                    <img className='tablet:object-left' src={VectorSpoon} alt="" />
                </div>
                <div className='font-titles page-titles'>Subscribe To Our Newsletter</div>
                <div className='sm:text-xsm font-thin tablet:text-sm sm:pb-5 tablet:pb-7'>And never miss latest Updates!</div>
                <div className='flex space-x-3 font-titles'>
                    <input className='bg-[#0C0C0C] border-[1px] border-white text-xsm placeholder:pl-2' name='email' type="text" placeholder='Email Address' required/>
                    <button className='button sm:py-2 sm:px-4 sm:text-xsm tablet:py-1' type='submit'>Subscribe</button>
                </div>
            </section>
        </div>
        <div className='text-white flex sm:flex-col sm:space-y-5 mobile:space-y-8 items-center sm:justify-center sm:pt-5 tablet:flex-row tablet:justify-between tablet:px-5'>
            <div className='flex flex-col justify-center items-center text-xsm text-center'>
                <div className='footer-titles'>Contact Us</div>
                <div className='py-2'>
                    <div className='font-thin'>9 W 53rd St, New York, NY 10019, USA</div>
                </div>
                <div className='font-thin'>+1 212-344-1230</div>
                <div className='font-thin'>+1 212-555-1230</div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='font-titles page-titles'>GERÍCHT</div>
                <div className='flex flex-col items-center justify-center space-y-2 tablet:space-y-4'>
                    <div className='w-3/4 text-center text-xsm'>"The best way to find yourself is to lose yourself in the service of others"</div>
                    <div className='flex justify-center items-center tablet:justify-start'>
                        <img className='tablet:object-left' src={VectorSpoon} alt="" />
                    </div>
                    <div className='flex flex-row space-x-2 tablet:space-x-4'>
                        <a href="/"><SlSocialFacebook/></a>
                        <a href="/"><SlSocialTwitter/></a>
                        <a href="/"><SlSocialInstagram/></a>
                    </div>
                </div>
                
            </div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <div className='footer-titles pb-2'>Working Hours</div>
                    <div className='flex flex-col items-center justify-center font-thin text-xsm pb-2'>
                        <div>Monday-Friday:</div>
                        <div>08:00 am - 12:00 am</div>
                    </div>
                    <div className='font-thin flex flex-col items-center justify-center text-xsm'>
                        <div>Saturday-Sunday:</div>
                        <div>07:00am - 11:00 pm</div>
                    </div>
                </div>
        </div>
            {showDiv && (
                <div className='text-gold fixed right-0 bottom-0 pb-60 pr-3 font-titles font-bold sm:text-sm laptop:text-base'>
                    <div className='pl-2'>
                        <hr className='sm:mx-2 sm:mb-1 border-none h-10 w-[1px] bg-gold border-b-2 mt-1'/>
                    </div>
                    <a href="#">TOP</a>
                </div>
            )}
        <div className='text-white font-thin flex justify-center tablet:pl-12 text-xsm pt-10 pb-2'>
            <div>2021 GERÍCHT. All Rights reserved.</div>
        </div>
    </footer>
  )
}

export default Footer