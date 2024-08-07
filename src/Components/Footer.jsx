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
    const telefonBroj = '+381 69 0187 564';
    const emailAdresa = 'restoran.la.appetit@gmail.com'

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 10

        },
        animate: {
            opacity: 3,
            y: 3,
            transition: {
                delay: 0.1,
                duration: 3
            }
        }
    }
    return (

        <div className='w-full h-full bg-black lg:p-10 flex justify-center relative'>
            {/* container */}
            <div className='flex lg:flex-row  flex-col gap-10 justify-between items-center lg:w-full p-5 mb-10'>
                {/* O restoranu */}
                <motion.div variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='flex flex-col lg:w-[200px] w-full h-full gap-3 justify-center items-center '
                >
                    <div className='flex items-center  flex-col'>
                        <img className='w-[300px]  h-[150] rounded-3xl' src="/footer.webp" alt="LA APPÉTIT" />
                    </div>
                    {/* social network */}
                    <div className='flex flex-col gap-3 p-2 items-center '>
                        <div className='flex flex-row gap-3 items-center'>
                            <a className='text-white' href="https://www.facebook.com/Restoran.La.Appetit/" target="_blank"><CiFacebook color='white' size={40} /></a>
                            <p className='text-white'>Restoran La Appetit</p>
                        </div>
                        <div className='flex flex-row gap-3 items-center mr-4'>
                            <a className='text-white' href="https://www.instagram.com/restoranlaappetit/" target="_blank"><FaInstagram color='white' size={40} /></a>
                            <p className='text-white'>restoranlaappetit</p>
                        </div>


                    </div>

                </motion.div>

                <div className='h-full lg:w-[200px] w-full '>
                    {/* Mini Meni */}
                    <div className='lg:w-[200px] w-full  h-full flex flex-col items-center gap-1'>
                        <h2 className='text-2xl text-white  font-link'>MENI</h2>
                        <hr className='text-white w-full border-2 border-solid border-white' />
                        <ul className='flex flex-col items-center gap-8 text-sm text-white mt-10'>
                            <Link to={'/'} className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>POČETNA</Link>
                            <Link to={'/meni'} className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>MENI</Link>
                            <Link to={'/proslave'} className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>PROSLAVE</Link>
                            <Link to={'/galerija'} className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>GALERIJA</Link>
                            <Link to={'/Onama'} className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125 font-link text-[16px]'>O NAMA</Link>


                        </ul>
                    </div>
                </div>
                {/* Mini Contact */}
                <div className='lg:w-[200px] w-full  h-full flex flex-col gap-1 items-center'>
                    <h2 className='text-2xl text-white font-link'>KONTAKT</h2>
                    <hr className='text-white w-full border-2 border-solid border-white' />
                    <div className='mt-[40px] flex flex-col gap-8'>
                        <div className='flex flex-row gap-3 items-center'>
                            <FaPhoneAlt color='white' size={25} />
                            <a href={`tel:${telefonBroj}`} className='text-white text-[16px] font-link'>+381 69 0187 564</a>
                        </div>
                        <div className='flex flex-row gap-3 items-center'> <CiMail color='white' size={25} />

                            <a href={`mailto:${emailAdresa}`} className='text-white mr-5 text-l font-link'>restoran.la.appetit@gmail.com</a>
                        </div>

                    </div>

                </div>
                {/* Mini Lokacija */}
                <div className='lg:w-[200px] w-full   h-full flex flex-col gap-1 items-center'>
                    <h2 className='text-2xl text-white font-link'>LOKACIJA</h2>
                    <hr className='text-white w-full border-solid border-2 border-white' />

                    <div className='mt-[40px] flex flex-col gap-8 ml-7'>
                        <div className='flex flex-row gap-3'>
                            <a className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125' href="https://www.google.com/maps/place/La+Appetit/@44.385589,20.2529288,17.25z/data=!4m6!3m5!1s0x475a01303e611fd5:0xbbe98ad32dfd1643!8m2!3d44.3855271!4d20.2555972!16s%2Fg%2F11mx6jzhkq?hl=sr&entry=ttu/" target="_blank"><FaMapMarkerAlt color='white' size={25} /></a>
                            <p className='text-[18px] font-link text-white'>Dositeja Obradovića 61, Lazarevac 11550</p>


                        </div>
                        <div className='flex flex-row items-center gap-3'>

                            <CiClock1 color='white' size={35} />

                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col'>
                                    <p className='text-white text-[18px] font-link '>Pon-Nedelja </p>
                                    <p className='text-white text-[18px] font-link'> 08:00h - 23:00h</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-white text-[18px] font-link'>Petak - Subota </p>
                                    <p className='text-white text-[18px] font-link'> 08:00h - 00:00h</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='text-white bottom-0 right-0 absolute lg:m-2 lg:mr-2 md:mr-2 md:m-2 mr-10'><p className='font-link'>© Copyright LA APPÉTIT - Designed by BojanD. </p></div>
        </div>

    )
}

export default Footer
{/* <hr className='text-white w-full border-solid border-white' /> */ }