"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
import Button from "@/components/Button";
import {FaArrowRight} from "react-icons/fa6";
import {FiDownload} from "react-icons/fi";
import {Element, scroller} from "react-scroll";
import {motion} from "motion/react";

interface HeroProps {
    id: string;
    className?: string;
}

const Hero: React.FC<HeroProps> = ({id, className}) => {
    const scrollToSection = (section: string) => {
        scroller.scrollTo(section, {
            duration: 1080,
            smooth: "easeInOut",
            offset: -144
        });
    };

    const handleCVDownload = () => {
        const link = document.createElement("a");
        link.href = "/files/ashutosh-CV.pdf"; // Replace with the actual path to your CV file in the public folder
        link.download = "ashutosh-CV.pdf"; // Rename the file as needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Element name={id} className={cn('flex flex-col items-center justify-center py-24', className)}>
            <motion.div
                className={'relative w-40 aspect-square'}
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                transition={{duration: 0.8, type: 'spring', stiffness: 100}}
            >
                <Image
                    src={'/images/ashutosh.jpeg'}
                    alt={'Ashutosh Kumar'}
                    fill
                    className={'object-cover rounded-full'}
                />
            </motion.div>

            <motion.h2
                className={'text-xl lg:text-2xl my-3'}
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.3}}
            >
                Hi&#33; I&apos;m Ashutosh Kumar &#128075;&#127995;
            </motion.h2>

            <motion.h1
                className={'flex flex-col items-center text-center text-3xl md:text-4xl xl:text-6xl my-3'}
                initial={{y: -30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.5}}
            >
                <span>fullstack android developer</span>
                <span>based in India.</span>
            </motion.h1>

            <motion.p
                className={'text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] 2xl:max-w-[40vw] my-3'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.7}}
            >
                I&apos;m a fullstack android developer from Bihar, India with experience working at Physics Wallah and a passion to create innovative tech solutions.
            </motion.p>

            <div className={'flex flex-col md:flex-row items-center justify-center mt-6 md:mt-8 xl:mt-10 gap-4 font-outfit'}>
                <Button
                    text={'contact me'}
                    className={'border border-foreground bg-foreground dark:bg-background text-background dark:text-foreground hover:bg-foreground/90 dark:hover:bg-foreground/10 active:bg-background dark:active:bg-foreground active:text-foreground dark:active:text-background'}
                    onClick={() => scrollToSection('contact')}
                    icon={<FaArrowRight />}
                    iconPosition={"right"}
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1}}
                />
                <Button
                    text={'my resume'}
                    className={'border border-foreground dark:bg-foreground dark:text-background hover:bg-foreground/10 dark:hover:bg-foreground/90 active:bg-foreground dark:active:bg-background active:text-background dark:active:text-foreground'}
                    onClick={handleCVDownload}
                    icon={<FiDownload />}
                    iconPosition={"right"}
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1.2}}
                />
            </div>
        </Element>
    );
};

export default Hero;