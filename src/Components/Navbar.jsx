import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// motion former
import { motion, AnimatePresence } from 'framer-motion';
// react icons
import { IoIosRestaurant } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function Navbar() {
    const telefonBroj = '+381 69 0187 564';

    const [toggle, setToggle] = useState(false);

    const handleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <div className='lg:w-full bg-gray-800 text-white py-2 px-3 fixed top-0 z-10 relative'>
            <div className='w-full h-50px flex flex-row justify-between bg-black relative'>
                <div className='flex flex-row lg:ml-10 mt-1 invisible lg:visible gap-7 lg:flex-row'>
                    <div className=''>
                        <a className='transition-transform duration-300 transform-gpu scale-100 hover:scale-100 flex flex-row gap-1' href="https://www.google.com/maps/place/La+Appetit/@44.385589,20.2529288,17.25z/data=!4m6!3m5!1s0x475a01303e611fd5:0xbbe98ad32dfd1643!8m2!3d44.3855271!4d20.2555972!16s%2Fg%2F11mx6jzhkq?hl=sr&entry=ttu/" target="_blank">
                            <FaMapMarkerAlt color='white' size={25} />
                            <span className='text-white'>Dositeja Obradovića 61, Lazarevac 11550</span>
                        </a>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <FaPhoneAlt color='white' size={20} />
                        <a href={`tel:${telefonBroj}`} className='text-white'>+381 69 784 050</a></div>
                </div>
                <div className='flex flex-row lg:mr-10 mt-1 gap-3'>
                    <a className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125' href="https://www.facebook.com/Restoran.La.Appetit/" target="_blank"><CiFacebook color='white' size={25} /></a>
                    <a className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125' href="https://www.instagram.com/restoranlaappetit/" target="_blank"><FaInstagram color='white' size={25} /></a>
                </div>
            </div>
            <div className='w-full h-full md:h-[150px] lg:h-[120px] md:flex-row rounded-b-lg bg-black flex flex-col justify-between items-center'>

                <motion.div
                    className="box flex flex-row items-center lg:mb-[20px] lg:absolute md:absolute lg:ml-5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <div className='flex flex-col md:mt-8 justify-center items-center  p-2  '>

                        <Link to={'/'} className='text-white font-link text-5xl'>LA APPÉTIT</Link>
                    </div>

                </motion.div>
                <div className='w-full lg:h-[120px] bg-black flex flex-col justify-between items-center'>
                    <button className='md:hidden flex justify-center items-center' onClick={handleMenu}>
                        <RxHamburgerMenu size={40} color='white' />
                    </button>
                    {/* Prikazivanje navigacije na većim ekranima */}
                    <ul className={`hidden lg:flex md:flex lg:gap-10 absolute lg:ml-[80px] md:ml-[80px] mt-10 gap-2 p-1`}>
                        <NavLink to="/"

                            className='text-white font-link hover transition-transform duration-300 transform-gpu scale-100 hover:scale-125' >POČETNA</NavLink>
                        <NavLink to="/meni" className='text-white font-link  transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>MENI</NavLink>
                        <NavLink to="/proslave" className='text-white font-link transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>PROSLAVE</NavLink>
                        <NavLink to="/galerija" className='text-white font-link transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>GALERIJA</NavLink>
                        <NavLink to="/Onama" className='text-white font-link transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>O NAMA</NavLink>
                    </ul>
                    {/* Animacija za hamburger meni na manjim ekranima */}
                    <AnimatePresence>
                        {toggle && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className='mt-10 '
                            >
                                <ul className={`flex flex-col lg:invisible md:invisible lg:flex-row md:flex-row  w-full lg:gap-16 gap-1 p-1 `}>
                                    <NavLink to="/" className='text-white font-linkovi hover transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>POČETNA</NavLink>
                                    <NavLink to="/meni" className='text-white font-link  transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>MENI</NavLink>
                                    <NavLink to="/proslave" className='text-white font-link transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>PROSLAVE</NavLink>
                                    <NavLink to="/galerija" className='text-white font-link transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>GALERIJA</NavLink>
                                    <NavLink to="/Onama" className='text-white font-link transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>O NAMA</NavLink>

                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
