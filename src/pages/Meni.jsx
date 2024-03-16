import React, { useState } from 'react'
import Dorucak from './Dorucak.jsx'
import GlavnoJelo from './GlavnoJelo.jsx'
import Steak from './Steak.jsx'
import Burger from "./Burger.jsx";
import SvezeSalate from "./SvezeSalate.jsx";
// // // import { hrana, glavnaJela, steak, burgeri } from '../Services/meni'
// // // //motion framer
// // // import { motion } from 'framer-motion'
// // // //react icons
// // // import { IoRestaurantOutline } from "react-icons/io5";
// // import Dorucak from "./Dorucak"



function Meni() {
    const [dorucakOpen, setDorucakOpen] = useState(false)
    const [glavnoJeloOpen, setGlavnoJeloOpen] = useState(false)
    const [stekOpen, setStekOpen] = useState(false)
    const [burgerOpen, setBurgerOpen] = useState(false)
    const [svezeSalateOpen, setSvezeSalateOpen] = useState(false)
    return (
        <div className='flex flex-col justify-center items-center '>
            {/* Dorucak */}
            <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
                <button className='text-white text-3xl  w-[200px] font-naslovni hover:text-gray' onClick={() => setDorucakOpen(!dorucakOpen)}>DORUCAK</button>
                {dorucakOpen && <Dorucak />}
            </div>
            {/* Glavno jelo */}
            <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
                <button className='text-white text-3xl  w-[250px] font-naslovni hover:text-gray' onClick={() => setGlavnoJeloOpen(!glavnoJeloOpen)}>GLAVNO JELO</button>
                {glavnoJeloOpen && <GlavnoJelo />}

            </div>
            {/* Stek */}
            <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
                <button className='text-white text-3xl  w-[200px] font-naslovni hover:text-gray' onClick={() => setStekOpen(!stekOpen)}>STEK</button>
                {stekOpen && <Steak />}

            </div>
            {/* Burger */}
            <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
                <button className='text-white text-3xl  w-[200px] font-naslovni hover:text-gray' onClick={() => setBurgerOpen(!burgerOpen)}>BURGER</button>
                {burgerOpen && <Burger />}

            </div>
            {/* Sveze salate */}
            <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
                <button className='text-white text-3xl  w-[250px] font-naslovni hover:text-gray' onClick={() => setSvezeSalateOpen(!svezeSalateOpen)}>SVEZE SALATE</button>
                {svezeSalateOpen && <SvezeSalate />}



            </div>
        </div>
    )
}

export default Meni