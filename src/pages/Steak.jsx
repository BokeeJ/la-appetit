import React from 'react';
import { motion } from 'framer-motion';
import { steak } from '../Services/meni';

function Steak() {
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
        <div>
            <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
                className='flex lg:flex-row md:flex-col flex-col border-white justify-center lg:gap-6 p-4'
            >
                <div className='lg:border-4 border-white border-4 rounded-t-2xl bg-mis'>
                    <h1 className='text-white font-link text-3xl m-10'>STEAK SELECTION</h1>
                    <hr className='text-white border-2 m-4' />
                    <div className=''>
                        {steak.map((meni, index) => {
                            return (
                                <div className='p-2 lg:w-[550px] md:w-[600px] ml-4' key={index}>
                                    <div className='flex flex-row justify-between '>
                                        <h1 className='text-white text-xl'>{meni.name}</h1>
                                        <p className='text-white font-sans text-xl'>{meni.price}rsd</p>
                                    </div>
                                    <hr className='w-full text-white border-solid border-white' />
                                    <p className='text-white text-xl font-pisana'>{meni.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Steak;