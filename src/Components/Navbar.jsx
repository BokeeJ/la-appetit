import React, { useState } from 'react'
import { Link } from 'react-router-dom';


//motion-framer
import { motion } from 'framer-motion'
//icons
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
        <div className='lg:w-full bg-gray-800 text-white py-4 px-6 fixed top-0 z-10'>
            <div className='w-full h-50px flex flex-row justify-between bg-black relative'>
                <div className='flex flex-row lg:ml-10 mt-1 gap-3'><FaMapMarkerAlt size={20} color='white' /><span className='text-white'>Dositeja Obradovića 61, Lazarevac 11550</span> <FaPhoneAlt color='white' size={20} /><span className='text-white'>+381 69 784 050</span></div>
                <div className='flex flex-row lg:mr-10 mt-1 gap-3'><a href="https://www.facebook.com/Restoran.La.Appetit/" target="_blank"><CiFacebook color='white' size={25} /></a> <a href="https://www.instagram.com/restoranlaappetit/" target="_blank"><FaInstagram color='white' size={25} /></a> </div>
            </div>
            <div className='w-full h-full md:h-[150px] lg:h-[120px] md:flex-row rounded-b-lg bg-black flex flex-col justify-between items-center'>

                <motion.div
                    className="box flex flex-row items-center lg:ml-5 md:ml-[150px]"
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
                    <h2 className='text-white font-pisana m-[20px] text-[43px]'>la appétit</h2>
                    <IoIosRestaurant size={40} color='white' /> <img src="/src/assets/sodapdf-converted_Page_6.jpeg" alt="laAppetit" className='h-[70px] w-[70px] rounded-[50px] transition-transform duration-300 transform-gpu scale-100 hover:scale-125' />
                </motion.div>
                <div className='flex flex-col gap-10 lg:m-[10px] p-5 justify-center items-center'>
                    <button className='md:hidden flex justify-center items-center' onClick={handleMenu}><RxHamburgerMenu size={40} color='white' /></button>
                    <div>
                        <ul className={`flex flex-row lg:flex-row md:flex-row w-full lg:gap-5 gap-2 p-1 ${toggle ? 'invisible' : null} lg:visible md:visible`}>
                            <Link to="/" className='text-white font-linkovi hover:text-elegant hover:cursor-pointer  hover:scale-125 hover:scale-x-100 '>Pocetna</Link >
                            <Link to="/meni" className='text-white font-linkovi hover:text-elegant cursor-pointer'>Meni</Link >
                            <Link to="/Onama" className='text-white font-linkovi hover:text-elegant cursor-pointer'>O nama</Link >
                            <Link to="/galerija" className='text-white font-linkovi hover:text-elegant cursor-pointer'>Galerija</Link >
                            <Link to="/kontakt" className='text-white font-linkovi hover:text-elegant cursor-pointer'>Kontakt</Link >
                        </ul>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Navbar