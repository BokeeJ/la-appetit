import React from 'react'
import { hrana } from '../Services/meni'
function Dorucak() {

    return (
        <div className='p-10'>

            <div className='bg-mis  border-white border-4 rounded-t-2xl  visible'>
                <h1 className='text-white font-link text-3xl m-10'>DORUCAK</h1>
                <hr className='text-white border-2 m-4' />
                {hrana.map((meni, index) => {
                    return (
                        <div className='p-2 lg:w-[800px] md:w-[600px] ml-4 ' key={index}>
                            <div className='w-full flex flex-col'>
                                <div className='flex flex-row w-full md:w-full full justify-between'>
                                    <h1 className='text-white text-xl'>{meni.name}</h1>
                                    <p className='text-white font-sans text-xl'>{meni.price}rsd</p>
                                </div>

                                <hr className='w-full text-white border-solid border-white' />
                                <p className='text-white text-xl font-pisana'>{meni.description}</p>
                            </div>


                        </div>

                    )
                })}
                <div className='flex flex-col p-2 lg:w-[550px] ml-4 absolute'>
                    <hr className='w-full text-white border-dashed border-white' />
                    <h1 className='text-white font-link p-2 text-2xl ml-10 mt-5'>KREIRAJ SAM SVOJ DORUCAK</h1>
                    <hr className='text-white border-2 m-4' />
                    <div className='flex flex-row '>
                        <h1 className='text-white font-link text-xl'>JAJA(3kom):</h1>
                        <p className='text-white'>
                            <span className='ml-5'>Omlet</span>
                            <span className='ml-5'>Kajgana</span>
                            <span className='ml-5'>Na oko</span>
                        </p>
                    </div>
                    <hr className='w-full text-white border-solid border-white mt-4' />
                    <div className='flex flex-row gap-1 '>
                        <h1 className='text-white font-link text-xl'>DODACI:</h1>

                        <div className='flex flex-wrap text-white'>
                            <span className='ml-5'>Sunka</span>
                            <span className='ml-5'>Njeguški pršut</span>
                            <span className='ml-5'>Pečurke</span>
                            <span className='ml-5'>Svinjski vrat</span>
                            <span className='ml-5'>Grilovano povrće</span>
                            <span className='ml-5'>Špinat</span>
                            <span className='ml-5'>Slanina</span>
                            <span className='ml-5'>Mini viršle</span>
                            <span className='ml-5'>Kulen</span>
                            <span className='ml-5'>Tanka zanatska kobasica</span>
                        </div>

                    </div>
                    <hr className='w-full text-white border-solid border-white mt-4' />
                    <div className='flex flex-row gap-1 '>
                        <h1 className='text-white font-link text-xl' >PRILOG:</h1>

                        <div className='flex flex-wrap text-white '>
                            <span className='ml-5 '>Feta sir</span><span className='ml-5 '>Koziji sir</span><span className='ml-5 '>Mirocki sir(grilovan)</span><span className='ml-5 '>Ajvar</span><span className='ml-5 '>Kajmak</span><span className='ml-5 '>Pavlaka</span><span className='ml-5 '>Kackavalj</span><span className='ml-5 '>Mleko</span><span className='ml-5'>Jogurt</span><span className='ml-5 '>Kiselo mleko</span>
                        </div>


                    </div>
                    <hr className='w-full text-white border-solid border-white mt-4' />
                    <div className='flex flex-row gap-10 '>
                        <h5 className='text-white text-xl font-link'>JAJA + 1 DODATAK + 1 PRILOG</h5>
                        <span className='text-white text-xl ml-4'>460,00</span>
                    </div>
                    <hr className='w-full text-white border-solid border-white mt-4' />
                    <div className='flex flex-row gap-10 '>
                        <h5 className='text-white text-xl'>JAJA + 2 DODATKA + 2 PRILOGA</h5>
                        <span className='text-white text-xl '>640,00</span>
                    </div>
                </div>
                <div className='mt-9 '>
                    <img className='w-[550px] lg:m-4 lg:rounded-3xl' src="/6.jpg" alt="" />

                </div>

            </div>
        </div>
    )
}

export default Dorucak