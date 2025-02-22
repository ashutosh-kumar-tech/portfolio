"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
import Button from "@/components/Button";
import {FaArrowRight} from "react-icons/fa6";
import {FiDownload} from "react-icons/fi";
import {Element, scroller} from "react-scroll";

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
            <div className={'relative w-40 aspect-square'}>
                <Image
                    src={'/ashutosh.jpeg'}
                    alt={'Ashutosh Kumar'}
                    fill
                    className={'object-cover rounded-full'}
                />
            </div>

            <h1 className={'text-xl lg:text-2xl my-3'}>
                Hi&#33; I&apos;m Ashutosh Kumar &#128075;&#127995;
            </h1>

            <h2 className={'flex flex-col items-center text-3xl md:text-4xl xl:text-6xl my-3'}>
                <span>fullstack android developer</span>
                <span>based in India.</span>
            </h2>

            <p className={'text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] 2xl:max-w-[40vw] my-3'}>
                I&apos;m a fullstack android developer from Bihar, India with experience working at Physics Wallah and a passion to create innovative tech solutions.
            </p>

            <div className={'flex flex-col md:flex-row items-center justify-center mt-6 md:mt-8 xl:mt-10 gap-4 font-outfit'}>
                <Button
                    text={'contact me'}
                    className={'border border-primary dark:border-gray-200 bg-primary dark:bg-background text-background dark:text-foreground'}
                    onClick={() => {scrollToSection('contact')}}
                    icon={<FaArrowRight />}
                    iconPosition={"right"}
                />
                <Button
                    text={'my resume'}
                    className={'border border-primary dark:bg-foreground dark:text-background'}
                    onClick={handleCVDownload}
                    icon={<FiDownload />}
                    iconPosition={"right"}
                />
            </div>
        </Element>
    );
};

export default Hero;