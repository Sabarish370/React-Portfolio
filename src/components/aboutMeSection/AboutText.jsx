import React from 'react'

const AboutText = () => {
  return (
     <div className='flex flex-1 flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className=' text-6xl  text-cyan mb-10'>About Me</h2>
        <p className='text-white'>I'm a Full Stack Developer and AI & Data Science student at Rajalakshmi Engineering College. I specialize in building responsive and dynamic web applications using technologies like React, Flask, SQL, and Firebase. I'm also deeply interested in data analytics, where I explore data-driven insights to solve real-world problems.I enjoy creating user-friendly solutions that balance functionality with clean design, and I'm always eager to learn new tools and frameworks to enhance my work.</p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  )
}

export default AboutText