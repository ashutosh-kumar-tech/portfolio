"use client";

import React from 'react';
import {cn} from "@/lib/utils";
import {Link} from "react-scroll";

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({className = ''}) => (
    <div className={cn('inline-flex font-bold font-poppins', className)}>
        <Link
            to={'top'}
            spy={true}
            smooth={true}
            className={'cursor-pointer'}
        >
            <span>Ashutosh</span><span className={'text-red-600'}>.</span>
        </Link>
    </div>
);

export default Logo;