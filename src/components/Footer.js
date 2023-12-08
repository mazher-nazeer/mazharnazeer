import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import { LinkedInIcon, TwitterIcon, WhatsappIcon } from './Icons'
import { motion } from 'framer-motion'

const Footer = () => {

    return (
        <footer className='w-full   font-medium text-dark border-t-4 border-solid border-dark/5 dark:border-light/10 '>
            <Layout className='py-4 flex items-center justify-between lg:p-8
    lg:flex-col-reverse lg:gap-8 '>

                <div className='dark:text-light'>

                    <span className='text-primary dark:text-primaryDark '>&copy;  All rights reserved.</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='dark:text-light text-primary'>
                        &#128640; Powered by:
                    </p>
                    <Link href="/" className='clipped-text'> Mazhar Nazeer </Link>
                </div>
                <div className='flex gap-4'>
                    <motion.a href={`https://wa.me/923452680220?
                        text=Hello%20Mr.%20Mazhar%20Nazeer.%20I'd%20like%20to%20begin%20our%20conversation.%20Thank%20you%20for%20connecting.`}
                        target='_blank'
                        whileHover={{ y: -2.5 }}
                        whileTap={{ scale: .85 }}
                        className='w-6'>

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

                </div>
            </Layout>
        </footer>
    )
}

export default Footer