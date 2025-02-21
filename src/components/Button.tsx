import React from 'react';
import {cn} from "@/lib/utils";

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({text, className, onClick, icon, iconPosition}) => (
    <button onClick={onClick} className={cn('flex items-center justify-center gap-3 rounded-full px-8 py-2.5', className)}>
        {iconPosition === "left" && icon}
        <span>{text}</span>
        {iconPosition === "right" && icon}
    </button>
);

export default Button;