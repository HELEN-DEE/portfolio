    "use client"
    import React, { useState } from "react";
    import Link from "next/link";
    // import { FiMenu, FiX } from "react-icons/fi"; 
    import { CiMenuFries } from "react-icons/ci";
    import { TfiClose } from "react-icons/tfi";

    const navLinks = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
    ];

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#1C1B1F] text-[#FAFAFA] fixed top-0 left-0 w-full ">
            <div className="flex items-center justify-between px-5 py-3 mx-4">
                {/* Logo */}
                <h1 className="font-[font-playfair] text-3xl">HELEN.</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((link, index) => (
                    <li key={index}>
                    <Link
                        href={link.path}
                        className="border-b-2 border-transparent hover:border-b-[#fafafa] transition-colors"
                    >
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden focus:outline-none"
                >
                {isOpen ? <TfiClose size={20} /> : <CiMenuFries size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#1C1B1F] px-5 py-4 space-y-4">
                {navLinks.map((link, index) => (
                    <Link
                    key={index}
                    href={link.path}
                    className="block text-lg hover:border-b-[#fafafa] transition-colors"
                    onClick={() => setIsOpen(false)} // close on link click
                    >
                    {link.label}
                    </Link>
                ))}
                </div>
            )}
        </nav>
    );
    };

    export default Navbar;
