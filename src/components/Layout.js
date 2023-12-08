import React from 'react'

const Layout = ({ children, className = "" }) => {
    return (
        <div className={`${className} w-full p-24 bg-light z-0 inline-block dark:bg-dark `}>{children}</div>
    )
}

export default Layout