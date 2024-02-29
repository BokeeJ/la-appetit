import React from 'react'
//react icons
import { IoIosRestaurant } from "react-icons/io";
import { Link } from 'react-router-dom';

function Pocetna() {
    return (
        <div>
            {/* cover slika */}
            <div className="w-full h-96 bg-cover bg-center p-24 " style={{ backgroundImage: 'url("/src/assets/LaA_0091.jpg")' }}>
            </div>
            {/* container */}
            <div className='flex flex-row justify-center gap-10 p-10'>
                <div className='flex flex-col border-solid border-2 border-sky-500 h-[200px] w-[200px] bg-mis text-white items-center rounded-2xl p-2 hover:scale-125 transition-transform rounded-lg'>
                    <img className='h-[180px] w-[180px] rounded-md' src="/src/assets/burger.jpg" alt="dorucak" />
                    <h4>Lep pocetak dana za vas u nasem restoranu</h4>
                </div>
                <div className='bg-mis w-[230px] md:h-[390px] wd-full flex flex-col items-center p-5 border border-gray-300 shadow-md hover:scale-125 transition-transform rounded-lg'>
                    <h1 className='font-link text-white flex flex-row items-center gap-2'> <IoIosRestaurant size={25} />LA APPETIT <IoIosRestaurant size={25} /></h1>
                    <hr className='w-full my-2 border-t border-gray-400 text-white mt-5' />
                    <span className='text-white size-md font-link mt-5 '>Mesto gde se susreću raskoš i harmonija, stvarajući jedinstveno iskustvo koje će vas inspirirati iznova i iznova.
                        U La Appetitu, hrana postaje umetnost, a svaki obrok je prilika za stvaranje nezaboravnih trenutaka. Dobrodošli u dom ukusa i elegancije.
                    </span>
                </div>
                <div className='flex flex-col border-solid border-2 border-sky-500 h-[200px] w-[200px] bg-mis text-white items-center rounded-2xl p-2 hover:scale-125 transition-transform'>
                    <img className='h-[140px] w-[180px]  rounded-md' src="/src/assets/pocetna.jpeg" alt="dorucak" />
                    <h4>Lep pocetak dana za vas u nasem restoranu</h4>
                </div>

            </div >
            <div className="w-full h-96 bg-cover bg-center p-24 flex justify-center" style={{ backgroundImage: 'url("/src/assets/enterijer.jpg")' }}>
                <div className='flex flex-col gap-3 items-center'>
                    <h1 className='font-link text-3xl text-white mb-10'>LA APPETIT</h1>
                    <h1 className='font-link text-7xl text-white'>JELOVNIK </h1>
                    <Link to={'/meni'}><button className='w-[200px] h-[30px] border border-slate-100 hover:text-orange border-[elegant]'><span className='text-white'>Kompletan meni</span ></button></Link>


                </div>
            </div >
        </div >
    )
}

export default Pocetna