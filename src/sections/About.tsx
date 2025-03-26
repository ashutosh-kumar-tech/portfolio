"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
import Card, {CardProps} from "@/components/Card";
import {infoList, toolList} from "@/assets/data";
import {Element} from "react-scroll";
import {motion} from "motion/react";

interface AboutProps {
    id: string;
    className?: string;
}

const About: React.FC<AboutProps> = ({id, className}) => {
    const renderInfoCard = (card: CardProps) => (
        <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
            className={'max-w-80'}
            iconClassName={'text-2xl'}
            descriptionClassName={'text-sm text-gray-400'}
            whileHover={{scale: 1.05}}
        />
    );

    const renderToolCard = (card: CardProps) => (
        <Card icon={card.icon} className={'rounded-xl p-2 '} iconClassName={'text-3xl'} whileHover={{scale: 1.125}} />
    );

    return (
        <Element name={id} className={cn('flex flex-col items-center justify-center', className)}>
            <motion.h3
                className={'text-xl'}
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.3}}
            >Introduction</motion.h3>
            <motion.h2
                className={'text-5xl mt-2'}
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
            >About me</motion.h2>

            <motion.div
                className={'grid grid-cols-1 lg:grid-cols-3 w-full my-24'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
            >
                <motion.div
                    className={'relative h-96 w-64 mx-auto'}
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6}}
                >
                    <Image
                        src={'/images/ashutosh.jpeg'}
                        alt={'Ashutosh Kumar'}
                        fill
                        className={'object-cover rounded-3xl'}
                    />
                </motion.div>

                <motion.div
                    className={'col-span-2 flex flex-col items-center lg:items-start justify-center lg:justify-items-start mt-24 lg:mt-0'}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 1.2}}
                >
                    <p className={'px-10 lg:p-0 text-center lg:text-start'}>I am a skilled Full-Stack Developer
                        specialized in Android
                        development and Next.js with experience in building scalable applications. I have had the
                        privilege of
                        collaborating with prestigious organizations, contributing to their success and growth by
                        delivering
                        efficient and user-friendly solutions.</p>

                    <motion.div
                        className={'grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mx-12 lg:mx-0'}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.8, delay: 1.2}}
                    >
                        {infoList.map((card, index) => (
                            <React.Fragment key={index}>
                                {renderInfoCard(card)}
                            </React.Fragment>
                        ))}
                    </motion.div>

                    <div className={'mt-12 lg:mt-6'}>
                        <motion.h3
                            initial={{y: -20, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 1.3}}
                        >Tech I use</motion.h3>
                        <motion.div
                            className={'flex gap-4 mt-1'}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 0.6, delay: 1.6}}
                        >
                            {toolList.map((card, index) => (
                                <React.Fragment key={index}>
                                    {renderToolCard(card)}
                                </React.Fragment>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </Element>
    );
}

export default About;