"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import {Element} from "react-scroll";
import Card, {CardProps} from "@/components/Card";
import {serviceList} from "@/assets/data";
import {motion} from "motion/react";

interface ServicesProps {
    id: string
    className?: string;
}

const Services: React.FC<ServicesProps> = ({id, className}) => {
    const renderServiceCard = (card: CardProps) => (
        <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
            className={'max-w-80 p-8'}
            iconClassName={'text-2xl'}
            titleClassName={'text-2xl font-semibold mt-6'}
            descriptionClassName={'text-sm mt-6 text-gray-400'}
            whileHover={{scale: 1.05}}
        />
    );

    return (
        <Element name={id} className={cn('flex flex-col items-center justify-center my-24 md:my-12 xl:my-0', className)}>
            <motion.h3
                className={'text-xl'}
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.3}}
            >What I offer</motion.h3>
            <motion.h2
                className={'text-5xl mt-2'}
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
            >My services</motion.h2>
            <motion.p
                className={'text-center mt-6 max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw]'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.8}}
            >
                I offer end-to-end development solutions, from designing interactive frontends to building scalable
                backend systems. Whether you need a custom web app or mobile application, I ensure high performance,
                security, and an intuitive user experience.
            </motion.p>

            <motion.div
                className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-content-center gap-6 my-10 xl:my-20'}
                initial={{y: -30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.2}}
            >
                {serviceList.map((card, index) => (
                    <React.Fragment key={index}>
                        {renderServiceCard(card)}
                    </React.Fragment>
                ))}
            </motion.div>
        </Element>
    );
}

export default Services;