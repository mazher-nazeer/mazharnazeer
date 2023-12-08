import { motion } from 'framer-motion'
import React from 'react'
import Styles from '../styles/Floating.module.css'


const SkillList = ({ x, y, title }) => {
    return (
        <motion.div className='cursor-pointer flex justify-center items-center font-semibold
         text-light bg-dark rounded-full p-3 shadow-dark absolute dark:text-dark dark:bg-light dark:shadow-light
         lg:p-2 md:text-sm md:p-1 md:px-1.5 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{ scale: 1.1 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
        >
            {title}
        </motion.div>
    )
}
const Skills = () => {
    return (

        <section className='mt-64 md:mt-32 sm:mt-20 xs:mt-14'>
            <h2 className='font-bold w-full text-center text-8xl dark:text-light  lg:text-5xl sm:text-3xl xs:text-2xl'>
                Skills
                <span className={`${Styles.floating} inline-block  text-primary dark:text-primaryDark  `}>
                    {"<Frontend />"}
                </span>
            </h2>
            <div className=" w-full h-screen flex items-center justify-center rounded-full relative 
            bg-circularLight dark:bg-circularDark mt-6 lg:h-[80vh] sm:h-[60vh] 
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm ">
                <motion.div className='cursor-pointer flex justify-center items-center 
                font-semibold text-light bg-dark border-transparent rounded-full p-4 shadow-dark
                dark:text-dark dark:bg-light dark:border-dark/75 border-solid border-[2px]   dark:shadow-light 
                lg:p-4 md:p-3 xs:p-2 xs:text-xs
                '
                    whileHover={{ scale: 1.1 }}
                >
                    Web
                </motion.div>
                <SkillList x='-25vw' y='-2vw' title="NextJS" />
                <SkillList x='-5vw' y='-10.5vw' title="Antd" />
                <SkillList x='16.5vw' y='6vw' title="Javascript" />
                <SkillList x='-10vw' y='5.1vw' title="Html" />
                <SkillList x='-2vw' y='10.5vw' title="React" />
                <SkillList x='10vw' y='-5.5vw' title="CSS" />
                <SkillList x='25vw' y='-2.5vw' title="Tailwind" />
                <SkillList x='-9vw' y='-5vw' title="Bootstrap" />
                <SkillList x='-19vw' y='-10vw' title="Mui" />
                <SkillList x='-19vw' y='9vw' title="Figma" />
                <SkillList x='23vw' y='-12.5vw' title="PS" />
            </div>
        </section>
    )
}

export default Skills