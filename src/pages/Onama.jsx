import React from 'react'
import { motion } from 'framer-motion';
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
            <div className="w-full  h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("/6.jpg")' }}>

            </div>

            <motion.div
                className="flex items-center justify-center flex-col"
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
            >
                <h1 className='text-white text-5xl font-link mt-5'>DOBRODOŠLI</h1>
                <div className='w-[80%] h-full text-xl p-5'>
                    <p className='text-white p-10 font-sans'>Dobrodošli u raskošni svet gastronomske ekstravagancije, dobrodošli u LA APPETIT. Ovde, svaki zalogaj je ne samo jelo, već i remek-delo.

                        U našem restoranu, umetnost prelazi granice platna i ulazi direktno na vaš tanjir. Svaki sastojak je pažljivo odabran kako bi stvorio savršeno usklađen spoj ukusa i tekstura, kao što umetnik pažljivo bira boje i oblike za svoje delo.

                        Naša kulinarska vizija je spoj tradicije i inovacije, gde se tradicionalni recepti pretvaraju u moderna remek-dela. Uživajte u jedinstvenom iskustvu okusa, koje se rađa iz naše strasti prema hrani i posvećenosti vrhunskom kvalitetu.

                        Ali naša umetnost nije ograničena samo na tanjir. Naš enterijer je pažljivo osmišljen kako bi stvorio atmosferu koja će oduzeti dah. Svaka linija, svaka tekstura, svaka boja - sve je pažljivo birano kako bi stvorilo harmoniju između prostora i gostiju.

                        Doživite eleganciju u svakom detalju dok uživate u našem izvanrednom meniju, dok se prepustite čarima umetnosti koja oživljava svaki trenutak proveden u našem restoranu.

                        [Ime Vašeg Restorana] - gde se umetnost sreće sa elegancijom, stvarajući iskustvo koje će vas ostaviti bez daha i nadahnjivati vaše čula. Dobrodošli u vaš novi omiljeni kutak umetničke gastronomije.</p>
                </div>
            </motion.div >
            <div className="w-full h-full flex flex-col md:flex-col lg:flex-row items-center gap-4 justify-center">
                <img className='object-cover h-[300px] ' src="/ulaz.jpeg" alt="" />
                <img className='object-cover h-[300px] ' src="/24.jpg" alt="" />
                <img className='object-cover h-[300px] rounded-3xl' src="/vino.jpg" alt="" />

            </div>
        </div>

    )
}

export default Onama