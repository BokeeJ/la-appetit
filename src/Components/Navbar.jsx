import React, { useState } from 'react'
import { Link } from 'react-router-dom';


//motion-framer
import { motion } from 'framer-motion'
//icons
import { IoIosRestaurant } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
    const [toggle, setToggle] = useState(true);



    const handleMenu = () => {
        setToggle(!toggle)
    }



    return (
        <div className='w-full h-full md:h-[150px] lg:h-[120px] md:flex-row bg-mis flex flex-col justify-between items-center'>
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
                <h1 className='text-white font-pisana m-[20px] text-[43px]'>la appétit</h1>
                <IoIosRestaurant size={40} color='white' />
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

    )
}

export default Navbar