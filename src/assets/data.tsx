import {CardProps} from "@/components/Card";
import {FaCode, FaGlobe, FaGraduationCap, FaServer} from "react-icons/fa6";
import {FaTools} from "react-icons/fa";
import {RiNextjsFill} from "react-icons/ri";
import {AndroidLogo, MongoDBLogo, PostgresLogo, TailwindLogo} from "@/assets/svg";
import {navLink} from "@/sections/Header";
import {BsAndroid2} from "react-icons/bs";
import {MdPhonelink} from "react-icons/md";

export const navLinks: navLink[] = [
    { id: "top", label: "Home" },
    { id: "about", label: "About me" },
    { id: "services", label: "Services" },
    { id: "work", label: "My Work" },
    { id: "contact", label: "Contact me" },
];

export const infoList: CardProps[] = [
    {
        icon: <FaCode />,
        title: "Languages",
        description: "Kotlin, Jetpack Compose, Java, TypeScript, SQL"
    },
    {
        icon: <FaGraduationCap />,
        title: "Education",
        description: "BTech in Computer Science"
    },
    {
        icon: <FaTools />,
        title: "Projects",
        description: "Built more than 5 projects"
    }
];

export const toolList: CardProps[] = [
    { icon: <AndroidLogo /> },
    { icon: <RiNextjsFill /> },
    { icon: <TailwindLogo /> },
    { icon: <MongoDBLogo /> },
    { icon: <PostgresLogo /> }
];

export const serviceList: CardProps[] = [
    {
        icon: <FaGlobe />,
        title: "Web Development",
        description: "I build fast and scalable web apps using Next.js, React, and Node.js. From portfolios to complex applications, I ensure clean code and great performance."
    },
    {
        icon: <BsAndroid2 />,
        title: "Mobile App Development",
        description: "I create Android and cross-platform apps with smooth UI and seamless API integration for the best user experience."
    },
    {
        icon: <FaServer />,
        title: "Backend & API Development",
        description: "I develop secure and optimized APIs using Node.js and Express, handling authentication, databases, and server-side logic."
    },
    {
        icon: <MdPhonelink />,
        title: "UI/UX Optimization",
        description: "I design responsive, modern, and fast interfaces using trends like Glassmorphism and dark mode, ensuring a great user experience."
    }
];