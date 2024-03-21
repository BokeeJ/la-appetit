import React from 'react'
import { motion } from 'framer-motion'

function Proslave() {
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
        <div className='w-full md:h-[40%] md:p-0 p-5'>
            <div className="w-full  h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/SlikaJelovnik2.webp")' }}>
            </div>

            <div className='w-full flex lg:flex-row md:flex-row flex-col p-5'>

                <div className='flex flex-col h-full gap-5 items-center transition-transform   overflow-hidden'>

                    <div className="flex flex-col items-center justify-center p-14 gap-5 text-white bg-gradient-to-br rounded-lg shadow-xl lg:text-xl">
                        <p className="text-center">Dobrodošli u raskošni svet gastronomske ekstravagancije, dobrodošli u LA APPETIT.</p>
                        <p className="text-center">Ovde, svaki zalogaj je ne samo jelo, već i remek-delo. U našem restoranu, umetnost prelazi granice platna i ulazi direktno na vaš tanjir. Svaki sastojak je pažljivo odabran kako bi stvorio savršeno usklađen spoj ukusa i tekstura, kao što umetnik pažljivo bira boje i oblike za svoje delo.</p>
                        <p className="text-center">Ali naša umetnost nije ograničena samo na tanjir. Naš enterijer je pažljivo osmišljen kako bi stvorio atmosferu koja će oduzeti dah. Svaka linija, svaka tekstura, svaka boja - sve je pažljivo birano, kako bi stvorilo harmoniju između prostora i gostiju.</p>
                        <p className="text-center ">La Appetit je mesto gde se umetnost sreće sa elegancijom, stvarajući iskustvo koje će vas ostaviti bez daha i istovremeno nadahnjivati vaša čula.</p>
                        <p>Za sve informacije, slobodno nas kontaktirajte, naše ljubazno osoblje ce Vam uvek izaći u susret.</p>

                    </div>


                    <motion.div
                        className='flex flex-row gap-10  items-center justify-center p-5 rounded-3xl'
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                            once: true,
                        }}>

                        <img className='w-full lg:w[70%] md:w-[70%] border border-white rounded-2xl' src="/proslava.webp" alt="La Appetit" />
                    </motion.div>

                </div>
            </div>


        </div>
    )
}

export default Proslave