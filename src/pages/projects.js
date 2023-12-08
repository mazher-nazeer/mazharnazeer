import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import TCPImg from '../../public/images/projects/tcp.png'
import ZaavyaImg from '../../public/images/projects/zaavya.png'
import OutfitletImg from '../../public/images/projects/outfitlet.png'
import TenpearlsImg from '../../public/images/projects/tenpearls.png'
import RaymsystemImg from '../../public/images/projects/raymsystem.png'
import Placeholder from '../../public/images/projects/placeholder.png'
import { motion } from 'framer-motion'
import Transition from '@/components/Transition'
import InfinityComponent from '@/components/InfinityComponent'


const MotionImage = motion(Image)

const FeaturedProject = ({ type, summary, image, title, linkUrl, contribution, techstack, }) => {
    return (
        <motion.article
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: .74, type: 'spring' }}
            className='w-full p-6 flex  flex-col items-start justify-between rounded-3xl border border-solid
             border-dark/45 bg-light shadow-md  shadow-black/25 dark:bg-dark dark:shadow-light/25 dark:border-light/45
             lg:flex-col lg:p-4 xs:rounded-xl xs:p-2'>
            <div href={linkUrl} className='w-full cursor-pointer overflow-hidden rounded-lg' >
                <MotionImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: .25 }}
                    src={image} alt={title} className='w-full h-auto'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </div>

            <div className=' flex flex-col items-start justify-between flex-1 p-6 h-full  lg:p-3'>
                <h2 className='text-4xl font-bold w-full text-left dark:text-light lg:text-3xl md:text-xl text-primary'>{title}</h2>
                <span className='text-dark dark:text-primaryDark   md:text-sm font-bold'>
                    {type}
                </span>
                <div className='dark:text-light md:text-sm lg:text-base'>{summary}</div>
                <div className='dark:text-light md:text-sm lg:text-base mt-4'>
                    <div className='block font-semibold'>Contribution:</div>
                    {contribution}
                </div>
                <div className='mt-6 dark:text-light lg:pt-3 md:text-sm lg:text-base'>
                    <strong> TechStack: </strong> {techstack}
                </div>
            </div>
            {/* <Link href={linkUrl}>{linkText}</Link> */}

        </motion.article>
    )

}

