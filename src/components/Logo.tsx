import React from 'react';
import {cn} from "@/lib/utils";

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({className = ''}) => (
    <div className={cn('inline-flex font-bold font-poppins', className)}>
        <span>Ashutosh</span><span className={'text-red-600'}>.</span>
    </div>
);

export default Logo;