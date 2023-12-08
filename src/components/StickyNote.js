import React from 'react'
import Styles from '../styles/sticky.module.css'

const StickyNote = () => {
    return (
        <div className={Styles.quoteContainer}>
            <span className={Styles.pin}></span>
            <blockquote className={` ${Styles.note} ${Styles.yellow} lg:w-[264px]  lg:my-[48px]  lg:mx-auto p-3 text-lg` }>
                Ready to take your web design to the next level?
                <span className='block font-semibold '>

                 I&#39;m just an email or a call away from helping you stand out.
                </span>
                <span className='block font-bold'>Lets make your design pop.
                </span>

                <cite className={Styles.author}>Mazhar Nazeer</cite>
            </blockquote>
        </div>
    )
}

export default StickyNote