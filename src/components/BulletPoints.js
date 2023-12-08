import { motion, useScroll } from 'framer-motion'
import React from 'react'

const BulletPoints = ({ reference }) => {
    // const ref = useRef(null)

    const { scrollYProgress } = useScroll({ target: reference, offset: ["center end", "center center"] })


    return (
        <figure className='stroke-dark left-0 absolute dark:stroke-light'>
            <svg width='75' height='75' viewBox='0 0 100 100' className='-rotate-[105deg]  md:w-[48px] md:-rotate-[90deg]  xs:w-[32px] md:-rotate-[80deg]' >
                <circle cx='75' cy='50' r='20' className='stroke-primary dark:stroke-primaryDark stroke-1.5 fill-none' />
                <motion.circle cx='75' cy='50' r='20' className=' stroke-[4px] fill-light dark:fill-dark'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx='75' cy='50' r='10' className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark' />
            </svg>
        </figure>
    )
}

export default BulletPoints