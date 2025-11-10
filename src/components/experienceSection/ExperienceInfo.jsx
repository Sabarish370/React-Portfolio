import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const ExperienceInfo = ({ number, text }) => {
  return (
    <motion.div 
      className="flex flex-col items-center"
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="text-6xl font-bold text-cyan">{number}</h3>
      <p className="text-white text-xl">{text}</p>
    </motion.div>
  )
}

export default ExperienceInfo