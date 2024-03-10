import React from 'react'
//react icons
import { IoIosRestaurant } from "react-icons/io";
import { Link } from 'react-router-dom';
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
        <div >
            {/* cover slika */}
            <div className="w-full h-96 bg-cover bg-center  " style={{ backgroundImage: 'url("/src/assets/LaA_0091.jpg")' }}>
            </div>
            {/* container */}
            <div className='flex flex-col lg:flex-row justify-center gap-10 p-10'>
                <div className='flex flex-col border-solid border-2 border-sky-500 h-[200px] w-[200px] bg-mis text-white items-center rounded-2xl p-2 hover:scale-125 transition-transform rounded-lg'>
                    <img className='h-[180px] w-[180px] rounded-md' src="/burger.jpg" alt="dorucak" />
                    <h4>Lep pocetak dana za vas u nasem restoranu</h4>
                </div>
                <motion.div variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='bg-mis w-[230px] md:h-[390px] wd-full flex flex-col items-center p-5 border border-gray-300 shadow-md hover:scale-125 transition-transform rounded-lg'>
                    <h1 className='font-link text-white flex flex-row items-center gap-2'> <IoIosRestaurant size={25} />LA APPETIT <IoIosRestaurant size={25} /></h1>
                    <hr className='w-full my-2 border-t border-gray-400 text-white mt-5' />
                    <span className='text-white size-md font-link mt-5 '>Mesto gde se susreću raskoš i harmonija, stvarajući jedinstveno iskustvo koje će vas inspirirati iznova i iznova.
                        U La Appetitu, hrana postaje umetnost, a svaki obrok je prilika za stvaranje nezaboravnih trenutaka. Dobrodošli u dom ukusa i elegancije.
                    </span>
                </motion.div>
                <div className='flex flex-col border-solid border-2 border-sky-500 h-[200px] w-[200px] bg-mis text-white items-center rounded-2xl p-2 hover:scale-125 transition-transform'>
                    <img className='h-[140px] w-[180px]  rounded-md' src="/src/assets/pocetna.jpeg" alt="dorucak" />
                    <h4>Lep pocetak dana za vas u nasem restoranu</h4>
                </div>

            </div >
            <div className="w-full h-96 bg-cover bg-center p-5 flex justify-center" style={{ backgroundImage: 'url("/src/assets/enterijer.jpg")' }}>
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='flex flex-col gap-3 items-center'>
                    <h1 className='font-link text-3xl text-white mb-10'>LA APPETIT</h1>
                    <h1 className='font-naslovni text-7xl text-white'>JELOVNIK </h1>
                    <Link to={'/meni'}><button className='w-[200px] h-[30px] border border-slate-100 hover:text-orange border-[elegant]'><span className='text-white  font-naslovni hover:opacity-55 hover:border-opacity-50'>Kompletan meni</span ></button></Link>
                </motion.div>
            </div >
            {/* Mini meni */}
            <div className='flex lg:flex-row md:flex-row flex-col w-full h-full mt-2 gap-2'>
                <div className='relative'>
                    <div className='bg-black h-[300px] w-full absolute opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center '>
                        <div className='h-[290px] w-[300px] border-solid border-2 border-sky-100 items-center flex flex-col justify-center'>
                            <h2 className='text-white text-4xl font-pisana'>Burger</h2>
                            <hr className='w-[80%] my-2 border-t border-solid border-gray-400 text-white mt-5' />
                            <p className='text-white p-2 font-pisana p-3'>Zagrizite u savršenstvo sa našim burgerom od junećeg mesa! Sočni burger od vrhunskog, cistog junećeg mesa, savršeno pečen i poslužen u mekanom pecivu, pruža neodoljivu kombinaciju ukusa i teksture. Osetite bogatstvo ukusa uz svaki zalogaj.</p>
                        </div>
                    </div>
                    <img className='h-[300px] w-full' src="/src/assets/BBurger.jpg" alt="burger" />
                </div>
                <div className='relative'>
                    <div className='bg-black h-[300px] w-full absolute opacity-0 hover:opacity-70 transition-opacity duration-100 flex items-center justify-center '>
                        <div className='h-[290px] w-[300px] border-solid border-2 border-sky-100 items-center flex flex-col justify-center'>
                            <h2 className='text-white text-4xl font-pisana'>Riba</h2>
                            <hr className='w-[80%] my-2 border-t border-solid border-gray-400 text-white mt-5' />
                            <p className='text-white p-2 font-pisana p-3'></p>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='bg-black h-[300px] w-full absolute opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center '>
                            <div className='h-[290px] w-[300px] border-solid border-2 border-sky-100 items-center flex flex-col justify-center'>
                                <h2 className='text-white text-4xl font-pisana'>Riba</h2>
                                <hr className='w-[80%] my-2 border-t border-solid border-gray-400 text-white mt-5' />
                                <p className='text-white p-2 font-pisana p-3'>Uživajte u svežini mora u svakom zalogaju uz našu ribu! Sa pažljivo odabranim sastojcima i majstorskom pripremom, svaki tanjir predstavlja spoj ukusa koji će vas transportovati direktno na obalu.</p>
                            </div>
                        </div>
                    </div>
                    <img className='h-[300px] w-full' src="/src/assets/Riba.jpg" alt="riba" /></div>
                <div>
                    <div className='relative'>
                        <div className='bg-black h-[300px] w-full absolute opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center '>
                            <div className='h-[290px] w-[300px] border-solid border-2 border-sky-100 items-center flex flex-col justify-center'>
                                <h2 className='text-white text-4xl font-pisana'>Taljatele</h2>
                                <hr className='w-[80%] my-2 border-t border-solid border-gray-400 text-white mt-5' />
                                <p className='text-white p-2 font-pisana p-3'>Uživajte u autentičnom italijanskom iskustvu uz naše taljatele! Sa svežim sastojcima i neodoljivim sosovima, svaki zalogaj je pravo putovanje kroz Italiju. Dobrodošli u kutak prave italijanske kulinarske tradicije!</p>
                            </div>
                        </div>
                    </div>
                    <img className='h-[300px] w-full' src="/src/assets/taljatele.jpg" alt="taljatele" /></div>
                <div>
                    <div className='relative'>
                        <div className='bg-black h-[300px] w-full absolute opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center '>
                            <div className='h-[290px] w-[300px] border-solid border-2 border-sky-100 items-center flex flex-col justify-center'>
                                <h2 className='text-white text-4xl font-pisana '>Kroasan</h2>
                                <hr className='w-[80%] my-2 border-t border-solid border-gray-400 text-white mt-5' />
                                <p className='text-white p-2 font-pisana'>Uživajte u savršenom spoju hrskave teksture i bogatog ukusa uz naš slani kroasan! Sa mekanim, laganim testom i srdačnim nadjevom, svaki zalogaj je prava poslastica za nepca Dobrodošli u naš kutak gde se svaki kroasan priprema sa ljubavlju i pažnjom.</p>
                            </div>
                        </div>
                    </div>
                    <img className='h-[300px] w-full' src="/src/assets/slani kroasan.jpg" alt="kroasan" /></div>
            </div>
            <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
                className="w-full h-96 bg-cover bg-center mt-1 border-4 border-black border-b-8 border-opacity-100" style={{ backgroundImage: 'url("/src/assets/ZZ6_5788.jpg")' }}>
                <motion.div variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='flex flex-col items-center justify-center'>
                    <div className='bg-black h-[300px] w-[500px] mt-5 rounded-3xl opacity-0 hover:opacity-70 transition-opacity duration-300 flex flex-col p-8 justify-center items-center gap-5'>
                        <h2 className='text-white font-naslovi text-1xl '>SLATKO ZADOVOLJSTVO U ZALOGAJU</h2>
                        <hr className='text-white w-full border-solid border-white' />
                        <p className='text-white'>Zavodljivi deserti koji oduševljavaju svim čulima. Otkrijte našu paletu neodoljivih poslastica koje će vas odvesti na putovanje ukusa i zadovoljstva. Prepustite se slatkim užicima i doživite savršen završetak svakog obroka. Dobrodošli u raj za ljubitelje slatkiša.</p>
                    </div>
                </motion.div>

            </motion.div>
        </div >
    )
}

export default Pocetna