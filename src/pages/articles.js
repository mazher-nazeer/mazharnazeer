import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import article1 from '../../public/images/articles/article-1.jpg'
import article2 from '../../public/images/articles/article-2.jpg'
import usefulLink1 from '../../public/images/articles/useful-link-1.jpg'
import usefulLink2 from '../../public/images/articles/useful-link-2.jpg'
import usefulLink3 from '../../public/images/articles/useful-link-3.jpg'
import usefulLink4 from '../../public/images/articles/useful-link-4.jpg'
import usefulLink5 from '../../public/images/articles/useful-link-5.jpg'
import usefulLink6 from '../../public/images/articles/useful-link-6.jpg'

import { motion, useMotionValue } from 'framer-motion'
import Transition from '@/components/Transition'

const MotionImage = motion(Image)
const MovingImage = ({ title, image, link }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imageRef = useRef()

    const handleMouse = (event) => {
        imageRef.current.style.display = 'inline-block'
        x.set(event.pageX + -100)
        y.set(50)
    }
    const handleMouseLeave = () => {
        imageRef.current.style.display = 'none'
        x.set(0)
        y.set(0)
    }



    return (
        <Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            className='flex-1 flex'
        >
            <div className='capitalize text-lg font-semibold hover:underline '>{title}</div>
            <MotionImage
                style={{ x: x, y: y, }}
                src={image}
                ref={imageRef}
                className='w-96 h-auto hidden absolute rounded-lg z-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.25 } }}
            />
        </Link>
    )
}


const ArticleContent = ({ image, title, time, summary, link }) => {
    return (

        <li className=' relative col-span-1 p-4 w-full bg-light border
         border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <span className=' absolute -right-3 -z-10 w-[100.5%] h-[100.5%] bg-slate-600  dark:bg-light/80 rounded-br-3xl rounded-[2rem] top-3 '></span>

            <Link href={link} className='inline-block w-full cursor-pointer overflow-hidden rounded-lg' target='_blank'>
                <MotionImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: .25 }}
                    src={image} alt={title} className='w-full h-auto'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />

            </Link>
            <Link href={link} target='_blank' className='hover:underline' >
                <h2 className='text-4xl font-bold w-full text-left dark:text-light lg:text-3xl md:text-xl text-primary'>{title}</h2>

            </Link>
            <div className='dark:text-light md:text-sm lg:text-base'>{summary}</div>
            <span className='mt-6 dark:text-primaryDark text-[13px] flex items-center justify-end font-semibold lg:pt-3 md:text-sm lg:text-base'>{time}</span>
        </li>
    )
}

const UsefulLinks = ({ image, title, date, link }) => {

    return (
        <motion.li
            initial={{ y: 50 }}
            whileInView={{ y: 0, transition: { duration: .3, ease: 'easeIn' } }}
            viewport={{ once: true }}
            className='rounded-xl flex items-center p-4 my-4 py-6 w-full relative
         border-dark/30 justify-between bg-light text-primary dark:text-primaryDark first:mt-0 border-solid border transition-all
         hover:border-r-4 hover:border-b-4 duration-300 hover:ease-in-out dark:bg-dark dark:text-light dark:border-light/30 
         lg:flex-col lg:items-start lg:pb-3'>
            <MovingImage
                title={title}
                link={link}
                image={image}


            />
            <span className='text-[#888] font-semibold text-[13px] lg:mt-8 lg:w-full lg:text-right'> {date}</span>
        </motion.li>
    )

}

