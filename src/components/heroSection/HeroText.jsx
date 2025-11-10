import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-6 h-full justify-center md:text-left sm:text-center'>        
        <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'>Fullstack Web Developer</h2>
        <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase">Sabarish @ Sabi</h1>
        <p className="text-lg mt-4 text-white">A Passionate Web Developer</p>
    </div>
  )
}

export default HeroText