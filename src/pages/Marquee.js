import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1.5" className='h-full w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-skin-200'>
            <div className="text  border-t-[0.1px] border-b-[0.1px] border-zinc-100 text-white flex  whitespace-nowrap overflow-hidden">
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className='text-[18rem] leading-none font-semibold hFont1 uppercase  '>Elderly Ways</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className='text-[18rem] leading-none font-semibold hFont1 uppercase  '> {'\u00A0'}Elderly Ways</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className='text-[18rem] leading-none font-semibold hFont1 uppercase '>  {'\u00A0'}Elderly Ways</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className='text-[18rem] leading-none font-semibold hFont1 uppercase  '>  {'\u00A0'}Elderly Ways</motion.h1>
            </div>
            
        </div>
    )
}

export default Marquee