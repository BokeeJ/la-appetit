import React from 'react'

function Kontakt() {
    return (
        <div className='w-full md:h-[40%] md:p-0 p-5'>

            <div className='w-full flex lg:flex-row md:flex-row flex-col p-5'>
                <img className='w-[500px] lg:mt-11 rounded-2xl md:mt-[90px] h-[370px]' src="/proslave.jpg" alt="" />
                <div className='flex flex-col h-full gap-5 items-center transition-transform   overflow-hidden'>
                    <p className='p-10 font-sans text-white '>
                         Nudimo Vam intimno gastronomsko iskustvo, gde svaki gost ima priliku da se oseća posebno i paženo.
                        Osim izvanredne hrane, naša usluga je takođe nešto što nas izdvaja. Naš prijateljski i predusretljiv tim osoblja stoji Vam na raspolaganju da ispuni sve Vaše želje i zahteve.
                        Dođite i otkrijte zašto je LA APPETIT omiljeno odredište, za sve one koji cene kvalitetnu hranu, toplu atmosferu i izvanrednu uslugu. Dobrodošli u Vašu novu gastronomsku destinaciju, gde svaki zalogaj nosi priču, a svaki trenutak je poseban.</p>
                    <img className='w-[400px] rounded-2xl md:h-[400px] h-[370px] rounded-md hover:scale-150 transition-transform duration-[8000ms] transform-gpu hover:scale-150' src="/enterijer2.jpeg" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Kontakt