const articles = () => {
    return (
        <div>

            <Head>
                <title>Mazhar Nazeer | Projects </title>
                <meta name="description" content="some description" />

            </Head>
            <Transition />


            <main className='mb-16 flex justify-center items-center flex-col w-full overflow-hidden'>
                <Layout className='py-16 lg:p-16 md:p-12 sm:p-6'>
                    <AnimatedText
                        text="Empowering Change Through Words"
                        className='inline-block w-full text-dark dark:text-light font-bold
                        capitalize text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl mb-16 sm:mb-8'
                    />
                    <ul className='grid grid-cols-2 gap-16 lg:flex lg:flex-col'>
                        <ArticleContent
                            title="Next.js vs. React: A Comparative Tutorial"
                            summary={<p>
                                React, which debuted in 2013, is much more established than Next.js. But the younger framework, released in 2016, is growing in popularity, with more than 100K GitHub stars as of March 2023 and millions of weekly npm downloads. Let’s see how the two compare in four major areas:
                                <span className='font-semibold block'>
                                    Development speed:
                                </span>
                                Next.js provides out-of-the-box features that ease the development process for making an advanced React app. With the introduction of its own compiler in Next.js 12, the framework also increased build speeds. Compared to React, Next.js reduces the amount of time an engineer needs to wait for code to refresh, minimizing developer frustration and slowdowns.

                                <span className='font-semibold block'>
                                    Data fetching and load times:
                                </span>

                                Next.js can traverse the React tree and query for data in the server, allowing for pre-loaded page data. This often results in lower application load times for pages served by Next.js compared to pages written in vanilla React.
                                <span className='font-semibold block'>
                                    Rendering and SEO:
                                </span>
                                Next.js offers pre-rendering, whereas React uses client-side rendering. Pre-rendered pages enable effective SEO strategies that are challenging to achieve in a plain React app.
                                <span className='font-semibold block'>
                                    Routing:
                                </span>
                                Next.js provides a structured, predefined file system for routing. Its system offers reduced flexibility compared to React’s various library options (e.g., React Router), but simplifies page setup and routing.
                            </p>}
                            link="https://www.toptal.com/next-js/next-js-vs-react"
                            image={article1}
                            time="9 MINUTES READ"
                        />
                        <ArticleContent
                            title="How to Approach SVG Animations in CSS"
                            summary={
                                <div>
                                    <p>
                                        Animations are a ubiquitous part of the web. Unlike the flashing GIF images that plagued websites in the internet’s earlier days, today’s animations are more subtle and tasteful. Designers and front-end specialists use them to make websites look more polished, enhance the user experience, call attention to important elements, and convey information.

                                        Web developers can benefit from combining the power of SVG and CSS to create animations without using external libraries. This SVG animation tutorial shows how to build custom animations for real-world projects.
                                    </p>

                                    <h3>
                                        SVG Animation: CSS and Core Concepts
                                    </h3>
                                    <p>


                                        Before using CSS to animate SVGs, developers need to understand how SVGs work internally. Fortunately, it’s similar to HTML: We define SVG elements with XML syntax and style them with CSS, just as if they were HTML.

                                        SVG elements are purposely built for drawing graphics. We can use {"<rect>"} for drawing a rectangle, {"<circle>"} for drawing circles, etc.—SVG also defines {"<ellipse>"}, {"<line>"}, {"<polyline>"}, {"<polygon>"}, and {"<path>"}.

                                        Note: The full list of SVG elements even includes {"<animate>"}, which allows you to create animations using synchronized multimedia integration language (SMIL). However, its future is uncertain and the Chromium team recommends using a CSS- or JavaScript-based approach to animating SVGs whenever possible.

                                        The available attributes depend on the element, so while {"<rect>"} has width and height attributes, the {"<circle>"} element has the r attribute, which defines its radius.
                                    </p>
                                </div>
                            }
                            time="14 MINUTES READ"
                            link="https://www.toptal.com/css/svg-animation-css-tutorial"
                            image={article2}
                        />

                    </ul>

                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-28 lg:text-3xl lg:my-12 lg:mt-16  dark:text-light' >Some useful links to read: </h2>
                    <ul>
                        <UsefulLinks
                            title={<h2>Full-stack NLP With React: Ionic vs. Cordova vs. React Native</h2>}
                            date="25+ MINUTES READ"
                            link="https://www.toptal.com/javascript/the-power-of-react"
                            image={usefulLink1}
                        />
                        <UsefulLinks
                            title={<h2>Navigating the React.js Ecosystem</h2>}
                            date="22 MINUTES READ"
                            link="https://www.toptal.com/react/navigating-the-react-ecosystem"
                            image={usefulLink2}
                        />
                        <UsefulLinks
                            title={<h2>Building Reactive Apps with Redux, RxJS, and Redux-Observable in React Native</h2>}
                            date="11 MINUTES READ"
                            link="https://www.toptal.com/react-native/react-redux-rxjs-tutorial"
                            image={usefulLink3}
                        />
                        <UsefulLinks
                            title={<h2>On-demand Reactivity in Vue 3</h2>}
                            date="16 MINUTES READ"
                            link="https://www.toptal.com/vue-js/on-demand-reactivity-vue-3"
                            image={usefulLink4}
                        />
                        <UsefulLinks
                            title={<h2>Creating Live Dashboards With Airtable and React</h2>}
                            date="12 MINUTES READ"
                            link="https://www.toptal.com/react/dashboard-airtable-react"
                            image={usefulLink5}
                        />
                        <UsefulLinks
                            title={<h2>Full-stack Developer Tips from the Creator of the Redux Form Library</h2>}
                            date="11 MINUTES READ"
                            link="https://www.toptal.com/insights/future-of-work/developer-tips-erik-rasmussen"
                            image={usefulLink6}
                        />

                    </ul>
                    <div>

                        <div class="door-wrapper text-light">
                            <p className='text-[14px]'>Knowledge is oxygen of mind</p>
                            <div class="door"></div>
                        </div>
                    </div>
                </Layout>
            </main>

            {/* <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="../../public/images/articles/What is Redux with easy explanation.png" alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                    </div>
            </> */}
        </div>
    )
}

export default articles