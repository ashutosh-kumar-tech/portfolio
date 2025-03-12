import React from 'react';
import {cn} from "@/lib/utils";
import {motion, HTMLMotionProps} from "motion/react";

export interface CardProps extends HTMLMotionProps<"div"> {
    icon: React.ReactNode;
    title?: string;
    description?: string;
    className?: string;
    iconClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

const Card: React.FC<CardProps> = (
    {
        icon,
        title,
        description,
        className,
        iconClassName,
        titleClassName,
        descriptionClassName,
        whileHover,
    }) => (
    <motion.div
        className={cn('flex flex-col p-6 rounded-3xl border dark:border-gray-700 font-outfit', className)}
        whileHover={whileHover}
    >
        <div className={iconClassName}>{icon}</div>
        {title && <h4 className={titleClassName}>{title}</h4>}
        {description && <p className={descriptionClassName}>{description}</p>}
    </motion.div>
);

export default Card;