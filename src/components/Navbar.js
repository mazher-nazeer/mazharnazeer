import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon, WhatsappIcon } from './Icons'
import { motion } from 'framer-motion'
import UseThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink = ({ href, className = "", title }) => {

    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`absolute left-0 bottom-[-4px] h-[1.5px] bg-primary dark:bg-primaryDark group-hover:w-full transition-[width] ease-in duration-[350ms] 
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}> &nbsp; </span>
        </Link>
    )
}

const CustomMobileLink = ({ href, className = "", title, toggle }) => {

    const router = useRouter()

    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return (
        <button href={href} className={`${className} bg-transparent relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`absolute left-0 bottom-[-4px] h-[1.5px] bg-primary dark:bg-primaryDark  group-hover:w-full transition-[width] ease-in duration-[350ms] 
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark bg-light`}> &nbsp; </span>
        </button>
    )
}
const Navbar = () => {
    const [mode, setMode] = UseThemeSwitcher()
    const [checkMode, setCheckMode] = useState()
    useEffect(() => {
        setCheckMode(mode)
        console.log(checkMode)
    }, [checkMode]);

    const [isOpen, setIsOpen] = useState();
    const handlRespClick = () => {
        setIsOpen(!isOpen)
        
    }


    return (
        
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between 
            dark:text-light  lg:py-1 lg:h-11  xl:px-10 md:px-12 sm:px-8 z-10'
        >
            <button className=' flex-col items-center justify-center hidden lg:flex' onClick={handlRespClick}>
                <span className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm   ${isOpen ? 'rotate-45 translate-y-1 lg:translate-y-[.6rem]' : '-translate-y-0.5'} `}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} ></span>

            </button>
            <div className=" w-full flex items-center justify-between lg:hidden" >
                <nav>
                    <CustomLink href='/' title='Home' className='mr-4 xl:mr-2' />
                    <CustomLink href='/about' title='About' className='mx-4 xl:mx-2' />
                    <CustomLink href='/projects' title='Projects' className='mx-4 xl:mx-2' />
                    <CustomLink href='/articles' title='Articles' className='mx-4 xl:mx-2' />
                    <CustomLink href='/contact' title='Contact' className='ml-4 xl:ml-2' />
                </nav>

                <nav className='flex items-center justify-center gap-5'>


                    <motion.a href={`https://wa.me/923452680220?
                        text=Hello%20Mr.%20Mazhar%20Nazeer.%20I'd%20like%20to%20begin%20our%20conversation.%20Thank%20you%20for%20connecting.`}
                        target='_blank'
                        whileHover={{ y: -2.5 }}
                        whileTap={{ scale: .85 }}
                        className='w-6'

                    >

                        <WhatsappIcon />
                    </motion.a>

                    <motion.a href='https://www.linkedin.com/in/mazhar-nazeer/'
                        whileHover={{ y: -2.5 }}
                        whileTap={{ scale: .85 }}
                        className='w-6'
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <motion.a href='https://twitter.com/mazzy_360'
                        whileHover={{ y: -2.5 }}
                        whileTap={{ scale: .85 }}
                        className='w-6'
                    >
                        <TwitterIcon />
                    </motion.a>


                    <button onClick={() => {
                        setMode(mode === 'light' ? 'dark' : 'light')


                    }}
                        className={`${mode === 'light' ? 'bg-light text-dark ' : 'bg-dark text-light'} rounded-full p-1`}
                    >
                        {
                            mode === 'dark' ?
                                <SunIcon className="fill-dark" />
                                :
                                <MoonIcon className="fill-dark" />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?

                        <motion.div
                            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                            animate={{ scale: 1, opacity: 1 }}

                            className="min-w-[90vw] flex flex-col  items-center justify-between fixed 
                    top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32" >
                            <nav className='flex flex-col items-center justify-center'>
                                <CustomMobileLink href='/' title='Home' className='' toggle={handlRespClick} />
                                <CustomMobileLink href='/about' title='About' className='' toggle={handlRespClick} />
                                <CustomMobileLink href='/projects' title='Projects' className='' toggle={handlRespClick} />
                                <CustomMobileLink href='/articles' title='Articles' className='' toggle={handlRespClick} />
                                <CustomMobileLink href='/contact' title='Contact' className='' toggle={handlRespClick} />
                            </nav>

                            <nav className='flex items-center justify-center gap-5 sm:gap-4'>
                                <motion.a href={`https://wa.me/923452680220?
                        text=Hello%20Mr.%20Mazhar%20Nazeer.%20I'd%20like%20to%20begin%20our%20conversation.%20Thank%20you%20for%20connecting.`}
                                    target='_blank'
                                    whileHover={{ y: -2.5 }}
                                    whileTap={{ scale: .85 }}
                                    className='w-6'

                                >
                                    <WhatsappIcon />

                                </motion.a>
                                <motion.a href='https://www.linkedin.com/in/mazhar-nazeer/'
                                    whileHover={{ y: -2.5 }}
                                    whileTap={{ scale: .85 }}
                                    className='w-6'
                                    target='_blank'
                                >

                                    <LinkedInIcon />
                                </motion.a>

                                <motion.a href='https://twitter.com/mazzy_360'
                                    whileHover={{ y: -2.5 }}
                                    whileTap={{ scale: .85 }}
                                    className='w-6'
                                    target='_blank'
                                >
                                    <TwitterIcon />
                                </motion.a>


                                <button onClick={() => {
                                    setMode(mode === 'light' ? 'dark' : 'light')
                                    setIsOpen(false)

                                }}
                                    className={`bg-transparent ${mode === 'light' ? ' text-dark ' : ' text-light'}  111111 rounded-full p-1`}
                                >
                                    {
                                        mode === 'dark' ?
                                            <SunIcon className="text-light 123 dark:text-dark" />
                                            :
                                            <MoonIcon className="text-light dark:text-dark" />
                                    }
                                </button>
                            </nav>
                        </motion.div>
                     : null

            }



            <div className='absolute left-[50%] top-2 lg:top-0 mt-1 -translate-x-[50%] lg:left-[50%] lg:-translate-x-[50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar