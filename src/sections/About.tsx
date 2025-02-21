"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
import Card, {CardProps} from "@/components/Card";
import {infoList, toolList} from "@/assets/data";
import {Element} from "react-scroll";

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
        />
    );

    const renderToolCard = (card: CardProps) => (
        <Card icon={card.icon} className={'rounded-xl p-2 '} iconClassName={'text-3xl'}/>
    );

    return (
        <Element name={id} className={cn('flex flex-col items-center justify-center', className)}>
            <h3 className={'text-xl'}>Introduction</h3>
            <h2 className={'text-5xl mt-2'}>About me</h2>

            <div className={'grid grid-cols-1 lg:grid-cols-3 w-full my-24'}>
                <div className={'relative h-96 w-64 mx-auto'}>
                    <Image
                        src={'/ashutosh.jpeg'}
                        alt={'Ashutosh Kumar'}
                        fill
                        className={'object-cover rounded-3xl'}
                    />
                </div>

                <div
                    className={'col-span-2 flex flex-col items-center lg:items-start justify-center lg:justify-items-start mt-24 lg:mt-0'}>
                    <p className={'px-10 lg:p-0 text-center lg:text-start'}>I am a skilled Full-Stack Developer
                        specialized in Android
                        development and Next.js with experience in building scalable applications. I have had the
                        privilege of
                        collaborating with prestigious organizations, contributing to their success and growth by
                        delivering
                        efficient and user-friendly solutions.</p>

                    <div className={'grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mx-12 lg:mx-0'}>
                        {infoList.map((card, index) => (
                            <React.Fragment key={index}>
                                {renderInfoCard(card)}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className={'mt-12 lg:mt-6'}>
                        <h3>Tech I use</h3>
                        <div className={'flex gap-4 mt-1'}>
                            {toolList.map((card, index) => (
                                <React.Fragment key={index}>
                                    {renderToolCard(card)}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default About;