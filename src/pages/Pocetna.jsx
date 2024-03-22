import React from 'react'
//react icons
import { IoIosRestaurant } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GiCakeSlice } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';

//motion
import { motion } from 'framer-motion'
function Pocetna() {
    const slike = [
        "/burger2024.JPG",
        "/20242.jpg",
        "/20242.jpg",
        "/losos.jpg"

    ]
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100

        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                duration: 3
            }
        }
    }
    return (
        <div className='w-full' >
            {/* cover slika */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="w-full  h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/pozadinaPocetna.webp")' }}>
            </motion.div>
            {/* container */}
            <div className='flex flex-col lg:flex-row md:flex-row justify-between p-10 gap-3'>
                <div className='flex flex-col border-solid border-2 border-gray lg:h-[450px] lg:w-[800px] md:w-[700px] h-[500px] bg-mis text-white  items-center rounded-2xl  rounded-lg transition-transform relative overflow-hidden'>
                    <img className='h-full w-full rounded-md absolute top-0 left-0 transition-transform duration-[8000ms] transform-gpu hover:scale-150 object-cover' src="/slika2case.webp" alt="ZaricRakija" />
                </div>
                <motion.div variants={fadeInAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true }} className='bg-black h-full lg:h-[450px] md:h-[500px] w-full flex flex-col items-center p-5 border border-gray-300 shadow-md hover:scale-125 transition-transform rounded-2xl lg:justify-center border-solid border-gray border-2'>
                    <h1 className='font-naslovni text-white flex flex-row items-center gap-2'><span className='text-4xl font-naslovni'>LA APPÉTIT</span><IoIosRestaurant size={40} /></h1>
                    <hr className='w-full my-2 border-t border-gray-400 text-white mt-5' />
                    <span className='text-white lg:text-xl font-link text-xl md:text-[16px]'>Mesto gde se susreću raskoš i harmonija, stvarajući jedinstveno iskustvo koje će Vas inspirirati iznova i iznova.
                        U LA APPETITU, hrana postaje umetnost, a svaki obrok je prilika za stvaranje nezaboravnih trenutaka. Dobrodošli u dom ukusa i elegancije.
                    </span>
                    <Link to={'/Onama'}>
                        <h2 className='text-white font-naslovni border-2 rounded-xl p-2 border-white border-solid mt-6 text-xl hover:opacity-55 hover:border-opacity-50'>VIŠE O NAMA</h2>
                    </Link>
                </motion.div>
                <div className='flex flex-col border-solid border-2 border-gray lg:h-[450px] lg:w-[800px] h-[500px] md:w-[700px] w-full bg-mis text-white items-center justify-center rounded-2xl  rounded-lg transition-transform relative overflow-hidden'>
                    <img className='h-full w-full cover-object rounded-md absolute top-0 left-0 transition-transform duration-[8000ms] transform-gpu hover:scale-150 object-cover' src="/KolacSaMakom.webp" alt="Elegancija" />
                </div>
            </div>

            {/* JELOVNIK/KOMPLETAN MENI */}
            <div className="w-full relative h-96 bg-cover bg-center p-5 flex items-center justify-center" style={{ backgroundImage: 'url("/dorucakmeni.webp")' }}>
                <div className='absolute w-full h-full p-5 bg-black top-0 opacity-50'></div>
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='flex flex-col gap-3 items-center absolute'>

                    <div className='flex flex-col items-center'>
                        <h1 className='font-naslovni lg:text-7xl text-4xl text-white'>JELOVNIK </h1>
                        <Link to={'/meni'}>
                            <button className='w-[200px] h-[50px] font-naslovni border-2 rounded-xl p-2 border-white border-solid mt-6 text-xl hover:opacity-55 hover:border-opacity-50 text-white'>
                                KOMPLETAN MENI
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div >
            {/* NASA PREPORUKA */}
            <div className='flex flex-col justify-center items-center m-2'>
                <h1 className='text-white font-naslovni lg:text-4xl text-3xl mt-8'>NAŠA PREPORUKA</h1>
                <hr className='border-gray border-solid w-[40%] m-5' />
                <div className='flex lg:flex-row md:flex-row flex-wrap items-center justify-center w-full h-full gap-2 lg:gap-4 md:gap-3 m-3'>
                    <div className='flex justify-center items-center flex-col text-white items-center font-naslovni text-xl border border-solid p-2 border-gray rounded-2xl'>
                        <img className='h-[300px] w-[300px]  p-4 rounded-xl' src="/9.webp" alt="burger" />
                        <span className='text-xl'>BURGER CLASSIC</span>

                    </div>
                    <div className='flex justify-center items-center flex-col text-white items-center font-naslovni text-xl border border-solid p-2 border-gray rounded-2xl'>
                        <img className='h-[300px] w-[300px]  rounded-xl p-4' src="/biftekZar.webp" alt="meso2" />
                        <span className='text-xl'>BIFTEK ŽAR</span>

                    </div>
                    <div className='flex justify-center items-center flex-col text-white items-center font-naslovni text-xl border border-solid p-2 border-gray rounded-2xl'>
                        <img className='h-[300px] w-[300px]  rounded-xl p-4' src="/biftekUlje.webp" alt="biftek"></img>
                        <span className='text-xl'>BIFTEK U ULJU</span>

                    </div>
                    <div className='flex justify-center items-center flex-col text-white items-center font-naslovni text-xl border border-solid p-2 border-gray rounded-2xl'>
                        <img className='h-[300px] w-[300px] rounded-xl p-4' src="/29.webp" alt="losos"></img>
                        <span className='text-xl'>LOSOS NA ŽARU</span>

                    </div>

                </div>
            </div>
            <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
                className="w-full h-96 bg-cover bg-center mt-1 border-4 border-black border-b-8 border-opacity-100 flex items-center justify-center" style={{ backgroundImage: 'url("/pocetnaDesert.webp")' }}>
                <div className='w-full h-full bg-cover bg-center border-4 border-black border-b-8  bg-black opacity-50'></div>
                <motion.div variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='flex flex-col justify-center items-center absolute gap-2'>
                    <GiCakeSlice size={80} color='white' />
                    <Link to={'/desert'} className=' font-naslovni border-2 rounded-xl p-3 border-white border-solid mt-6 text-xl hover:opacity-55 hover:border-opacity-50 text-white'>DESERTI</Link>

                </motion.div>

            </motion.div>
        </div >
    )
}

export default Pocetna
