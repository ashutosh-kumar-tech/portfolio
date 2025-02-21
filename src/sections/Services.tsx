"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import {Element} from "react-scroll";
import Card, {CardProps} from "@/components/Card";
import {serviceList} from "@/assets/data";

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
        />
    );

    return (
        <Element name={id} className={cn('flex flex-col items-center justify-center my-24 md:my-12 xl:my-0', className)}>
            <h3 className={'text-xl'}>What I offer</h3>
            <h2 className={'text-5xl mt-2'}>My services</h2>
            <p className={'text-center mt-6 max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] 2xl:max-w-[40vw]'}>
                I&apos;m a fullstack android and web developer from Bihar, India with experience working at Physics
                Wallah and several full-fledged applications.</p>

            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-content-center gap-6 my-10 xl:my-24'}>
                {serviceList.map((card, index) => (
                    <React.Fragment key={index}>
                        {renderServiceCard(card)}
                    </React.Fragment>
                ))}
            </div>
        </Element>
    );
}

export default Services;