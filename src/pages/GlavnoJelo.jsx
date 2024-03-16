import React from 'react'
import { glavnaJela } from '../Services/meni'
function GlavnoJelo() {
    return (
        <div className='p-10'>
            <div className='lg:border-4 border-white border-4 rounded-t-2xl bg-mis'>
                <h1 className='text-white font-link text-3xl m-10'>GLAVNA JELA</h1>
                <hr className='text-white border-2 m-4' />
                <div>
                    {glavnaJela.map((meni, index) => {
                        return (
                            <div className='p-5 lg:w-[800px] md:w-[600px]' key={index}>
                                <div className='flex flex-row  justify-between'>
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
        </div>


    )
}

export default GlavnoJelo