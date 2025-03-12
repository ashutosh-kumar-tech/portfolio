import React from 'react';
import {cn} from "@/lib/utils";
import {motion, HTMLMotionProps} from "motion/react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    text: string;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = (
    {
        text,
        className,
        onClick,
        icon,
        iconPosition,
        initial,
        whileInView,
        transition,
    }
) => (
    <motion.button
        onClick={onClick} className={cn('flex items-center justify-center gap-3 rounded-full px-8 py-2.5', className)}
        initial={initial}
        whileInView={whileInView}
        transition={transition}
    >
        {iconPosition === "left" && icon}
        <span>{text}</span>
        {iconPosition === "right" && icon}
    </motion.button>
);

export default Button;