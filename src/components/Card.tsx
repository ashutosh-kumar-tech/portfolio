import React from 'react';
import {cn} from "@/lib/utils";

export interface CardProps {
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
        descriptionClassName
    }) => (
    <div className={cn('flex flex-col p-6 rounded-3xl border dark:border-gray-700 font-outfit', className)}>
        <div className={iconClassName}>{icon}</div>
        {title && <h4 className={titleClassName}>{title}</h4>}
        {description && <p className={descriptionClassName}>{description}</p>}
    </div>
);

export default Card;