import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import BulletPoints from './BulletPoints'
import BookComponent from './BookComponent'

const Details = ({ degreeName, time, address, info, controlBoard }) => {
    const ref = useRef(null)
    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-start lg:items-center justify-between w-[75%] md:w-[80%]'>
            <BulletPoints reference={ref} />
            <motion.div
                initial={{ y: 70 }}
                whileInView={{ y: 0 }}
                transition={{ duration: .75, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg'>
                    {degreeName}
                </h3>
                <span className='capitalize font-medium text-dark/75  dark:text-light  xs:text-sm'>
                    {time} | {address}
                </span>
                <h4 className='text-primary dark:text-primaryDark dark:text-primaryDark  md:text-sm font-semibold'>{controlBoard}</h4>
                <p className='font-medium w-full dark:text-light md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}


const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center start"] })

    return (
        <div className='my-64 w-full  md:mt-32 sm:mt-20 xs:mt-14'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light 
            lg:text-4xl sm:text-xl md:mb-12 lg:flex lg:justify-center lg:items-center'>
                Education Details
            <BookComponent />
            </h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    className='absolute left-7 top-4  w-[4px] h-full origin-top bg-dark dark:bg-light
                    md:w-[3px] md:left-[24px] xs:left-[16px] xs:top-6'
                    ref={ref}
                    style={{ scaleY: scrollYProgress }}
                ></motion.div>
                <ul className='flex flex-col justify-between items-start ml-4 xs:ml-2'>
                    <Details
                        degreeName=" BS Software Engineering"
                        time="2021 - 2025"
                        address="Virtual University"
                        controlBoard="Virtual University Federal Control"
                        info="Programming, Algorithm, Data structures"
                    />
                         <Details
                        degreeName="Web Development"
                        time="2012"
                        address="AMI Apex Institute"
                        controlBoard="SBTE"
                        info="Web design, UI development, Html/Css"
                    />
                       <Details
                        degreeName="Graphic Designing"
                        time="2010"
                        address="Arena Multimedia"
                        controlBoard="Arena Multimedia Pakistan"
                        info="Graphics Design Adobe Photoshop& Illustrator CS6"
                    />
                    <Details
                        degreeName="DAE (HSC)"
                        time="2005 - 2008"
                        address="Govt College of Technology"
                        controlBoard="SBTE"
                        info="Maths, Physics, Chemistry, Civil Engineering"
                    />
                    <Details
                        degreeName="SSC"
                        time="2001"
                        address="Govt College of Technology"
                        controlBoard="SSC"
                        info="Maths, Biology, Physics, Chemistry "
                    />



                </ul>
            </div>

        </div>
    )
}

export default Education