import React from 'react'
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from "react-icons/fa";
function Onama() {
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
        <div className='flex flex-col'>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="w-full  h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("/13.webp")' }}>
                <h1 className='text-white text-5xl font-link mt-5'>DOBRODOŠLI</h1>
            </motion.div>

            <motion.div
                className="flex items-center justify-center flex-col"
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
            >


                <div className='w-[80%] h-full text-xl p-5'>
                    <div className="flex flex-col items-center justify-center p-6 lg:p-14 gap-5 text-white lg:w-3/4 md:w-4/5 sm:w-full mx-auto">
                        <p className="text-center text-base sm:text-lg lg:text-xl">Dobrodošli u raskošni svet gastronomske ekstravagancije, dobrodošli u LA APPETIT.</p>
                        <p className="text-center text-base sm:text-lg lg:text-xl">Ovde, svaki zalogaj je ne samo jelo, već i remek-delo. U našem restoranu, umetnost prelazi granice platna i ulazi direktno na vaš tanjir. Svaki sastojak je pažljivo odabran kako bi stvorio savršeno usklađen spoj ukusa i tekstura, kao što umetnik pažljivo bira boje i oblike za svoje delo.</p>
                        <p className="text-center text-base sm:text-lg lg:text-xl">Ali naša umetnost nije ograničena samo na tanjir. Naš enterijer je pažljivo osmišljen kako bi stvorio atmosferu koja će oduzeti dah. Svaka linija, svaka tekstura, svaka boja - sve je pažljivo birano, kako bi stvorilo harmoniju između prostora i gostiju.</p>
                        <p className="text-center text-base sm:text-lg lg:text-xl">La Appetit je mesto gde se umetnost sreće sa elegancijom, stvarajući iskustvo koje će vas ostaviti bez daha i istovremeno nadahnjivati vaša čula.</p>
                    </div>


                </div>

            </motion.div >
            <div className="w-full h-full flex flex-col md:flex-col lg:flex-row items-center gap-10 justify-center">

                <img className='object-cover h-[300px] rounded-3xl ' src="/SlikaJelovnik2.webp" alt="" />
                <img className='object-cover h-[300px] rounded-3xl' src="/ulaz.webp" alt="" />


            </div>
        </div>

    )
}

export default Onama