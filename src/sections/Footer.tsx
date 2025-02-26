import React from 'react';
import {cn} from "@/lib/utils";
import Logo from "@/components/Logo";
import {MdMail} from "react-icons/md";
import Link from "next/link";

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({className}) => (
    <footer className={cn('flex flex-col items-center justify-center font-outfit', className)}>
        <Link
            href={'mailto:ashutoshkumarsahildav@gmail.com'}
            className={'flex flex-row items-center justify-center'}
        >
            <MdMail className={'mr-2'} />connect me on e-mail
        </Link>

        <div className={'flex flex-row items-center justify-between border-t w-full text-sm text-gray-500 p-3'}>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
            <span>brewed with love by <Logo /></span>
        </div>
    </footer>
);

export default Footer;