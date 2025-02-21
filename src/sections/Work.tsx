"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import {Element} from "react-scroll";

interface WorkProps {
    id: string;
    className?: string;
}

const Work: React.FC<WorkProps> = ({id, className}) => (
    <Element name={id} className={cn(className)}></Element>
);

export default Work;