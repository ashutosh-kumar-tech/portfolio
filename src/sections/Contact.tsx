"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import {Element} from "react-scroll";

interface ContactProps {
    id: string;
    className?: string;
}

const Contact: React.FC<ContactProps> = ({id, className}) => (
    <Element name={id} className={cn(className)}></Element>
);

export default Contact;