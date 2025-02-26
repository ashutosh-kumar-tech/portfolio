"use client"

import React, {useEffect, useRef, useState} from 'react';
import {Link, scroller} from "react-scroll";
import Logo from "@/components/Logo";
import {MdArrowOutward} from "react-icons/md";
import {CgMenuRightAlt} from "react-icons/cg";
import {PiMoonThin, PiSunThin} from "react-icons/pi";
import {RiCloseLargeLine} from "react-icons/ri";
import {useTheme} from "next-themes";
import {cn} from "@/lib/utils";
import Button from "@/components/Button";
import {navLinks} from "@/assets/data";

interface HeaderProps {
    className?: string;
}

export type navLink = {
    id: string;
    label: string;
}

const Header: React.FC<HeaderProps> = ({className = ''}) => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const sideMenuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if (sideMenuRef.current) sideMenuRef.current.style.transform = "translateX(-100%)";
    };

    const closeMenu = () => {
        if (sideMenuRef.current) sideMenuRef.current.style.transform = "translateX(0%)";
    };

    const scrollToSection = (section: string) => {
        scroller.scrollTo(section, {
            duration: 1080,
            smooth: "easeInOut",
            offset: -24
        });
    };

    const renderNavLink = (item: navLink) => (
        <li key={item.id}>
            <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={item.id == "work" ? -108 : -36}
                className={'cursor-pointer'}
            >{item.label}</Link>
        </li>
    );

    const renderSideNavLink = (item: navLink) => (
        <li key={item.id}>
            <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-144}
                className={'cursor-pointer'}
                onClick={closeMenu}
            >{item.label}</Link>
        </li>
    )

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    if (!mounted) return null;

    return (
        <header className={
            cn('p-6 relative z-10 transition-all duration-300 bg-background/50 backdrop-blur-md',
                isScrolled
                    ? 'border-b border-gray-400/25 dark:border-white/25'
                    : 'bg-transparent border-none',
                className
            )}
        >
            <div className={"radial-gradient h-[400px] w-full absolute -z-10 -top-44"}></div>
            <nav className={'flex items-center justify-between'}>
                <Link
                    to={'top'}
                    spy={true}
                    smooth={true}
                    className={'mr-14 cursor-pointer'}
                >
                    <Logo className={'text-3xl py-1'}/>
                </Link>

                <div>
                    <ul className={'hidden lg:flex gap-8 px-12 py-2.5 rounded-full bg-background dark:bg-background shadow-sm bg-opacity-50'}>
                        {navLinks.map(renderNavLink)}
                    </ul>
                </div>

                <div className={'flex items-center justify-center gap-8'}>
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <PiSunThin className={'text-2xl'}/> : <PiMoonThin className={'text-2xl'}/>}
                    </button>

                    <Button
                        text={'Contact'}
                        className={'hidden md:flex border border-gray-500 font-outfit  hover:bg-foreground/10 active:bg-foreground active:text-background'}
                        onClick={() => scrollToSection('contact')}
                        icon={<MdArrowOutward/>}
                        iconPosition={"right"}
                    />

                    <CgMenuRightAlt onClick={openMenu} className={'text-2xl lg:hidden'}/>
                </div>
            </nav>

            <ul ref={sideMenuRef}
                className={'flex lg:hidden flex-col gap-4 font-ovo px-10 py-20 fixed w-64 h-screen top-0 -right-64 z-50 bg-rose-50 dark:bg-slate-900 transition duration-500'}>

                <RiCloseLargeLine onClick={closeMenu} className={'absolute top-8 right-8 size-5 cursor-pointer'}/>

                {navLinks.map(renderSideNavLink)}
            </ul>
        </header>
    )
};

export default Header;