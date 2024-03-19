import React from 'react'
import { motion } from 'framer-motion'

function Rakije() {
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
        <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
                once: true,
            }}
            className='flex lg:flex-row md:flex-col flex-col border-white justify-center lg:gap-6 p-4'
        >
            <div className='lg:border-4 border-white border-4 rounded-t-2xl bg-mis flex flex-col p-2 lg:w-[550px] md:w-[600px] ml-4 p-4'>
                <h1 className='text-white font-link text-3xl m-10'>RAKIJE SRBIJE</h1>
                <hr className='text-white border-2 m-4' />
                <h2 className='text-3xl font-link m-2'>DESTILERIJA ZELJA</h2>
                <hr className='w-[50%] border-2' />
                <div className='flex justify-between m-2'>
                    <p className='text-white font-sans text-xl'>ŠLJIVA 0.03</p>
                    <p className='text-white font-sans text-xl'>280Rsd</p>
                </div>
                <hr className='text-white' />
                <div className='flex justify-between m-2 text-white text-xl'>
                    <p>DUNJA 0.03</p>
                    <p>320Rsd</p>

                </div>
                <hr className='text-white' />
                <h2 className='text-3xl font-link m-2'>DESTILERIJA ZARIĆ</h2>
                <hr className='w-[50%] border-2' />
                <div className='flex justify-between text-white text-xl m-2'>

                    <p>KRALJICA-ŠLJIVA</p>
                    <p>320Rsd</p>
                </div>
                <hr className='text-white' />
                <div className='flex justify-between text-white text-xl m-2'>

                    <p>NOSTALGIJA-DUNJA</p>
                    <p>380Rsd</p>
                </div>
                <hr className='text-white' />
                <h2 className='text-3xl font-link m-2'>MEDENA KAPLJICA</h2>
                <hr className='w-[50%] border-2' />
                <div className='flex justify-between text-white text-xl m-2'>
                    <p>MEDOVAČA</p>
                    <p>290Rsd</p>
                </div>
                <hr className='text-white' />
                <h2 className='text-3xl font-link m-2'>TAKOVO</h2>
                <hr className='w-[50%] border-2' />
                <div className='flex justify-between text-white text-xl m-2'>
                    <p>VILJAMOVKA</p>
                    <p>290Rsd</p>

                </div>
                <hr className='text-white' />
                <div className='flex justify-between text-white text-xl m-2'>
                    <p>KAJSIJA 0.03</p>
                    <p>320Rsd</p>
                </div>
                <div className='flex justify-between text-white text-xl m-2'>
                    <p>LOZOVAČA 0.03</p>
                    <p>280Rsd</p>
                </div>
                <hr className='text-white' />
                <div className='flex justify-between text-white text-xl m-2'>
                    <p>MAGIJA-KAJSIJA 0.03</p>
                    <p>290Rsd</p>
                </div>
                <hr className='text-white' />
                <div className='flex justify-between text-white text-xl m-2'>
                    <p>NIRVANA-KRUŠKA 0.03</p>
                    <p>360Rsd</p>
                </div>
                <hr className='text-white' />
                < div className='flex justify-between text-white text-xl m-2'>
                    <p>MALINA 0.03</p>
                    <p>290Rsd</p>
                </div>
                <hr className='text-white' />
            </div >

        </motion.div >
    )
}

export default Rakije