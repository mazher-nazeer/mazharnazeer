'use client'
import React, { useEffect, useState } from 'react'

const Loader = ({ loadState }) => {

    const [online, setOnline] = useState(typeof window !== "undefined" ? window.navigator.onLine : true);

    useEffect(() => {
        // create event handler
        const handleStatusChange = () => {
            setOnline(navigator.onLine);
        };

        // listen for online and ofline event
        window.addEventListener("online", handleStatusChange);
        window.addEventListener("offline", handleStatusChange);

        // clean up to avoid memory-leak
        return () => {
            window.removeEventListener("online", handleStatusChange);
            window.removeEventListener("offline", handleStatusChange);
        };
    }, []);

    return (
        <div>
            {online ? (
                <div className={`${loadState} loader-wrapper fixed bg-dark/30 top-0 left-0 w-[100vw] h-[100vh]  justify-center items-center `} >

                    <div className="spinner"></div>
                </div>
            ) : (
                <div className={`${loadState} loader-wrapper fixed bg-dark/30 top-0 left-0 w-[100vw] h-[100vh] items-center justify-center  `} >

                    <div className="font-semibold text-red-700">Please check your internet Connection</div>
                </div>
            )}
        </div>
    )
}

export default Loader