import React from 'react'
//react icons
import { IoIosRestaurant } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GiCakeSlice } from "react-icons/gi";

//motion
import { motion } from 'framer-motion'
function Pocetna() {

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
            <div className="w-full  h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/5.jpg")' }}>
            </div>
            {/* container */}
            <div className='flex w-full flex-col lg:flex-row justify-between gap-5 p-10'>
                <div className='flex flex-col border-solid border-2 border-gray lg:h-[450px] lg:w-[300px] h-[200px] w-full bg-mis text-white items-center rounded-2xl   lg:ml-5  rounded-lg transition-transform relative  overflow-hidden'>
                    <img className='h-full w-full rounded-md absolute top-0 left-0 transition-transform duration-[8000ms] transform-gpu hover:scale-150' src="/menikarta.jpg" alt="ZaricRakija" />

                </div>
                <motion.div variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='bg-black lg:w-[530px] md:h-[390px] w-full flex flex-col items-center p-5  border border-gray-300 shadow-md hover:scale-125 transition-transform rounded-2xl lg:justify-center border-solid border-gray border-2  '>
                    <h1 className='font-naslovni text-white flex flex-row items-center gap-2'><span className='text-4xl font-naslovni'>LA APPETIT </span><IoIosRestaurant size={40} /></h1>
                    <hr className='w-full my-2 border-t border-gray-400 text-white mt-5' />
                    <span className='text-white  font-link text-xl mt-5 '>Mesto gde se susreću raskoš i harmonija, stvarajući jedinstveno iskustvo koje će vas inspirirati iznova i iznova.
                        U LA APPETITU, hrana postaje umetnost, a svaki obrok je prilika za stvaranje nezaboravnih trenutaka. Dobrodošli u dom ukusa i elegancije.
                    </span>
                    <Link to={'/Onama'}>
                        <h2 className='text-white font-naslovni border-2 rounded-xl p-2 border-white border-solid mt-6 text-xl hover:opacity-55 hover:border-opacity-50'>VIŠE O NAMA</h2></Link>
                </motion.div>
                <div className='lex flex-col border-solid border-2 border-gray lg:h-[450px] lg:w-[300px] h-[200px] w-full bg-mis text-white items-center rounded-2xl   lg:mr-5  rounded-lg transition-transform relative  overflow-hidden'>
                    <img className='h-full w-full  rounded-md absolute top-0 left-0 transition-transform duration-[8000ms] transform-gpu hover:scale-150' src="/vino.jpg" alt="Elegancija" />

                </div>

            </div >
            {/* JELOVNIK/KOMPLETAN MENI */}
            <div className="w-full relative h-96 bg-cover bg-center p-5 flex items-center justify-center" style={{ backgroundImage: 'url("/enterijer.jpg")' }}>
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
                        <img className='h-[300px] w-[300px]  p-4 rounded-xl' src="/burger2024.JPG" alt="burger" />
                        <span className='text-4xl'>Burger</span>

                    </div>
                    <div className='flex justify-center items-center flex-col text-white items-center font-naslovni text-xl border border-solid p-2 border-gray rounded-2xl'>
                        <img className='h-[300px] w-[300px]  rounded-xl p-4' src="/20242.jpg" alt="meso2" />
                        <span className='text-4xl'>Svinjski biftek</span>

                    </div>
                    <div className='flex justify-center items-center flex-col text-white items-center font-naslovni text-xl border border-solid p-2 border-gray rounded-2xl'>
                        <img className='h-[300px] w-[300px]  rounded-xl p-4' src="/biftek.jpg" alt="biftek"></img>
                        <span className='text-4xl'>Krvavi biftek</span>

                    </div>
                    <div className='flex justify-center items-center flex-col text-white items-center font-naslovni text-xl border border-solid p-2 border-gray rounded-2xl'>
                        <img className='h-[300px] w-[300px] rounded-xl p-4' src="/losos.jpg" alt="losos"></img>
                        <span className='text-4xl'>Losos</span>

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
                className="w-full h-96 bg-cover bg-center mt-1 border-4 border-black border-b-8 border-opacity-100 flex items-center justify-center" style={{ backgroundImage: 'url("/19.jpg")' }}>
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
