import React from "react";
import type {Metadata} from "next";
import {Outfit, Ovo, Poppins} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
    subsets: ["latin"],
    weight: "400"
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
    title: "Ashutosh Kumar | Android Developer Portfolio | Next.js | MERN",
    description: "Hi, I’m a skilled Next.js, MERN stack, and Android developer passionate about building high-performance " +
        "web and mobile applications. Explore my portfolio to see my projects, skills, and experience in crafting seamless " +
        "digital experiences. Let’s collaborate and build something great! 🚀",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.className} ${ovo.className} ${poppins.className} antialiased 
            leading-8 overflow-x-hidden font-ovo bg-background dark:bg-background text-foreground dark:text-foreground`}>
        <ThemeProvider
            attribute={"class"}
            defaultTheme={"system"}
            enableSystem={true}
            disableTransitionOnChange={true}
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
