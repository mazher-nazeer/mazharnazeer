import React from 'react'
import Styles from '../styles/Book.module.css'

const BookComponent = () => {
    return (
        <span className='inline-block ml-[70px] lg:ml-[40px] lg:scale-[.6] lg:mt-[20px]'>

            <div className={` ${Styles.book} text-dark dark:text-light`}>
                <div className={Styles.inner}>
                    <div className={` ${Styles.left} bg-dark dark:bg-light`}></div>
                    <div className={`${Styles.middle}`}></div>
                    <div className={` ${Styles.right} bg-dark dark:bg-light`}></div>
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </span>
    )
}

export default BookComponent