import { motion } from 'framer-motion'
import React from 'react'

const Transition = () => {

    return (
        <>
            {/* <motion.div
                className='fixed top-full  w-screen h-screen bg-primary '
                initial={{ y: "-100% ", height: "-100%" }}
                animate={{ y: "0%", height: "0" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >

            </motion.div> */}
            <motion.div
                className='fixed right-full top-0 bottom-0 w-screen h-screen z-50 '
                initial={{ x: "100% ", width: "100%", backgroundColor: ["#121212",  "rgba(252,176,69,1)", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(131,58,180,1)", "#121212"]}}
                animate={{ x: "0%", width: "0", backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
            }}
                exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >

            </motion.div>

            <motion.div
                className='fixed right-full top-0 w-screen h-screen bottom-0  z-40 bg-light '
                initial={{ x: "100% ", width: "100%" }}
                animate={{ x: "0%", width: "0" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            >

            </motion.div>

            <motion.div
                className='fixed right-full top-0 w-screen h-screen bottom-0  z-30 bg-[maroon] '
                initial={{ x: "100% ", width: "100%" }}
                animate={{ x: "0%", width: "0" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            >

            </motion.div>


        </>
    )
}

export default Transition