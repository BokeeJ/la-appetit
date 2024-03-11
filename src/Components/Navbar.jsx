import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosRestaurant } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function Navbar() {
    const [toggle, setToggle] = useState(true);

    const handleMenu = () => {
        setToggle(!toggle)
    }

    return (
        <div className='lg:w-full bg-gray-800 text-white py-2 px-3 fixed top-0 z-10 relative'>
            <div className='w-full h-50px flex flex-row justify-between bg-black relative'>
                <div className='flex flex-row lg:ml-10 mt-1 gap-3 lg:flex-row'>
                    <a className='transition-transform duration-300 transform-gpu scale-100 hover:scale-100 flex flex-row gap-1' href="https://www.google.com/maps/place/La+Appetit/@44.385589,20.2529288,17.25z/data=!4m6!3m5!1s0x475a01303e611fd5:0xbbe98ad32dfd1643!8m2!3d44.3855271!4d20.2555972!16s%2Fg%2F11mx6jzhkq?hl=sr&entry=ttu/" target="_blank">
                        <FaMapMarkerAlt color='white' size={25} />
                        <span className='text-white'>Dositeja Obradovića 61, Lazarevac 11550</span>
                        <FaPhoneAlt color='white' size={20} />
                        <span className='text-white'>+381 69 784 050</span>
                    </a>
                </div>
                <div className='flex flex-row lg:mr-10 mt-1 gap-3'>
                    <a className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125' href="https://www.facebook.com/Restoran.La.Appetit/" target="_blank"><CiFacebook color='white' size={25} /></a>
                    <a className='transition-transform duration-300 transform-gpu scale-100 hover:scale-125' href="https://www.instagram.com/restoranlaappetit/" target="_blank"><FaInstagram color='white' size={25} /></a>
                </div>
            </div>
            <div className='w-full h-full md:h-[150px] lg:h-[120px] md:flex-row rounded-b-lg bg-black flex flex-col justify-between items-center'>

                <motion.div
                    className="box flex flex-row items-center lg:ml-5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <h2 className='text-white font-link m-[20px] text-[43px] text-5xl'>LA APPETIT</h2>
                    <IoIosRestaurant className='' size={40} color='white' />
                    <img src="/sodapdf-converted_Page_6.jpeg" alt="laAppetit" className='h-[70px] w-[70px] rounded-[50px] transition-transform duration-300 transform-gpu scale-100 hover:scale-125' />
                </motion.div>
                <div className='w-full lg:h-[120px] bg-black flex flex-col justify-between items-center'>
                    <button className='md:hidden flex justify-center items-center' onClick={handleMenu}>
                        <RxHamburgerMenu size={40} color='white' />
                    </button>
                    <div className='mt-10'>
                        <ul className={`flex flex-col lg:flex-row md:flex-row w-full lg:gap-16 gap-3 p-1 ${toggle ? 'hidden lg:flex md:flex' : 'flex'}`}>
                            <Link to="/" className='text-white font-linkovi hover transition-transform duration-300 transform-gpu scale-100 hover:scale-125 '>POCETNA</Link>
                            <Link to="/meni" className='text-white font-link  transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>MENI</Link>
                            <Link to="/Onama" className='text-white font-link transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>O NAMA</Link>
                            <Link to="/galerija" className='text-white font-link transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>GALERIJA</Link>
                            <Link to="/kontakt" className='text-white font-link transition-transform duration-300 transform-gpu scale-100 hover:scale-125'>KONTAKT</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
