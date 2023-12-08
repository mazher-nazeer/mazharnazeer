import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const MotionLink = motion(Link)
const Logo = () => {

    return (
        <div className='flex justify-center items-center mt-2 lg:mt-0'>
            <MotionLink href="/"
                className='w-14 h-14 bg-dark  text-light  rounded-full lg:w-10 lg:h-10
                  flex items-center justify-center border border-solid border-transparent dark:border-light'
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: { duration: 1, repeat: Infinity }
                }}

            >
                MN</MotionLink>
        </div>
    )
}

export default Logo