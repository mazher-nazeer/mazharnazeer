import React, { useEffect, useState } from 'react'
import CanvasComponent from './CanvasComponent'
import { motion } from 'framer-motion'
import { AvatarIcon } from './Icons'
import Link from 'next/link'
import Styles from '../styles/Lcd.module.css'

const LcdComponent = ({ className }) => {
    const [flag, setFlag] = useState(true)

    return (
        <div className={`${className}`} >


            <motion.h2
                className='inline-block w-full text-dark text-center font-bold capitalize 
                !text-4xl  xl:!text-5xl lg:!text-3xl sm:!text-2xl dark:text-light'
                initial={{ y: 70 }}
                whileInView={{ y: 0 }}
                transition={{ duration: .75, type: 'spring' }}
            >
                Words from others!
            </motion.h2>
            <div id="container" className={Styles.monitorWrapper}>
                <div id="monitor" className={Styles.monitor}>
                    <div className={`${Styles.monitorScreen} md:!h-[410px]`}>
                        <div className={Styles.picCtn} >

                        <div className={`${Styles.slideItem}  h-full w-full flex   flex-col p-8 bg-dark/50 lg:p-4`}>
                                <div className='items-center justify-around flex flex-col bg-light rounded-2xl '>
                                    <div className='flex w-full items-center justify-center pt-4 lg:pt-2'>
                                        <h3 className='flex items-center justify-center text-dark font-bold lg:text-[14px]'>
                                            <span className='bg-[#dadada] rounded-full w-11 h-11 inline-block mr-2 p-1.5 lg:hidden ' >
                                                <AvatarIcon />
                                            </span>Junaid Zubair Shaikh </h3>
                                    </div>
                                    <div className=''>
                                        <Link href='https://www.linkedin.com/in/junaid-zubair-shaikh-06aaa599/' target='_blank'>

                                        <blockquote className={`${Styles.blockquote} text-dark lg:p-4`}>
                                                As a seasoned senior web developer, I&#39;ve had the pleasure of collaborating with him on numerous projects.
                                                His wealth of experience, spanning over 5 years, is evident in his mastery of contemporary web technologies.
                                                He consistently delivers exceptional results and is a valuable asset to any team.
                                                <cite className={`${Styles.cite} cursor-pointer`}>
                                                    Staff Software Engineer

                                                </cite>
                                            </blockquote>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${Styles.slideItem}  h-full w-full flex   flex-col p-8 bg-dark/50 lg:p-4`}>
                                <div className='items-center justify-around flex flex-col bg-light rounded-2xl '>
                                    <div className='flex w-full items-center justify-center pt-4 lg:pt-2'>
                                        <h3 className='flex items-center justify-center text-dark font-bold lg:text-[14px]'>
                                            <span className='bg-[#dadada] rounded-full w-11 h-11 inline-block mr-2 p-1.5 lg:hidden ' >
                                                <AvatarIcon />
                                            </span> Syed Zaid Ali Shah</h3>
                                    </div>
                                    <div className=''>
                                        <Link href='https://www.linkedin.com/in/syedzaidalishah/' target='_blank'>
                                        <blockquote className={`${Styles.blockquote} text-dark lg:p-4`}>
                                                In the realm of web development, his expertise shines brightly. With an impressive track record of over 5
                                                years, he possesses a deep understanding of a wide array of modern frameworks and technologies.
                                                His commitment to excellence is unwavering, making him a standout professional.
                                                <cite className={`${Styles.cite} cursor-pointer`}>
                                                    Head Of Production
                                                </cite>
                                            </blockquote>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${Styles.slideItem}  h-full w-full flex   flex-col p-8 bg-dark/50 lg:p-4`}>
                                <div className='items-center justify-around flex flex-col bg-light rounded-2xl '>
                                    <div className='flex w-full items-center justify-center pt-4 lg:pt-2'>
                                        <h3 className='flex items-center justify-center text-dark font-bold lg:text-[14px]'>
                                            <span className='bg-[#dadada] rounded-full w-11 h-11 inline-block mr-2 p-1.5 lg:hidden ' >
                                                <AvatarIcon />
                                            </span>Ehsan Umar </h3>
                                    </div>
                                    <div className=''>
                                        <Link href='https://www.linkedin.com/in/ehsan-umar-23a247112/' target='_blank'>
                                        <blockquote className={`${Styles.blockquote} text-dark lg:p-4`}>
                                                I&#39;ve had the privilege of working alongside him, and his web development prowess is truly exceptional.
                                                As a senior web developer with extensive experience exceeding 5 years, he effortlessly navigates
                                                various contemporary frameworks and technologies. His contributions consistently elevate project outcomes.
                                                <cite className={`${Styles.cite} cursor-pointer`}>
                                                    Software Engineer
                                                </cite>
                                            </blockquote>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className={`${Styles.slideItem}  h-full w-full flex   flex-col p-8 bg-dark/50 lg:p-4`}>
                                <div className='items-center justify-around flex flex-col bg-light rounded-2xl '>
                                    <div className='flex w-full items-center justify-center pt-4 lg:pt-2'>
                                        <h3 className='flex items-center justify-center text-dark font-bold lg:text-[14px]'>
                                            <span className='bg-[#dadada] rounded-full w-11 h-11 inline-block mr-2 p-1.5 lg:hidden ' >
                                                <AvatarIcon />
                                            </span>M Junaid Salaat</h3>
                                    </div>
                                    <div className=''>
                                        <Link href='https://www.linkedin.com/in/jsalaat/' target='_blank'>
                                        <blockquote className={`${Styles.blockquote} text-dark lg:p-4`}>
                                                As a seasoned senior web developer, I have had the privilege of witnessing his exceptional skills firsthand. With more than 5 years of experience, his mastery of contemporary web technologies sets him apart as a distinguished professional. His dedication to excellence consistently shines through in his work
                                                <cite className={`${Styles.cite} cursor-pointer`}>
                                                    Software Engineer III
                                                </cite>
                                            </blockquote>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className={`${Styles.slideItem}  h-full w-full flex   flex-col p-8 bg-dark/50 lg:p-4`}>
                                <div className='items-center justify-around flex flex-col bg-light rounded-2xl '>
                                    <div className='flex w-full items-center justify-center pt-4 lg:pt-2'>
                                        <h3 className='flex items-center justify-center text-dark font-bold lg:text-[14px]'>
                                            <span className='bg-[#dadada] rounded-full w-11 h-11 inline-block mr-2 p-1.5 lg:hidden' >
                                                <AvatarIcon />
                                            </span>M Farooq Rashid</h3>
                                    </div>
                                    <div className=''>
                                        <Link href='https://www.linkedin.com/in/farooqrasheed/' target='_blank'>
                                            <blockquote className={`${Styles.blockquote} text-dark lg:p-4`}>
                                                Having collaborated with him on multiple occasions, I can confidently vouch for his seniority in web development. With over 5 years of expertise, he possesses a comprehensive skill set encompassing a variety of modern frameworks and technologies. His commitment to delivering high-quality work is both impressive and inspiring
                                                <cite className={`${Styles.cite} cursor-pointer`}>
                                                    Head of delivery
                                                </cite>
                                            </blockquote>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <CanvasComponent />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LcdComponent