import React from 'react'

function Pocetna() {
    return (
        <div>
            <div className="w-full h-96 bg-cover bg-center p-24" style={{ backgroundImage: 'url("/src/assets/LaA_0091.jpg")' }}>
            </div>
            <div className='flex flex-row justify-center gap-10 p-10'>
                <div className='flex flex-col border-solid border-2 border-sky-500 h-[200px] w-[200px] bg-mis text-white items-center rounded-2xl p-2'>
                    <img className='h-[180px] w-[180px] rounded-md' src="/src/assets/burger.jpg" alt="dorucak" />
                    <h4>Lep pocetak dana za vas u nasem restoranu</h4>
                </div>
                <div className='flex flex-col border-solid border-2 border-sky-500 h-[200px] w-[200px] bg-mis text-white items-center rounded-2xl p-2'>
                    <img className='h-[140px] w-[180px]  rounded-md' src="/src/assets/pocetna.jpeg" alt="dorucak" />
                    <h4>Lep pocetak dana za vas u nasem restoranu</h4>
                </div>
            </div>
        </div>
    )
}

export default Pocetna