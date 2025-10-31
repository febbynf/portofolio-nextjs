'use client'
import React, { useRef, useEffect, useState, ReactNode } from 'react';

const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed w-full left-1/2 py-5 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out">
            <div className="mx-auto flex items-center justify-between">
                <a className="text-white text-xl md:text-2xl font-semibold" href="#">
                    Febby | Dev
                </a>

                <nav className="hidden lg:flex items-center">
                    <ul className ="flex space-x-8">
                        { navLinks.map(({ link, name}) => (
                            <li className= "text-white relative group" key={name}>
                                <a href={link}></a>
                                <span className="transition-colors duration-300 hover:text-white">{name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        )) }
                    </ul>

                </nav>

                <a href="#contact" className="flex">
                    <div className="px-5 py-2 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300">
                        <span>Contact Me</span>
                    </div>

                </a>
            </div>
        </header>
    )
}

export default NavBar;