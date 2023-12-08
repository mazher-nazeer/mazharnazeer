import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import BulletPoints from './BulletPoints'
import Styles from '../styles/Car.module.css'
import CarComponent from './CarComponent'

const Details = ({ company, position, time, jobDetails, type }) => {
    const ref = useRef(null)
    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-start lg:items-center justify-between w-[75%] md:w-[80%] '>
            <BulletPoints reference={ref} />
            <motion.div
                initial={{ y: 70 }}
                whileInView={{ y: 0 }}
                transition={{ duration: .75, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-2xl dark:text-light sm:text-sm'>
                    {position}
                    &nbsp;
                    <span
                        className=' text-primary dark:text-primaryDark capitalize dark:text-primaryDark '>
                        @  {company}
                    </span>
                </h3>
                <span className='capitalize font-medium text-dark/75 py-4  dark:text-light xs:text-sm xs:font-normal'>
                    {time} | {type}
                </span>
                <p className='font-medium w-full dark:text-light md:text-sm xs:text-xs'>
                    {jobDetails}
                </p>
            </motion.div>
        </li>
    )
}


const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center start"] })

    return (
        <div className='my-64 w-full  md:mt-32 sm:mt-20 xs:mt-14'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light 
            lg:text-4xl sm:text-xl md:mb-12 lg:flex lg:justify-center lg:items-center'>
                Career Journey
                <CarComponent />
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
                        position="Software Engineer"
                        company="VentureDive"
                        type="Full-time"
                        time="Jan 2021 - Present"
                        jobDetails="Demonstrating a high level of professional proficiency, I have excelled in the art
                         of designing web application user interfaces. My role as a Software Engineer Web involved direct
                          client interaction, allowing me to better understand and fulfill their requirements effectively.
                           I have successfully harnessed the power of contemporary CSS and JavaScript frameworks, consistently
                            implementing modern CSS utility frameworks and JavaScript libraries while prioritizing code reusability
                             and adhering to industry-best practices for performance optimization." />

                    <Details
                        position="Frontend Developer"
                        company="Zaavya, LLC"
                        time="Oct 2019 - Jan 2021"
                        type="Full-time"
                        jobDetails="Professionally skilled in the meticulous art of shaping web application user interfaces,
                         I harness the full potential of cutting-edge CSS and JavaScript frameworks. As a dedicated frontend
                          developer, I maintain a sharp focus on the pursuit of delivering nothing less than exceptional user experiences" />

                    <Details
                        position="Frontend Developer"
                        company="Outfitlet "
                        time="Oct 2017 - Oct 2019"
                        type="Full-time"
                        jobDetails="Specialized in creating compelling web application user interfaces,
                         leveraging contemporary CSS and JavaScript frameworks. As a sole frontend developer encompassed expertise in HTML,
                          CSS/SCSS, and JavaScript, all while working collaboratively with modern UI frameworks." />

                    <Details
                        position="Web Designer/Developer"
                        company="10Pearls"
                        time="Jul 2015 - Oct 2017"
                        type="Full-time"
                        jobDetails="Focused on crafting captivating web application user interfaces, 
                        harnessing the power of modern CSS and JavaScript frameworks. My role as a solo frontend developer 
                        honed my expertise in HTML, CSS/SCSS, and JavaScript, fostering collaboration 
                        with state-of-the-art UI frameworks." />
                    <Details
                        position="Phonegap/Jr.Web Designer"
                        company="Raymsystems"
                        time="Nov 2014 - Jun 2015"
                        type="Full-time"
                        jobDetails="Proficiently handling the development of PhoneGap applications and actively contributing
                         as a frontend developer. My responsibilities encompass creating engaging user interfaces, utilizing
                          contemporary CSS and JavaScript frameworks to ensure seamless and intuitive web experiences. I have also
                           been engaged as a trainee, actively enhancing my skills within the PHP CodeIgniter Framework" />
                    <Details
                        position="Phonegap/Jr.Web Designer"
                        company="Approxen Labs"
                        time="Nov 2014 - Jun 2015"
                        type="Full-time"
                        jobDetails="Junior Frontend and PhoneGap Developer, actively involved in the creation of user-centric
                         web interfaces. Proficiently utilize contemporary CSS and JavaScript frameworks to ensure visually
                          appealing and seamless web experiences. Additionally, I am consistently enhancing my skills in web
                           development while working on PhoneGap applications." />




                </ul>
            </div>

        </div>
    )
}

export default Experience