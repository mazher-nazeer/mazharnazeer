

import React, { useEffect, useState } from 'react'

const UseThemeSwitcher = () => {

    // prefer color scheme is a css rule
    const preferDarkQuery = "(prefer-color-scheme : dark)"
    const [mode, setMode] = useState('')


    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem('theme')

        const handleChange = () => {
            
            if (userPref) {
                let themeCheck = userPref === 'dark' ? 'dark' : 'light'
                if (themeCheck === 'dark') {
                    document.documentElement.classList.add('dark')
                }
                else {
                    document.documentElement.classList.remove('dark')
                }
                setMode(themeCheck)

            }
            else {
                let themeCheck = mediaQuery.matches ? 'dark' : 'light';

                if (themeCheck === 'dark') {
                    document.documentElement.classList.add('dark')
                }
                else {
                    document.documentElement.classList.remove('dark')
                }
                setMode(themeCheck)


            }
        }

        handleChange()

        // whenever matchMedia is changes it will listen and run handleChange callback
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)

    }, []);

    useEffect(() => {
        if (mode === 'dark' ) {
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        
        }
        if (mode === 'light') {
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
          
        }
    }, [mode]);

    return [mode, setMode]
}

export default UseThemeSwitcher