"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Element} from "react-scroll";
import {projectList} from "@/assets/data";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import Image from "next/image";
import Button from "@/components/Button";
import {FaArrowRight} from "react-icons/fa6";

interface WorkProps {
    id: string;
    className?: string;
}

export type project = {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Work: React.FC<WorkProps> = ({id, className}) => {
    const handleClick = () => {
        window.open("https://example.com", "_blank", "noopener,noreferrer");
    };

    const renderProjectCard = (project: project) => (
        <CardContainer className={'font-outfit'} containerClassName={'p-0'}>
            <CardBody className={'bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border'}>
                <CardItem translateZ={'50'} className={'text-xl font-bold text-neutral-600 dark:text-white'}>
                    {project.title}
                </CardItem>

                <CardItem as={'p'} translateZ={'60'} className={'text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'}>
                    {project.description}
                </CardItem>

                <CardItem translateZ={'100'} className={'h-60 w-72 mt-4'}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover rounded-xl group-hover/card:shadow-xl'
                    />
                </CardItem>

                <div className={'w-full mt-4 flex items-center justify-end'}>
                    <CardItem as={Link} href={project.link} target={'_blank'} translateZ={'20'} className={'px-4 py-2 rounded-xl text-xs dark:text-white'}>
                        See now →
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
    return (
        <Element name={id} className={cn('flex flex-col items-center justify-center my-24 md:my-12 xl:my-0', className)}>
            <h3 className={'text-xl'}>My Portfolio</h3>
            <h2 className={'text-5xl mt-2'}>My Latest Work</h2>
            <p className={'text-center mt-6 max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw]'}>
                Welcome to my development portfolio! Explore a collection of projects showcasing my expertise in Android and
                web development. From intuitive mobile apps to dynamic web solutions, I create seamless, scalable, and
                user-friendly experiences.
            </p>

            <div className={'flex flex-col md:flex-row flex-wrap items-center justify-center gap-12 px-10 my-12 md:my-16'}>
                {projectList.map((project: project, index: number) => (
                    <React.Fragment key={index}>
                        {renderProjectCard(project)}
                    </React.Fragment>
                ))}
            </div>

            <Button
                text={'View Github'}
                className={'flex border border-gray-500 font-outfit  hover:bg-foreground/10 active:bg-foreground active:text-background'}
                onClick={handleClick}
                icon={<FaArrowRight />}
                iconPosition={"right"}
            />
        </Element>
    );
}

export default Work;