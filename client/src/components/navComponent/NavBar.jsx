import React from 'react'
import NavList from './NavList'
import Resume from './Resume'
import Logo from './Logo'

const NavBar = () => {
    return (
        <div className= " bg-white border-gray-200 dark:bg-gray-900 fixed w-[100%]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo />
                <NavList />
                <Resume />


            </div>
        </div>
    )
}

export default NavBar



