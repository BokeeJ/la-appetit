import React from 'react'
import { Link } from 'react-router-dom'
//icons 
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
//motion former
import { motion } from 'framer-motion'

function Footer() {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            x: 100

        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1,
                duration: 3
            }
        }
    }
    return (

        <div className='w-full h-full bg-black p-5 flex  relative '>
            {/* container */}
            <div className='flex lg:flex-row flex-col gap-5  space-x-20 items-center justify-center ml-10 p-5 mb-10'>
                {/* O restoranu */}
                <motion.div variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='flex flex-col w-[200px] h-full gap-3 ml-10'
                >
                    <img className='w-[200px] h-[150] rounded-2xl' src="/src/assets/sodapdf-converted_Page_1.jpeg" alt="LA APPETIT" />
                    <p className='text-white ml-5 font-link text-[17px]'>Dobrodošli u naš šarmantni restoran u srcu Lazarevca! Smešten u centru grada, naš restoran je omiljeno mesto za sve koji traže ukusnu hranu u opuštenom ambijentu. Naša prostrana bašta, ukrašena zelenilom, pruža idealno mesto za uživanje u sunčanom danu ili opuštajućoj večeri uz večeru.</p>
                    {/* social network */}
                    <div className='flex flex-wrap gap-2 ml-5'>
                        <a href="https://www.facebook.com/Restoran.La.Appetit/" target="_blank"><CiFacebook color='white' size={25} /></a>
                        <a href="https://www.instagram.com/restoranlaappetit/" target="_blank"><FaInstagram color='white' size={25} /></a>

                    </div>

                </motion.div>

                <div className='w-[200px] h-full'>
                    {/* Mini Meni */}
                    <div className='w-[200px] h-full flex flex-col items-center gap-1'>
                        <h2 className='text-2xl text-white font-link'>MENI</h2>
                        <hr className='text-white w-full border-solid border-white' />
                        <ul className='flex flex-col items-center gap-8 text-sm text-white mt-10'>
                            <Link className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>POCETNA</Link>
                            <Link className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>MENI</Link>
                            <Link className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>O NAMA</Link>
                            <Link className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>GALERIJA</Link>
                            <Link className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>KONTAKT</Link>
                        </ul>
                    </div>
                </div>
                {/* Mini Contact */}
                <div className='w-[200px] h-full flex flex-col gap-1'>
                    <h2 className='text-2xl text-white font-link'>KONTAKT</h2>
                    <hr className='text-white w-full border-solid border-white' />
                    <div className='mt-[40px] flex flex-col gap-8'>
                        <div className='flex flex-row gap-3 items-center'> <FaPhoneAlt color='white' size={25} />
                            <h3 className='text-white text-[16px] font-link'>+381 69 784 050</h3>
                        </div>
                        <div className='flex flex-row gap-3 items-center'> <CiMail color='white' size={60} />
                            <h3 className='text-white mr-5 text-[16px] font-link'>lappetit@gmail.com</h3>
                        </div>

                    </div>

                </div>
                {/* Mini Lokacija */}
                <div className='w-[200px] h-full flex flex-col gap-1'>
                    <h2 className='text-2xl text-white font-link'>LOKACIJA</h2>
                    <hr className='text-white w-full border-solid border-white' />

                    <div className='mt-[40px] flex flex-col gap-8'>
                        <div className='flex flex-row gap-3'>
                            <a className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125' href="https://www.google.com/maps/place/La+Appetit/@44.385589,20.2529288,17.25z/data=!4m6!3m5!1s0x475a01303e611fd5:0xbbe98ad32dfd1643!8m2!3d44.3855271!4d20.2555972!16s%2Fg%2F11mx6jzhkq?hl=sr&entry=ttu/" target="_blank"><FaMapMarkerAlt color='white' size={25} /></a>
                            <p className='text-[18px] font-link text-white'>Dositeja Obradovića 61, Lazarevac 11550</p>


                        </div>
                        <div className='flex flex-row gap-3'>

                            <CiClock1 color='white' size={25} />

                            <div className='flex flex-col gap-3'>
                                <p className='text-white text-[18px] font-link '>Ponedeljak - Nedelja <hr className='text-white w-full border-solid border-white' /> 08:00h - 23:00h</p>
                                <p className='text-white text-[18px] font-link'>Petak-Subota <hr className='text-white w-full border-solid border-white' /> 08:00h - 00:00h</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='text-white bottom-0 right-0 absolute lg:m-2 lg:mr-2 md:mr-2 md:m-2 mr-10'><p className='font-link'>© Copyright LA APPETIT - Developed by <span>Bojan Drazic</span></p></div>
        </div>

    )
}

export default Footer