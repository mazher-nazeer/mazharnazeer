import { motion } from 'framer-motion'
import React from 'react'

const heading = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.7,
            staggerChildren: 0.09,
        },

    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },

    }
}

const AnimatedText = ({ className = "", text }) => {

    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 lg:text-center'>

            <motion.h1 
                variants={heading}
                initial="initial"
                animate="animate"
                className={`${className} dark:text-light`}>
                {
                    text.split(' ').map((word, index) => (
                        <motion.span 
                        key={word + '-' + index} className='inline-block'
                        variants={singleWord } >

                            {word + ' '}&nbsp;
                        </motion.span>
                    )
                    )
                }

            </motion.h1>

        </div>
    )
}

export default AnimatedText