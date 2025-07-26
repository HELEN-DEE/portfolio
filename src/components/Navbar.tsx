import React from 'react'
import Link from "next/link"


const navLinks = [
    {label:"Home", path: "/home"},
    {label:"About", path: "/about"},
    {label:"Projects", path: "/projects"},
    {label:"Contact", path: "/contact"},

]
const Navbar = () => {
  return (
    <div className='flex items-center justify-between  bg-black text-white px-5 py-4'>
        <h1 className='font-[font-playfair] text-4xl text-center'>
            HELEN
        </h1>

        <ul className='flex items-center gap-4'>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <Link href={link.path}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    
    </div>
  )
}

export default Navbar