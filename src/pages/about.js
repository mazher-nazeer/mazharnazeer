import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/devloper-pic-dark.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Transition from '@/components/Transition'

const about = () => {

    const AnimatedNumbers = ({ value }) => {
        const ref = useRef(null)
        //By using useMotionValue hook :  Set and get their state.
        // Pass to multiple components to synchronise motion across them.
        const motionValue = useMotionValue(0)
        // accepts the type of animation and needs some data fpr example 50 
        //so it ll animate from 0 to 50 coz motion value initially is 0
        const springValue = useSpring(motionValue, { duration: 3000 })
        const isInView = useInView(ref, { once: true })

        useEffect(() => {
            if (isInView) {
                motionValue.set(value)
            }
        }, [isInView, value, motionValue]);

        useEffect(() => {
            //spring value change and latest returns updated value 
            springValue.on('change', (latest) => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest.toFixed(0)
                }
            })
        }, [springValue, value]);

        return (<span ref={ref} className='dark:text-light'></span>)
    }

    return (
        <>
            <Head>
                <title>Mazhar Nazeer | About </title>
                <meta name="description" content="some description" />
            </Head>

            <Transition />

            <main className='w-full flex flex-col items-center justify-center'>
                <Layout className='py-16 lg:p-16 md:p-12 sm:p-6'>
                    <AnimatedText text="Where Passion Ignites Purpose!"
                        className='inline-block w-full  dark:text-light font-bold
                     capitalize text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl mb-16 sm:mb-8 ' />
                    <div className='grid grid-cols-8 w-full gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col justify-start items-start mt-16 xl:col-span-4 md:order-2 md:col-span-8 '>
                            <h2 className='text-primary dark:text-primaryDark dark:text-light uppercase mb-4 text-lg font-bold'>About me: </h2>
                            <p className='font-medium dark:text-light'>
                                Hello, I&#39;m Mazhar Nazeer, a seasoned web developer with over 5 years of expertise in web development, responsive design, and crafting reusable components with optimized code. My toolkit includes HTML, CSS/SCSS, JavaScript, and a range of utility frameworks such as React, Next.js, Ant Design.
                                I believe in the power of code to bring ideas to life, and I&#39;m passionate about creating seamless digital experiences.
                            </p>
                            <p className='font-medium my-4 dark:text-light'>
                                With a focus on responsive design, CSS3 animations, and media queries, I ensure that
                                every project I work on is both visually appealing and user-friendly.
                                I thrive on innovation and efficiency, utilizing tools like Tailwind CSS, Bootstrap, and
                                Strapi to streamline development.
                            </p>
                            <p className='font-medium dark:text-light'>
                                Moreover, I harness the capabilities of Power Automate for enhanced workflow automation.
                                I look forward to the opportunity to leverage my 5+ years of experience and skills to contribute
                                 to your next project, delivering solutions that prioritize both functionality and aesthetics.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid  
                        border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
                            <span className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'></span>
                            <Image
                                src={profilePic}
                                className='transition duration-700 grayscale hover:grayscale-0 w-full h-auto rounded-2xl'
                                alt="Mazhar Nazeer"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col justify-between items-end  xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold dark:text-light md:text-5xl sm:text-4xl xs:text-3xl '>
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className='dark:text-light text-primary/75 text-xl capitalize font-medium xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold dark:text-light md:text-5xl sm:text-4xl xs:text-3xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='dark:text-light text-primary/75 text-xl  capitalize font-medium xl:text-center md:text-lg sm:text-base xs:text-sm'>Appreciations</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                                    <AnimatedNumbers value={5} className="dark:text-light" />+
                                </span>
                                <h2 className='dark:text-light text-primary/75 text-xl capitalize font-medium xl:text-center md:text-lg sm:text-base xs:text-sm'>Rewards</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about