const projects = () => {

    return (
        <>

            <Head>
                <title>Mazhar Nazeer | Projects </title>
                <meta name="description" content="some description" />

            </Head>
            <Transition />


            <main className='flex flex-col mb-16 items-center justify-center'>
                <Layout className='py-16 lg:p-16 md:p-12 sm:p-6 pb-0'>
                    <AnimatedText text="Ideas to reality Museum!"
                        className='inline-block w-full  font-bold capitalize text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl mb-16 sm:mb-8' />

                    <div className='grid grid-cols-12 gap-16 lg:flex lg:flex-col'>
                        <div className='col-span-6 lg:col-span-12 md:col-span-12 flex'>

                            <FeaturedProject
                                type="VentureDive"
                                summary={
                                    <>
                                        <p className="py-2">
                                            <strong> Publicis Sapient : </strong> It is a distinguished digital transformation consulting firm, dedicated to guiding businesses
                                            through the complexities of the digital age. Our comprehensive range of services spans strategy, design, technology,
                                            and data science, providing clients with invaluable tools to revamp their operations and enhance customer experiences.
                                            With a relentless focus on innovation and transformation, empowering clients to thrive in an ever-evolving digital landscape.
                                        </p>

                                        <p className="py-2">
                                            <strong> Design Studio : </strong> It is a creative venture portal, where our talented designers come together to showcase
                                            their collective expertise and accomplishments. It serves as a dynamic platform for talent showcasing and features a gallery
                                            of our team&339;s exceptional projects. Through Design Studio, they to connect with clients, leveraging our design prowess
                                            to deliver outstanding creative solutions.
                                        </p>
                                    </>
                                }
                                image={TCPImg}
                                title="Publicis Sapient, Design Studio"

                                contribution={
                                    <>
                                        <p className="py-2">
                                            As an integral member of a dynamic Scrum team comprising seven professionals, I
                                            played a pivotal role in the development of frontend features for our platform,
                                            building them from the ground up. This encompassed the seamless integration of
                                            Drupal page slots, where I adeptly utilized HTML, CSS, and JavaScript to ensure
                                            flawless results within our collaborative team environment.
                                        </p>
                                        <p className="py-2">
                                            My contributions extended to projects for Publicis Sapient and Design Studio, where
                                            I harnessed my proficiency in HTML, CSS, JavaScript, React, and Drupal slot-based
                                            page structures. I took the lead in creating web pages and components for TCP and
                                            sister brands. Additionally, I worked on Strapi and Next.js/React TypeScript for
                                            frontend development, while utilizing Strapi for backend CMS API integration.
                                            These experiences underscore my commitment to delivering top-notch frontend solutions
                                            while thriving in collaborative, cross-functional team environments.
                                        </p>
                                    </>
                                }
                                techstack="  Html, css, Javascript, React, Figma, Photoshop & modern npm utility packages "

                            />
                        </div>


                        <div className='col-span-6 lg:col-span-12 md:col-span-12 flex'>
                            <FeaturedProject
                                type="Zaavya"
                                summary={
                                    <>
                                        <p className="py-2">
                                            Throughout my career, I&#39;ve had the opportunity to work on a diverse range of projects.
                                            Here are some notable examples:
                                        </p>
                                        <p className="py-2">
                                            <strong> Zcare & Rabta: </strong> These projects are centered around the healthcare industry, offering solutions such as
                                            online appointment systems, prescription tracking, dosage guidance, and nursing checkup services.
                                        </p>
                                        <p className="py-2">
                                            <strong>SDP (Retailer&#39;s Smart Data Platform): </strong> SDP is a cloud-based platform designed to empower retailers with
                                            smart digital business solutions, streamlining their operations and enhancing customer experiences.
                                        </p>
                                        <p className="py-2">
                                            <strong> PinkSalt: </strong>  PinkSalt is a Himalayan Pink Salt Shopify store, featuring a variety of salt types and detailed
                                            information on their benefits. The platform also provides a seamless online sales system for customers.
                                        </p>

                                    </>
                                }
                                image={ZaavyaImg}
                                title="Zcare, Rabta, SDP(Smart Data Platform), PinkSalt"

                                contribution={<>
                                    <p className="py-2">As a Frontend Engineer with a specialization in React, I played a pivotal role across multiple projects,
                                        including Zcare, Rabta, SDP (Smart Data Platform), and PinkSalt. My primary responsibility involved the seamless integration
                                        of frontend pages, a task that demanded the incorporation of various npm libraries and packages. This meticulous work was
                                        essential to ensure the cohesiveness and optimal functionality of the respective platforms.
                                    </p>
                                    <p className="py-2">
                                        Within these projects, my key contributions encompassed the development and enhancement of frontend components.
                                        This entailed coding in JSX/CSS, leveraging JavaScript for functionality, and skillfully implementing Ant Design (Antd),
                                        React, Bootstrap, and a range of npm utility packages for components. These efforts collectively contributed to
                                        the successful delivery of polished and efficient frontend solutions.
                                    </p>
                                </>
                                }

                                techstack="Jsx/css Javascript, React, Bootstrap, Carousel & scroll like npm utility packages for components"
                            />
                        </div>
                        <div className='col-span-6 lg:col-span-12 md:col-span-12 flex'>
                            <FeaturedProject
                                type="The Outfitlet"
                                summary={
                                    <>
                                        <p className="py-2">
                                            Outfitlet is a distinguished consortium encompassing a spectrum of industries, including fashion,
                                            footwear, handbags, and fragrances. At the forefront is &#39;Outfitlet&#39;s Official Website,&#39; an
                                            illustrious fashion clothing emporium renowned for its exquisite collection of women&#39;s apparel and accessories.
                                        </p>
                                        <p className="py-2">
                                            Complementing fashion apparels, there is also <strong> &#39;O-Perfumes,&#39; </strong>  a distinguished
                                            fragrance destination featuring an extensive and diverse range of scents. From affordable to
                                            premium selections, O-Perfumes caters to a discerning clientele, adding a touch of luxury to
                                            their factory experiences.
                                        </p>
                                        <p className="py-2">
                                            An ecommerce platform showcases a captivating array of fashion apparel, shoes, bags, and
                                            an enticing variety of perfumes. Team Outfitlet are committed to providing an unparalleled
                                            shopping experience, blending style, variety, and quality to meet the diverse tastes of our
                                            esteemed customers.
                                        </p>
                                    </>
                                }
                                image={OutfitletImg}
                                title="Outfitlet (Official Website), O-Perfumes "

                                contribution={<>
                                    <p className="py-2">As a Frontend Developer at Outfitlet, I undertook a pivotal role in ensuring the precise pixel-perfect
                                        development of our website. My responsibilities extended to conducting rigorous Quality Assurance (QA) checks,
                                        meticulously verifying design and frontend module integrations, and ensuring seamless responsiveness across various devices.
                                    </p>
                                    <p className="py-2">
                                        Throughout these endeavors, I leveraged a comprehensive skill set, including proficiency in HTML, CSS, JavaScript,
                                        React, and Bootstrap. I also utilized a range of npm utility packages to optimize functionality. To ensure a flawless
                                        visual appeal, I employed my expertise in Photoshop, delivering a polished and user-friendly digital platform.
                                    </p>
                                </>
                                }

                                techstack="Html, css, Javascript, React, Bootstrap, Photoshop &  npm utility packages"
                            />
                        </div>
                        <div className='col-span-6 lg:col-span-12 md:col-span-12 flex'>
                            <FeaturedProject
                                type="Tenpearls"
                                summary={
                                    <>
                                        <p className="py-2">
                                            In my professional journey, I&#39;ve had the privilege of contributing to diverse projects, some of which are highlighted below:
                                        </p>
                                        <p className="py-2">
                                            <strong>UBL & Corecentric:</strong> I actively participated in the design revamping of the UBL online banking system website, which encompasses various departments, policies, and product plans. Additionally, I was involved in enhancing the digital presence of Corecentric, a company specializing in tax consultation and recurring solutions.
                                        </p>
                                        <p className="py-2">
                                            <strong>OICT Caprelo & APVAS: </strong> Within the realm of OICT, a container terminal, I played a key role in developing a comprehensive container tracking system. This included managing services, maintenance operations, and tracking container movements. Caprelo, on the other hand, is a relocation services provider, and I contributed to streamlining their customer relocation processes. Lastly, APVAS, a value-adding servicing company in the US cellular industry, engaged my expertise to enhance their services and provide additional value to their consulting clients.
                                        </p>
                                        <p className="py-2">

                                            These projects have allowed me to apply my skills in web development, design, and user experience to deliver impactful solutions across various domains
                                        </p>
                                    </>
                                }
                                image={TenpearlsImg}
                                title="UBL APVAS, Caprelo OICT, UBL, Avizia, Izea, Corecentric"

                                contribution={<>
                                    <p className="py-2">
                                        As a Frontend Developer at Tenperals, my primary focus was on the development of admin portal projects. These projects played a pivotal role in managing data and configuration controls. I was dedicated to ensuring the design perfection and responsiveness of these projects, catering to both marketing websites and internal-facing platforms.
                                    </p>
                                    <p className="py-2">
                                        My role demanded proficiency in a comprehensive tech stack, including HTML, CSS, SCSS, JavaScript, and Angular 1. I adeptly leveraged npm utility frameworks to streamline development processes. Through my contributions, I aimed to deliver seamless user experiences and robust functionality in the realm of frontend development.
                                    </p>
                                </>
                                }

                                techstack="Html, css, Javascript, Angular, React Bootstrap, Photoshop, Material design & npm utility packages "
                            />
                        </div>

                        <div className='col-span-6 lg:col-span-12 md:col-span-12 flex'>
                            <FeaturedProject
                                type="Raymsystems"
                                summary={
                                    <>
                                        <p className="py-2">
                                            <strong>ListenIn: </strong>  A dynamic news-related platform that provides users with the flexibility to explore and read news across various categories, including current affairs, sports, and weather. What sets ListenIn apart is its Text-to-Speech (TTS) plugin, enabling users to listen to news articles. Additionally, the app boasts voice detection capabilities, enhancing user engagement and accessibility.
                                        </p>
                                        <p className="py-2">
                                            <strong>SAE:  </strong>  promoting talent within the electronic media and entertainment industry. In this endeavor, I played a crucial role in developing core web modules that facilitate our mission. These modules include reusable HTML pages and components designed to enhance our online presence and engagement. Through these contributions, we aim to support and elevate talent within the dynamic world of electronic media and entertainment.
                                        </p>
                                    </>
                                }
                                image={RaymsystemImg}
                                title="ListenIn, SAE"

                                contribution={<>
                                    <p className="py-2">
                                        Professionally skilled in the development of PhoneGap applications, I seamlessly combine my expertise as a frontend developer to create captivating user interfaces. My responsibilities encompass crafting engaging web experiences, meticulously employing contemporary CSS and JavaScript frameworks to ensure seamless functionality and user-friendliness.
                                    </p>
                                    <p className="py-2">
                                        Within my tech stack, I proficiently navigate HTML, CSS, jQuery, JavaScript, Intel App Framework, and Adobe PhoneGap. These tools empower me to deliver exceptional mobile applications with a keen focus on both design and performance
                                    </p>
                                </>
                                }
                                techstack="Intel appframework, Adobe Phonegap, jquery, Html, css, Javascript, Photoshop"

                            />
                        </div>
                        <div className='col-span-6 lg:col-span-12 md:col-span-12 flex'>
                            <FeaturedProject
                                type="Approxen Labs"
                                summary={<>
                                    <p className="py-2">
                                        A prominent web portal in the Middle East for laundry services, offering online booking, service details, discounts, and cost estimation features. Seamlessly integrated with Google Maps for location-based convenience. Dedicated sections for user feedback drive continuous enhancements. A trusted platform in the region&#39;s laundry industry
                                    </p>
                                </>
                                }
                                image={Placeholder}
                                title="AL Doobi "

                                contribution={<p className="py-2">My role as a Mid-Level Frontend Developer was instrumental in shaping this platform. Leveraging my
                                    expertise in HTML, CSS, JavaScript/jQuery, Bootstrap, and media queries, I contributed to the platform&#39;s responsive
                                    design and seamless user experience. Additionally, I played a vital role in design adjustments using Photoshop,
                                    ensuring visual excellence</p>}
                                techstack="  Html, css, Jqeury, Javascript, Photoshop"
                            />
                        </div>

                    </div>
                    <div className='flex items-center justify-center w-full flex-col my-8'>
                        <p className='my-6 text-dark dark:text-light font-medium'>
                            More to come.. Stay in touch
                        </p>
                        <InfinityComponent />
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects