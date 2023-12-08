import AnimatedBg from '@/components/AnimatedBg'
import AnimatedText from '@/components/AnimatedText'
import ContactForm from '@/components/ContactForm'
import { EnvelopeIcon, LinkedInIcon, PhoneIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import StickyNote from '@/components/StickyNote'
import Transition from '@/components/Transition'
import Head from 'next/head'
import React from 'react'

const contact = () => {



    return (
        <>
            <Head>
                <title>Mazhar Nazeer | Contact </title>
                <meta name="description" content="some description" />

            </Head>
            <Transition />


            <main className='w-full flex flex-col items-center justify-center relative'>
                <AnimatedBg />

                <Layout className='py-16 lg:p-16 md:p-12 sm:p-6 !bg-transparent z-10 !pb-2 h-full'>
                    <AnimatedText text="Get in touch!"
                        className='inline-block w-full text-dark dark:text-light font-bold
             capitalize text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl mb-16 sm:mb-8 ' />
                    <div className='grid grid-cols-12 w-full gap-4 sm:gap-0  z-10'>
                        <div className='col-span-4 flex flex-col justify-center items-center mt-16 md:col-span-12'>
                            <span className="bg-[url('../../public/images/profile/phone.png')]  dark:bg-[url('../../public/images/profile/phone-dark.png')] bg-no-repeat w-11 h-11 bg-contain flex items-center justify-center bg-center" ></span>
                            <p className='font-semibold text-primary dark:text-primaryDark dark:text-light text-sm pt-3'>+92-345-2680220</p>

                        </div>
                        <div className='col-span-4 flex flex-col justify-center items-center mt-16 md:col-span-12'>
                            <span className="bg-[url('../../public/images/profile/envelope.png')] dark:bg-[url('../../public/images/profile/envelope-dark.png')] bg-no-repeat w-11 h-11 bg-contain flex items-center justify-center bg-center" ></span>
                            <p className='font-semibold text-primary dark:text-primaryDark dark:text-light text-sm pt-3'>mazher.nazeer@gmail.com</p>


                        </div>
                        <div className='col-span-4 flex flex-col justify-center items-center mt-16 md:col-span-12'>
                            <span className="bg-[url('../../public/images/profile/linkedin.png')] dark:bg-[url('../../public/images/profile/linkedin-dark.png')] bg-no-repeat w-11 h-11 bg-contain flex items-center justify-center bg-center" />
                            <p className='font-semibold text-primary dark:text-primaryDark dark:text-light text-sm pt-3'>/in/mazhar-nazeer  </p>


                        </div>

                    </div>
                    <div className='w-full '>
                        <div className='flex items-center justify-center w-full mt-12'>
                            <h3 className='text-fark text-2xl font-medium dark:text-light '>Why Contact me</h3>
                        </div>
                        {/* <StickyNote /> */}
                        <ContactForm />

                    </div>

                </Layout>
            </main>
        </>
    )
}

export default contact