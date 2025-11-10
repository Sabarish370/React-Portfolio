import React from 'react'
import AboutText from './AboutText';
import AboutImage from './AboutImage';

const AboutMain = () => {
  return (
    <div id='about' className='flex sm:flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-100px justify-around items-center'>
        <AboutText />
        <AboutImage />
    </div>
  )
}

export default AboutMain