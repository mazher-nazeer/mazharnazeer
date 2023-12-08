import React, { useState } from 'react'


const Envelope = () => {
    const [toggleEnvelope, setToggleEnvelope] = useState()
    return (
        <div className='w-full flex justify-end items-center envelope-wrapper md:justify-center lg:items-center md:mt-16 lg:mt-32'>
            <div className={`relative envelope ${toggleEnvelope ? 'open' : 'test'}`} onClick={() => setToggleEnvelope(!toggleEnvelope)}>
                <div className="card lg:hidden inline-block text-primary">
                    <p>Thank you for stopping by. Feel free to reach out at
                        <br />
                        <a href='mailto:mazher.nazeer@gmail.com' target='_blank'>mazher.nazeer@gmail.com</a> </p>
                </div>
                <div className="card lg:inline-block hidden text-primary">
                    <p>Thank you for Visiting. </p>
                </div>

                <div className="flap-outside flap-container">
                    <div className="flap">
                        <div className="lining"></div>
                    </div>
                </div>

                <div className="flap-inside flap-container">
                    <div className="flap text-primary dark:text-primaryDark font-bold"></div>
                </div>

            </div>
        </div>
    )
}

export default Envelope